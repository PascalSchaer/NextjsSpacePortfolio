"use client";

import React from "react";

const TestLink = () => {
  return (
    <div className="p-4">
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 mt-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:opacity-90"
      >
        Visit Example Site
      </a>
    </div>
  );
};

export default TestLink;
