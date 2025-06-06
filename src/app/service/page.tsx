import React from 'react';
import { UserCheck, Lightbulb, Award, Shield, Code, Users, Zap, Lock } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: <UserCheck className="w-8 h-8 text-purple-500" />,
      title: "UX Driven Engineering",
      description: "We prioritize user experience in every line of code. Our designers lead projects to ensure seamless translation from design to development, creating intuitive and engaging digital experiences."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-blue-500" />,
      title: "Developing Shared Understanding",
      description: "We bridge the gap between stakeholders through collaborative workshops and clear communication. Our process ensures everyone is aligned on goals, expectations, and project outcomes."
    },
    {
      icon: <Award className="w-8 h-8 text-pink-500" />,
      title: "Proven Experience and Expertise",
      description: "With years of industry experience and a portfolio of successful projects, we bring deep technical knowledge and creative problem-solving to every challenge we tackle."
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "Security & Intellectual Property (IP)",
      description: "Your ideas and data are protected with enterprise-grade security measures. We maintain strict confidentiality and implement robust security protocols throughout development."
    },
    {
      icon: <Code className="w-8 h-8 text-indigo-500" />,
      title: "Scalable Architecture",
      description: "We build solutions that grow with your business. Our scalable architecture ensures your applications can handle increasing users and data without compromising performance."
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: "Collaborative Development",
      description: "Our agile approach involves you throughout the development process. Regular updates, feedback sessions, and transparent communication keep you in control of your project."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Performance Optimization",
      description: "Speed matters. We optimize every aspect of your application for lightning-fast performance, ensuring excellent user experience and better search engine rankings."
    },
    {
      icon: <Lock className="w-8 h-8 text-red-500" />,
      title: "Quality Assurance",
      description: "Rigorous testing at every stage ensures bug-free, reliable applications. Our QA process includes automated testing, manual reviews, and performance monitoring."
    }
  ];

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Navbar */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="logo text-2xl font-bold text-gray-900">BrandZone</div>
            <nav>
              <ul className="flex space-x-8">
                <li><a href="/home" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a></li>
                <li><a href="/services" className="text-blue-600 font-medium">Services</a></li>
                <li><a href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a></li>
                <li><a href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a></li>
              </ul>
            </nav>
            
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-8 py-12">
        
        {/* Back Button */}
       
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Our Design and Development Approach</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine innovative design thinking with technical expertise to deliver exceptional digital solutions that drive business growth.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  {service.icon}
                </div>
                <h2 className="text-xl font-semibold text-gray-900">{service.title}</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
            Get Started Today
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default ServicesPage;