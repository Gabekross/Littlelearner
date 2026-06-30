"use client";

import { useState, useEffect, useCallback } from "react";
import type { CardItem } from "@/data/cardData";
import styles from "./admin.module.scss";

const CATEGORIES = [
  { key: "words", label: "2-Letter Words" },
  { key: "words3", label: "3-Letter Words" },
  { key: "words4", label: "4-Letter Words" },
  { key: "letters", label: "Letters" },
  { key: "numbers", label: "1-10" },
  { key: "num11", label: "11-20" },
  { key: "num21", label: "21-30" },
  { key: "num31", label: "31-40" },
  { key: "num41", label: "41-50" },
  { key: "num51", label: "51-60" },
  { key: "num61", label: "61-70" },
  { key: "num71", label: "71-80" },
  { key: "num81", label: "81-90" },
  { key: "num91", label: "91-100" },
  { key: "fruits", label: "Fruits" },
];

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [category, setCategory] = useState("words");
  const [items, setItems] = useState<CardItem[]>([]);
  const [word, setWord] = useState("");
  const [emoji, setEmoji] = useState("");
  const [say, setSay] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const fetchItems = useCallback(async () => {
    const res = await fetch(`/api/words?category=${category}`);
    const data = await res.json();
    setItems(data);
  }, [category]);

  useEffect(() => {
    if (authenticated) fetchItems();
  }, [authenticated, fetchItems]);

  const showMessage = (msg: string) => {
    setMessage(msg);
    setTimeout(() => setMessage(""), 3000);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.trim()) {
      setAuthenticated(true);
    }
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!word.trim() || !emoji.trim() || !say.trim()) return;

    setLoading(true);
    const res = await fetch("/api/words", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-admin-password": password,
      },
      body: JSON.stringify({ category, word, emoji, say }),
    });

    const data = await res.json();
    setLoading(false);

    if (res.ok) {
      showMessage(`Added "${word.toUpperCase()}" successfully!`);
      setWord("");
      setEmoji("");
      setSay("");
      fetchItems();
    } else {
      if (res.status === 401) {
        showMessage("Wrong password. Please re-enter.");
        setAuthenticated(false);
      } else {
        showMessage(data.error || "Failed to add");
      }
    }
  };

  const handleDelete = async (itemWord: string) => {
    if (!confirm(`Delete "${itemWord}"?`)) return;

    const res = await fetch("/api/words", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "x-admin-password": password,
      },
      body: JSON.stringify({ category, word: itemWord }),
    });

    if (res.ok) {
      showMessage(`Deleted "${itemWord}"`);
      fetchItems();
    } else if (res.status === 401) {
      showMessage("Wrong password.");
      setAuthenticated(false);
    }
  };

  if (!authenticated) {
    return (
      <div className={styles.container}>
        <div className={styles.loginCard}>
          <h1>Admin Login</h1>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.panel}>
        <div className={styles.header}>
          <h1>Little Learner Admin</h1>
          <a href="/" className={styles.backLink}>Back to App</a>
        </div>

        {message && <div className={styles.toast}>{message}</div>}

        <div className={styles.section}>
          <label className={styles.label}>Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={styles.select}
          >
            {CATEGORIES.map((c) => (
              <option key={c.key} value={c.key}>{c.label}</option>
            ))}
          </select>
        </div>

        <form onSubmit={handleAdd} className={styles.addForm}>
          <h2>Add New Word</h2>
          <div className={styles.fields}>
            <div className={styles.field}>
              <label>Word</label>
              <input
                type="text"
                placeholder="e.g. PLAY"
                value={word}
                onChange={(e) => setWord(e.target.value)}
              />
            </div>
            <div className={styles.field}>
              <label>Emoji</label>
              <input
                type="text"
                placeholder="e.g. 🎮"
                value={emoji}
                onChange={(e) => setEmoji(e.target.value)}
              />
            </div>
            <div className={styles.field}>
              <label>Pronunciation</label>
              <input
                type="text"
                placeholder="e.g. play"
                value={say}
                onChange={(e) => setSay(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" disabled={loading} className={styles.addBtn}>
            {loading ? "Adding..." : "Add Word"}
          </button>
        </form>

        <div className={styles.section}>
          <h2>Custom Words ({items.length})</h2>
          {items.length === 0 ? (
            <p className={styles.empty}>No custom words in this category yet.</p>
          ) : (
            <div className={styles.wordList}>
              {items.map((item) => (
                <div key={item.word} className={styles.wordItem}>
                  <span className={styles.wordEmoji}>{item.emoji}</span>
                  <span className={styles.wordText}>{item.word}</span>
                  <span className={styles.wordSay}>({item.say})</span>
                  <button
                    onClick={() => handleDelete(item.word)}
                    className={styles.deleteBtn}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
