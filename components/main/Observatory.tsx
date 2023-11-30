"use client";

import React, { useState, useEffect } from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

interface ObservatoryPageProps {
  urlBefore: string;
  urlAfter: string;
}

const Observatory = ({ urlBefore, urlAfter }: ObservatoryPageProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="w-[600px] flex justify-center items-center">
      {isClient && (
        <ReactCompareSlider
          className="z-[20] flex justify-center items-center transform"
          itemOne={<ReactCompareSliderImage src={urlBefore} alt="Image one" />}
          itemTwo={<ReactCompareSliderImage src={urlAfter} alt="Image two" />}
        />
      )}
    </div>
  );
};

export default Observatory;
