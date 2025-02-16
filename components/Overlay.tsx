import React, { RefObject } from "react";
import { cn } from "@/lib/utils";

interface OverlayProps {
  ref: RefObject<HTMLDivElement | null>;
  className?: string;
}

const Overlay = ({ ref, className }: OverlayProps) => {
  const defaultClass =
    "absolute top-0 left-0 bottom-0 right-0 w-screen h-screen bg-black opacity-30 z-10";
  return <div className={cn(defaultClass, className)} ref={ref}></div>;
};

export default Overlay;
