import { NextRequest, NextResponse } from "next/server";

export interface Profile {
  id: string;
  name: string;
  emoji: string;
  createdAt: number;
  lastSeenAt: number;
  sessions: number;
}

const KEY = "profiles";

function getRedis() {
  if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) return null;
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { Redis } = require("@upstash/redis") as typeof import("@upstash/redis");
  return new Redis({
    url: process.env.KV_REST_API_URL,
    token: process.env.KV_REST_API_TOKEN,
  });
}

export async function GET() {
  const redis = getRedis();
  if (!redis) return NextResponse.json([]);
  const profiles = (await redis.get<Profile[]>(KEY)) ?? [];
  return NextResponse.json(profiles);
}

export async function POST(request: NextRequest) {
  const redis = getRedis();
  if (!redis) return NextResponse.json({ error: "Database not configured" }, { status: 503 });

  const { name, emoji } = await request.json();
  if (!name?.trim() || !emoji || name.trim().length > 20) {
    return NextResponse.json({ error: "Invalid name or emoji" }, { status: 400 });
  }

  const profiles = (await redis.get<Profile[]>(KEY)) ?? [];
  if (profiles.length >= 20) {
    return NextResponse.json({ error: "Too many profiles" }, { status: 400 });
  }

  const now = Date.now();
  const profile: Profile = {
    id: `p-${now}-${Math.random().toString(36).slice(2, 8)}`,
    name: name.trim(),
    emoji,
    createdAt: now,
    lastSeenAt: now,
    sessions: 0,
  };
  profiles.push(profile);
  await redis.set(KEY, profiles);

  return NextResponse.json(profile);
}

// Records a sign-in: bumps lastSeenAt and the session count
export async function PUT(request: NextRequest) {
  const redis = getRedis();
  if (!redis) return NextResponse.json({ error: "Database not configured" }, { status: 503 });

  const { id } = await request.json();
  const profiles = (await redis.get<Profile[]>(KEY)) ?? [];
  const profile = profiles.find((p) => p.id === id);
  if (!profile) return NextResponse.json({ error: "Not found" }, { status: 404 });

  profile.lastSeenAt = Date.now();
  profile.sessions += 1;
  await redis.set(KEY, profiles);

  return NextResponse.json(profile);
}

export async function DELETE(request: NextRequest) {
  const adminPass = process.env.ADMIN_PASSWORD;
  const auth = request.headers.get("x-admin-password");
  if (!adminPass || auth !== adminPass) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const redis = getRedis();
  if (!redis) return NextResponse.json({ error: "Database not configured" }, { status: 503 });

  const { id } = await request.json();
  const profiles = (await redis.get<Profile[]>(KEY)) ?? [];
  await redis.set(KEY, profiles.filter((p) => p.id !== id));

  return NextResponse.json({ success: true });
}
