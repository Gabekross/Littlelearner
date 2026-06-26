"use client";

import { useRef, useCallback } from "react";
import Image from "next/image";
import type { CardItem } from "@/data/cardData";
import styles from "./LearnerCard.module.scss";

const colorClasses = [
  styles.color0, styles.color1, styles.color2, styles.color3, styles.color4,
  styles.color5, styles.color6, styles.color7, styles.color8, styles.color9,
];

interface Props {
  item: CardItem;
  index: number;
  onSpeak: (text: string, card: HTMLDivElement, wave: HTMLDivElement) => void;
}

export default function LearnerCard({ item, index, onSpeak }: Props) {
  const card3dRef = useRef<HTMLDivElement>(null);
  const waveRef = useRef<HTMLDivElement>(null);

  const handleTap = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (card3dRef.current && waveRef.current) {
        onSpeak(item.say, card3dRef.current, waveRef.current);
      }
    },
    [item.say, onSpeak]
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

  return (
    <div
      className={styles.wrap}
      onTouchEnd={handleTap}
      onClick={handleTap}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={card3dRef} className={styles.card3d}>
        <div className={`${styles.face} ${colorClasses[index % 10]}`}>
          {item.image ? (
            <div className={styles.fruitImage}>
              <Image src={item.image} alt={item.say} width={80} height={80} />
            </div>
          ) : (
            <div className={styles.emoji}>{item.emoji}</div>
          )}
          <div className={`${styles.word} ${item.word.length > 6 ? styles.long : item.word.length > 3 ? styles.medium : ""}`}>{item.word}</div>
          <div ref={waveRef} className={styles.soundWave}>
            <span /><span /><span /><span /><span />
          </div>
          <div className={styles.hint}>tap me!</div>
        </div>
      </div>
    </div>
  );
}
