"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";

function ClickCounter() {
  const [count, setCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(5);
  const [gameActive, setGameActive] = useState(false);
  const [highScore, setHighScore] = useState(0);

  const startGame = useCallback(() => {
    setCount(0);
    setTimeLeft(5);
    setGameActive(true);
    const interval = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(interval);
          setGameActive(false);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
  }, []);

  const handleClick = () => {
    if (gameActive) {
      const newCount = count + 1;
      setCount(newCount);
      if (newCount > highScore) setHighScore(newCount);
    }
  };

  return (
    <div className="glass-card p-6 text-center">
      <h3 className="text-lg font-bold mb-2" style={{ color: "var(--color-text)" }}>
        Speed Clicker
      </h3>
      <p className="text-xs mb-4" style={{ color: "var(--color-text-muted)" }}>
        Click as fast as you can in 5 seconds
      </p>
      <div className="text-4xl font-bold mb-2" style={{ color: "var(--color-accent)" }}>
        {count}
      </div>
      <div className="text-sm mb-4" style={{ color: "var(--color-text-secondary)" }}>
        {gameActive ? `Time: ${timeLeft}s` : highScore > 0 ? `Best: ${highScore}` : "Ready?"}
      </div>
      {gameActive ? (
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleClick}
          className="hire-btn text-sm w-full"
        >
          CLICK!
        </motion.button>
      ) : (
        <button
          onClick={startGame}
          className="px-4 py-2 rounded-xl text-sm font-semibold border transition-all duration-300 hover:scale-105 w-full"
          style={{
            borderColor: "var(--color-border-hover)",
            color: "var(--color-text)",
            background: "var(--color-surface)",
          }}
        >
          {timeLeft === 0 ? "Play Again" : "Start"}
        </button>
      )}
    </div>
  );
}

function MemoryGame() {
  const emojis = ["🚀", "🎮", "🔥", "⚡", "🎯", "💎"];
  const [cards, setCards] = useState<{ id: number; emoji: string; flipped: boolean; matched: boolean }[]>([]);
  const [selected, setSelected] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);

  const initGame = () => {
    const shuffled = [...emojis, ...emojis]
      .sort(() => Math.random() - 0.5)
      .map((emoji, i) => ({ id: i, emoji, flipped: false, matched: false }));
    setCards(shuffled);
    setSelected([]);
    setMoves(0);
  };

  const flipCard = (id: number) => {
    if (selected.length === 2) return;
    if (cards[id].matched || cards[id].flipped) return;

    const newCards = cards.map((c, i) => (i === id ? { ...c, flipped: true } : c));
    const newSelected = [...selected, id];
    setCards(newCards);
    setSelected(newSelected);

    if (newSelected.length === 2) {
      setMoves((m) => m + 1);
      if (newCards[newSelected[0]].emoji === newCards[newSelected[1]].emoji) {
        const matchedCards = newCards.map((c, i) =>
          i === newSelected[0] || i === newSelected[1] ? { ...c, matched: true } : c
        );
        setCards(matchedCards);
        setSelected([]);
      } else {
        setTimeout(() => {
          const flippedBack = newCards.map((c, i) =>
            i === newSelected[0] || i === newSelected[1] ? { ...c, flipped: false } : c
          );
          setCards(flippedBack);
          setSelected([]);
        }, 800);
      }
    }
  };

  const allMatched = cards.length > 0 && cards.every((c) => c.matched);

  return (
    <div className="glass-card p-6 text-center">
      <h3 className="text-lg font-bold mb-2" style={{ color: "var(--color-text)" }}>
        Memory Match
      </h3>
      <p className="text-xs mb-4" style={{ color: "var(--color-text-muted)" }}>
        Match the pairs — {moves} moves
      </p>
      {cards.length === 0 ? (
        <button
          onClick={initGame}
          className="px-4 py-2 rounded-xl text-sm font-semibold border transition-all duration-300 hover:scale-105 w-full"
          style={{
            borderColor: "var(--color-border-hover)",
            color: "var(--color-text)",
            background: "var(--color-surface)",
          }}
        >
          Start Game
        </button>
      ) : allMatched ? (
        <div>
          <p className="text-2xl mb-3">🎉</p>
          <p className="text-sm mb-3" style={{ color: "var(--color-accent)" }}>
            You won in {moves} moves!
          </p>
          <button
            onClick={initGame}
            className="hire-btn text-sm w-full"
          >
            Play Again
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-2">
          {cards.map((card) => (
            <motion.button
              key={card.id}
              whileTap={{ scale: 0.9 }}
              onClick={() => flipCard(card.id)}
              className="aspect-square rounded-lg text-xl flex items-center justify-center transition-all duration-200"
              style={{
                background: card.flipped || card.matched ? "var(--color-surface)" : "var(--color-border)",
                border: `1px solid ${card.matched ? "var(--color-accent)" : "var(--color-border-hover)"}`,
              }}
            >
              {card.flipped || card.matched ? card.emoji : "?"}
            </motion.button>
          ))}
        </div>
      )}
    </div>
  );
}

