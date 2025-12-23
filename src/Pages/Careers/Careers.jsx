import { useState } from 'react';
import Modal from '../../Components/Modal/Modal';
import { 
  FaLightbulb, 
  FaUsers, 
  FaChartLine, 
  FaHeart, 
  FaBook, 
  FaBalanceScale,
  FaBuilding,
  FaMapMarkerAlt,
  FaClock,
  FaDollarSign,
  FaMoneyBillWave,
  FaHeartbeat,
  FaUmbrellaBeach,
  FaLaptop,
  FaGraduationCap,
  FaRocket
} from 'react-icons/fa';

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote / San Francisco, CA",
      type: "Full-time",
      salary: "$120,000 - $180,000",
      description: "Join our engineering team to build the next generation of AI-powered hospitality solutions. You'll work on cutting-edge React applications that serve millions of hotel guests worldwide.",
      requirements: [
        "5+ years of React and TypeScript experience",
        "Strong knowledge of modern CSS frameworks (Tailwind, Styled Components)",
        "Experience with state management (Redux, Zustand)",
        "Familiarity with testing frameworks (Jest, Cypress)",
        "Understanding of web performance optimization",
        "Experience with GraphQL and REST APIs"
      ],
      responsibilities: [
        "Develop and maintain user-facing web applications",
        "Collaborate with designers to implement pixel-perfect UIs",
        "Optimize applications for maximum speed and scalability",
        "Participate in code reviews and maintain high code quality",
        "Mentor junior developers and contribute to team growth"
      ]
    },
    {
      id: 2,
      title: "AI/ML Engineer",
      department: "AI Research",
      location: "San Francisco, CA / New York, NY",
      type: "Full-time",
      salary: "$150,000 - $220,000",
      description: "Lead the development of our conversational AI platform that powers seamless guest-hotel interactions. Work with cutting-edge NLP and machine learning technologies.",
      requirements: [
        "PhD in Computer Science, AI, or related field",
        "5+ years experience in NLP and machine learning",
        "Expertise in Python, TensorFlow, PyTorch",
        "Experience with large language models (LLMs)",
        "Published research in top-tier AI/ML conferences",
        "Strong understanding of distributed systems"
      ],
      responsibilities: [
        "Design and implement AI models for natural language understanding",
        "Optimize model performance and reduce inference latency",
        "Collaborate with product teams to integrate AI capabilities",
        "Research and prototype new AI technologies",
        "Publish research findings and represent Flowtel at conferences"
      ]
    },
    {
      id: 3,
      title: "Product Manager - AI Platform",
      department: "Product",
      location: "New York, NY / Remote",
      type: "Full-time",
      salary: "$130,000 - $190,000",
      description: "Drive product strategy and roadmap for our AI-powered hospitality platform. Work closely with engineering, design, and customer success teams to deliver exceptional user experiences.",
      requirements: [
        "5+ years product management experience in B2B SaaS",
        "Experience with AI/ML products preferred",
        "Strong analytical and data-driven decision making skills",
        "Excellent communication and stakeholder management",
        "Experience in hospitality or travel industry is a plus",
        "MBA or equivalent experience preferred"
      ],
      responsibilities: [
        "Define product vision and strategy for AI platform",
        "Manage product roadmap and prioritize feature development",
        "Conduct user research and gather customer feedback",
        "Work with engineering teams to deliver high-quality products",
        "Analyze product metrics and drive continuous improvement"
      ]
    },
    {
      id: 4,
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote",
      type: "Full-time",
      salary: "$110,000 - $160,000",
      description: "Build and maintain the infrastructure that powers our AI platform. Ensure high availability, security, and scalability of our systems serving thousands of hotels globally.",
      requirements: [
        "4+ years of DevOps/Infrastructure experience",
        "Expertise in AWS, Docker, Kubernetes",
        "Experience with Infrastructure as Code (Terraform, CloudFormation)",
        "Strong knowledge of CI/CD pipelines",
        "Experience with monitoring and logging tools",
        "Security-first mindset and best practices"
      ],
      responsibilities: [
        "Design and maintain scalable cloud infrastructure",
        "Implement automated deployment and monitoring systems",
        "Ensure system security and compliance standards",
        "Optimize infrastructure costs and performance",
        "Collaborate with development teams on deployment strategies"
      ]
    },
    {
      id: 5,
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Chicago, IL / Remote",
      type: "Full-time",
      salary: "$80,000 - $120,000",
      description: "Help our hotel partners maximize value from Flowtel's AI platform. Build strong relationships and drive customer satisfaction, retention, and growth.",
      requirements: [
        "3+ years in customer success or account management",
        "Experience in hospitality or SaaS industry",
        "Strong communication and relationship building skills",
        "Data-driven approach to customer success",
        "Experience with CRM tools (Salesforce, HubSpot)",
        "Bachelor's degree preferred"
      ],
      responsibilities: [
        "Onboard new customers and ensure successful implementation",
        "Monitor customer health and proactively address issues",
        "Drive product adoption and identify expansion opportunities",
        "Collaborate with product team on customer feedback",
        "Maintain high customer satisfaction and retention rates"
      ]
    },
    {
      id: 6,
      title: "UX/UI Designer",
      department: "Design",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      salary: "$90,000 - $140,000",
      description: "Design intuitive and beautiful interfaces for our AI-powered hospitality platform. Create user experiences that delight both hotel staff and guests.",
      requirements: [
        "4+ years of UX/UI design experience",
        "Proficiency in Figma, Sketch, Adobe Creative Suite",
        "Strong portfolio showcasing B2B SaaS design",
        "Experience with design systems and component libraries",
        "Understanding of accessibility and usability principles",
        "Experience with user research and testing"
      ],
      responsibilities: [
        "Design user interfaces for web and mobile applications",
        "Conduct user research and usability testing",
        "Create and maintain design systems and style guides",
        "Collaborate with product and engineering teams",
        "Present design concepts to stakeholders"
      ]
    }
  ];

  const benefits = [
    {
      icon: <FaMoneyBillWave className="text-4xl text-green-600" />,
      title: "Competitive Compensation",
      description: "Top-tier salaries, equity packages, and performance bonuses"
    },
    {
      icon: <FaHeartbeat className="text-4xl text-red-600" />,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision insurance plus wellness stipend"
    },
    {
      icon: <FaUmbrellaBeach className="text-4xl text-blue-600" />,
      title: "Unlimited PTO",
      description: "Take the time you need to recharge and maintain work-life balance"
    },
    {
      icon: <FaLaptop className="text-4xl text-purple-600" />,
      title: "Remote-First",
      description: "Work from anywhere with flexible hours and home office setup budget"
    },
    {
      icon: <FaGraduationCap className="text-4xl text-indigo-600" />,
      title: "Learning & Development",
      description: "$2,000 annual budget for courses, conferences, and skill development"
    },
    {
      icon: <FaRocket className="text-4xl text-orange-600" />,
      title: "Equity & Growth",
      description: "Meaningful equity stake in a fast-growing AI company"
    }
  ];

  const companyStats = [
    { number: "50M+", label: "Guest Interactions Processed" },
    { number: "1,000+", label: "Hotels Using Flowtel" },
    { number: "99.9%", label: "Platform Uptime" },
    { number: "24/7", label: "AI-Powered Support" }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior Frontend Developer",
      image: "/team/sarah.jpg",
      quote: "Working at Flowtel has been incredible. The team is brilliant, the technology is cutting-edge, and we're solving real problems for the hospitality industry."
    },
    {
      name: "Marcus Rodriguez",
      role: "AI Research Scientist",
      image: "/team/marcus.jpg",
      quote: "The freedom to innovate and the resources to push AI boundaries make Flowtel an amazing place for any ML engineer. We're building the future of conversational AI."
    },
    {
      name: "Emily Johnson",
      role: "Product Manager",
      image: "/team/emily.jpg",
      quote: "Flowtel's culture of collaboration and customer obsession creates an environment where great products are born. Every day brings new challenges and opportunities."
    }
  ];

  const handleApply = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white pt-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Shape the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Hospitality</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Join our mission to revolutionize hotel communication with AI-powered solutions. 
              Build technology that enhances millions of guest experiences worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              {companyStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-purple-400">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Why Flowtel Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Flowtel?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just building software – we're creating the future of hospitality technology. 
            Join a team of passionate innovators making a real impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
              <FaLightbulb className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
            <p className="text-gray-600">Work with the latest AI, ML, and cloud technologies. Push the boundaries of what's possible in conversational AI.</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <FaUsers className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">World-Class Team</h3>
            <p className="text-gray-600">Collaborate with talented engineers, designers, and product experts from top companies like Google, Airbnb, and Stripe.</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <FaChartLine className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Rapid Growth</h3>
            <p className="text-gray-600">Join a fast-growing startup backed by top VCs. Huge opportunities for career advancement and skill development.</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
              <FaLightbulb className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Real Impact</h3>
            <p className="text-gray-600">Your work directly improves experiences for millions of hotel guests and thousands of hospitality professionals.</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
              <FaBook className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Learning Culture</h3>
            <p className="text-gray-600">Continuous learning opportunities, mentorship programs, and conference attendance to keep you at the forefront of technology.</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6">
              <FaBalanceScale className="w-8 h-8 text-pink-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Work-Life Balance</h3>
            <p className="text-gray-600">Flexible schedules, unlimited PTO, and a remote-first culture that respects your personal time and well-being.</p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Benefits Package</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Testimonials */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Team Says</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-semibold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Job Listings */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
          <div className="space-y-6">
            {jobs.map((job) => (
              <div key={job.id} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <span className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full">
                        <FaBuilding className="w-4 h-4" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full">
                        <FaMapMarkerAlt className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full">
                        <FaClock className="w-4 h-4" />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full">
                        <FaDollarSign className="w-4 h-4" />
                        {job.salary}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4">{job.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {job.requirements.slice(0, 3).map((req, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-purple-500 mt-1">•</span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Responsibilities:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {job.responsibilities.slice(0, 3).map((resp, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-blue-500 mt-1">•</span>
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => handleApply(job)}
                    className="ml-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl p-16 shadow-2xl">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Mission?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't see the perfect role? We're always looking for exceptional talent to join our team. 
            Send us your resume and let's start a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Send Your Resume
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>

      {/* Application Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`Apply for ${selectedJob?.title}`}
      >
        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Position Details:</h4>
            <p className="text-sm text-gray-600 mb-1"><strong>Department:</strong> {selectedJob?.department}</p>
            <p className="text-sm text-gray-600 mb-1"><strong>Location:</strong> {selectedJob?.location}</p>
            <p className="text-sm text-gray-600 mb-1"><strong>Type:</strong> {selectedJob?.type}</p>
            <p className="text-sm text-gray-600"><strong>Salary:</strong> {selectedJob?.salary}</p>
          </div>
          
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                <input
                  type="text"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                <input
                  type="text"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
              <input
                type="email"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your email address"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your phone number"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn Profile</label>
              <input
                type="url"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="https://linkedin.com/in/yourprofile"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Resume *</label>
              <input
                type="file"
                required
                accept=".pdf,.doc,.docx"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <p className="text-xs text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Cover Letter *</label>
              <textarea
                rows={6}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Tell us why you're interested in this role and what makes you a great fit for Flowtel..."
              ></textarea>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">How did you hear about us?</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option value="">Select an option</option>
                <option value="linkedin">LinkedIn</option>
                <option value="website">Company Website</option>
                <option value="referral">Employee Referral</option>
                <option value="job-board">Job Board</option>
                <option value="social-media">Social Media</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="privacy"
                required
                className="mt-1 w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
              />
              <label htmlFor="privacy" className="text-sm text-gray-600">
                I agree to the processing of my personal data for recruitment purposes and confirm that the information provided is accurate. *
              </label>
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg"
            >
              Submit Application
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
}