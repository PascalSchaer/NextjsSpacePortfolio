"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        {/* <motion.div
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
          variants={slideInFromTop}
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Fullstack Developer Portfolio
          </h1>
        </motion.div> */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
           <div className="w-[175px] h-[175px] mt-4">
        <Image
          src='/portrait3.png'
          alt='portrait'
          width={200}
          height={200}
          className="w-full h-full object-cover rounded-full border-4 border-gradient-to-r from-purple-500 to-cyan-500"
        />
      </div>
            <span>
          Providing
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> the best </span>
          project experience
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a fullstack developer with a passion for creating dynamic and responsive web applications. With expertise in both front-end and back-end technologies, I excel at building seamless and user-friendly digital experiences. I&apos;m always eager to learn new technologies and take on new challenges. Let&apos;s work together to bring your ideas to life!
        </motion.p>
        {/* <motion.a
        variants={slideInFromLeft(1)}
        className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
            Learn More!
        </motion.a> */}
      </div>

      <motion.div
      variants={slideInFromRight(0.8)}
      className="w-full h-full flex justify-center items-center"
      >
        <Image
        src="/mainIconsdark.svg"
        alt="work icons"
        height={650}
        width={650}
        />

      </motion.div>
    </motion.div>
  );
};

export default HeroContent;

{/* <Image
src="/portrait.png"
alt="portrait"
height={650}
width={650}
/> */}