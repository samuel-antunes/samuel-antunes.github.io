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
      className="flex flex-col md:flex-row items-center justify-center md:mt-[10%] w-full z-[20] md:px-[15%]"
    >
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-white text-6x1 font-bold gap-6 flex flex-col max-w-[600px]  px-[7%]"
      >
        <span className="text-3xl">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-yellow-300">
            Software{" "}
          </span>
          Engineer
        </span>
        <motion.div
          variants={slideInFromRight(0.5)}
          className="Welcome-box py-[8px] px-[10px] border border-[$7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#d97706] mr-2 h-5 w-5" />
          <h1 className="text-sm text-[#d97706]">
            CS Student @ Simon Fraser University
          </h1>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg max-w-[600px]"
        >
          I&apos;m a Software Engineer with experience in Computer Vision,
          Machine Learning and Full Stack Software Development. Check out my
          projects and skills.
        </motion.p>
        <motion.a
          href="#skills"
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg w-[200px]"
        >
          Learn More!
        </motion.a>
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="flex justify-start md:justify-end items-center w-full mt-[-5%] md:mt-0 order-first md:order-none"
      >
        <Image
          src="/portrait-nobg.png"
          alt="Portrait"
          height={400}
          width={400}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
