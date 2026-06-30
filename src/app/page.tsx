"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { getDataForMode, type Mode } from "@/data/cardData";
import { preloadAudio, speak } from "@/lib/speech";
import LearnerCard from "@/components/LearnerCard";
import styles from "./page.module.scss";

const TABS: { mode: Mode; icon: string; label: string }[] = [
  { mode: "words", icon: "🗣️", label: "Words" },
  { mode: "words3", icon: "📖", label: "3-Letter" },
  { mode: "words4", icon: "📝", label: "4-Letter" },
  { mode: "letters", icon: "🔤", label: "Letters" },
  { mode: "numbers", icon: "🔢", label: "1-10" },
  { mode: "numbers2", icon: "🔢", label: "11-20" },
  { mode: "fruits", icon: "🍎", label: "Fruits" },
];

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  life: number;
  rot: number;
  rspeed: number;
}

export default function Home() {
  const [mode, setMode] = useState<Mode>("words");
  const [spellMode, setSpellMode] = useState(false);
  const [toastText, setToastText] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const volumeRef = useRef(1.0);
  const busyRef = useRef(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animatingRef = useRef(false);
  const toastTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const activeWaveRef = useRef<HTMLDivElement | null>(null);
  const activeCardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const resizeCanvas = () => {
      const c = canvasRef.current;
      if (c) {
        c.width = window.innerWidth;
        c.height = window.innerHeight;
      }
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  useEffect(() => {
    const data = getDataForMode(mode);
    const texts = data.map((d) => d.say);
    if (mode === "words" || mode === "words3" || mode === "words4") {
      const letters = new Set<string>();
      data.forEach((d) => d.word.split("").forEach((ch) => letters.add(ch)));
      texts.push(...letters);
    }
    preloadAudio(texts);
  }, [mode]);

  const showToast = useCallback((text: string) => {
    setToastText(text);
    setToastVisible(true);
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    toastTimerRef.current = setTimeout(() => setToastVisible(false), 1800);
  }, []);

  const launchConfetti = useCallback((cardEl: HTMLDivElement) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const r = cardEl.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;

    const cols = ["#FF4757", "#FFD700", "#2ED573", "#1E90FF", "#A855F7", "#FF6B9D", "#FF6B35"];
    for (let i = 0; i < 32; i++) {
      particlesRef.current.push({
        x: cx, y: cy,
        vx: (Math.random() - 0.5) * 10,
        vy: (Math.random() - 0.95) * 10,
        color: cols[Math.floor(Math.random() * cols.length)],
        size: Math.random() * 8 + 4,
        life: 1,
        rot: Math.random() * Math.PI * 2,
        rspeed: (Math.random() - 0.5) * 0.3,
      });
    }

    if (!animatingRef.current) {
      animatingRef.current = true;
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particlesRef.current = particlesRef.current.filter((p) => p.life > 0.02);
        particlesRef.current.forEach((p) => {
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.22;
          p.vx *= 0.98;
          p.life -= 0.025;
          p.rot += p.rspeed;
          ctx.save();
          ctx.globalAlpha = p.life;
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rot);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.5);
          ctx.restore();
        });
        if (particlesRef.current.length > 0) {
          requestAnimationFrame(animate);
        } else {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          animatingRef.current = false;
        }
      };
      requestAnimationFrame(animate);
    }
  }, []);

  const handleSpeak = useCallback(
    (sayText: string, card3d: HTMLDivElement, waveEl: HTMLDivElement) => {
      if (busyRef.current) return;
      busyRef.current = true;

      if (activeWaveRef.current) activeWaveRef.current.classList.remove("playing");
      if (activeCardRef.current) activeCardRef.current.classList.remove("speaking");

      speak(
        sayText,
        volumeRef.current,
        () => {
          waveEl.classList.add("playing");
          card3d.classList.add("speaking");
          card3d.classList.add("bouncing");
          activeWaveRef.current = waveEl;
          activeCardRef.current = card3d;
          setTimeout(() => card3d.classList.remove("bouncing"), 460);
        },
        () => {
          waveEl.classList.remove("playing");
          card3d.classList.remove("speaking");
          activeWaveRef.current = null;
          activeCardRef.current = null;
          busyRef.current = false;
        }
      );

      showToast(sayText.split(" ")[0].toUpperCase());
      launchConfetti(card3d);
    },
    [showToast, launchConfetti]
  );

  const data = getDataForMode(mode);

  return (
    <>
      <div className={styles.stars} />
      <canvas ref={canvasRef} className={styles.confettiCanvas} />

      <header className={styles.header}>
        <h1>Little Learner Cards</h1>
        <p>Tap any card to hear the sound!</p>
      </header>

      <div className={styles.volBar}>
        <label>🔈</label>
        <input
          type="range"
          min="0.1"
          max="1"
          step="0.05"
          defaultValue="1"
          onChange={(e) => {
            volumeRef.current = parseFloat(e.target.value);
          }}
        />
        <label>🔊</label>
      </div>

      <div className={styles.spellToggle}>
        <label className={styles.toggleLabel}>
          <span>Spell Mode</span>
          <input
            type="checkbox"
            checked={spellMode}
            onChange={(e) => setSpellMode(e.target.checked)}
          />
          <span className={styles.toggleSlider} />
        </label>
      </div>

      <div className={styles.tabs}>
        {TABS.map((t) => (
          <button
            key={t.mode}
            className={`${styles.tabBtn} ${mode === t.mode ? styles.active : ""}`}
            onClick={() => setMode(t.mode)}
          >
            {t.icon} {t.label}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {data.map((item, i) => (
          <LearnerCard key={`${mode}-${item.word}`} item={item} index={i} spellFirst={spellMode && (mode === "words" || mode === "words3" || mode === "words4")} onSpeak={handleSpeak} />
        ))}
      </div>

      <div className={`${styles.toast} ${toastVisible ? styles.show : ""}`}>
        🔊 {toastText}
      </div>
    </>
  );
}
