import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  liveLink: string;
  repoLink: string;
}

const ProjectCard = ({ src, title, description, liveLink, repoLink }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] w-[350px] flex flex-col items-center mb-10 bg-[#1E1E1E]">
      <div className="w-full h-64 bg-cover bg-center">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative p-4 flex-grow">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
