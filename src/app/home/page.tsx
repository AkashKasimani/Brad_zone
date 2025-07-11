/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState, useEffect}  from 'react'
import { Star } from 'lucide-react';

import 'boxicons/css/boxicons.min.css';
import { services } from './service'
export default function HomePage(){
  const [current, setCurrent] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const cardsCount = 5
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % cardsCount)
    }, 3000)
    return () => clearInterval(interval)
  }, [])
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="navbar flex justify-between items-center p-4 shadow">
        <div className="logo text-3xl font-bold">BrandZone</div>
        <nav className="hidden md:block">
          <ul className="nav-links flex space-x-4">
            <li><a href="/home">Home</a></li>
            <li><a href="/service">Services</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-8 h-8"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
          <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
        </button>
      </header>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <nav className="p-4">
            <ul className="nav-links flex flex-col space-y-4">
              <li><a href="/home" className="block py-2">Home</a></li>
              <li><a href="/service" className="block py-2">Services</a></li>
              <li><a href="#" className="block py-2">About</a></li>
              <li><a href="#" className="block py-2">Contact</a></li>
            </ul>
            <button className="cta-button bg-blue-500 text-white px-4 py-2 rounded mt-4 w-full">Get Started</button>
          </nav>
        </div>
      )}

    <section className="w-full hero-full flex flex-col md:flex-row items-center justify-center p-8 gap-8 bg-white">
  <div className="md:w-1/2 space-y-6 text-center md:text-left">
  <h1 className="text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
  We Build Digital Products
</h1>
    <p className="text-xl text-gray-600">
      Custom solutions to help your business grow faster.
    </p>
    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg transition">
      Contact Us
    </button>
  </div>
  <div className="md:w-1/2 flex justify-center">
    <img className="h-[300px] md:h-[500px] w-full max-w-[600px] object-cover rounded-xl" src="https://thumbs.dreamstime.com/b/office-workers-sitting-round-table-discussing-ideas-exchanging-information-work-meeting-business-negotiation-office-workers-141738285.jpg" alt="Hero"/>
  </div>
</section>


<section className="services-full p-8 bg-gray-50">
  <h2 className="text-5xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Our Services</h2>

  <div className="flex flex-wrap justify-center gap-6">
    {services.map((service, index) => (
      <div
        key={index}
        className={`p-6 rounded-lg flex-shrink-0 border bg-white 
          ${index === current ? 'card-active' : 'card-inactive'}`}
        style={{ maxWidth: '24rem', width: '100%', flexGrow: 1 }}
      >
        <img
          src={service.image}
          alt={service.alt}
          className="mb-4 h-16 w-16 mx-auto"
        />
        <h3 className="text-xl font-semibold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          {service.title}
        </h3>
        <p className="text-center text-gray-600">
          {service.description}
        </p>
      </div>
    ))}
  </div>

  {/* Dots */}
  <div className="pagination-dots flex justify-center mt-8">
    {services.map((_, index) => (
      <span
        key={index}
        className={`w-4 h-4 mx-2 rounded-full cursor-pointer ${index === current ? 'bg-blue-600' : 'bg-gray-400'}`}
      />
    ))}
  </div>

  {/* Numbers */}
  <div className="flex justify-center mt-2 text-lg text-gray-600">
    <span className="current font-bold">0{current + 1}</span>
    <span className="mx-1">/</span>
    <span className="total font-bold">0{services.length}</span>
  </div>
</section>

<section className="trust-section p-8 bg-gray-50 min-h-screen flex flex-col md:flex-row items-center justify-center">
  <div className="container mx-auto flex flex-col md:flex-row items-center w-full">
    <div className="text-content md:w-1/2 mb-4 md:mb-0 md:pr-8">
      <h2 className="text-4xl font-bold mb-2">
        Leading companies trust us <br />
        <strong className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">to develop software</strong>
      </h2>
      <p className="mb-4 text-gray-600">
        We <span className="font-semibold ">add development capacity</span> to tech
        teams. Our value isn't limited to building teams but is equally
        distributed across the project lifecycle. We are a custom software
        development company that guarantees the successful delivery of your
        project.
      </p>
      <a href="#" className="cta-link text-blue-500 hover:text-blue-700  hover:underline hover:border-blue-700 hover:rounded transition-colors duration-300">
        See more Information <span className="arrow">→</span>
      </a>
    </div>
    <div className="video-wrapper md:w-1/2">
      <img
        className="h-[250px] md:h-[400px] w-full object-cover rounded-lg shadow-lg"
        src="https://as2.ftcdn.net/v2/jpg/07/07/32/59/1000_F_707325903_4zz7qwPcx8tkhmxJBaxCAWY60cjxikD5.jpg"
        alt="Video thumbnail"
      />
    </div>
  </div>
</section>
           {/* Footer */}
 <footer className="bg-gray-50 text-gray-800 p-8 border-t border-gray-200">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        
        {/* Reviews Section */}
        <div className="flex-1">
          <p className="mb-4 text-gray-700">
            We'd love to hear about your experience with our services. Please take a moment to leave us a review.
          </p>
          <div className="flex items-center">
            <div className="flex text-yellow-500 mr-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
              Google Reviews
            </a>
          </div>
        </div>
        
        {/* Links Section */}
        <div className="flex-1">
          <h4 className="mb-4 font-semibold text-gray-900">Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-gray-900 hover:underline transition-colors">About Us</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900 hover:underline transition-colors">Services</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900 hover:underline transition-colors">Case Studies</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900 hover:underline transition-colors">How it works</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900 hover:underline transition-colors">Blog</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900 hover:underline transition-colors">Careers</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900 hover:underline transition-colors">Areas We Serve</a></li>
          </ul>
        </div>
        
        {/* Contact Section */}
        <div className="flex-1">
          <h4 className="mb-4 font-semibold text-gray-900">Contact us</h4>
          <p className="text-gray-700 mb-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <a href="tel:+923183561921" className="font-semibold text-blue-600 hover:text-blue-800 transition-colors">
            +923183561921
          </a>
        </div>
        
        {/* Social Icons */}
        <div className="flex space-x-3">
          <a href="#" className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white transition-colors">
            <span className="bx bxl-twitter"></span>
          </a>
          <a href="#" className="w-10 h-10 bg-sky-500 hover:bg-sky-600 rounded-full flex items-center justify-center text-white transition-colors">
            <span className="bx bxl-facebook"></span>
          </a>
          <a href="#" className="w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center text-white transition-colors">
            <span className="bx bxl-instagram"></span>
          </a>
        </div>
      </div>
      
      <div className="border-t border-gray-200 mt-8 pt-4">
        <p className="text-sm text-center md:text-right text-gray-600">
          © 2023 Copyright by IK Developers. All rights reserved.
        </p>
      </div>
    </footer>

    </div>
  )
}