import React from "react";
import "../App.css";

export default function Features() {
  return (
    <>
      <div
        className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] bg-black flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <h2 className="relative text-white text-3xl sm:text-4xl md:text-5xl font-bold z-10 tracking-wide">
          features
        </h2>
      </div>
    </>
  );
}


