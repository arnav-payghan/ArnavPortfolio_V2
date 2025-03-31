"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const FloatingWords = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Track cursor position
    const handleMouseMove = (event: { clientX: any; clientY: any; }) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    // Track window size for responsiveness
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    // Initialize window size on mount
    handleResize();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Adjust positions based on screen size
  const words = [
    { text: "Minimalism", offsetX: -100, offsetY: -50 },
    { text: "Elegant", offsetX: 50, offsetY: -80 },
    { text: "Modern", offsetX: -30, offsetY: 70 },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="absolute text-black text-sm sm:text-base md:text-lg font-semibold italic px-3 py-1 border border-black rounded-full bg-white shadow-md"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            x: mousePosition.x + word.offsetX,
            y: mousePosition.y + word.offsetY,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
          {word.text}
        </motion.span>
      ))}
    </div>
  );
};

export default FloatingWords;
