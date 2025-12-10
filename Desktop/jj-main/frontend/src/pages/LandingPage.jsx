import React from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  TrendingUp,
  FileText,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Users,
  Building2,
  Briefcase,
  Star,
  ChevronRight,
  Zap,
  Target,
  Award
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { featuredJobs, companies, stats, features, testimonials } from '../data/mock';

const LandingPage = () => {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="gradient-orb orb-1" />
        <div className="gradient-orb orb-2" />
        <div className="gradient-orb orb-3" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#DAFF01]/10 border border-[#DAFF01]/20 mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 text-[#DAFF01]" />
              <span className="text-sm font-medium text-[#DAFF01]">
                AI-Powered Career Platform for Freshers
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Your{' '}
              <span className="relative inline-block">
                <span className="neon-text text-[#DAFF01]">Career Jugaad</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 8C50 4 150 2 298 8"
                    stroke="#DAFF01"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />
              Starts Here
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-[#DADADA] max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Smart job search, AI-powered resume builder, salary predictions & ATS optimization — everything freshers need to land their dream tech job.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="flex flex-col sm:flex-row gap-3 p-2 rounded-2xl glass">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A1A1AA] w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Search jobs, skills, or companies..."
                    className="w-full pl-12 pr-4 py-4 bg-transparent border-none text-white placeholder:text-[#A1A1AA] focus:ring-0 focus-visible:ring-0 text-base"
                  />
                </div>
                <Button className="bg-[#DAFF01] text-[#111113] hover:bg-[#A6BE15] font-semibold px-8 py-4 rounded-xl text-base whitespace-nowrap">
                  Find Jobs
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <div className="flex flex-wrap justify-center gap-2 mt-4 text-sm text-[#A1A1AA]">
                <span>Popular:</span>
                {['React Developer', 'Data Analyst', 'Python', 'Fresher Jobs'].map((tag) => (
                  <button
                    key={tag}
                    className="px-3 py-1 rounded-full bg-white/5 hover:bg-[#DAFF01]/10 hover:text-[#DAFF01] transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#DAFF01] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#A1A1AA]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-[#3F3F3F] flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-[#DAFF01] rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-[#DAFF01]/10 text-[#DAFF01] border-[#DAFF01]/20 mb-4">
              <Zap className="w-3 h-3 mr-1" />
              Powerful Features
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Everything You Need to{' '}
              <span className="text-[#DAFF01]">Succeed</span>
            </h2>
            <p className="text-[#A1A1AA] text-lg max-w-2xl mx-auto">
              Our AI-powered tools give you the edge in today's competitive job market
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const iconMap = {
                Search: Search,
                TrendingUp: TrendingUp,
                FileText: FileText,
                CheckCircle: CheckCircle,
              };
              const Icon = iconMap[feature.icon];

              return (
                <Card
                  key={index}
                  className="feature-card group cursor-pointer bg-[#1A1C1E] border-[#3F3F3F]/50"
                >
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-2xl bg-[#DAFF01]/10 flex items-center justify-center mb-6 group-hover:bg-[#DAFF01]/20 transition-colors">
                      <Icon className="w-7 h-7 text-[#DAFF01]" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-[#A1A1AA] text-sm leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="mt-6 flex items-center text-[#DAFF01] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn More
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="section relative bg-[#111113]/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
            <div>
              <Badge className="bg-[#DAFF01]/10 text-[#DAFF01] border-[#DAFF01]/20 mb-4">
                <Briefcase className="w-3 h-3 mr-1" />
                Fresh Opportunities
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold">
                Featured Jobs for <span className="text-[#DAFF01]">Freshers</span>
              </h2>
            </div>
            <Link to="/jobs">
              <Button variant="outline" className="border-[#3F3F3F] text-white hover:border-[#DAFF01] hover:text-[#DAFF01]">
                View All Jobs
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredJobs.map((job) => (
              <Card
                key={job.id}
                className="job-card group bg-[#1A1C1E] border-[#3F3F3F]/50 hover:border-[#DAFF01]/50"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] flex items-center justify-center text-white font-bold text-lg">
                        {job.logo}
                      </div>
                      <div>
                        <h3 className="font-semibold text-white group-hover:text-[#DAFF01] transition-colors">
                          {job.title}
                        </h3>
                        <p className="text-sm text-[#A1A1AA]">{job.company}</p>
                      </div>
                    </div>
                    {job.isNew && (
                      <Badge className="bg-[#DAFF01] text-[#111113] text-xs">
                        New
                      </Badge>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs px-2 py-1 rounded-md bg-[#26282A] text-[#DADADA]">
                      {job.location}
                    </span>
                    <span className="text-xs px-2 py-1 rounded-md bg-[#26282A] text-[#DADADA]">
                      {job.type}
                    </span>
                    <span className="text-xs px-2 py-1 rounded-md bg-[#26282A] text-[#DADADA]">
                      {job.experience}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded-md bg-[#DAFF01]/10 text-[#DAFF01]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[#3F3F3F]/50">
                    <span className="text-[#DAFF01] font-semibold">{job.salary}</span>
                    <span className="text-xs text-[#A1A1AA]">{job.posted}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="section relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="bg-[#DAFF01]/10 text-[#DAFF01] border-[#DAFF01]/20 mb-4">
              <Building2 className="w-3 h-3 mr-1" />
              Top Recruiters
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Companies Hiring on <span className="text-[#DAFF01]">Job Jugaad</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {companies.map((company, index) => (
              <div
                key={index}
                className="group px-6 py-4 rounded-2xl bg-[#1A1C1E] border border-[#3F3F3F]/50 hover:border-[#DAFF01]/50 transition-all cursor-pointer hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#26282A] flex items-center justify-center text-white font-bold text-sm group-hover:bg-[#DAFF01]/20 transition-colors">
                    {company.logo}
                  </div>
                  <div>
                    <div className="font-medium text-white">{company.name}</div>
                    <div className="text-xs text-[#A1A1AA]">
                      {company.openings} openings
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section relative bg-[#111113]/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="bg-[#DAFF01]/10 text-[#DAFF01] border-[#DAFF01]/20 mb-4">
              <Star className="w-3 h-3 mr-1" />
              Success Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Loved by <span className="text-[#DAFF01]">Thousands</span> of Freshers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="bg-[#1A1C1E] border-[#3F3F3F]/50 hover:border-[#DAFF01]/30 transition-all"
              >
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#DAFF01] text-[#DAFF01]"
                      />
                    ))}
                  </div>
                  <p className="text-[#DADADA] mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#DAFF01] to-[#A6BE15] flex items-center justify-center text-[#111113] font-bold text-sm">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-[#A1A1AA]">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section relative">
        <div className="container mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1A1C1E] to-[#111113] border border-[#3F3F3F]/50 p-12 md:p-16">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#DAFF01]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#3B82F6]/10 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-2xl mx-auto text-center">
              <Badge className="bg-[#DAFF01]/10 text-[#DAFF01] border-[#DAFF01]/20 mb-6">
                <Target className="w-3 h-3 mr-1" />
                Start Your Journey
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Land Your{' '}
                <span className="text-[#DAFF01]">Dream Job?</span>
              </h2>
              <p className="text-[#A1A1AA] text-lg mb-8">
                Join thousands of freshers who've kickstarted their careers with Job Jugaad. Create your profile and start applying today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#DAFF01] text-[#111113] hover:bg-[#A6BE15] font-semibold px-8 py-6 rounded-xl text-lg">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  className="border-[#3F3F3F] text-white hover:border-[#DAFF01] hover:text-[#DAFF01] px-8 py-6 rounded-xl text-lg"
                >
                  Explore Jobs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
