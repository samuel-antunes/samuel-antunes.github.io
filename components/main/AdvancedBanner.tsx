import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";
import Skills from "../main/Skills";
import Hero from "../main/Hero";
import Projects from "../main/Projects";

interface ParallaxProps {
  img1: string;
  img2: string;
  page: string;
}

export const AdvancedBannerTop = ({ img1, img2, page }: ParallaxProps) => {
  const size = page === "home" ? 200 : 100;
  const background: BannerLayer = {
    image: img1,
    translateY: [0, 25],
    // opacity: [1, 0.3],
    // scale: [1.05, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline: BannerLayer = {
    // translateY: [0, 30],
    // scale: [1, 1.05, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <div></div>,
  };

  const foreground: BannerLayer = {
    image: img2,
    translateY: [0, 15],
    // scale: [1, 1.1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  return (
    <ParallaxProvider>
      <ParallaxBanner
        layers={[background, headline, foreground]}
        className={`h-[510vh] md:h-[330vh]`}
      />
    </ParallaxProvider>
  );
};

export default AdvancedBannerTop;
