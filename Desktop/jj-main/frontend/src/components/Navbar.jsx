import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, FileText, TrendingUp, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Jobs', path: '/jobs', icon: Search },
    { name: 'Resume Builder', path: '/resume-builder', icon: FileText },
    { name: 'Salary Predictor', path: '/salary-predictor', icon: TrendingUp },
    { name: 'ATS Calculator', path: '/ats-calculator', icon: CheckCircle },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="https://customer-assets.agent.com/job_career-pulse-27/artifacts/x29mdywp_image.png"
            alt="Job Jugaad"
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#DAFF01] ${
                  location.pathname === link.path
                    ? 'text-[#DAFF01]'
                    : 'text-[#DADADA]'
                }`}
              >
                <Icon size={16} />
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Button
            variant="ghost"
            className="text-[#DADADA] hover:text-white hover:bg-white/10"
          >
            Login
          </Button>
          <Button
            className="bg-[#DAFF01] text-[#111113] hover:bg-[#A6BE15] font-semibold px-6 rounded-xl"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden glass mt-2 mx-4 rounded-2xl p-6 animate-fade-in">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${
                    location.pathname === link.path
                      ? 'bg-[#DAFF01]/10 text-[#DAFF01]'
                      : 'text-[#DADADA] hover:bg-white/5'
                  }`}
                >
                  <Icon size={20} />
                  {link.name}
                </Link>
              );
            })}
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-white/10">
              <Button
                variant="ghost"
                className="w-full justify-center text-[#DADADA]"
              >
                Login
              </Button>
              <Button className="w-full bg-[#DAFF01] text-[#111113] hover:bg-[#A6BE15] font-semibold rounded-xl">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
