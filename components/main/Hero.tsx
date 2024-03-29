import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div
      className="flex flex-col h-screen w-screen justify-center mb-[50px] mt-[35px] md:mt-0"
      id="about-me"
    >
      <HeroContent />
    </div>
  );
};

export default Hero;
