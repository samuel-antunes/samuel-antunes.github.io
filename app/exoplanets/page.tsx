"use client";

import React from "react";

function page() {
  return (
    <div className="h-full w-full scroll-smooth">
      <div className="font-bold text-white flex flex-col items-center justify-center gap-10 pt-24 h-full w-screen z-[100] px-5 md:px-20">
        {/* Header Section */}
        <div className="flex flex-col w-full z-[100] mt-[2%]">
          <h2 className="text-3xl mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
            Study and Implementation of Detection and Classification Algorithms
            in Complex Networks Using Graph Theory
          </h2>
          <div className="Title-box py-[8px] px-[10px] border border-[$7042f88b] opacity-[0.9] flex items-center">
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
            <span className="text-sm ml-2">Maua Institute of Technology</span>
          </div>
        </div>

        {/* Introduction Section */}
        <div className="flex flex-col md:flex-row gap-10 w-full z-[100] mt-[2%]">
          <div className="md:w-2/3 flex flex-col gap-6">
            <p className="text-lg mt-5">
              This paper describes a system for processing time series data,
              specifically light curves from the CoRoT space telescope, with the
              aim of classifying these series as representative of either
              exoplanet observations or binary star systems. The time series are
              pre-processed to homogenize their length and sampling period and
              then transformed into complex networks (graphs) and further into
              recurrence plots. These plots serve as the input for a
              convolutional neural network that attempts to classify them as
              either exoplanet or binary star observations. The results obtained
              using this approach are promising, achieving accuracy rates above
              84% on the validation data.
            </p>
          </div>
          <div className="md:w-auto flex justify-end items-center">
            <img
              src="graph.jpg"
              alt="Time Series of Star Intensity"
              className="w-80 h-80 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Data Structure Section */}
        <div className="flex flex-col md:flex-row gap-8 w-full z-[100] mt-[2%]">
          <div className="md:w-auto flex justify-start">
            <img
              src="matrix.jpg"
              alt="Adjacency Matrix Data Structure"
              className="w-80 h-80 object-cover rounded-lg"
            />
          </div>
          <div className="md:w-2/3 flex flex-col gap-6">
            <p className="text-lg">
              The light curves used in this study are time series of varying
              lengths, where the observed value is the luminous intensity
              detected by the receiver when pointed at a specific region of the
              universe. Abrupt variations in luminous intensity indicate
              eclipses, which may be caused by exoplanets or binary stars. The
              purpose of this study is to classify available light curves as
              being representative of these two types of celestial bodies.
            </p>
            <p className="text-lg mt-5">
              The first step of analysis is to represent the time series as
              complex networks, which are then used to generate recurrence
              plots. These graphical representations are the input for
              convolutional neural networks (CNNs), which classify them as
              eclipses caused by exoplanets or binary stars.
            </p>
          </div>
        </div>

        {/* Results Section */}
        <div className="flex flex-col gap-10 w-full z-[100] mt-[2%]">
          <div className="md:w-auto flex justify-center">
            <img
              src="graphs.jpg"
              alt="Accuracy and Loss Function Graphs"
              className="w-80 h-auto object-cover rounded-lg mb-10"
            />
          </div>
          <div className="md:w-2/3 flex flex-col gap-6 mx-auto">
            <p className="text-lg">
              The results obtained reveal that this approach is promising, as
              evidenced by validation data accuracy rates above 80%. In the
              three best results among the 100 trainings performed, these rates
              reached 86.6%, 85.3%, and 84.7%. These results demonstrate the
              effectiveness of using CNNs to classify light curves from the
              CoRoT space telescope.
            </p>
            <p className="text-lg mt-5">
              Future steps for this project include testing the system on a
              larger scale, integrating additional anomaly detection algorithms,
              and exploring other neural network architectures to further
              improve classification accuracy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
