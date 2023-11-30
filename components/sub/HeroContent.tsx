"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-28 w-full z-[20]"
    >
      <motion.div
        variants={slideInFromLeft(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
      <div className="h-full w-full flex flex-col gap-5 mt-64 justify-center m-auto">
        <motion.div
          variants={slideInFromRight(0.5)}
          className="flex flex-col text-end items-end gap-6 mt-6 text-6x1 font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span className="text-3xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-300">
              Fullstack{" "}
            </span>
            Software Engineer
          </span>
          <motion.div
            variants={slideInFromRight(0.5)}
            className="Welcome-box py-[8px] px-[7px] border border-[$7042f88b] opacity-[0.9]"
          >
            <SparklesIcon className="text-[#d97706] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px] mr-[10px] text-[#d97706]">
              CS Student @ Simon Fraser University
            </h1>
          </motion.div>
          <motion.p
            variants={slideInFromRight(0.8)}
            className="text-lg text-gray-100 max-w-[600px] font-bold"
          >
            I&apos;m a Full Stack Software Engineer with experience in Frontend
            and Backend Software Development. Check out my projects and skills.
          </motion.p>
          <motion.a
            href="#skills"
            variants={slideInFromRight(1)}
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg w-[200px]"
          >
            Learn More!
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroContent;
