import React from "react";
import Link from "next/link";
import { CldImage } from "next-cloudinary";


const Logo = () => {
  return (
    <div>
      {" "}
      <Link
        href="/"
        className={`flex flex-row tracking-widest hover:text-white hover:backdrop-blur-md rounded-lg p-[0.8rem] ${logoTextColor} ${menuTextColor} font-semibold`}
        aria-label="Logo"
      >
        <CldImage
          src="https://res.cloudinary.com/dcss55nem/image/upload/v1702588027/favicon_5_a5rhl0.png"
          fetchPriority="high"
          height={30}
          width={30}
          className="pr-1 self-end"
          alt="logo"
        />{" "}
        <h1 className="self-end font-bold tracking-widest">
          {"milio's Portfolio"}
        </h1>
      </Link>
    </div>
  );
};

export default Logo;
