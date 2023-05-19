/* eslint-disable no-unused-vars */
import {ImFacebook} from "react-icons/im";
import {BsInstagram} from "react-icons/bs";
import {BsTwitter} from "react-icons/bs";

import React from 'react'

const SocialMediaSection = () => {
  return (
    <>
      <div className="bg-orange-500 py-8  text-5xl">
      {/* Header */}
    <h1 className="text-white text-4xl font-bold mb-4 text-center">Social Media</h1>
    {/* Description */}
    <p className="text-white text-xl mb-8 text-center ">
      Connect with us on social media platforms.
    </p>
      <div className="container mx-auto flex flex-wrap  justify-center">
        {/* Card 1 */}
        <div className="bg-orange-500 hover:bg-white hover:text-orange-500 transition-colors duration-300 border border-white border-2 text-white p-4 flex flex-col w-64 h-64 justify-center  items-center rounded-lg shadow-md mx-4">
          {/* Social media icon */}
          <a className="cursor-pointer"><BsTwitter /></a>
          {/* Subheading */}
          <h2 className="text-xl font-semibold mt-2">Twitter</h2>
        </div>

        {/* Card 2 */}
        <div className="bg-orange-500 hover:bg-white hover:text-orange-500 transition-colors duration-300 border border-white border-2 text-white p-4 flex flex-col w-64 h-64 justify-center  items-center rounded-lg shadow-md mx-4">
          {/* Social media icon */}
          <a className="cursor-pointer"> <ImFacebook /></a>
          {/* Subheading */}
          <h2 className="text-xl font-semibold mt-2">Facebook</h2>
        </div>

        {/* Card 3 */}
        <div className="bg-orange-500 hover:bg-white hover:text-orange-500 transition-colors duration-300 border border-white border-2 text-white p-4 flex flex-col w-64 h-64 justify-center  items-center rounded-lg shadow-md mx-4">
          {/* Social media icon */}
          <a className="cursor-pointer"> <BsInstagram /></a>
          {/* Subheading */}
          <h2 className="text-xl font-semibold mt-2">Instagram</h2>
        </div>
      </div>
    </div>
    </>
  )
}

export default SocialMediaSection