'use client';
import React, {useEffect, useRef} from "react";
interface VideoBackgroundProps {
  url: string;
  children: React.ReactNode;
}

const VideoBackgroundWithText = ({ url, children }: VideoBackgroundProps) => {

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
    <section className="relative h-auto w-screen m-h-screen">
      <video
        className="absolute top-0 left-0 right-0 bottom-0 z-0 h-[100vh] w-screen object-cover"
        src={url}
        loop
        muted
        playsInline
        autoPlay
      ></video>
      {children}
    </section>
  );
};

export default VideoBackgroundWithText;
