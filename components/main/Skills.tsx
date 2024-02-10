"use client";

import { skillsCategories } from "@/constants";
import React, { useState, useEffect } from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
// import SkillsText from "../sub/SkillsText";
import HeaderText from "../sub/HeaderText";

const Skills = () => {
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section
      className="flex flex-col items-center justify-center gap-5 h-fit md:h-screen overflow-hidden z-[25]"
      id="skills"
      style={{ transform: "scale(0.9)" }}
    >
      {isClient && (
        <>
          <HeaderText text={"Skills"} />
          {skillsCategories.map((skills, categoryIndex) => (
            <div
              key={categoryIndex}
              className="flex flex-row justify-around flex-wrap gap-5 items-center"
            >
              {skills.map((skill, index) => (
                <SkillDataProvider
                  key={`${categoryIndex}-${index}`}
                  src={skill.Image}
                  width={skill.width}
                  height={skill.height}
                  skill_name={skill.skill_name}
                  index={index}
                />
              ))}
            </div>
          ))}
        </>
      )}
    </section>
  );
};

export default Skills;
