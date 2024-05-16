"use client";

import React from "react";

function page() {
  return (
    <div className="h-full w-full scroll-smooth">
      <div className="font-bold text-white flex flex-col items-center justify-center gap-10 pt-24 h-full w-screen z-[100] px-5 md:px-20">
        {/* Header Section */}
        <div className="flex flex-col w-full z-[100] mt-[2%]">
          <h2 className="text-3xl mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
            Anxiety Behavior Detection with Pepper Robot
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
            <span className="text-sm ml-2">SFU - Rosie Lab</span>
          </div>
        </div>

        {/* Introduction Section */}
        <div className="flex flex-col md:flex-row gap-10 w-full z-[100] mt-[2%]">
          <div className="md:w-2/3 flex flex-col gap-6">
            <p className="text-lg mt-5">
              My recent project involved fine-tuning a Convolutional Neural
              Network using Keras and TensorFlow to detect anxiety behaviors in
              real-time with Softbank’s Pepper Robot. This work achieved 87%
              accuracy on the test dataset and 85% average precision during
              real-time detection.
            </p>
            <p className="text-lg mt-5">
              The goal of this project was to develop a Pepper robot-based
              system for detecting targeted Body-Focused Repetitive Behaviors
              (BFRBs), such as hair pulling and nail biting. We aimed to achieve
              good precision and recall rates and implemented interruption
              mechanisms to prompt user awareness and discourage engagement in
              these behaviors.
            </p>
          </div>
          <div className="md:w-auto flex justify-end items-center">
            <img
              src="samuel_with_pepper.jpg"
              alt="Samuel with Pepper Robot"
              className="w-80 h-80 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Project Details Section */}
        <div className="flex flex-col md:flex-row gap-8 w-full z-[100] mt-[2%]">
          <div className="md:w-auto flex justify-start">
            <img
              src="demo_photo.jpg"
              alt="Pepper Robot Demo"
              className="w-auto h-[24rem] object-cover rounded-lg"
            />
          </div>
          <div className="md:w-2/3 flex flex-col gap-6 md:pt-[150px]">
            <p className="text-lg">
              Our project, titled &quot;Robot Eye on Your Body Habits:
              AI-powered BFRB detection on Pepper&quot;, was a CMPT 419 Final
              Project for Spring 2024. The team included Samir Arora, Salah
              Eddine Chahma, Samuel Antunes Miranda, and Zachary Syvenky.
            </p>
            <p className="text-lg mt-5">
              BFRBs include repetitive behaviors like hair pulling
              (Trichotillomania), nail biting (Onychophagia), and other similar
              actions that often happen subconsciously, especially under stress.
              Studies found that 59.55% of the sample reported occasionally
              engaging in subclinical BFRBs, and 12.27% met the criteria of
              pathological BFRB.
            </p>
            <p className="text-lg mt-5">
              We collected data for four categories – beard pulling, hair
              pulling, nail biting, and non-BFRB. We experimented with different
              pre-trained CNNs, such as Xception, VGG16, VGG19, ResNet50,
              InceptionResNetV2, EfficientNetV2S, and NasNetLarge. The final
              model, Xception, was selected for its high accuracy, low memory
              footprint, and reasonably fast inference speed.
            </p>
          </div>
        </div>

        {/* Results Section */}
        <div className="flex flex-col md:flex-row gap-10 w-full z-[100] mt-[2%]">
          <div className="md:w-2/3 flex flex-col gap-6">
            <p className="text-lg mt-5">
              We used a 60:20:20 split for training, test, and validation sets.
              The training process included normalization on pixel values, data
              augmentation, and fine-tuning pre-trained weights from the
              ImageNet dataset. Our final model showed promising results, with
              high precision and recall rates across different BFRB categories.
            </p>
            <p className="text-lg mt-5">
              The project was showcased during the CS Industry Day at SFU, where
              we received Honorable Mention (2nd place) for Best Undergraduate
              Poster Presentation. The interactive demonstration with the Pepper
              Robot highlighted the practical applications of AI in behavioral
              health.
            </p>
          </div>
          <div className="md:w-auto flex justify-end items-center">
            <img
              src="team_photo.jpg"
              alt="Team Presentation"
              className="w-80 h-80 object-cover rounded-lg mb-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
