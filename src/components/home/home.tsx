/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState, useEffect}  from 'react'
import 'boxicons/css/boxicons.min.css';
import { services } from './service'
export default function HomePage(){
  const [current, setCurrent] = useState(0)
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
        <div className="logo text-xl font-bold">SoftTech</div>
        <nav>
          <ul className="nav-links flex space-x-4">
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <button className="cta-button bg-blue-500 text-white px-4 py-2 rounded">Get Started</button>
      </header>

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
    <img className="h-[500px] w-full max-w-[600px] object-cover rounded-xl" src="https://thumbs.dreamstime.com/b/office-workers-sitting-round-table-discussing-ideas-exchanging-information-work-meeting-business-negotiation-office-workers-141738285.jpg" alt="Hero"/>
  </div>
</section>


<section className="services-full p-8 bg-gray-50">
  <h2 className="text-5xl font-extrabold text-center mb-8">Our Services</h2>

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
        <h3 className="text-xl font-semibold text-center mb-2">
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
        teams. Our value isn’t limited to building teams but is equally
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
        className="h-[400px] w-full object-cover rounded-lg shadow-lg"
        src="https://as2.ftcdn.net/v2/jpg/07/07/32/59/1000_F_707325903_4zz7qwPcx8tkhmxJBaxCAWY60cjxikD5.jpg"
        alt="Video thumbnail"
      />
    </div>
  </div>
</section>
           {/* Footer */}
<footer className="bg-white text-gray-800 p-8 border-t">
  <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
    <div className="text">
      <p className="mb-4">We'd love to hear about your experience with our services. Please take a moment to leave us a review..</p>
      <div className="rating">
        <a className="social-icons bx bxl-google bx-md"/>
        <span className="inline-block ml-2"></span>
      </div>
    </div>
    <div className="links">
      <h4 className="mb-4">Links</h4>
      <ul>
        <li><a href="#" className="hover:underline">About Us</a></li>
        <li><a href="#" className="hover:underline">Services</a></li>
        <li><a href="#" className="hover:underline">Case Studies</a></li>
        <li><a href="#" className="hover:underline">How it works</a></li>
        <li><a href="#" className="hover:underline">Blog</a></li>
        <li><a href="#" className="hover:underline">Careers</a></li>
        <li><a href="#" className="hover:underline">Areas We Serve</a></li>
      </ul>
    </div>
    <div className="contact">
      <h4 className="mb-4">Contact us</h4>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <a href="tel:+923183561921" className="font-semibold">+923183561921</a>
    </div>
    <div className="social-icons flex">
      <a href="#" className="bx bxl-facebook bx-md mr-2"></a>
      <a href="#" className="bx bxl-twitter bx-md mr-2"></a>
      <a href="#" className="bx bxl-instagram bx-md"></a>
    </div>
  </div>
  <p className="mt-4 text-sm text-center md:text-right">© 2023 Copyright by IK Developers. All rights reserved.</p>
</footer>

    </div>
  )
}
