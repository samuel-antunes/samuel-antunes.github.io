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
import ParallaxBackground from "@/components/main/BackgroundParallax";

function page() {
  return (
    <div className="h-full w-full scroll-smooth">
      <ParallaxBackground
        starlessImg="/starless_orion_small.jpg"
        starmaskImg="/starmask_orion_small.png"
        speedFactor={0.15}
      >
        <div className="font-bold text-white flex flex-col items-center justify-center gap-10 pt-24 h-full w-screen z-[100] px-5 md:px-20">
          {/* Section 1 */}
          <div className="flex flex-col md:flex-row gap-10 w-full z-[100] mt-[2%]">
            <div className="md:w-2/3 flex flex-col gap-6">
              <h2 className="text-3xl mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
                Astrophotography Application
              </h2>
              <div className="Title-box py-[8px] px-[10px] border border-[$7042f88b] opacity-[0.9]">
                {/* SVG placeholder */}
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
                <span className="text-sm">SFU Trottier Observatory</span>
              </div>
              <p className="text-lg mt-5">
                My most recent work was providing software for an observatory!
                The image on the right provides a comparison to what a
                &quot;raw&quot; image looked like, and what the final image
                looked like after being processed by the software I created.
                (BTW, this is the Swan Nebula, can you see it?)
              </p>
              <p className="text-lg mt-5">
                I received this opportunity by achieving the highest grade in a
                physics course, with the topic &quot;Introduction to
                Observational Astrophysics&quot;, and for being a hobbist
                astrophotographer (The background images of this website were
                taken by me). The goal of the project was to design a desktop
                application, that would be used by the non-technical staff of
                the SFU Trottier Observatory, to process astronomical images
                taken with the equipment there.
              </p>
            </div>
            <div className="md:w-auto flex justify-end">
              <Observatory
                urlBefore="swan_nebula_before.jpg"
                urlAfter="swan_nebula_after.jpg"
              />
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col md:flex-row gap-8 w-full z-[100] md:pt-[50px] h-screen">
            <div className="md:w-auto flex justify-start">
              <Observatory
                urlBefore="m33_before.jpg"
                urlAfter="m33_after_2.jpg"
              />
            </div>
            <div className="md:w-2/3 flex flex-col gap-6 md:pt-[150px] ">
              <p className="text-lg">
                As it possible to see the final image is colored, and a
                &quot;raw&quot; image is black and white, due to the fact that
                the camera at the observatory is monochrome. To build the final
                image I had to perform a composition of many images, for each of
                the colors R, G, and B, that were taken with the physical
                placement of those filters in front of the camera. The number of
                images per color varied depending on the available data, but it
                could be between 10 to 100&apos;s of images, leading to the
                necessity of processing several GBs of data.
              </p>
              {/* <p className="text-lg hidden md:flex">
                Due to the memory constraints, I had to optimize the
                computational time and memory utilization when automating the
                calibration process. To achieve so I used a subprocess to run a
                script that would perform the automated actions, and in the
                subprocess I performed parallel programming in certain steps of
                the process to achieve better performance. The results were more
                than 5x faster than before optimizations, which lead to a better
                user experience.
              </p> */}
            </div>
          </div>
        </div>
      </ParallaxBackground>
    </div>
  );
}

export default page;
// {/* <div className="flex flex-col w-[80%] justify-center items-center z-[25] gap-[30px] p-auto">
//           <div className="flex text-lg  h-full items-center font-sans mt-[5%]">
//             My most recent work was providing software for an observatory! The
//             image below provides a comparison to what a "raw" image looked like,
//             and what the final image looked like after being processed by the
//             software I created. (BTW, this is the Swan Nebula, can you see it?)
//           </div> */}
//               {/* <div className="flex justify-center items-center ">
//           <Projects />
//         </div> */}
//               {/* <div className="flex font-sans text-lg items-center m-auto">
//             I received this opportunity by achieving the highest grade in a
//             physics course, with the topic "Introduction to Observational
//             Astrophysics", and the instructor offered me this position. The goal
//             of the project was to design a desktop application, that would be
//             used by the non-technical staff of the SFU Trottier Observatory, to
//             process astronomical images taken with the equipment there.
//           </div>
//           <div className="flex font-sans text-lg items-center m-auto">
//             As it possible to see the final image is colored, and a "raw" image
//             is black and white, due to the fact that the camera at the
//             observatory is monochrome. The final image is actually a composition
//             of many images, in each color band R, G and B, done by the physical
//             placement of those filters in front of the camera. The number of
//             images per color varied depending on the available data. But, before
//             combining them, it is necessary to perform standard calibration
//             operations, to reduce both systemic and random noise.
//           </div>
//           <div className="flex font-sans text-lg items-center m-auto">
//             The images were large in memory, therefore I had to optimize the
//             computational time and memory utilization when automating the
//             calibration process. To achieve so I used a subprocess to run a
//             script that would perform the automated actions, and in the
//             subprocess I performed parallel programming in certain steps of the
//             process to achieve better peformance. The results were more than
//             100% faster than before optimizations, which lead to a better user
//             experience. Here is another image:
//             <br />
//           </div>
//           <div className="flex font-sans text-lg items-center m-auto">
//             IMAGE
//           </div>
//         </div> */}
