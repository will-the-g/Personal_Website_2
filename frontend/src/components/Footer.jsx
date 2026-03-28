import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: personalInfo.social.github, label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
    { icon: Twitter, href: personalInfo.social.twitter, label: 'Twitter' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' }
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-all duration-200 hover:scale-110"
                  aria-label={social.label}
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </div>

          {/* Contact Email */}
          <div className="text-gray-400 text-sm">
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-cyan-400 transition-colors"
            >
              {personalInfo.email}
            </a>
          </div>

          {/* Copyright */}
          <div className="text-gray-500 text-sm text-center">
            <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
            <p className="mt-1">Built with React & FastAPI</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;