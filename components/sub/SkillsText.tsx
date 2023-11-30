"use client";

import React from "react";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const SkillsText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="flex flex-col justify-center gap-6 mt-6 text-6x1 font-bold text-white max-w-[600px] w-auto h-auto"
      >
        <span className="text-transparent text-[40px] bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-300">
          Skills{" "}
        </span>
      </motion.div>
    </div>
  );
};

export default SkillsText;
