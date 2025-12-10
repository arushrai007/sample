// Mock data for Job Jugaad Platform

export const featuredJobs = [
  {
    id: 1,
    title: "Software Developer",
    company: "TechCorp India",
    location: "Bangalore",
    type: "Full-time",
    salary: "₹6-10 LPA",
    logo: "TC",
    tags: ["React", "Node.js", "MongoDB"],
    posted: "2 days ago",
    isNew: true,
    experience: "Fresher"
  },
  {
    id: 2,
    title: "Data Analyst",
    company: "Analytics Pro",
    location: "Hyderabad",
    type: "Full-time",
    salary: "₹5-8 LPA",
    logo: "AP",
    tags: ["Python", "SQL", "Tableau"],
    posted: "1 day ago",
    isNew: true,
    experience: "0-1 years"
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "StartupX",
    location: "Remote",
    type: "Full-time",
    salary: "₹8-12 LPA",
    logo: "SX",
    tags: ["React", "TypeScript", "Tailwind"],
    posted: "3 days ago",
    isNew: false,
    experience: "Fresher"
  },
  {
    id: 4,
    title: "Backend Engineer",
    company: "CloudNine",
    location: "Pune",
    type: "Full-time",
    salary: "₹7-11 LPA",
    logo: "CN",
    tags: ["Java", "Spring Boot", "AWS"],
    posted: "5 days ago",
    isNew: false,
    experience: "0-2 years"
  },
  {
    id: 5,
    title: "DevOps Engineer",
    company: "InfraTech",
    location: "Chennai",
    type: "Full-time",
    salary: "₹9-14 LPA",
    logo: "IT",
    tags: ["Docker", "Kubernetes", "CI/CD"],
    posted: "1 week ago",
    isNew: false,
    experience: "1-2 years"
  },
  {
    id: 6,
    title: "ML Engineer",
    company: "AI Labs",
    location: "Bangalore",
    type: "Full-time",
    salary: "₹10-15 LPA",
    logo: "AL",
    tags: ["Python", "TensorFlow", "PyTorch"],
    posted: "4 days ago",
    isNew: true,
    experience: "Fresher"
  }
];

export const companies = [
  { name: "Google", logo: "G", openings: 45 },
  { name: "Microsoft", logo: "M", openings: 32 },
  { name: "Amazon", logo: "A", openings: 58 },
  { name: "Flipkart", logo: "F", openings: 24 },
  { name: "Infosys", logo: "I", openings: 120 },
  { name: "TCS", logo: "T", openings: 200 },
  { name: "Wipro", logo: "W", openings: 85 },
  { name: "Accenture", logo: "A", openings: 95 }
];

export const stats = [
  { value: "50K+", label: "Active Jobs" },
  { value: "10K+", label: "Companies" },
  { value: "1M+", label: "Job Seekers" },
  { value: "95%", label: "Placement Rate" }
];

export const features = [
  {
    icon: "Search",
    title: "Smart Job Search",
    description: "AI-powered job matching that understands your skills and preferences to find perfect opportunities."
  },
  {
    icon: "TrendingUp",
    title: "Salary Predictor",
    description: "Get accurate salary predictions based on your skills, experience, and market trends."
  },
  {
    icon: "FileText",
    title: "Resume Builder",
    description: "Create stunning, ATS-friendly resumes with our advanced drag-and-drop editor."
  },
  {
    icon: "CheckCircle",
    title: "ATS Score Calculator",
    description: "Optimize your resume for Applicant Tracking Systems and increase interview chances."
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Software Developer at Google",
    avatar: "PS",
    content: "Job Jugaad helped me land my dream job at Google! The ATS calculator was a game-changer for my resume.",
    rating: 5
  },
  {
    id: 2,
    name: "Rahul Kumar",
    role: "Data Scientist at Amazon",
    avatar: "RK",
    content: "The salary predictor gave me confidence during negotiations. Got 20% more than my initial offer!",
    rating: 5
  },
  {
    id: 3,
    name: "Ananya Singh",
    role: "Frontend Developer at Microsoft",
    avatar: "AS",
    content: "As a fresher, the resume builder templates helped me create a professional resume that stood out.",
    rating: 5
  }
];

export const resumeTemplates = [
  { id: 1, name: "Modern Professional", preview: "modern", popular: true },
  { id: 2, name: "Creative Tech", preview: "creative", popular: false },
  { id: 3, name: "Minimal Clean", preview: "minimal", popular: true },
  { id: 4, name: "Bold Impact", preview: "bold", popular: false }
];

export const salaryData = {
  roles: [
    "Software Developer",
    "Data Analyst",
    "Frontend Developer",
    "Backend Developer",
    "DevOps Engineer",
    "ML Engineer",
    "Product Manager",
    "UI/UX Designer"
  ],
  experience: ["Fresher", "1-2 years", "2-4 years", "4-6 years", "6+ years"],
  locations: ["Bangalore", "Hyderabad", "Pune", "Chennai", "Mumbai", "Delhi NCR", "Remote"]
};

export const atsKeywords = {
  technical: ["JavaScript", "React", "Node.js", "Python", "Java", "AWS", "Docker", "SQL"],
  soft: ["Leadership", "Communication", "Problem-solving", "Team player", "Agile"],
  action: ["Developed", "Implemented", "Optimized", "Led", "Designed", "Built"]
};
