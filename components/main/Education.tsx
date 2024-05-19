import React from 'react';

const Education = () => {
  const educationData = [
    {
      institution: 'Western Governors University',
      degree: 'Bachelor of Science in Computer Science',
      year: '2023 - Present',
      description: 'Focused on software engineering, algorithms, and artificial intelligence.',
    },
    {
      institution: 'The Coding Dojo',
      degree: 'Certificate in Web Development',
      year: 'Graduated 2022',
      description: 'Immersive 1000+ hours of coding across full-stack development, algorithms, testing in Python, C#, and MERN (MongoDB, Express, React, Node.js).',
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center py-20 relative overflow-hidden" id="education">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        Education
      </h1>
      <div className="flex flex-wrap justify-center gap-10 px-6">
        {educationData.map((edu, index) => (
          <div key={index} className="bg-[#0300145e] p-6 rounded-lg text-gray-200 max-w-xs w-full">
            <h2 className="text-[24px] font-semibold">{edu.institution}</h2>
            <h4 className="text-[20px] font-medium mt-2">{edu.degree}</h4>
            <p className="text-purple-500 text-sm mt-2">{edu.year}</p>
            <p className="text-gray-400 text-sm mt-4">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
