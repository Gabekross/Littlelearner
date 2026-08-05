"use client";

import { useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import type { CardItem } from "@/data/cardData";
import { cancelSpeech, speak } from "@/lib/speech";
import styles from "./LearnerCard.module.scss";

const colorClasses = [
  styles.color0, styles.color1, styles.color2, styles.color3, styles.color4,
  styles.color5, styles.color6, styles.color7, styles.color8, styles.color9,
];

let activeSpellCancel: (() => void) | null = null;

interface Props {
  item: CardItem;
  index: number;
  spellFirst?: boolean;
  onSpeak: (text: string, card: HTMLDivElement, wave: HTMLDivElement) => void;
}

export default function LearnerCard({ item, index, spellFirst, onSpeak }: Props) {
  const card3dRef = useRef<HTMLDivElement>(null);
  const waveRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLDivElement>(null);
  const spellingRef = useRef(false);
  const spellCancelRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    return () => {
      if (activeSpellCancel === spellCancelRef.current) activeSpellCancel?.();
    };
  }, []);

  const handleTap = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (!card3dRef.current || !waveRef.current) return;

      if (activeSpellCancel) activeSpellCancel();

      if (spellFirst && item.word.length > 1) {
        spellingRef.current = true;
        const card3d = card3dRef.current;
        const waveEl = waveRef.current;
        const letterSpans = wordRef.current?.querySelectorAll(`.${styles.letter}`);
        const timers = new Set<ReturnType<typeof setTimeout>>();
        let cancelled = false;

        const schedule = (callback: () => void, delay: number) => {
          const timer = setTimeout(() => {
            timers.delete(timer);
            if (!cancelled) callback();
          }, delay);
          timers.add(timer);
        };

        const cancelCurrentSpell = () => {
          cancelled = true;
          timers.forEach((timer) => clearTimeout(timer));
          timers.clear();
          cancelSpeech();
          letterSpans?.forEach((span) => span.classList.remove(styles.pulse));
          waveEl.classList.remove("playing");
          card3d.classList.remove("speaking");
          spellingRef.current = false;
          if (activeSpellCancel === cancelCurrentSpell) activeSpellCancel = null;
          if (spellCancelRef.current === cancelCurrentSpell) spellCancelRef.current = null;
        };
        activeSpellCancel = cancelCurrentSpell;
        spellCancelRef.current = cancelCurrentSpell;

        waveEl.classList.add("playing");
        card3d.classList.add("speaking");

        const letters = item.word.split("");
        let i = 0;

        const spellNext = () => {
          if (i < letters.length) {
            const letterSpan = letterSpans?.[i];
            if (letterSpan) {
              letterSpan.classList.add(styles.pulse);
              schedule(() => letterSpan.classList.remove(styles.pulse), 500);
            }
            speak(letters[i], 1.0, () => {}, () => {
              if (cancelled) return;
              i++;
              schedule(spellNext, 150);
            });
          } else {
            schedule(() => {
              if (cancelled) return;
              if (activeSpellCancel === cancelCurrentSpell) activeSpellCancel = null;
              if (spellCancelRef.current === cancelCurrentSpell) spellCancelRef.current = null;
              onSpeak(item.say, card3d, waveEl);
              spellingRef.current = false;
            }, 300);
          }
        };

        spellNext();
      } else {
        onSpeak(item.say, card3dRef.current, waveRef.current);
      }
    },
    [item.say, item.word, onSpeak, spellFirst]
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

  const wordSizeClass = item.word.length > 6 ? styles.long : item.word.length > 3 ? styles.medium : "";

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
          <div ref={wordRef} className={`${styles.word} ${wordSizeClass}`}>
            {spellFirst ? (
              item.word.split("").map((ch, i) => (
                <span key={i} className={styles.letter}>{ch}</span>
              ))
            ) : (
              item.word
            )}
          </div>
          <div ref={waveRef} className={styles.soundWave}>
            <span /><span /><span /><span /><span />
          </div>
        </div>
      </div>
    </div>
  );
}
