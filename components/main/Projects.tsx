import React from "react";
import ProjectCard from "../sub/ProjectCard";
import HeaderText from "../sub/HeaderText";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center h-fit md:h-[90vh] w-screen">
      <HeaderText text={"Projects"} />
      <div className="h-full w-full flex flex-col md:flex-row gap-10 z-[50] pl-10 pr-10 pt-[30px]">
        <ProjectCard
          src="/galaxy-resized.png"
          title="Observatory Photography App"
          link="/observatory"
          description="Desktop application to process images taken at the SFU Trottier Observatory, with focus on writing a GUI for the non-technical staff."
        />
        <ProjectCard
          src="/rag-app-resized.png"
          link="https://rag-app-eight.vercel.app/"
          title="WebGPT"
          description="RAG application based on web search results, using OpenAI's API, langchain and Socket.io for up-to-date responses from ChatGPT."
        />
        <ProjectCard
          src="/drawing-resized.png"
          title="Online Drawing App"
          link="https://drawing-app-client-pink.vercel.app/"
          description="A react website where users in the same room could simultaneously draw on the same canvas, and send messages on the room chat."
        />
        {/* <ProjectCard
          src="/cryptobook-resized.png"
          link="https://github.com/samuel-antunes/Cryptobook"
          title="Cryptobook"
          description="Social Media clone with focus on crypto, where users could register or login to make posts, as well as like and comment on them."
        /> */}
      </div>
    </div>
  );
};

export default Projects;
