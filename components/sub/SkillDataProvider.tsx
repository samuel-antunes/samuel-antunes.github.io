"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
  skill_name: string;
}

const SkillDataProvider = ({
  src,
  width,
  height,
  index,
  skill_name,
}: Props) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [isHovered, setIsHovered] = useState<Boolean>(false);
  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const animationDelay = 0.3;
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex flex-col items-center justify-center hover:scale-[1.20] transition ease-in-out duration-200"
    >
      <Image src={src} width={width} height={height} alt="skill-image" />
      {isHovered && (
        <div
          className={`absolute bottom-0 translate-y-full bg-black text-white px-2 py-1 z-10 transition-all duration-1000 ease-out ${
            isHovered
              ? "opacity-100 translate-y-[0px]"
              : "opacity-0 -translate-y-[10px]"
          }`}
        >
          {skill_name}
        </div>
      )}
    </motion.div>
  );
};

export default SkillDataProvider;
