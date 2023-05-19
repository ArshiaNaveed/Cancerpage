/* eslint-disable no-unused-vars */
import React from 'react'
import Patient from "../../assets/images/patient.jpg"


const AboutSection = () => {
  return (
    <div className="py-8">
        <h1 className='font-bold text-center text-black text-6xl uppercase my-4'>Every cancer. Every life.</h1>
        <p className='text-lg py-4  px-36'>We are a leading cancer-fighting organization with a vision to end cancer as we know it, for everyone. We are improving the lives of people with cancer and their families as the only organization combating cancer through advocacy, research, and patient support, to ensure that everyone has an opportunity to prevent, detect, treat, and survive cancer.</p>
        <div className="container mx-auto flex flex-col flex-wrap my-16  bg-orange-100 h-52 w-4/5">
        <p className='font-bold  text-black text-2xl uppercase my-2 px-4'>Featured</p>
       <div className='flex justify-center justify-between'>
       <div className="transition-colors duration-300 border cursor-pointer hover:scale-105 transform transition-all duration-200 border-white border-2 text-black p-4 flex w-80  h-32 justify-center  items-center rounded-lg shadow-md mx-4">
       <div className=' w-28 h-16 rounded-50 m-5'>
        <img src={Patient} className=' w-32 h-12 rounded-50' />
       </div>
       <div className='flex my-2 flex-col'>
        <h3 className=' font-semibold mt-2'>Skin Care Gallery</h3>
        <p className='my-2'>Skin cancer is the most common type of cancer. Know what to look for.</p>
       </div>
          {/* Social media icon */}
          {/* <a className="cursor-pointer"><BsTwitter /></a> */}
          {/* Subheading */}
        </div>
        <div className="transition-colors cursor-pointer hover:scale-105 transform transition-all duration-200 duration-300 border border-white border-2 text-black p-4 flex w-80  h-32 justify-center  items-center rounded-lg shadow-md mx-4">
       <div className=' w-24 h-16 rounded-50 m-5'>
        <img src={Patient} className=' w-32 h-12 rounded-50' />
       </div>
       <div className='flex my-2 flex-col'>
        <h3 className=' font-semibold mt-2'>Skin Care Gallery</h3>
        <p className='my-2'>Skin cancer is the most common type of cancer. Know what to look for.</p>
       </div>
          {/* Social media icon */}
          {/* <a className="cursor-pointer"><BsTwitter /></a> */}
          {/* Subheading */}
        </div>
        <div className="transition-colors duration-300 cursor-pointer hover:scale-105 transform transition-all duration-200 border border-white border-2 text-black p-4 flex w-80  h-32 justify-center  items-center rounded-lg shadow-md mx-4">
        <div className=' w-24 h-16 rounded-50 m-5'>
        <img src={Patient} className=' w-32 h-12 rounded-50' />
       </div>
       <div className='flex my-2 flex-col'>
        <h3 className=' font-semibold mt-2'>Skin Care Gallery</h3>
        <p className='my-2'>Skin cancer is the most common type of cancer. Know what to look for.</p>
       </div>
          {/* Social media icon */}
          {/* <a className="cursor-pointer"><BsTwitter /></a> */}
          {/* Subheading */}
        </div>
        
       </div>


        </div>
    </div>
  )
}

export default AboutSection