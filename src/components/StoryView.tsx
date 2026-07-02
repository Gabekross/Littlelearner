"use client";

import { useState, useEffect, useRef } from "react";
import { DEFAULT_STORIES, ILLUSTRATIONS, FONT_OPTIONS, type Story, type AgeGroup } from "@/data/stories";
import styles from "./StoryView.module.scss";

const AGE_TABS: { key: AgeGroup; label: string }[] = [
  { key: "3-4", label: "Ages 3-4" },
  { key: "4-6", label: "Ages 4-6" },
  { key: "7-9", label: "Ages 7-9" },
];

function IllustrationSvg({ id, className }: { id: string; className?: string }) {
  const illust = ILLUSTRATIONS.find((i) => i.id === id);
  if (!illust) return null;
  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: illust.svg }}
    />
  );
}

function getFontCss(fontKey: string): string {
  return FONT_OPTIONS.find((f) => f.key === fontKey)?.css ?? "var(--font-fredoka), sans-serif";
}

export default function StoryView() {
  const [ageGroup, setAgeGroup] = useState<AgeGroup>("3-4");
  const [customStories, setCustomStories] = useState<Story[]>([]);
  const [speakingId, setSpeakingId] = useState<string | null>(null);
  const [savedVoiceName, setSavedVoiceName] = useState("");
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    fetch(`/api/stories?ageGroup=${ageGroup}`)
      .then((r) => r.json())
      .then((data: Story[]) => setCustomStories(Array.isArray(data) ? data : []))
      .catch(() => setCustomStories([]));
  }, [ageGroup]);

  useEffect(() => {
    fetch("/api/settings?key=storyVoice")
      .then((r) => r.json())
      .then((data) => { if (data.value) setSavedVoiceName(data.value); })
      .catch(() => {});

    const loadVoices = () => {
      const v = window.speechSynthesis.getVoices();
      if (v.length > 0) setVoices(v);
    };
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
    return () => {
      window.speechSynthesis.cancel();
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  const allStories = [
    ...DEFAULT_STORIES.filter((s) => s.ageGroup === ageGroup),
    ...customStories,
  ];

  const handleReadAloud = (story: Story) => {
    if (speakingId === story.id) {
      window.speechSynthesis.cancel();
      setSpeakingId(null);
      return;
    }

    window.speechSynthesis.cancel();

    const text = `${story.title}. ${story.body}`;
    const utt = new SpeechSynthesisUtterance(text);

    if (savedVoiceName && voices.length > 0) {
      const voice = voices.find((v) => v.name === savedVoiceName);
      if (voice) utt.voice = voice;
    }

    utt.rate = ageGroup === "3-4" ? 0.75 : ageGroup === "4-6" ? 0.85 : 0.9;
    utt.pitch = 1.1;
    utt.onend = () => setSpeakingId(null);
    utt.onerror = () => setSpeakingId(null);
    utteranceRef.current = utt;

    setSpeakingId(story.id);
    window.speechSynthesis.speak(utt);
  };

  return (
    <div className={styles.container}>
      <div className={styles.ageTabs}>
        {AGE_TABS.map((tab) => (
          <button
            key={tab.key}
            className={`${styles.ageTab} ${ageGroup === tab.key ? styles.active : ""}`}
            onClick={() => {
              setAgeGroup(tab.key);
              window.speechSynthesis.cancel();
              setSpeakingId(null);
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {allStories.length === 0 ? (
        <div className={styles.empty}>No stories for this age group yet.</div>
      ) : (
        <div className={styles.storyList}>
          {allStories.map((story) => (
            <div key={story.id} className={styles.storyCard}>
              <div
                className={styles.storyTitle}
                style={{
                  fontFamily: getFontCss(story.fontFamily),
                  color: story.color,
                }}
              >
                {story.title}
              </div>
              <div className={styles.storyAge}>
                Ages {story.ageGroup}
              </div>

              {story.illustrations.length > 0 && (
                <div className={styles.illustrationRow}>
                  {story.illustrations.map((id) => (
                    <IllustrationSvg key={id} id={id} className={styles.illustration} />
                  ))}
                </div>
              )}

              <div
                className={styles.storyBody}
                style={{
                  fontFamily: getFontCss(story.fontFamily),
                }}
              >
                {story.body}
              </div>

              <button
                className={`${styles.readAloud} ${speakingId === story.id ? styles.playing : ""}`}
                onClick={() => handleReadAloud(story)}
              >
                {speakingId === story.id ? "⏹ Stop" : "🔊 Read Aloud"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
