import React from 'react'
import Logo from "../../../src/assets/images/logo.PNG"

const Footer = () => {
  return (
    <>
       <footer className="bg-orange-400 text-white">
  <div className="container mx-auto py-8 px-4 flex flex-wrap items-center justify-between">
    <div className="w-full md:w-1/4 mb-4">
      <img src={Logo} alt="Company Logo" className="h-20" />
    </div>
    <div className="w-full md:w-1/4 mb-4">
      <h4 className="text-lg font-bold mb-2">Who We Are</h4>
      <ul className="list-none">
        <li><a href="#" className='hover:text-black transition-colors duration-300'>Executive Team</a></li>
        <li><a href="#" className='hover:text-black transition-colors duration-300'>Founders and Advisors</a></li>
        <li><a href="#" className='hover:text-black transition-colors duration-300'>Science Leadership</a></li>
        <li><a href="#" className='hover:text-black transition-colors duration-300'>Support & Collaboration</a></li>
      </ul>
    </div>
    <div className="w-full md:w-1/4 mb-4">
      <h4 className="text-lg font-bold mb-2">What We Do</h4>
      <ul className="list-none">
        <li><a className='hover:text-black transition-colors duration-300' href="#">Where Money Goes</a></li>
        <li><a className='hover:text-black transition-colors duration-300' href="#">Awareness</a></li>
        <li><a className='hover:text-black transition-colors duration-300' href="#">Health Quality</a></li>
        <li><a className='hover:text-black transition-colors duration-300' href="#">News & Media</a></li>
      </ul>
    </div>
    <div className="w-full md:w-1/4 mb-4">
      <h4 className="text-lg font-bold mb-2">Sign Up for Updates</h4>
      <p>Get the latest news and updates.</p>
      <div className="mt-4 flex">
        <input type="email" placeholder="Enter your email" className="w-full py-2 px-4 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r-lg ml-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Subscribe
        </button>
      </div>
    </div>
  </div>
  <div className="bg-orange-400 py-4 text-center">
    <p className="text-sm text-white">&copy; 2023 Your Company. All rights reserved.</p>
  </div>
</footer>

    </>
  )
}

export default Footer