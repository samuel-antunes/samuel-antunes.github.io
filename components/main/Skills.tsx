"use client";

import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
} from "@/constants";
import React, { useState, useEffect } from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillsText from "../sub/SkillsText";

const Skills = () => {
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pt-40 pb-40"
      id="skills"
      style={{ transform: "scale(0.9)" }}
    >
      {isClient && (
        <>
          <SkillsText />
          {/* //{" "} */}
          {/* <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
      //   {Skill_data.map((image, index) => (
      //     <SkillDataProvider
      //       src={image.Image}
      //       key={index}
      //       width={image.width}
      //       height={image.height}
      //       index={index}
      //     />
      //   ))}
      // </div> */}
          <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
            {Frontend_skill.map((image, index) => (
              <SkillDataProvider
                src={image.Image}
                key={index}
                width={image.width}
                height={image.height}
                index={index}
              />
            ))}
          </div>
          <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
            {Backend_skill.map((image, index) => (
              <SkillDataProvider
                src={image.Image}
                key={index + 10}
                width={image.width}
                height={image.height}
                index={index}
              />
            ))}
          </div>
          <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
            {Full_stack.map((image, index) => (
              <SkillDataProvider
                src={image.Image}
                key={index + 40}
                width={image.width}
                height={image.height}
                index={index}
              />
            ))}
          </div>
          {/* //{" "} */}
          {/* <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
      //   {Other_skill.map((image, index) => (
      //     <SkillDataProvider
      //       src={image.Image}
      //       key={index}
      //       width={image.width}
      //       height={image.height}
      //       index={index}
      //     />
      //   ))}
      // </div> */}
          {/* <div className="w-full h-full absolute">
            <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
              <video
                className="w-full h-auto"
                preload="false"
                playsInline
                loop
                muted
                autoPlay
              >
                <source src="/cards-video.webm" type="video/webm" />
              </video>
            </div>
          </div> */}
        </>
      )}
    </section>
  );
};

export default Skills;
