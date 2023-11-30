"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Socials } from "@/constants";

const Navbar = () => {
  const [isClient, setIsClient] = useState<boolean>(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#000000]/50 bg-[#03001417] backdrop-blur-md z-50 px-10 font-bold font-sans">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="/#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          {/* <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursos-pointer hover:animate-slowspin"
          /> */}
          {isClient && (
            <div className="w-[80px] flex items-start justify-center absolute">
              <video
                loop
                autoPlay
                muted
                playsInline
                preload="false"
                className="w-full h-auto"
                src="/blackhole.webm"
              />
            </div>
          )}

          <span className="pl-[100px] text-white">Samuel Antunes Miranda</span>
        </a>
        <div className="w-[500px] h-full absolute ml-[30%] flex flex-row items-center justify-center md:mr-20">
          <div className="flex items-center justify-between w-full h-full border border-[#000000] bg-[#030014re] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="/#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="/#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="/#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>
        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <a href={social.link} key={social.name}>
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={24}
                height={24}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
