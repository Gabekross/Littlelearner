"use client";

import { useState } from "react";
import type { Profile } from "@/app/api/profiles/route";
import styles from "./ProfilePicker.module.scss";

const AVATAR_EMOJIS = [
  "🦁", "🐰", "🐼", "🦊", "🐸", "🦄", "🐯", "🐙",
  "🦋", "🐢", "🚀", "⭐", "🌈", "🦖", "🐳", "🐞",
];

interface Props {
  profiles: Profile[];
  onSelect: (profile: Profile) => void;
  onCreate: (name: string, emoji: string) => Promise<void>;
  onSkip: () => void;
}

export default function ProfilePicker({ profiles, onSelect, onCreate, onSkip }: Props) {
  const [adding, setAdding] = useState(false);
  const [name, setName] = useState("");
  const [emoji, setEmoji] = useState(AVATAR_EMOJIS[0]);
  const [saving, setSaving] = useState(false);

  const handleCreate = async () => {
    if (!name.trim() || saving) return;
    setSaving(true);
    await onCreate(name.trim(), emoji);
    setSaving(false);
    setAdding(false);
    setName("");
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.panel}>
        <h2 className={styles.title}>Who&apos;s learning today? 👋</h2>

        {!adding ? (
          <>
            <div className={styles.profileGrid}>
              {profiles.map((p) => (
                <button key={p.id} className={styles.profileBtn} onClick={() => onSelect(p)}>
                  <span className={styles.avatar}>{p.emoji}</span>
                  <span className={styles.name}>{p.name}</span>
                </button>
              ))}
              <button className={`${styles.profileBtn} ${styles.addBtn}`} onClick={() => setAdding(true)}>
                <span className={styles.avatar}>➕</span>
                <span className={styles.name}>New</span>
              </button>
            </div>
            <button className={styles.skipBtn} onClick={onSkip}>
              Just play →
            </button>
          </>
        ) : (
          <div className={styles.addForm}>
            <input
              type="text"
              className={styles.nameInput}
              placeholder="Your name"
              maxLength={20}
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
            />
            <div className={styles.emojiGrid}>
              {AVATAR_EMOJIS.map((e) => (
                <button
                  key={e}
                  className={`${styles.emojiBtn} ${emoji === e ? styles.selected : ""}`}
                  onClick={() => setEmoji(e)}
                >
                  {e}
                </button>
              ))}
            </div>
            <div className={styles.addActions}>
              <button className={styles.cancelBtn} onClick={() => setAdding(false)}>
                Back
              </button>
              <button
                className={styles.createBtn}
                disabled={!name.trim() || saving}
                onClick={handleCreate}
              >
                {saving ? "Saving..." : "Let's go! 🎉"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
