// import React from "react";

// const Parallax = () => {
//   return (
//     <div className="parallax-outter">
//       <div className="parallax-layer starless-layer">starless</div>
//       <div className="parallax-layer starmask-layer">starmask</div>
//     </div>
//   );
// };

// export default Parallax;
// "use client";

// import { useEffect, useState } from "react";

// const Parallax = () => {
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className="relative h-screen">
//       <div
//         className="absolute inset-0 bg-fixed bg-cover"
//         style={{
//           backgroundImage: `url('starless_90.png')`,
//           transform: `translateY(${scrollY * 0.5}px)`,
//           height: "400vh",
//         }}
//       />
//       <div
//         className="absolute inset-0 bg-fixed bg-cover"
//         style={{
//           backgroundImage: `url('/mask.png')`,
//           transform: `translateY(${scrollY * 0.3}px)`,
//           height: "400vh",
//         }}
//       />
//     </div>
//   );
// };

// export default Parallax;

// components/Parallax.js
// import { useRef, useEffect } from "react";

// const Parallax = () => {
//   const starlessRef = useRef<HTMLDivElement>(null);
//   const starmaskRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (starlessRef.current && starmaskRef.current) {
//         const scrollY = window.scrollY || window.pageYOffset;

//         // Adjust the speed by multiplying scrollY with a different factor for each image
//         const translateY1 = scrollY * 0.5; // Adjust the speed as needed
//         const translateY2 = scrollY * 0.3; // Adjust the speed as needed

//         starlessRef.current.style.transform = `translateY(${translateY1}px)`;
//         starmaskRef.current.style.transform = `translateY(${translateY2}px)`;
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className="relative overflow-hidden h-[400vh]">
//       <div
//         ref={starlessRef}
//         className="absolute inset-0 bg-fixed bg-cover"
//         style={{ backgroundImage: `url('/starless_90.png')` }}
//       />
//       <div
//         ref={starmaskRef}
//         className="absolute inset-0 bg-fixed bg-cover"
//         style={{ backgroundImage: `url('/mask.png')` }}
//       />
//     </div>
//   );
// };

// export default Parallax;
// components/Parallax.tsx
// components/Parallax.tsx
// components/Parallax.tsx
// components/Parallax.css
// components/Parallax.tsx
// components/Parallax.tsx
"use client";

import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import Image from "next/image";

interface ParallaxProps {
  img1: string;
  img2: string;
}

const ParallaxComponent = ({ img1, img2 }: ParallaxProps) => {
  return (
    <ParallaxProvider>
      <div className="relative h-[400vh]">
        {/* First Image with Parallax Effect */}
        <Parallax speed={-20}>
          <Image src={img1} alt="First Image" fill />
        </Parallax>

        {/* Second Image with Different Parallax Effect */}
        <Parallax speed={-10}>
          <Image src={img2} alt="First Image" fill />
        </Parallax>
      </div>
    </ParallaxProvider>
  );
};

export default ParallaxComponent;
