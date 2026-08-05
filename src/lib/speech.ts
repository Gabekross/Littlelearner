const audioCache = new Map<string, HTMLAudioElement>();
let activeAudio: HTMLAudioElement | null = null;
let playbackId = 0;

function getTtsUrl(text: string): string {
  return `/api/tts?q=${encodeURIComponent(text)}`;
}

export function preloadAudio(texts: string[]) {
  for (const text of texts) {
    if (audioCache.has(text)) continue;
    const audio = new Audio();
    audio.preload = "auto";
    audio.src = getTtsUrl(text);
    audioCache.set(text, audio);
  }
}

export function cancelSpeech() {
  playbackId++;

  if (!activeAudio) return;

  activeAudio.onplay = null;
  activeAudio.onended = null;
  activeAudio.onerror = null;
  activeAudio.pause();
  activeAudio.currentTime = 0;
  activeAudio = null;
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
    audio = new Audio(getTtsUrl(text));
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

  audio.onplay = () => {
    if (currentPlaybackId !== playbackId) return;
    onStart();
  };
  audio.onended = finish;
  audio.onerror = () => {
    audioCache.delete(text);
    finish();
  };

  audio.play().catch(() => {
    if (currentPlaybackId !== playbackId) return;
    audioCache.delete(text);
    finish();
  });
}
