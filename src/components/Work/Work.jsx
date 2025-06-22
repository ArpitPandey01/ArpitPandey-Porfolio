import React, { useState } from "react";
import { projects } from "../../constant";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  return (
    <section
      id="work"
      className="py-24 px-[8vw] md:px-[6vw] lg:px-[12vw] bg-[#0d0d11] text-white"
    >
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-wide">
          Projects
        </h2>
        <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
          These are the projects I’ve built throughout my learning journey.
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="bg-[#18181f] border border-[#2e2e3e] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-[0_0_60px_rgba(167,139,250,0.3)]
 hover:scale-[1.02]"
          >
            <div className="aspect-[16/9] w-full bg-black">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-fill"
              />
            </div>

            <div className="p-5">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-400 mb-3 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#1f1f27] text-gray-300 border border-[#2e2e3e] text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal View */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-[#1a1a24] w-full max-w-5xl rounded-xl overflow-hidden flex flex-col md:flex-row shadow-lg transition-all scale-100 duration-300 relative">
            {/* Left Image */}
            <div className="md:w-1/2 bg-[#101018] p-4 flex items-center justify-center">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="rounded-lg w-full max-h-[400px] object-contain"
              />
            </div>

            {/* Right Content */}
            <div className="md:w-1/2 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-gray-300 mb-6">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#1f1f27] text-gray-300 border border-[#2e2e3e] text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 mt-auto">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-[#2c2c3c] hover:bg-[#3e3e5e] text-sm text-gray-200 py-2 rounded-lg transition"
                >
                  View Code
                </a>
                <a
                  href={selectedProject.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center  bg-[#8b5cf6] hover:bg-[#a78bfa]
 text-sm text-white py-2 rounded-lg transition"
                >
                  View Live
                </a>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-white text-2xl hover:text-purple-400"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
