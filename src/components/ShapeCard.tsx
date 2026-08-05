"use client";

import { useCallback, useRef, type CSSProperties } from "react";
import type { CardItem } from "@/data/cardData";
import styles from "./ShapeCard.module.scss";

interface Props {
  item: CardItem;
  index: number;
  onSpeak: (text: string, card: HTMLDivElement, wave: HTMLDivElement) => void;
}

export default function ShapeCard({ item, index, onSpeak }: Props) {
  const card3dRef = useRef<HTMLDivElement>(null);
  const waveRef = useRef<HTMLDivElement>(null);

  const handleTap = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (!card3dRef.current || !waveRef.current) return;
      onSpeak(item.say, card3dRef.current, waveRef.current);
    },
    [item.say, onSpeak]
  );

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const ox = (e.clientX - r.left - r.width / 2) / (r.width / 2);
    const oy = (e.clientY - r.top - r.height / 2) / (r.height / 2);
    if (card3dRef.current) {
      card3dRef.current.style.transform = `rotateY(${ox * 10}deg) rotateX(${-oy * 10}deg)`;
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (card3dRef.current) {
      card3dRef.current.style.transform = "";
    }
  }, []);

  const shapeStyle = {
    "--shape-color": item.shapeColor || "#FFD166",
  } as CSSProperties;

  const wordSizeClass = item.word.length > 8 ? styles.long : item.word.length > 6 ? styles.medium : "";

  return (
    <div
      className={styles.wrap}
      onTouchEnd={handleTap}
      onClick={handleTap}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={card3dRef} className={styles.card3d}>
        <div className={`${styles.face} ${styles[`tone${index % 6}`]}`}>
          <div className={styles.shapeStage} aria-hidden="true">
            <span
              className={`${styles.shape} ${styles[item.shape || "circle"]}`}
              style={shapeStyle}
            />
          </div>
          <div className={`${styles.word} ${wordSizeClass}`}>{item.word}</div>
          <div ref={waveRef} className={styles.soundWave}>
            <span /><span /><span /><span /><span />
          </div>
        </div>
      </div>
    </div>
  );
}
