"use client";

import { useState, useCallback, useRef } from "react";
import { getOpposites, type OppositeAgeGroup, type OppositePair } from "@/data/opposites";
import { speak } from "@/lib/speech";
import styles from "./OppositesView.module.scss";

const AGE_TABS: { key: OppositeAgeGroup; label: string }[] = [
  { key: "3-4", label: "Ages 3-4" },
  { key: "4-6", label: "Ages 4-6" },
  { key: "7-9", label: "Ages 7-9" },
];

export default function OppositesView() {
  const [ageGroup, setAgeGroup] = useState<OppositeAgeGroup>("3-4");
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const busyRef = useRef(false);

  const pairs = getOpposites(ageGroup);

  const handleTap = useCallback((pair: OppositePair, index: number) => {
    if (busyRef.current) return;
    busyRef.current = true;
    setFlippedIndex(index);

    speak(
      pair.word1.toLowerCase(),
      1.0,
      () => {},
      () => {
        setTimeout(() => {
          speak(
            `opposite of ${pair.word1.toLowerCase()} is ${pair.word2.toLowerCase()}`,
            1.0,
            () => {},
            () => {
              busyRef.current = false;
            }
          );
        }, 400);
      }
    );

    setTimeout(() => setFlippedIndex(null), 3500);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.ageTabs}>
        {AGE_TABS.map((tab) => (
          <button
            key={tab.key}
            className={`${styles.ageTab} ${ageGroup === tab.key ? styles.active : ""}`}
            onClick={() => { setAgeGroup(tab.key); setFlippedIndex(null); }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {pairs.map((pair, i) => {
          const flipped = flippedIndex === i;
          return (
            <div
              key={`${ageGroup}-${i}`}
              className={`${styles.card} ${flipped ? styles.flipped : ""}`}
              onClick={() => handleTap(pair, i)}
            >
              <div className={styles.cardInner}>
                <div className={styles.front}>
                  <span className={styles.emoji}>{pair.emoji1}</span>
                  <span className={styles.word}>{pair.word1}</span>
                </div>
                <div className={styles.back}>
                  <div className={styles.pairRow}>
                    <div className={styles.pairSide}>
                      <span className={styles.pairEmoji}>{pair.emoji1}</span>
                      <span className={styles.pairWord}>{pair.word1}</span>
                    </div>
                    <span className={styles.arrow}>⇄</span>
                    <div className={styles.pairSide}>
                      <span className={styles.pairEmoji}>{pair.emoji2}</span>
                      <span className={styles.pairWord}>{pair.word2}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
