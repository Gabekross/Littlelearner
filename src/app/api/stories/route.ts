import { NextRequest, NextResponse } from "next/server";

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
    const stories = await redis.get<string>(`stories:${ageGroup}`);
    return NextResponse.json(stories ? JSON.parse(stories) : []);
  }

  const all = [];
  for (const ag of ["3-4", "4-6", "7-9"]) {
    const stories = await redis.get<string>(`stories:${ag}`);
    if (stories) all.push(...JSON.parse(stories));
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

  const story = await request.json();
  if (!story.id || !story.title || !story.body || !story.ageGroup) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const existing = await redis.get<string>(`stories:${story.ageGroup}`);
  const stories = existing ? JSON.parse(existing) : [];
  stories.push(story);
  await redis.set(`stories:${story.ageGroup}`, JSON.stringify(stories));

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
  const existing = await redis.get<string>(`stories:${ageGroup}`);
  if (!existing) return NextResponse.json({ success: true });

  const stories = JSON.parse(existing).filter((s: { id: string }) => s.id !== id);
  await redis.set(`stories:${ageGroup}`, JSON.stringify(stories));

  return NextResponse.json({ success: true });
}
