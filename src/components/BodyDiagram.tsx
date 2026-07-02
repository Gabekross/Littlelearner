"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import styles from "./BodyDiagram.module.scss";

interface BodyPart {
  id: string;
  label: string;
  say: string;
  image: string;
}

const PARTS: BodyPart[] = [
  { id: "head", label: "HEAD", say: "head", image: "/body/head.jpg" },
  { id: "hair", label: "HAIR", say: "hair", image: "/body/hair.jpg" },
  { id: "eyes", label: "EYES", say: "eyes", image: "/body/eyes.jpg" },
  { id: "nose", label: "NOSE", say: "nose", image: "/body/nose.jpg" },
  { id: "mouth", label: "MOUTH", say: "mouth", image: "/body/mouth.jpg" },
  { id: "ears", label: "EARS", say: "ears", image: "/body/ears.jpg" },
  { id: "neck", label: "NECK", say: "neck", image: "/body/neck.jpg" },
  { id: "shoulders", label: "SHOULDERS", say: "shoulders", image: "/body/shoulders.jpg" },
  { id: "chest", label: "CHEST", say: "chest", image: "/body/chest.jpg" },
  { id: "tummy", label: "TUMMY", say: "tummy", image: "/body/tummy.jpg" },
  { id: "arms", label: "ARMS", say: "arms", image: "/body/arms.jpg" },
  { id: "hands", label: "HANDS", say: "hands", image: "/body/hands.jpg" },
  { id: "legs", label: "LEGS", say: "legs", image: "/body/legs.jpg" },
  { id: "knees", label: "KNEES", say: "knees", image: "/body/knees.jpg" },
  { id: "feet", label: "FEET", say: "feet", image: "/body/feet.jpg" },
];

interface Props {
  onSpeak: (text: string, card: HTMLDivElement, wave: HTMLDivElement) => void;
  photoMode: boolean;
  fadeDuration: number;
}

const SKIN = "#FFDAB9";
const SKIN_SHADOW = "#EDBA98";
const HAIR = "#7B4B2A";
const SHIRT = "#4ECDC4";
const SHIRT_LINE = "#3DB8B0";
const SHORTS = "#FFE66D";
const SHOE = "#FF6B6B";

