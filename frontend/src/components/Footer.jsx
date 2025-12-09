import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'Job Search', path: '/jobs' },
      { name: 'Resume Builder', path: '/resume-builder' },
      { name: 'Salary Predictor', path: '/salary-predictor' },
      { name: 'ATS Calculator', path: '/ats-calculator' },
    ],
    resources: [
      { name: 'Career Tips', path: '/blog' },
      { name: 'Interview Prep', path: '/interview' },
      { name: 'Skill Tests', path: '/tests' },
      { name: 'Company Reviews', path: '/reviews' },
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Careers', path: '/careers' },
      { name: 'Contact', path: '/contact' },
      { name: 'Press', path: '/press' },
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Cookie Policy', path: '/cookies' },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="relative z-10 bg-[#1A1C1E] border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img
                src="https://customer-assets.emergentagent.com/job_career-pulse-27/artifacts/x29mdywp_image.png"
                alt="Job Jugaad"
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-[#A1A1AA] text-sm leading-relaxed mb-6">
              AI-powered career platform helping freshers and professionals land their dream jobs with smart tools and insights.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-[#26282A] flex items-center justify-center text-[#A1A1AA] transition-all hover:bg-[#DAFF01] hover:text-[#111113] hover:-translate-y-1"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-[#A1A1AA] text-sm hover:text-[#DAFF01] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-[#A1A1AA] text-sm hover:text-[#DAFF01] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-[#A1A1AA] text-sm hover:text-[#DAFF01] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@jobjugaad.com"
                  className="flex items-center gap-2 text-[#A1A1AA] text-sm hover:text-[#DAFF01] transition-colors"
                >
                  <Mail size={14} />
                  hello@jobjugaad.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+911234567890"
                  className="flex items-center gap-2 text-[#A1A1AA] text-sm hover:text-[#DAFF01] transition-colors"
                >
                  <Phone size={14} />
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-start gap-2 text-[#A1A1AA] text-sm">
                <MapPin size={14} className="mt-1 flex-shrink-0" />
                Bangalore, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#A1A1AA] text-sm">
            © {currentYear} Job Jugaad. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-[#A1A1AA] text-sm hover:text-[#DAFF01] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
