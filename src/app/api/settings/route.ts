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
  const key = request.nextUrl.searchParams.get("key");
  if (!key) {
    return NextResponse.json({ error: "key required" }, { status: 400 });
  }

  const redis = getRedis();
  if (!redis) return NextResponse.json({ value: null });

  const value = await redis.get<string>(`settings:${key}`);
  return NextResponse.json({ value });
}

export async function POST(request: NextRequest) {
  const adminPass = process.env.ADMIN_PASSWORD;
  const auth = request.headers.get("x-admin-password");
  if (!adminPass || auth !== adminPass) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const redis = getRedis();
  if (!redis) return NextResponse.json({ error: "Database not configured" }, { status: 503 });

  const { key, value } = await request.json();
  if (!key) {
    return NextResponse.json({ error: "key required" }, { status: 400 });
  }

  await redis.set(`settings:${key}`, value);
  return NextResponse.json({ success: true });
}