export default function BodyDiagram({ onSpeak, photoMode, fadeDuration }: Props) {
  const [activePart, setActivePart] = useState<string | null>(null);
  const [photoVisible, setPhotoVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const waveRef = useRef<HTMLDivElement>(null);
  const fadeTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    return () => {
      if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
    };
  }, []);

  const handleTap = useCallback(
    (part: BodyPart) => {
      setActivePart(part.id);
      if (containerRef.current && waveRef.current) {
        onSpeak(part.say, containerRef.current, waveRef.current);
      }

      if (photoMode) {
        if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
        setPhotoVisible(true);
        fadeTimerRef.current = setTimeout(() => {
          setPhotoVisible(false);
        }, fadeDuration * 1000);
      }
    },
    [onSpeak, photoMode, fadeDuration]
  );

  const active = (id: string) => activePart === id;

  const zoneProps = (part: BodyPart) => ({
    fill: active(part.id) ? "rgba(255, 215, 0, 0.35)" : "rgba(0,0,0,0)",
    stroke: active(part.id) ? "#FFD700" : "none",
    strokeWidth: active(part.id) ? 3.5 : 0,
    style: { cursor: "pointer" as const },
    filter: active(part.id) ? "url(#bodyGlow)" : undefined,
    onClick: (e: React.MouseEvent) => { e.stopPropagation(); handleTap(part); },
    onTouchEnd: (e: React.TouchEvent) => { e.preventDefault(); e.stopPropagation(); handleTap(part); },
  });

  const p = (id: string) => PARTS.find((pt) => pt.id === id)!;
  const activeLabel = activePart ? PARTS.find((pt) => pt.id === activePart) : null;

  return (
    <div className={styles.container} ref={containerRef}>
      {/* Photo overlay */}
      {photoMode && activeLabel && (
        <div className={`${styles.photoOverlay} ${photoVisible ? styles.photoVisible : ""}`}>
          <div className={styles.photoFrame}>
            <Image
              src={activeLabel.image}
              alt={activeLabel.label}
              width={300}
              height={300}
              className={styles.photoImg}
            />
            <div className={styles.photoLabel}>{activeLabel.label}</div>
          </div>
        </div>
      )}

      <svg viewBox="0 0 300 450" className={styles.figure} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="bodyGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* === BASE FIGURE === */}
        <ellipse cx="104" cy="78" rx="10" ry="14" fill={SKIN} />
        <ellipse cx="196" cy="78" rx="10" ry="14" fill={SKIN} />
        <ellipse cx="104" cy="78" rx="6" ry="9" fill={SKIN_SHADOW} opacity="0.4" />
        <ellipse cx="196" cy="78" rx="6" ry="9" fill={SKIN_SHADOW} opacity="0.4" />

        <rect x="54" y="150" width="36" height="112" rx="18" fill={SKIN} />
        <rect x="210" y="150" width="36" height="112" rx="18" fill={SKIN} />
        <rect x="54" y="150" width="36" height="40" rx="18" fill={SHIRT} />
        <rect x="210" y="150" width="36" height="40" rx="18" fill={SHIRT} />

        <rect x="104" y="282" width="36" height="124" rx="16" fill={SKIN} />
        <rect x="160" y="282" width="36" height="124" rx="16" fill={SKIN} />

        <rect x="82" y="142" width="136" height="134" rx="16" fill={SHIRT} />
        <line x1="90" y1="218" x2="210" y2="218" stroke={SHIRT_LINE} strokeWidth="1.5" opacity="0.6" />

        <path d="M90,270 L210,270 L210,308 Q210,316 202,316 L168,316 L160,298 L140,298 L132,316 L98,316 Q90,316 90,308 Z" fill={SHORTS} />

        <rect x="134" y="116" width="32" height="28" rx="10" fill={SKIN} />
        <circle cx="150" cy="76" r="44" fill={SKIN} />

        <ellipse cx="150" cy="42" rx="48" ry="30" fill={HAIR} />
        <ellipse cx="112" cy="58" rx="10" ry="18" fill={HAIR} />
        <ellipse cx="188" cy="58" rx="10" ry="18" fill={HAIR} />

        <path d="M122,60 Q128,55 138,58" stroke="#5C3A1E" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M162,58 Q172,55 178,60" stroke="#5C3A1E" strokeWidth="2" fill="none" strokeLinecap="round" />
        <ellipse cx="130" cy="72" rx="7" ry="8" fill="#fff" />
        <ellipse cx="170" cy="72" rx="7" ry="8" fill="#fff" />
        <ellipse cx="131" cy="73" rx="4.5" ry="5.5" fill="#4A3728" />
        <ellipse cx="171" cy="73" rx="4.5" ry="5.5" fill="#4A3728" />
        <circle cx="133" cy="71" r="2" fill="#fff" />
        <circle cx="173" cy="71" r="2" fill="#fff" />
        <ellipse cx="150" cy="86" rx="5" ry="3.5" fill={SKIN_SHADOW} />
        <path d="M138,97 Q150,109 162,97" stroke="#E07070" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <circle cx="118" cy="90" r="8" fill="#FFB5B5" opacity="0.35" />
        <circle cx="182" cy="90" r="8" fill="#FFB5B5" opacity="0.35" />

        <circle cx="72" cy="274" r="16" fill={SKIN} />
        <circle cx="228" cy="274" r="16" fill={SKIN} />
        <circle cx="60" cy="268" r="6" fill={SKIN} />
        <circle cx="240" cy="268" r="6" fill={SKIN} />

        <ellipse cx="118" cy="412" rx="24" ry="14" fill={SHOE} />
        <ellipse cx="182" cy="412" rx="24" ry="14" fill={SHOE} />
        <ellipse cx="118" cy="408" rx="20" ry="4" fill="#FF8585" opacity="0.5" />
        <ellipse cx="182" cy="408" rx="20" ry="4" fill="#FF8585" opacity="0.5" />

        {/* === INTERACTIVE OVERLAYS === */}
        <rect x="82" y="142" width="136" height="38" rx="10" {...zoneProps(p("shoulders"))} />
        <rect x="82" y="180" width="136" height="38" rx="4" {...zoneProps(p("chest"))} />
        <rect x="82" y="218" width="136" height="52" rx="4" {...zoneProps(p("tummy"))} />
        <rect x="128" y="116" width="44" height="28" rx="12" {...zoneProps(p("neck"))} />

        <g {...zoneProps(p("legs"))}>
          <rect x="100" y="282" width="40" height="124" rx="16" />
          <rect x="156" y="282" width="44" height="124" rx="16" />
        </g>
        <g {...zoneProps(p("arms"))}>
          <rect x="50" y="148" width="40" height="116" rx="18" />
          <rect x="206" y="148" width="44" height="116" rx="18" />
        </g>

        <circle cx="150" cy="76" r="46" {...zoneProps(p("head"))} />
        <ellipse cx="150" cy="42" rx="50" ry="32" {...zoneProps(p("hair"))} />
        <g {...zoneProps(p("ears"))}>
          <ellipse cx="104" cy="78" rx="13" ry="17" />
          <ellipse cx="196" cy="78" rx="13" ry="17" />
        </g>
        <g {...zoneProps(p("eyes"))}>
          <ellipse cx="130" cy="72" rx="12" ry="12" />
          <ellipse cx="170" cy="72" rx="12" ry="12" />
        </g>
        <ellipse cx="150" cy="86" rx="10" ry="8" {...zoneProps(p("nose"))} />
        <ellipse cx="150" cy="100" rx="16" ry="10" {...zoneProps(p("mouth"))} />

        <g {...zoneProps(p("knees"))}>
          <circle cx="122" cy="352" r="16" />
          <circle cx="178" cy="352" r="16" />
        </g>
        <g {...zoneProps(p("hands"))}>
          <circle cx="72" cy="274" r="20" />
          <circle cx="228" cy="274" r="20" />
        </g>
        <g {...zoneProps(p("feet"))}>
          <ellipse cx="118" cy="412" rx="28" ry="18" />
          <ellipse cx="182" cy="412" rx="28" ry="18" />
        </g>
      </svg>

      <div className={styles.labelArea}>
        <div className={`${styles.partLabel} ${activeLabel ? styles.revealed : ""}`}>
          {activeLabel?.label || ""}
        </div>
        <div ref={waveRef} className={styles.soundWave}>
          <span /><span /><span /><span /><span />
        </div>
        <div className={styles.hint}>
          {activeLabel ? activeLabel.say : "tap a body part!"}
        </div>
      </div>
    </div>
  );
}
