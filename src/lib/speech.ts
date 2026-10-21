import audioManifest from "@/data/audioManifest.json";

const BUNDLED: Record<string, string> = audioManifest;

const audioCache = new Map<string, HTMLAudioElement>();
let activeAudio: HTMLAudioElement | null = null;
let playbackId = 0;

function getAudioUrl(text: string): string {
  const bundled = BUNDLED[text];
  if (bundled) return `/audio/${bundled}`;
  return `/api/tts?q=${encodeURIComponent(text)}`;
}

export function preloadAudio(texts: string[]) {
  for (const text of texts) {
    if (audioCache.has(text)) continue;
    const audio = new Audio();
    audio.preload = "auto";
    audio.src = getAudioUrl(text);
    audioCache.set(text, audio);
  }
}

export function cancelSpeech() {
  playbackId++;

  window.speechSynthesis?.cancel();

  if (!activeAudio) return;

  activeAudio.onplay = null;
  activeAudio.onended = null;
  activeAudio.onerror = null;
  activeAudio.pause();
  activeAudio.currentTime = 0;
  activeAudio = null;
}

// Last-resort fallback: speak with the device's own voice so a card
// is never silent even if both the bundle and the TTS proxy fail.
function speakWithDevice(
  text: string,
  volume: number,
  currentPlaybackId: number,
  onStart: () => void,
  onEnd: () => void
) {
  if (typeof window === "undefined" || !window.speechSynthesis) {
    onEnd();
    return;
  }
  const utt = new SpeechSynthesisUtterance(text);
  utt.volume = volume;
  utt.rate = 0.9;
  utt.onstart = () => {
    if (currentPlaybackId === playbackId) onStart();
  };
  const finish = () => {
    if (currentPlaybackId === playbackId) onEnd();
  };
  utt.onend = finish;
  utt.onerror = finish;
  window.speechSynthesis.speak(utt);
}

export function speak(
  text: string,
  volume: number,
  onStart: () => void,
  onEnd: () => void
) {
  cancelSpeech();

  let audio = audioCache.get(text);
  const currentPlaybackId = playbackId;

  if (audio) {
    // If the previous element is in a broken state, discard it and create fresh
    if (audio.error) {
      audioCache.delete(text);
      audio = undefined;
    } else {
      audio.currentTime = 0;
    }
  }

  if (!audio) {
    audio = new Audio(getAudioUrl(text));
    audioCache.set(text, audio);
  }

  audio.volume = volume;
  activeAudio = audio;

  // Clean up listeners from any prior use
  audio.onplay = null;
  audio.onended = null;
  audio.onerror = null;

  let ended = false;
  const finish = () => {
    if (currentPlaybackId !== playbackId) return;
    if (ended) return;
    ended = true;
    if (activeAudio === audio) activeAudio = null;
    onEnd();
  };

  const fallback = () => {
    if (currentPlaybackId !== playbackId) return;
    if (ended) return;
    ended = true;
    audioCache.delete(text);
    if (activeAudio === audio) activeAudio = null;
    speakWithDevice(text, volume, currentPlaybackId, onStart, onEnd);
  };

  audio.onplay = () => {
    if (currentPlaybackId !== playbackId) return;
    onStart();
  };
  audio.onended = finish;
  audio.onerror = fallback;

  audio.play().catch(fallback);
}
