import React, { useState } from 'react';
import "../../assets/navbar.css"
export default function Navbar() {
    let Links = [
        { name: "Home", link: "/" },
        { name: "Shop", link: "/shop" }
    ];
    let [open, setOpen] = useState(false);
    return (<div className='nav'>
      <div className='nav_content'>
        <a href='/'>
          <div className='logo'>
              <span>
                  <ion-icon name="logo-ionic"></ion-icon>
              </span>
              RUFS
          </div></a>
          <div className='flex '>
            <div onClick={() => setOpen(!open)} className='text-3xl absolute left-0 top-6 cursor-pointer md:hidden '>
                <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
            </div>
          {/* les liens */}
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static
                bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                {
                    Links.map((link) => (
                        <li key={link.name} className='md:ml-8 text-md md:my-0 my-7'>
                            <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
                        </li>
                    ))
                }
                <li className='md:ml-8 text-xl md:my-0 my-7'>
                  <form  className="relative mx-auto w-max">
                    <input type="search" 
                        className="peer cursor-pointer relative z-10 h-8 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text
                            focus:border-pink-300 focus:pl-16 focus:pr-4" />
                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke--500 px-3.5
                            peer-focus:border-pink-300 peer-focus:stroke-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </form>
                </li >
            </ul> 

            <div className='flex md:items-center max-md:absolute right-1 top-6 md:ml-[10%] '>
                  <a className="flex items-center md:mx-2 mx-1 " href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                           d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </a>
                  <a className="flex items-center  mx-2 " href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                           d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="flex absolute -mt-5 ml-4">
                      <span className="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-pink-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-5 w-5 bg-pink-500"><span 
                          className='text-white text-xs text-center w-5 h-5 absolute top-0 mt-[1px]' >1</span>
                      </span>
                    </span>
                  </a>
                  <a className="flex items-center mx-2 " href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                         d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span className="flex absolute -mt-5 ml-4">
                      <span className="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-pink-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-5 w-5 bg-pink-500"><span 
                            className='text-white text-xs text-center w-5 h-5 absolute top-0 mt-[1px]' >1</span>
                        </span>
                    </span>
                  </a>
            </div>
          </div>
      </div>
    </div >
  )
}