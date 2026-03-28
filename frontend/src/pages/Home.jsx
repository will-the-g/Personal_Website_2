import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Home = () => {
  return (
    <div className="min-h-screen bg-black pt-16">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-in flex justify-center">
            <div className="relative">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="w-40 h-40 rounded-full border-4 border-cyan-400 shadow-lg shadow-cyan-400/50 object-cover"
              />
              <div className="absolute inset-0 rounded-full border-4 border-cyan-400 animate-pulse"></div>
            </div>
          </div>

          {/* Greeting */}
          <div className="mb-6 animate-fade-in">
            <span className="text-cyan-400 text-lg font-medium">Hello, I'm</span>
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 animate-slide-up">
            {personalInfo.name}
          </h1>

          {/* Title with Neon Effect */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-300 mb-8 animate-slide-up">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              {personalInfo.title}
            </span>
          </h2>

          {/* Bio */}
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in">
            {personalInfo.bio}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Link
              to="/projects"
              className="group px-8 py-3 bg-cyan-400 text-black font-medium rounded-lg hover:bg-cyan-300 transition-all duration-200 flex items-center gap-2 hover:gap-3 hover:shadow-lg hover:shadow-cyan-400/50"
            >
              View My Work
              <ArrowRight size={20} className="transition-all" />
            </Link>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-medium rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-200 flex items-center gap-2"
            >
              Contact Me
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-20 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-600 rounded-full mx-auto flex justify-center">
              <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-scroll"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10">
              <div className="text-4xl font-bold text-cyan-400 mb-2">2+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10">
              <div className="text-4xl font-bold text-cyan-400 mb-2">6+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Projects Completed</div>
            </div>
            <div className="text-center p-6 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10">
              <div className="text-4xl font-bold text-cyan-400 mb-2">3</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Research Papers</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;