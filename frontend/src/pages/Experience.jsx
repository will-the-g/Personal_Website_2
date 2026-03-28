import React, { useState } from 'react';
import { experience } from '../data/mock';
import { MapPin, Calendar, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

const Experience = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-black pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Work <span className="text-cyan-400">Experience</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey in research and engineering
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-800 hidden md:block"></div>

          {/* Experience Cards */}
          <div className="space-y-12">
            {experience.map((job, index) => (
              <div
                key={job.id}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-cyan-400 rounded-full border-4 border-black hidden md:block z-10"></div>

                {/* Card */}
                <div className="md:ml-20 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden">
                  {/* Main Info */}
                  <div className="p-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{job.position}</h3>
                        <h4 className="text-xl text-cyan-400 font-medium mb-3">{job.company}</h4>
                      </div>
                      <div className="flex flex-col sm:items-end space-y-1">
                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar size={16} className="mr-2" />
                          {job.period}
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                          <MapPin size={16} className="mr-2" />
                          {job.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">{job.shortDescription}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-black/50 border border-cyan-400/30 text-cyan-400 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Expand Button */}
                    <button
                      onClick={() => toggleExpand(job.id)}
                      className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                    >
                      {expandedId === job.id ? (
                        <>
                          <span>Show Less</span>
                          <ChevronUp size={16} />
                        </>
                      ) : (
                        <>
                          <span>Show More Details</span>
                          <ChevronDown size={16} />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Expanded Details */}
                  {expandedId === job.id && (
                    <div className="px-6 pb-6 border-t border-gray-800 pt-6 animate-fade-in">
                      {/* Highlights */}
                      <div className="mb-6">
                        <h5 className="text-lg font-semibold text-white mb-3 flex items-center">
                          <span className="w-1 h-6 bg-cyan-400 mr-2"></span>
                          Key Highlight
                        </h5>
                        <p className="text-gray-300 italic pl-3 border-l-2 border-cyan-400/30">
                          {job.highlights}
                        </p>
                      </div>

                      {/* Accomplishments */}
                      <div>
                        <h5 className="text-lg font-semibold text-white mb-3 flex items-center">
                          <span className="w-1 h-6 bg-cyan-400 mr-2"></span>
                          Accomplishments
                        </h5>
                        <ul className="space-y-2 pl-3">
                          {job.accomplishments.map((accomplishment, idx) => (
                            <li key={idx} className="text-gray-300 flex items-start">
                              <span className="text-cyan-400 mr-2 mt-1">•</span>
                              <span>{accomplishment}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;