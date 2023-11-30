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
    <a href={link}>
      <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#0c011b] hover:scale-[1.05] transition ease-in-out duration-500">
        <Image
          src={src}
          alt={title}
          width={500}
          height={500}
          className="w-full"
          // objectFit="cover"
        />
        <div className="relative p-4 font-bold bg-black bg-opacity-40">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <p className="mt-2 text-gray-300">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
