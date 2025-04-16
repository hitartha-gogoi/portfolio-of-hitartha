"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function MyAudioPlayer() {

    return (
      <div className="fixed bottom-4 left-4 flex items-center gap-3 bg-white z-[9999] rounded-md">
        {/* Tiny Visualizer Bars (Left of Audio Player) */}
        <div className="flex gap-1">
          
        </div>
  
        {/* Audio Player (Original Style) */}
        <AudioPlayer
          src="/do-I-wanna-know.mp3"
          style={{
            "--rhap-theme-color": "black",
          }}
          className="!bg-white !shadow-md !rounded-lg !border !w-[300px] [&_.rhap_play-button]:text-black [&_.rhap_forward-button]:text-black [&_.rhap_rewind-button]:text-black"
        />
      </div>
      )
}
