import { NextRequest, NextResponse } from "next/server";
import type { CardItem } from "@/data/cardData";

function redisKey(category: string) {
  return `custom:${category}`;
}

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
  const category = request.nextUrl.searchParams.get("category");
  if (!category) {
    return NextResponse.json({ error: "category required" }, { status: 400 });
  }

  const redis = getRedis();
  if (!redis) return NextResponse.json([]);

  const items = await redis.get<CardItem[]>(redisKey(category));
  return NextResponse.json(items ?? []);
}

export async function POST(request: NextRequest) {
  const adminPass = process.env.ADMIN_PASSWORD;
  const auth = request.headers.get("x-admin-password");
  if (!adminPass || auth !== adminPass) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const redis = getRedis();
  if (!redis) return NextResponse.json({ error: "Database not configured" }, { status: 503 });

  const body = await request.json();
  const { category, word, emoji, say } = body;

  if (!category || !word || !emoji || !say) {
    return NextResponse.json({ error: "category, word, emoji, say required" }, { status: 400 });
  }

  const key = redisKey(category);
  const existing = (await redis.get<CardItem[]>(key)) ?? [];

  if (existing.some((item) => item.word === word.toUpperCase())) {
    return NextResponse.json({ error: "Word already exists" }, { status: 409 });
  }

  const newItem: CardItem = {
    word: word.toUpperCase(),
    emoji,
    say: say.toLowerCase(),
  };

  existing.push(newItem);
  await redis.set(key, existing);

  return NextResponse.json({ success: true, item: newItem });
}

export async function DELETE(request: NextRequest) {
  const adminPass = process.env.ADMIN_PASSWORD;
  const auth = request.headers.get("x-admin-password");
  if (!adminPass || auth !== adminPass) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const redis = getRedis();
  if (!redis) return NextResponse.json({ error: "Database not configured" }, { status: 503 });

  const { category, word } = await request.json();
  if (!category || !word) {
    return NextResponse.json({ error: "category and word required" }, { status: 400 });
  }

  const key = redisKey(category);
  const existing = (await redis.get<CardItem[]>(key)) ?? [];
  const filtered = existing.filter((item) => item.word !== word.toUpperCase());
  await redis.set(key, filtered);

  return NextResponse.json({ success: true });
}
