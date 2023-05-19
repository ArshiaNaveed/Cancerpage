import React, { useState } from 'react'
import Button from "../Headerbtn/headerbtn"
import logo from "../../../src/assets/images/logo.PNG"

const Header = () => {

  let Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "BLOG'S", link: "/" },
    { name: "CONTACT", link: "/" },
  ];
  let [open, setOpen] = useState(false);

  return (

    /* ===========  Main Nav section ============= */
    <div className='shadow-md w-full  top-0 left-0'>
      <div className='md:flex items-center justify-between bg-orange-100 py-4 md:px-10 px-7'>
        
        <div className='font-bold text-2xl cursor-pointer flex items-center justify-between font-[Poppins] text-gray-800'>
          <div>
            <img src={logo} className="h-12 rounded-3xl ml-10"></img>
            <h1 className='text-black text-xs '>ALIA NAFEES FOUNDATION</h1>
          </div>
        </div>
 <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>
        <ul className={`text-black md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
          {
            Links.map((link) => (
              <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                <a href={link.link} className='hover:text-white-400 duration-500'>{link.name}</a>
              </li>
            ))
          }
        </ul>
        
        <Button>
          DONATE
        </Button>

       

      </div>
    </div>
  );
};

export default Header;
