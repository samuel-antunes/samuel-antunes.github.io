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
import ParallaxBackground from "@/components/main/BackgroundParallax";
import Head from "next/head";

export default function Home() {
  return (
    <main className="h-full w-full scroll-smooth">
      <Head>
        <title>My portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col">
        {/* <AdvancedBannerTop
          img1="/starless_small.jpg"
          img2="/mask.png"
          page="home"
        /> */}

        {/* <Hero />
        <Skills />
        <Projects /> */}
        <ParallaxBackground
          starlessImg={"/starless_sadr.jpg"}
          starmaskImg={"/starmask_sadr.png"}
          speedFactor={0.12}
        >
          <div className="">
            <div className="flex flex-col justify-center">
              <Hero />
              <Skills />
              <Projects />
            </div>
          </div>
        </ParallaxBackground>
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
