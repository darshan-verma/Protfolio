"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ColourfulText({ text }) {
  const colors = [
  "rgba(238,5,5,1)", 
  "rgba(253,29,29,0.9500393907563025)", 
  "rgba(252,176,69,1)"
];

  const [currentColors, setCurrentColors] = useState(colors);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
      setCount((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex">
      {text.split("").map((char, index) => (
        <motion.span
          key={`${char}-${count}-${index}`}
          initial={{ y: 0 }}
          animate={{
            color: currentColors[(index * currentColors.length) / text.length | 0],
            y: [0, -3, 0],
            scale: [1, 1.01, 1],
            filter: ["blur(0px)", "blur(5px)", "blur(0px)"],
            opacity: [1, 0.8, 1],
          }}
          transition={{
            duration: 0.5,
            delay: index * 0.05,
          }}
          className="inline-block whitespace-pre font-sans tracking-tight"
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
}
