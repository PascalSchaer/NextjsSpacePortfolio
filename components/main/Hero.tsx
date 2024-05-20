import React from 'react'
import HeroContent from '../sub/HeroContent'
import Image from "next/image";

const Hero = () => {
  return (
    <div className='relative flex flex-col h-full w-full'>
        <video
        autoPlay
        muted
        loop
        className='rotate-180 absolute top-[-140px] left-0 z-[1] w-full h-full object-cover'
        >
            <source src='/blackhole.webm' type='video/webm'/>
        </video>
    <HeroContent />
    </div>
  )
}

export default Hero