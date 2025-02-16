"use client";

import React from "react";
import { motion } from "framer-motion";

// Components
import VideoBackgroundWithText from "@/components/VideoBackgroundWithText";

const videoUrl =
  "https://res.cloudinary.com/dcss55nem/video/upload/v1724197548/Casa_Website_Video_-_Made_with_Clipchamp_t2atbx.mp4";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const HomePage = () => {
  return (
    <section className="h-screen w-screen mx-0">
      <VideoBackgroundWithText url={videoUrl}>
      <div className="absolute top-0 left-0 bottom-0 right-0 w-screen h-screen bg-black opacity-30 z-10"></div>
        {/* Text container should be on top */}
        <div className="absolute top-0 left-0 z-20 w-full h-full flex items-center justify-center text-white bg-red-300">
          hello
        </div>
      </VideoBackgroundWithText>
    </section>
  );
};

export default HomePage;
