let voiceCache: SpeechSynthesisVoice | null = null;
let warmedUp = false;

function getBestVoice(): SpeechSynthesisVoice | null {
  if (voiceCache) return voiceCache;
  const voices = speechSynthesis.getVoices();
  if (!voices.length) return null;

  const priority: Array<(v: SpeechSynthesisVoice) => boolean> = [
    // Neural / natural-sounding voices (Windows "Online" voices)
    (v) => v.lang.startsWith("en") && /online|natural|neural/i.test(v.name),
    // Good desktop voices
    (v) => /Samantha/i.test(v.name),
    (v) => /Zira/i.test(v.name),
    (v) => /Eva/i.test(v.name),
    (v) => /Aria/i.test(v.name),
    (v) => /Jenny/i.test(v.name),
    (v) => /Google US.*Female/i.test(v.name),
    (v) => /Google UK.*Female/i.test(v.name),
    (v) => v.lang === "en-US" && /female/i.test(v.name),
    (v) => v.lang === "en-US",
    (v) => v.lang.startsWith("en"),
  ];

  for (const test of priority) {
    const match = voices.find(test);
    if (match) {
      voiceCache = match;
      return match;
    }
  }
  voiceCache = voices[0];
  return voices[0];
}

export function initVoices() {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  getBestVoice();
  speechSynthesis.addEventListener("voiceschanged", () => {
    voiceCache = null;
    getBestVoice();
  });
}

export function warmUp() {
  if (warmedUp || typeof window === "undefined" || !window.speechSynthesis) return;
  warmedUp = true;
  const u = new SpeechSynthesisUtterance("");
  u.volume = 0;
  speechSynthesis.speak(u);
}

let currentAudio: SpeechSynthesisUtterance | null = null;

export function speak(
  text: string,
  volume: number,
  onStart: () => void,
  onEnd: () => void
) {
  if (!window.speechSynthesis) {
    onEnd();
    return;
  }

  speechSynthesis.cancel();
  currentAudio = null;

  const utter = new SpeechSynthesisUtterance(text);
  utter.rate = 0.82;
  utter.pitch = 1.15;
  utter.volume = volume;

  const voice = getBestVoice();
  if (voice) utter.voice = voice;

  utter.onstart = onStart;
  utter.onend = () => {
    currentAudio = null;
    onEnd();
  };
  utter.onerror = () => {
    currentAudio = null;
    onEnd();
  };

  currentAudio = utter;
  speechSynthesis.speak(utter);
}
