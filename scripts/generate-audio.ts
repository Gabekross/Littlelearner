/**
 * One-time (re-runnable) generator that fetches an MP3 for every fixed,
 * speakable text in the app and saves it under public/audio/.
 *
 * Run with: npx tsx scripts/generate-audio.ts
 *
 * Also writes src/data/audioManifest.json mapping text -> mp3 filename,
 * which speech.ts uses to play bundled audio instead of hitting /api/tts.
 * Already-downloaded files are skipped, so reruns only fetch new texts.
 */
import { createHash } from "node:crypto";
import { mkdirSync, existsSync, writeFileSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

import { getDataForMode, type Mode } from "../src/data/cardData";
import { OPPOSITES_3_4, OPPOSITES_4_6, OPPOSITES_7_9 } from "../src/data/opposites";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const AUDIO_DIR = join(ROOT, "public", "audio");
const MANIFEST_PATH = join(ROOT, "src", "data", "audioManifest.json");

const ALL_MODES: Mode[] = [
  "words", "words3", "words4", "words5", "words6", "words7", "words8",
  "letters",
  "numbers", "num11", "num21", "num31", "num41", "num51",
  "num61", "num71", "num81", "num91",
  "fruits", "animals", "colors", "shapes", "body",
  "colorCircles", "colorSquares", "colorTriangles", "colorRectangles",
  "colorOvals", "colorDiamonds", "colorStars", "colorHearts",
  "colorPentagons", "colorHexagons",
  "stories", "opposites",
];

function collectTexts(): string[] {
  const texts = new Set<string>();

  for (const mode of ALL_MODES) {
    for (const item of getDataForMode(mode)) {
      texts.add(item.say);
    }
  }

  // Spell Mode speaks individual letters exactly as they appear in the word
  // (uppercase), and the Letters deck says them lowercase.
  for (const ch of "ABCDEFGHIJKLMNOPQRSTUVWXYZ") {
    texts.add(ch);
    texts.add(ch.toLowerCase());
  }

  // Opposites speaks the first word alone, then the full phrase.
  for (const pair of [...OPPOSITES_3_4, ...OPPOSITES_4_6, ...OPPOSITES_7_9]) {
    const w1 = pair.word1.toLowerCase();
    const w2 = pair.word2.toLowerCase();
    texts.add(w1);
    texts.add(`opposite of ${w1} is ${w2}`);
  }

  return [...texts].sort();
}

function fileNameFor(text: string): string {
  return `${createHash("sha1").update(text).digest("hex").slice(0, 16)}.mp3`;
}

async function fetchMp3(text: string): Promise<Buffer> {
  const url =
    "https://translate.google.com/translate_tts?ie=UTF-8&tl=en-US&client=tw-ob&q=" +
    encodeURIComponent(text);

  let lastError: unknown;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(url, {
        headers: {
          "User-Agent": "Mozilla/5.0",
          Referer: "https://translate.google.com/",
        },
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length < 500) throw new Error(`Suspiciously small response (${buf.length} bytes)`);
      return buf;
    } catch (err) {
      lastError = err;
      await new Promise((r) => setTimeout(r, 1500 * attempt));
    }
  }
  throw lastError;
}

async function main() {
  mkdirSync(AUDIO_DIR, { recursive: true });

  const texts = collectTexts();
  console.log(`Collected ${texts.length} unique texts.`);

  const manifest: Record<string, string> = existsSync(MANIFEST_PATH)
    ? JSON.parse(readFileSync(MANIFEST_PATH, "utf8"))
    : {};

  let fetched = 0;
  let skipped = 0;
  const failed: string[] = [];

  for (const text of texts) {
    const file = fileNameFor(text);
    const outPath = join(AUDIO_DIR, file);

    if (existsSync(outPath)) {
      manifest[text] = file;
      skipped++;
      continue;
    }

    try {
      const buf = await fetchMp3(text);
      writeFileSync(outPath, buf);
      manifest[text] = file;
      fetched++;
      if (fetched % 25 === 0) console.log(`  ...${fetched} fetched`);
      await new Promise((r) => setTimeout(r, 250));
    } catch (err) {
      failed.push(text);
      console.warn(`  FAILED "${text}": ${err}`);
    }
  }

  // Drop manifest entries whose file no longer exists or text is no longer used
  const valid = new Set(texts);
  for (const key of Object.keys(manifest)) {
    if (!valid.has(key) || !existsSync(join(AUDIO_DIR, manifest[key]))) {
      delete manifest[key];
    }
  }

  writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + "\n");

  console.log(`Done. Fetched ${fetched}, already had ${skipped}, failed ${failed.length}.`);
  if (failed.length > 0) {
    console.log("Failed texts (rerun the script to retry):");
    for (const t of failed) console.log(`  - ${t}`);
    process.exitCode = 1;
  }
}

main();
