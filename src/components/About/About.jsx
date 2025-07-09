import React, { useEffect, useState } from "react";
import profileImage from "../../assets/profile.png";

const rotatingTexts = [
  "Fullstack Developer",
  "Tech Enthusiast",
  "Software Engineer",
];

const About = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen py-20 px-[12vw] flex items-center justify-center bg-[#0e0e12]"
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-7xl gap-10 md:gap-0">
        {/* LEFT: Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-4xl lg:text-4xl font-extrabold text-white leading-tight mb-4">
            Hello, I'm <span className="text-[#a78bfa] ">Arpit Pandey</span>
          </h1>

          <h3 className="text-2xl sm:text-3xl font-medium text-[#a78bfa] mb-6">
            <span className="text-white">I am a </span>
            <span className="inline-block animate-pulse">
              {rotatingTexts[index]}
            </span>
          </h3>

          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            I’m a software developer, and this is my portfolio website. Here,
            you’ll learn about my journey as a developer and explore the
            projects I’ve worked on.
          </p>

          <a
            href="https://drive.google.com/file/d/1PogzvrI7fGUWAC_7hBv4fXDJEnRB6m6S/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-[#a78bfa] text-[#a78bfa] font-semibold text-lg py-3 px-8 rounded-full hover:bg-[#6366f1]/10 hover:scale-105 transition duration-300"
          >
            Download Resume
          </a>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="relative group w-72 h-72 md:w-100 md:h-100 rounded-full border-4 border-[#2e2e3e] bg-[#1a1a1f] shadow-[0_0_40px_rgba(99,102,241,0.15)] hover:shadow-[0_0_60px_rgba(99,102,241,0.3)] transition-all duration-500 overflow-hidden">
            {/* Profile Image */}
            <img
              src={profileImage}
              alt="Arpit Pandey"
              className="w-full h-full object-cover rounded-full"
            />

            {/* Elegant Ring Accent */}
            <div className="absolute inset-0 rounded-full ring-2 ring-[#a78bfa]/30 group-hover:ring-[#a78bfa]/60 transition duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
