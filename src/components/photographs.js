"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = Array(14).fill(
  "https://www.azuki.com/_next/image?url=%2Fhomepage%2FCarousel%2Fsatoshi.jpg&w=600&q=75"
);

const positions = [
  { top: "5%", left: "0%" },
  { top: "25%", left: "10%" },
  { top: "5%", left: "20%" },
  { top: "25%", left: "30%" },
  { top: "5%", left: "40%" },
  { top: "25%", left: "50%" },
  { bottom: "5%", left: "0%" },

  { top: "5%", right: "0%" },
  { top: "25%", right: "10%" },
  { top: "5%", right: "20%" },
  { bottom: "5%", right: "0%" },
];

export default function OverlappingImages() {
  const [shuffledImages, setShuffledImages] = useState([]);

  useEffect(() => {
    setShuffledImages(
      images.map((src, index) => ({
        src,
        position: positions[index % positions.length],
        rotation: Math.random() * 30 - 15, // Tilting entire photo
      }))
    );
  }, []);

  return (
    <div className="relative w-full h-full flex justify-center items-center overflow-hidden">
      {/* Centered Text */}
      <div className="text-center absolute left-[33%] bottom-[15%] w-[32rem] text-black z-20">
        <h1 className="text-6xl font-extrabold uppercase banner-text">the strongest community</h1>
        <span className="text-sm font-light mt-8">From the Alley to the Garden. Explore the communities of Azuki.</span>

      </div>

      {/* Overlapping Photos */}
      {shuffledImages.map(({ src, position, rotation }, index) => (
        <motion.div
          key={index}
          className="absolute bg-white p-5 shadow-2xl cursor-pointer"
          style={{
            width: "250px",
            height: "250px",
            ...position,
          }}
          initial={{ opacity: 0, scale: 0.9, rotate: rotation }}
          animate={{ opacity: 1, scale: 1, rotate: rotation }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
          whileHover={{ scale: 1.1, rotate: rotation + 5 }} // Hover effect
        >
          <img src={src} alt={`Image ${index}`} className="w-full h-full" />
        </motion.div>
      ))}
      <div className="flex flex-col items-center justify-center w-full p-6">
            <h1 className="text-5xl text-black font-extrabold uppercase"></h1>
        </div>
    </div>
  );
}
