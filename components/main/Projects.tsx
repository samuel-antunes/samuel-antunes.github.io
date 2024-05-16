import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProjectCard from "../sub/ProjectCard";
import HeaderText from "../sub/HeaderText";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center h-fit md:h-[90vh] w-screen">
      <HeaderText text={"Projects"} />
      <div className="h-full w-full flex flex-col gap-10 z-[50] pl-10 pr-10 pt-[30px]">
        <Carousel
          showThumbs={false}
          infiniteLoop={false} // Disable cycling
          useKeyboardArrows
          autoPlay
          interval={5000}
          showStatus={false}
          centerMode
          centerSlidePercentage={33.33} // Show 3 cards at a time
        >
          <div>
            <ProjectCard
              src="/samuel_with_pepper.jpg"
              title="Pepper Robot Project"
              link="/pepper"
              description="Real-time anxiety behavior detection using Pepper robot and CNN. An AI system to analyze human behavior patterns."
              imgStyle={{ backgroundPosition: "center top" }} // Shift image down
            />
          </div>
          <div>
            <ProjectCard
              src="/galaxy-resized.png"
              title="Observatory Photography App"
              link="/observatory"
              description="Desktop application to process images taken at the SFU Trottier Observatory, with focus on writing a GUI for the non-technical staff."
            />
          </div>
          <div>
            <ProjectCard
              src="/rag-app-resized.png"
              link="https://rag-app-eight.vercel.app/"
              title="WebGPT"
              description="RAG application based on web search results, using OpenAI's API, langchain and Socket.io for up-to-date responses from ChatGPT."
            />
          </div>
          <div>
            <ProjectCard
              src="/drawing-resized.png"
              title="Online Drawing App"
              link="https://drawing-app-client-pink.vercel.app/"
              description="A react website where users in the same room could simultaneously draw on the same canvas, and send messages on the room chat."
            />
          </div>
          <div>
            <ProjectCard
              src="/matrix.jpg"
              title="Complex Network Paper"
              link="/complex-network-paper"
              description="Study and implementation of detection and classification algorithms in complex networks using graph theory."
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
