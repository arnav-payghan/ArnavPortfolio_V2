"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const FloatingWords = () => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const offsetX = (event.clientX - window.innerWidth / 2) * 0.02;
      const offsetY = (event.clientY - window.innerHeight / 2) * 0.02;
      setMouseOffset({ x: offsetX, y: offsetY });
    };

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize window size on mount

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Words with unique anchor positions in percentages
  const words = [
    { text: "Minimalism", x: 5, y: 10, movementFactor: 1.5 },
    { text: "Elegant", x: 75, y: 2, movementFactor: 1.5 },
    { text: "Aesthetic", x: 70, y: 55, movementFactor: 0.8 },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {words.map((word, index) => {
        const baseX = (windowSize.width * word.x) / 100;
        const baseY = (windowSize.height * word.y) / 100;

        return (
          <motion.span
            key={index}
            className="absolute domaine_display text-black text-sm sm:text-base md:text-lg
            font-semibold italic px-3 py-1 border border-black rounded-full bg-white shadow-md
            bg-bg_White text-text_Black"
            initial={{ opacity: 100 }}
            animate={{
              opacity: 1,
              x: baseX + mouseOffset.x * word.movementFactor,
              y: baseY + mouseOffset.y * word.movementFactor,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            {word.text}
          </motion.span>
        );
      })}
    </div>
  );
};

export default FloatingWords;
