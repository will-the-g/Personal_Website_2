import React from 'react';
import { skills, certifications } from '../data/mock';
import { Award } from 'lucide-react';
import CredlyBadge from '../components/CredlyBadge';

const Skills = () => {
  const categories = ["Languages", "ML/AI", "Cloud & Development", "Data & Databases"];

  const getSkillsByCategory = (category) => {
    return skills.filter(skill => skill.category === category);
  };

  return (
    <div className="min-h-screen bg-black pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Technical <span className="text-cyan-400">Skills</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and certifications
          </p>
        </div>

        {/* Certifications Section */}
        <div className="mb-16 animate-fade-in">
          <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
            <Award size={28} className="text-cyan-400 mr-3" />
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-gray-900/50 rounded-lg border border-gray-800 hover:border-cyan-400/50 transition-all duration-300 p-6 hover:shadow-lg hover:shadow-cyan-400/20"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    {/* If the certification includes a Credly embed badge id, render the embed component. */}
                    {cert.embedBadgeId ? (
                      <div className="w-16 h-16 rounded-lg overflow-hidden">
                        <CredlyBadge badgeId={cert.embedBadgeId} width={cert.embedWidth} height={cert.embedHeight} host={cert.embedHost} />
                      </div>
                    ) : (
                      // If a link is provided, wrap the image in an anchor so it can be opened in a new tab.
                      (cert.url ? (
                        <a href={cert.url} target="_blank" rel="noopener noreferrer">
                          <img
                            src={cert.image}
                            alt={cert.name}
                            className="w-16 h-16 rounded-lg object-cover"
                            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://via.placeholder.com/150/00d9ff/ffffff?text=Certificate'; }}
                          />
                        </a>
                      ) : (
                        <img
                          src={cert.image}
                          alt={cert.name}
                          className="w-16 h-16 rounded-lg object-cover"
                          onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://via.placeholder.com/150/00d9ff/ffffff?text=Certificate'; }}
                        />
                      ))
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg mb-1">
                      {cert.name}
                    </h3>
                    <p className="text-gray-400 text-sm">{cert.issuer}</p>
                    <p className="text-cyan-400 text-sm mt-1">{cert.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills by Category */}
        <div className="space-y-12">
          {categories.map((category, categoryIndex) => (
            <div key={category} className="animate-fade-in" style={{ animationDelay: `${categoryIndex * 100}ms` }}>
              <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <span className="w-2 h-8 bg-cyan-400 mr-3"></span>
                {category}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {getSkillsByCategory(category).map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-gray-900/50 rounded-lg p-4 border border-gray-800 hover:border-cyan-400/50 transition-all duration-300 text-center hover:shadow-lg hover:shadow-cyan-400/20 hover:scale-105"
                  >
                    <span className="text-white font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary Cards */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {categories.map((category) => (
            <div
              key={category}
              className="bg-gray-900/50 rounded-lg p-4 border border-gray-800 text-center hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 cursor-pointer"
            >
              <div className="text-2xl font-bold text-cyan-400 mb-1">
                {getSkillsByCategory(category).length}
              </div>
              <div className="text-gray-400 text-xs uppercase tracking-wider">
                {category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;