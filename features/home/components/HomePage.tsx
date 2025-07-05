"use client";

import React, { useRef } from "react";

// Components
import VideoBackground from "@/components/VideoBackground";
import Overlay from "@/components/Overlay";

const videoUrl =
  "https://res.cloudinary.com/dcss55nem/video/upload/v1739681557/Portfolio_Video_t0y4tc.mp4";

/**
 * HomePage renders multiple sections
 */
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
