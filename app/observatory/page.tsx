"use client";

import Observatory from "@/components/main/Observatory";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromTop,
  slideInFromRight,
} from "@/utils/motion";

import AdvancedBannerTop from "@/components/main/AdvancedBanner";

function page() {
  return (
    <div>
      <AdvancedBannerTop
        img1="/starless_wide.jpg"
        img2="/starmask_wide.png"
        page="observatory"
      />

      <div className="inset font-bold flex flex-col ">
        <motion.div
          initial="hidden"
          animate="visible"
          className="items-center justify-center pl-[10%] md:px-20 mt-24 w-full z-[25]"
        >
          <div className="h-full w-auto flex flex-col md:flex-row gap-5 justify-center">
            <motion.div
              variants={slideInFromTop}
              className="flex flex-col md:flex-row gap-6 mt-6 text-6x1 font-bold text-white w-auto h-auto"
            >
              <div className="flex flex-col w-[90%] md:w-[70%]">
                <span className="text-3xl mb-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                    Astrophotography{" "}
                  </span>
                  Application
                </span>
                <motion.div
                  variants={slideInFromLeft(0.5)}
                  className="Title-box py-[8px] px-[7px] border border-[$7042f88b] opacity-[0.9]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <h1 className="Title-text text-[13px]">
                    SFU Trottier Observatory
                  </h1>
                </motion.div>
                <motion.p
                  variants={slideInFromLeft(0.8)}
                  className="text-lg text-gray-200 mt-5 text-justify"
                >
                  {`My most recent work was providing software for an observatory!
                  The image on the right provides a comparison to what a "raw"
                  image looked like, and what the final image looked like after
                  being processed by the software I created. (BTW, this is the
                  Swan Nebula, can you see it?)`}
                </motion.p>
                <motion.p
                  variants={slideInFromLeft(0.8)}
                  className="text-lg text-gray-200 mt-5 text-6x1 text-justify"
                >
                  {`I received this opportunity by achieving the highest grade in
                  a physics course, with the topic "Introduction to
                  Observational Astrophysics", and for being a hobbist
                  astrophotographer (The background images of this website were
                  taken by me). The goal of the project was to design a desktop
                  application, that would be used by the non-technical staff of
                  the SFU Trottier Observatory, to process astronomical images
                  taken with the equipment there.`}
                </motion.p>
              </div>
              <motion.div
                variants={slideInFromRight(0.8)}
                className="w-[90%] md:w-full h-full flex justify-end"
              >
                <Observatory
                  urlBefore="swan_nebula_before.png"
                  urlAfter="swan_nebula_after.jpg"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* <div className="flex flex-col w-[80%] justify-center items-center z-[25] gap-[30px] p-auto">
          <div className="flex text-lg  h-full items-center font-sans mt-[5%]">
            My most recent work was providing software for an observatory! The
            image below provides a comparison to what a "raw" image looked like,
            and what the final image looked like after being processed by the
            software I created. (BTW, this is the Swan Nebula, can you see it?)
          </div> */}
          {/* <div className="flex justify-center items-center ">
          <Projects />
        </div> */}
          {/* <div className="flex font-sans text-lg items-center m-auto">
            I received this opportunity by achieving the highest grade in a
            physics course, with the topic "Introduction to Observational
            Astrophysics", and the instructor offered me this position. The goal
            of the project was to design a desktop application, that would be
            used by the non-technical staff of the SFU Trottier Observatory, to
            process astronomical images taken with the equipment there.
          </div>
          <div className="flex font-sans text-lg items-center m-auto">
            As it possible to see the final image is colored, and a "raw" image
            is black and white, due to the fact that the camera at the
            observatory is monochrome. The final image is actually a composition
            of many images, in each color band R, G and B, done by the physical
            placement of those filters in front of the camera. The number of
            images per color varied depending on the available data. But, before
            combining them, it is necessary to perform standard calibration
            operations, to reduce both systemic and random noise.
          </div>
          <div className="flex font-sans text-lg items-center m-auto">
            The images were large in memory, therefore I had to optimize the
            computational time and memory utilization when automating the
            calibration process. To achieve so I used a subprocess to run a
            script that would perform the automated actions, and in the
            subprocess I performed parallel programming in certain steps of the
            process to achieve better peformance. The results were more than
            100% faster than before optimizations, which lead to a better user
            experience. Here is another image:
            <br />
          </div>
          <div className="flex font-sans text-lg items-center m-auto">
            IMAGE
          </div>
        </div> */}
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center pl-[10%] pr-[10%] mt-20 h-screen w-screen z-[25]"
        >
          <div className="h-full w-full flex flex-col md:flex-row gap-5 justify-evenly">
            <motion.div
              variants={slideInFromTop}
              className="flex flex-col md:flex-row gap-6 mt-[30vh] md:mt-6 text-6x1 font-bold text-white w-auto h-auto"
            >
              <motion.div
                variants={slideInFromRight(0.8)}
                className="w-auto h-full flex justify-start"
              >
                <Observatory
                  urlBefore="m33_before.png"
                  urlAfter="m33_after_2.jpg"
                />
              </motion.div>
              <div className="flex flex-col w-[100%] justify-end">
                <motion.p
                  variants={slideInFromLeft(0.8)}
                  className="text-lg text-gray-200 mt-5 text-justify"
                >
                  {`As it possible to see the final image is colored, and a "raw"
                  image is black and white, due to the fact that the camera at
                  the observatory is monochrome. To build the final image I had
                  to perform a composition of many images, for each of the
                  colors R, G and B, that were taken with the physical placement
                  of those filters in front of the camera. The number of images
                  per color varied depending on the available data, but it could
                  be between 10 to 100's of images, leading to the necessity of
                  processing several GBs of data.`}
                </motion.p>
                <motion.p
                  variants={slideInFromLeft(0.8)}
                  className="text-lg text-gray-200 mt-5 text-6x1 text-justify"
                >
                  {`Due to the memory constraints, I had to optimize the
                  computational time and memory utilization when automating the
                  calibration process. To achieve so I used a subprocess to run
                  a script that would perform the automated actions, and in the
                  subprocess I performed parallel programming in certain steps
                  of the process to achieve better peformance. The results were
                  more than 5x faster than before optimizations, which lead to a
                  better user experience.`}
                </motion.p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default page;
