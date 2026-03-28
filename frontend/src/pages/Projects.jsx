import React from 'react';
import { projects } from '../data/mock';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured <span className="text-cyan-400">Projects</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of personal projects showcasing my skills and interests
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const mediaUrl = project.gif || project.image;
            const hasMedia = Boolean(mediaUrl);

            return (
              <div
                key={project.id}
                className="group bg-gray-900/50 rounded-lg border border-gray-800 overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image/GIF */}
                <div className="relative overflow-hidden aspect-video bg-gray-800">
                  {hasMedia ? (
                    <img
                      src={mediaUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">
                      No preview available
                    </div>
                  )}

                  {project.link && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-cyan-400 text-black rounded-lg hover:bg-cyan-300 transition-colors"
                      >
                        <Github size={18} />
                        <span className="font-medium text-sm">View Code</span>
                      </a>
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-black/50 border border-cyan-400/30 text-cyan-400 text-xs rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gray-900/50 rounded-lg border border-gray-800 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to see more?
            </h3>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto">
              Check out my GitHub profile for more projects and contributions to open source
            </p>
            <a
              href="https://github.com/will-the-g"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-400 text-black font-medium rounded-lg hover:bg-cyan-300 transition-all duration-200 hover:shadow-lg hover:shadow-cyan-400/50"
            >
              <Github size={20} />
              Visit GitHub Profile
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;