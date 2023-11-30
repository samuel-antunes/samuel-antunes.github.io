"use client";
import Skills from "@/components/main/Skills";
import Hero from "../components/main/Hero";
import Encryption from "@/components/main/Encryption";
import Projects from "@/components/main/Projects";
import { ParallaxBanner } from "react-scroll-parallax";
import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";
import { ParallaxProvider } from "react-scroll-parallax";
import Image from "next/image";
// import ParallaxComponent from "@/components/main/ParallaxComponent";
import AdvancedBannerTop from "@/components/main/AdvancedBanner";

export default function Home() {
  return (
    <main className="h-full w-full scroll-smooth">
      <div className="flex flex-col">
        <AdvancedBannerTop img1="/starless_test.png" img2="/mask.png" />
        {/* <Hero />
        <Skills />
        <Projects /> */}
        <div className="inset">
          <div className="flex flex-col gap-20">
            <Hero />
            <Skills />
            <Projects />
          </div>
        </div>
      </div>

      {/* <Image
          src="/starless_test.png"
          alt="starless"
          fill
          sizes="(max-width: 768px) 200vw, (max-width: 1200px) 100vw, 33vw"
        /> */}
      {/* </div> */}

      {/* </ParallaxBanner> */}
      {/* <div className="height-100vh width-100vw bg-white"></div> */}
      {/* </ParallaxProvider> */}
    </main>
  );
}
