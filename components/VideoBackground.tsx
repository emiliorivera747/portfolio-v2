"use client";
import React from "react";
interface VideoBackgroundProps {
  url: string;
  children: React.ReactNode;
}

/**
 *
 * VideoBackground component
 *
 * @param param0
 * @returns
 */
const VideoBackground = ({ url, children }: VideoBackgroundProps) => {
  return (
    <section className="relative h-screen w-screen">
      <video
        className="absolute top-0 left-0 right-0 bottom-0 z-0 h-full w-full object-cover"
        src={url}
        loop
        muted
        playsInline
        autoPlay
      ></video>
      <div className="absolute top-0 left-0 right-0 bottom-0 z-20 flex flex-col justify-center items-start bg-transparent pl-16">
        <div className="flex lg:flex-row flex-row gap-2 2xl:flex-col md:gap-4 text-4xl  md:text-7xl 2xl:text-[14rem] mb-4 sm:mb-8">
          <h1 className="text-white font-bold">{"Emilio"}</h1>
          <h1 className="text-white font-bold">{"Rivera"}</h1>
        </div>
        <h1 className="font-medium from-zinc-400 to-zinc-200 bg-gradient-to-r bg-clip-text text-transparent sm:text-2xl text-xl z-50  sm:mx-1 2xl:text-[3rem] pl-1 sm:pl-0 pb-4">
          {"Full Stack Engineer"}
        </h1>
        <p className="text-zinc-200 sm:w-1/2 pl-1">
          {" "}
          Develop minimalist web and front-end applications using modern
          frameworks, tailored for small businesses and non-profit
          organizations.{" "}
        </p>
      </div>
      {children}
    </section>
  );
};

export default VideoBackground;
