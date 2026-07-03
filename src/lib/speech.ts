const audioCache = new Map<string, HTMLAudioElement>();

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

export function speak(
  text: string,
  volume: number,
  onStart: () => void,
  onEnd: () => void
) {
  let audio = audioCache.get(text);

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

  // Clean up listeners from any prior use
  audio.onplay = null;
  audio.onended = null;
  audio.onerror = null;

  let ended = false;
  const finish = () => {
    if (ended) return;
    ended = true;
    onEnd();
  };

  audio.onplay = onStart;
  audio.onended = finish;
  audio.onerror = () => {
    audioCache.delete(text);
    finish();
  };

  audio.play().catch(() => {
    audioCache.delete(text);
    finish();
  });
}
