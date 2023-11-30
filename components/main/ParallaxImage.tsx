import React from "react";
import { useParallaxController } from "react-scroll-parallax";

interface ParallaxImageProps {
  src: string;
}

const ParallaxImage = ({ src }: ParallaxImageProps) => {
  const parallaxController = useParallaxController();

  return <img src={src} onLoad={() => parallaxController?.update()} />;
};

export default ParallaxImage;
