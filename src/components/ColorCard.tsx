"use client";

import { useRef, useCallback } from "react";
import type { CardItem } from "@/data/cardData";
import styles from "./ColorCard.module.scss";

interface Props {
  item: CardItem;
  index: number;
  revealed: boolean;
  onReveal: (word: string) => void;
  onSpeak: (text: string, card: HTMLDivElement, wave: HTMLDivElement) => void;
}

export default function ColorCard({ item, index, revealed, onReveal, onSpeak }: Props) {
  const card3dRef = useRef<HTMLDivElement>(null);
  const waveRef = useRef<HTMLDivElement>(null);

  const handleTap = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (!card3dRef.current || !waveRef.current) return;
      onReveal(item.word);
      onSpeak(item.say, card3dRef.current, waveRef.current);
    },
    [item.word, item.say, onReveal, onSpeak]
  );

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const ox = (e.clientX - r.left - r.width / 2) / (r.width / 2);
    const oy = (e.clientY - r.top - r.height / 2) / (r.height / 2);
    if (card3dRef.current) {
      card3dRef.current.style.transform = `rotateY(${ox * 12}deg) rotateX(${-oy * 12}deg)`;
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (card3dRef.current) {
      card3dRef.current.style.transform = "";
    }
  }, []);

  const bg = item.color || "#888";
  const isLight = bg === "#F0F0F0" || bg === "#FFD700" || bg === "#FFCBA4" || bg === "#C0C0C0" || bg === "#87CEEB" || bg === "#32CD32" || bg === "#FFB800";

  return (
    <div
      className={styles.wrap}
      onTouchEnd={handleTap}
      onClick={handleTap}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={card3dRef} className={styles.card3d}>
        <div className={styles.face} style={{ background: bg }}>
          <div className={styles.questionMark} style={{ opacity: revealed ? 0 : 1 }}>
            ?
          </div>
          <div
            className={`${styles.colorName} ${revealed ? styles.revealed : ""}`}
            style={{ color: isLight ? "#222" : "#fff" }}
          >
            {item.word}
          </div>
          <div ref={waveRef} className={styles.soundWave}>
            <span /><span /><span /><span /><span />
          </div>
          <div className={styles.hint} style={{ color: isLight ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.65)" }}>
            {revealed ? item.say : "tap to reveal!"}
          </div>
        </div>
      </div>
    </div>
  );
}
