import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-10"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-10">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/Sumz.png"
          title="Summarize articles with Sumz"
          description="Open-source article summarizer that transforms lengthy articles into clear and concise summaries"
          link="https://tubular-twilight-eafd3c.netlify.app/" // Add your deployed link here
        />
        <ProjectCard
          src="/Evently.png"
          title="Host, Connect, Celebrate: Your Events, Our Platform!"
          description="A comprehensive web application for event organization, akin to platforms like Eventbrite and Meetup, featuring robust user authentication, sophisticated event management capabilities, advanced search and filtering options, categorized event listings, seamless checkout, and secure payment processing."
          link="https://evently-nqke64v6t-pascalschaers-projects.vercel.app/#events" // Add your deployed link here
        />
        <ProjectCard
          src="/saturday.png"
          title="Saturday Neon"
          description="At Saturday Neon, we're passionate about illuminating your gameday experience. We create one-of-a-kind LED neon signs of your university's most famous athletic logos and designs."
          link="https://saturdayneon.com/" // Add your deployed link here
        />

      </div>
    </div>
  );
};

export default Projects;
