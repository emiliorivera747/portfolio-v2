import React from "react";

const MainHeader = () => {
  return (
    <header className="absoulte flex flex-col md:flex-col lg:flex-col w-full h-1/2 items-start justify-center sm:mx-16 mx-4 sm:gap-2  gap-1">
      <div className="flex lg:flex-row flex-row gap-2 2xl:flex-col md:gap-4 text-4xl  md:text-7xl 2xl:text-[14rem] mb-4 sm:mb-8 ">
        <h1 className="text-white font-bold">{"Emilio"}</h1>
        <h1 className="text-white font-bold">{"Rivera"}</h1>
      </div>
      <h1 className="font-bold from-zinc-400 to-zinc-200 bg-gradient-to-r bg-clip-text text-transparent sm:text-2xl text-xl z-50  sm:mx-1 2xl:text-[3rem] pl-1 sm:pl-0">
        {"Full Stack Engineer"}
      </h1>
      <p className="text-zinc-200 sm:w-1/2 pl-1">
        {" "}
        Develop minimalist web and front-end applications using modern
        frameworks, tailored for small businesses and non-profit organizations.{" "}
      </p>
    </header>
  );
};

export default MainHeader;
