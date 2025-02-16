"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

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

const PrimarySection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          videoRef.current?.play();
        } else {
          videoRef.current?.pause();
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className="h-[100vh] w-screen relative ">
      <div className="absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-black opacity-60 z-10"></div>
      {/* <motion.div className="relative w-full h-full flex items-center justify-center z-1">
        <motion.div
          initial="initial"
          animate="animate"
          variants={variants}
          className="flex flex-col items-center justify-center text-white"
        >
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-10xl 2xl:text-12xl font-bold">
            Emilio Rivera
          </h1>
          <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-10xl font-bold">
            Full Stack Engineer
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
            Develop minimalist web and front-end applications using modern
            frameworks, tailored for small businesses and non-profit
            organizations.
          </p>
        </motion.div>
      </motion.div> */}
      <video
        className="absolute top-0 left-0 right-0 bottom-0 z-0"
        src="https://res.cloudinary.com/dcss55nem/video/upload/v1724197548/Casa_Website_Video_-_Made_with_Clipchamp_t2atbx.mp4"
        loop
        muted
        playsInline
        autoPlay
      ></video>
    </section>
  );
};

export default PrimarySection;
