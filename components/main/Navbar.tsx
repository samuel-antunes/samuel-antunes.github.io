"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Socials } from "@/constants";
import { isMobile } from "react-device-detect";

const Navbar = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <nav className="w-full h-16 fixed top-0 shadow-lg bg-black text-white font-bold z-[200] px-4 md:px-8">
      <div className="flex items-center justify-between h-full w-full">
        <a href="/" className="flex items-center ">
          {isClient && (
            <video
              loop
              autoPlay
              muted
              playsInline
              className="w-16 h-auto"
              src="/blackhole.webm"
            />
          )}
          <span className="hidden md:inline-block w-[400px]">
            Samuel Antunes Miranda
          </span>
        </a>
        <div className="flex items-center justify-end w-full">
          <div className="flex items-center space-x-4 md:space-x-8 hidden md:inline-block">
            <a href="/#about-me">About me</a>
            <a href="/#skills">Skills</a>
            <a href="/#projects">Projects</a>
          </div>
          <div className="flex items-center pr-8 gap-4 md:gap-2 md:space-x-5 md:ml-8">
            {Socials.map((social) => (
              <a href={social.link} key={social.name}>
                <img
                  src={social.src}
                  alt={social.name}
                  width={24}
                  height={24}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
