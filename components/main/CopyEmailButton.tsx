"use client";

import React, { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import MagicButton from "../sub/MagicButton";
import Lottie from "react-lottie";
import animationData from "@/data/confetti.json";

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const email = "pascalschaer8@gmail.com"; // Replace with your email address
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
  };

  return (
    <div className="flex flex-col items-center justify-center mb-10">
      <MagicButton
        title={copied ? "Email is Copied!" : "Copy my email address"}
        icon={<IoCopyOutline />}
        position="left"
        handleClick={handleCopy}
        otherClasses="!bg-[#161A31]"
      />
      {copied && (
        <div className="mt-5">
          <Lottie
            options={defaultOptions}
            height={100}
            width={200}
          />
        </div>
      )}
    </div>
  );
};

export default CopyEmailButton;
