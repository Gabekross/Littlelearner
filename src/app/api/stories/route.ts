import { NextRequest, NextResponse } from "next/server";
import type { Story } from "@/data/stories";

function getRedis() {
  if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) return null;
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { Redis } = require("@upstash/redis") as typeof import("@upstash/redis");
  return new Redis({
    url: process.env.KV_REST_API_URL,
    token: process.env.KV_REST_API_TOKEN,
  });
}

export async function GET(request: NextRequest) {
  const ageGroup = request.nextUrl.searchParams.get("ageGroup");

  const redis = getRedis();
  if (!redis) return NextResponse.json([]);

  if (ageGroup) {
    const stories = (await redis.get<Story[]>(`stories:${ageGroup}`)) ?? [];
    return NextResponse.json(stories);
  }

  const all: Story[] = [];
  for (const ag of ["3-4", "4-6", "7-9"]) {
    const stories = (await redis.get<Story[]>(`stories:${ag}`)) ?? [];
    all.push(...stories);
  }
  return NextResponse.json(all);
}

export async function POST(request: NextRequest) {
  const adminPass = process.env.ADMIN_PASSWORD;
  const auth = request.headers.get("x-admin-password");
  if (!adminPass || auth !== adminPass) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const redis = getRedis();
  if (!redis) return NextResponse.json({ error: "Database not configured" }, { status: 503 });

  const story: Story = await request.json();
  if (!story.id || !story.title || !story.body || !story.ageGroup) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const key = `stories:${story.ageGroup}`;
  const existing = (await redis.get<Story[]>(key)) ?? [];
  existing.push(story);
  await redis.set(key, existing);

  return NextResponse.json({ success: true });
}

export async function DELETE(request: NextRequest) {
  const adminPass = process.env.ADMIN_PASSWORD;
  const auth = request.headers.get("x-admin-password");
  if (!adminPass || auth !== adminPass) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const redis = getRedis();
  if (!redis) return NextResponse.json({ error: "Database not configured" }, { status: 503 });

  const { id, ageGroup } = await request.json();
  const key = `stories:${ageGroup}`;
  const existing = (await redis.get<Story[]>(key)) ?? [];
  const filtered = existing.filter((s) => s.id !== id);
  await redis.set(key, filtered);

  return NextResponse.json({ success: true });
}
