const audioCache = new Map<string, HTMLAudioElement>();

function getTtsUrl(text: string): string {
  return `https://translate.google.com/translate_tts?ie=UTF-8&tl=en-US&client=tw-ob&q=${encodeURIComponent(text)}`;
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
    audio.currentTime = 0;
  } else {
    audio = new Audio(getTtsUrl(text));
    audioCache.set(text, audio);
  }

  audio.volume = volume;
  audio.onplay = onStart;
  audio.onended = onEnd;
  audio.onerror = onEnd;

  audio.play().catch(onEnd);
}
