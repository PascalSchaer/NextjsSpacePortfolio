import React from "react";
import ProjectCard from "../sub/ProjectCard";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-5">
        My Projects
      </h1>
      <p className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'>Take a look!</p>
      <p className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'>With repositories and deployed site</p>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <div className="flex flex-col items-center">
          <ProjectCard
            src="/Sumz.png"
            title="Summarize articles with Sumz"
            description="Open-source article summarizer that transforms lengthy articles into clear and concise summaries" liveLink={""} repoLink={""}          />
          <div className="flex justify-center items-center space-x-10 mt-4 z-50">
            <a
              href="https://github.com/PascalSchaer/Sumz"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-2 mt-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] font-semibold hover:opacity-90 self-center"
              style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
            >
              <Image
                src="/gitwhite.png"
                alt="github"
                width={24}
                height={24}
              />

            </a>
            <a
              href="https://tubular-twilight-eafd3c.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-2 mt-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] font-semibold hover:opacity-90 self-center"
              style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
            >
              <Image
                src="/globeIcon.png"
                alt="website"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <ProjectCard
            src="/Evently.png"
            title="Host, Connect, Celebrate: Your Events, Our Platform!"
            description="A comprehensive web application for event organization, akin to platforms like Eventbrite and Meetup, featuring robust user authentication, sophisticated event management capabilities, advanced search and filtering options, categorized event listings, seamless checkout, and secure payment processing." liveLink={""} repoLink={""}          />
          <div className="flex justify-center items-center space-x-10 mt-4 z-50">
            <a
              href="https://github.com/PascalSchaer/Evently"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-2 mt-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] font-semibold hover:opacity-90 self-center"
              style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
            >
              <Image
                src="/gitwhite.png"
                alt="github"
                width={24}
                height={24}
              />

            </a>
            <a
              href="https://evently-nqke64v6t-pascalschaers-projects.vercel.app/#events"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-2 mt-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] font-semibold hover:opacity-90 self-center"
              style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
            >
              <Image
                src="/globeIcon.png"
                alt="website"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <ProjectCard
            src="/saturday.png"
            title="Saturday Neon"
            description="At Saturday Neon, we're passionate about illuminating your gameday experience. We create one-of-a-kind LED neon signs of your university's most famous athletic logos and designs." liveLink={""} repoLink={""}          />
          <div className="flex justify-center items-center space-x-10 mt-4 z-50">
            <a
              href="https://github.com/PascalSchaer/SaturdayNeon"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-2 mt-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] font-semibold hover:opacity-90 self-center"
              style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
            >
              <Image
                src="/gitwhite.png"
                alt="github"
                width={24}
                height={24}
              />

            </a>
            <a
              href="https://saturdayneon.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-2 mt-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] font-semibold hover:opacity-90 self-center"
              style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
            >
              <Image
                src="/globeIcon.png"
                alt="website"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