function ReactionGame() {
  const [state, setState] = useState<"idle" | "waiting" | "ready" | "result">("idle");
  const [startTime, setStartTime] = useState(0);
  const [reactionTime, setReactionTime] = useState(0);
  const [bestTime, setBestTime] = useState(Infinity);

  const startGame = () => {
    setState("waiting");
    const delay = 1000 + Math.random() * 3000;
    setTimeout(() => {
      setState("ready");
      setStartTime(Date.now());
    }, delay);
  };

  const handleClick = () => {
    if (state === "ready") {
      const time = Date.now() - startTime;
      setReactionTime(time);
      if (time < bestTime) setBestTime(time);
      setState("result");
    } else if (state === "waiting") {
      setState("idle");
    }
  };

  const getColor = () => {
    if (state === "ready") return "#10b981";
    if (state === "waiting") return "#ef4444";
    return "var(--color-surface)";
  };

  return (
    <div className="glass-card p-6 text-center">
      <h3 className="text-lg font-bold mb-2" style={{ color: "var(--color-text)" }}>
        Reaction Test
      </h3>
      <p className="text-xs mb-4" style={{ color: "var(--color-text-muted)" }}>
        Click when it turns green
      </p>
      {state === "idle" ? (
        <div>
          {bestTime < Infinity && (
            <p className="text-sm mb-3" style={{ color: "var(--color-accent)" }}>
              Best: {bestTime}ms
            </p>
          )}
          <button
            onClick={startGame}
            className="px-4 py-2 rounded-xl text-sm font-semibold border transition-all duration-300 hover:scale-105 w-full"
            style={{
              borderColor: "var(--color-border-hover)",
              color: "var(--color-text)",
              background: "var(--color-surface)",
            }}
          >
            Start
          </button>
        </div>
      ) : state === "result" ? (
        <div>
          <p className="text-3xl font-bold mb-2" style={{ color: "var(--color-accent)" }}>
            {reactionTime}ms
          </p>
          <p className="text-sm mb-3" style={{ color: "var(--color-text-secondary)" }}>
            {reactionTime < 200 ? "Lightning fast!" : reactionTime < 300 ? "Pretty quick!" : "Keep practicing!"}
          </p>
          <button
            onClick={startGame}
            className="hire-btn text-sm w-full"
          >
            Try Again
          </button>
        </div>
      ) : (
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={handleClick}
          className="w-full py-12 rounded-xl text-sm font-bold transition-colors"
          style={{
            background: getColor(),
            color: state === "ready" ? "#fff" : "var(--color-text)",
          }}
        >
          {state === "waiting" ? "Wait for green..." : "CLICK NOW!"}
        </motion.button>
      )}
    </div>
  );
}

export default function MiniGames() {
  return (
    <section id="games" className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="text-xs font-semibold uppercase tracking-[0.2em] mb-3 block"
            style={{ color: "var(--color-accent)" }}
          >
            Procrastination Station
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
            style={{ color: "var(--color-text)" }}
          >
            Mini Games
          </h2>
          <p
            className="text-base sm:text-lg max-w-xl mx-auto"
            style={{ color: "var(--color-text-secondary)" }}
          >
            You&apos;re already here. Might as well waste some time productively.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            <ClickCounter />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ReactionGame />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <MemoryGame />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
