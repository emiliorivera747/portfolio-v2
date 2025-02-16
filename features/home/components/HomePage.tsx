"use client";

import React, { useRef } from "react";

// Components
import VideoBackground from "@/components/VideoBackground";
import Overlay from "@/components/Overlay";
import MainHeader from "@/features/home/components/MainHeader";

const videoUrl =
  "https://res.cloudinary.com/dcss55nem/video/upload/v1724197548/Casa_Website_Video_-_Made_with_Clipchamp_t2atbx.mp4";

const HomePage = () => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <section className="h-screen w-screen mx-0">
      <VideoBackground url={videoUrl}>
        <Overlay ref={ref} />

      </VideoBackground>
    </section>
  );
};

export default HomePage;
