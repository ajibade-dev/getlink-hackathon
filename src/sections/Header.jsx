import React, {useState, useEffect} from 'react'
import open from "../images/open.png"
import close from '../images/close.png'
import getlinked from '../images/getlinked.png'
import '../index.css'
import { Link } from 'react-router-dom'


const Header = () => {

  const [nav, setNav] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  // to give sticky menu another color when scrolling
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const isScrolled = window.scrollY > 0;
  //     setScrolled(isScrolled);
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // const navbarClass = scrolled ? 'bg-[#000000] ' : 'bg-transparent';

//to open and close the menu in mobile
  const handleNav = () => {
    setNav(!nav)
  }

  return (

    <div class={nav ? "bg-transparent lg:pb-2 mx-auto max-w-[1240px] relative top-0" : "bg-transparent mx-auto"}>
    <div class="px-4 md:px-2 md:py-2 py-4 w-full">
      <header class="flex items-center justify-between py-4 md:py-4 md:pt-10 w-full">
        {/* <!-- logo - start --> */}
        <a href="/" class="inline-flex items-center gap-2.5 text-2xl font-bold text-white md:text-3xl" aria-label="logo">
        <img src={getlinked} alt="" />
        </a>
        {/* <!-- logo - end --> */}
  
        {/* <!-- nav - start --> */}
        <nav class=" hidden gap-12 lg:flex items-center font-montserrat">
         <a href="#" className="text-base font-normal text-white transition duration-100">Timeline</a>
          <a href="#" className="text-base font-normal text-white transition duration-100 ">Overview</a>
          <a href="#" className="text-base text-white transition duration-100 font-normal ">FAQs</a>
         <Link to='/contact'><a href="#" className="text-base text-white transition duration-100 font-normal ">Contact</a></Link> 
          <Link to='/register'><a href="" className='px-10 py-4 text-white text-center rounded-md font-normal font-montserrat primary-color'>Register</a></Link>
        </nav>
        {/* <!-- nav - end --> */}
  
      {/* icon for menu open */}
        <div onClick={handleNav} className='cursor-pointer lg:hidden flex'>
        <img src={open} alt="" />
        </div>
      
      </header>
      <div className={!nav ? 'fixed top-0 left-0 w-full p-4 z-10 bg-deep-blue transition ease-in-out duration-300 shadow-lg shadow-very-dark-blue justify-center items-center lg:hidden h-[50%]' : 'fixed right-[-100%]'}>
  
          {/* icon for menu close */}
          <div onClick={handleNav} className='cursor-pointer lg:hidden flex justify-end mb-4'>
        <img src={close} alt="close button" className='pr-4' />
        </div>
          
      <ul className='flex flex-col w-1/3 pt-4 gap-8 font-montserrat bg-deep-blue'>
      <a href="#" className="text-base font-normal text-white transition duration-100">Timeline</a>
          <a href="#" className="text-base font-normal text-white transition duration-100 ">Overview</a>
          <a href="#" className="text-base text-white transition duration-100 font-normal ">FAQs</a>
          <Link to='/contact'><a href="#" className="text-base text-white transition duration-100 font-normal">Contact</a></Link>
          <Link to='/register'><a href="" className='px-10 py-4 text-white text-center rounded-md font-normal font-montserrat primary-color'>Register</a></Link>
      </ul>
      </div>
    </div>
  </div>
  )
}

export default Header