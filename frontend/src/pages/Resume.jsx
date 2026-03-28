import React from 'react';
import { Download, FileText, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Resume = () => {
  // Resume PDF URL
  const resumeUrl = "/WilliamGatlin_Resume.pdf";

  return (
    <div className="min-h-screen bg-black pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <>
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              My <span className="text-cyan-400">Resume</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              View and download my professional resume
            </p>
          </div>

          {/* Resume Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href={resumeUrl}
              download
              className="group px-8 py-3 bg-cyan-400 text-black font-medium rounded-lg hover:bg-cyan-300 transition-all duration-200 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-400/50"
            >
              <Download size={20} />
              Download Resume
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-medium rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-200 flex items-center justify-center gap-2"
            >
              <ExternalLink size={20} />
              Open in New Tab
            </a>
          </div>

          {/* Resume Preview Card */}
          <div className="bg-gray-900/50 rounded-lg border border-gray-800 overflow-hidden">
            {/* Preview Header */}
            <div className="bg-gray-800/50 p-6 border-b border-gray-700">
              <div className="flex items-center gap-4">
                <FileText size={32} className="text-cyan-400" />
                <div>
                  <h2 className="text-xl font-semibold text-white">
                    {personalInfo.name} - Resume
                  </h2>
                  <p className="text-gray-400 text-sm">
                    {personalInfo.title}
                  </p>
                </div>
              </div>
            </div>

            {/* PDF Preview Embed */}
            <div className="p-8">
              <iframe
                src={resumeUrl}
                className="w-full h-[800px] rounded-lg bg-white"
                title="Resume Preview"
              />
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center bg-gray-900/50 rounded-lg border border-gray-800 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in working together?
            </h3>
            <p className="text-gray-400 mb-6">
              I'm always open to discussing new opportunities and projects.
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-400 text-black font-medium rounded-lg hover:bg-cyan-300 transition-all duration-200 hover:shadow-lg hover:shadow-cyan-400/50"
            >
              Get in Touch
            </a>
          </div>
        </>
      </div>
    </div>
  );
};

export default Resume;
