import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-10 mb-20]">
      <a
        href="/observatory"
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-300 pb-10"
      >
        Projects
      </a>
      <div
        className="h-full w-full flex flex-col md:flex-row gap-10 px-10 z-[50]"
        id="projects"
      >
        <ProjectCard
          src="/galaxy-resized.png"
          title="Observatory Photography App"
          link="/observatory"
          description="Desktop application to process images taken at the SFU Trottier Observatory, with focus on writing a GUI for the non-technical staff."
        />
        <ProjectCard
          src="/drawing-resized.png"
          title="Online Drawing App"
          link="https://github.com/samuel-antunes/DrawingApp"
          description="A react website where users in the same room could simultaneously draw on the same canvas, and send messages on a room chat"
        />
        <ProjectCard
          src="/cryptobook-resized.png"
          link="https://github.com/samuel-antunes/Cryptobook"
          title="Cryptobook"
          description="Social Media clone with focus on crypto, where users could register or login to make posts, as well as like and comment on them."
        />
      </div>
    </div>
  );
};

export default Projects;
