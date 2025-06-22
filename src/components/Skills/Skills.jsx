import React from "react";
import { SkillsInfo } from "../../constant";

const Skills = () => (
  <section
    id="skills"
    className="py-24 px-[8vw] md:px-[6vw] lg:px-[12vw] bg-[#0e0e12] text-white"
  >
    {/* Section Title */}
    <div className="text-center mb-20">
      <h2 className="text-4xl sm:text-5xl font-extrabold tracking-wide">
        My Skillset
      </h2>
      <p className="text-gray-400 text-lg mt-4 max-w-xl mx-auto">
        Here’s the tech stack I’m proficient in and actively use in my projects.
      </p>
    </div>

    {/* Skill Categories */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-[#1a1a24] rounded-2xl border border-[#ffffff0a] p-8 shadow-xl backdrop-blur-md hover:shadow-[0_0_25px_#a78bfa33] transition-all duration-300"
        >
          <h3 className="text-xl font-semibold mb-6 border-b border-[#333] pb-2 text-[#dcdcdc] text-center uppercase tracking-wide">
            {category.title}
          </h3>

          <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
            {category.skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center space-y-2 hover:scale-105 transition-transform duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-[#292936] flex items-center justify-center shadow-inner border border-[#3a3a4d]">
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <span className="text-sm text-gray-300">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
