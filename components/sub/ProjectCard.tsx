import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ src, title, description, link }: Props) => {
  return (
    <a href={link} className="block">
      <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#0c011b] hover:scale-[1.05] transition ease-in-out duration-300 w-[100%] md:w-[30vw] h-[300px]">
        {" "}
        {/* Set height here */}
        <Image
          src={src}
          alt={title}
          width={500}
          height={300}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full p-4 font-bold bg-black bg-opacity-60">
          <h1 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-300">
            {title}
          </h1>
          <p className="mt-2 text-gray-300">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
