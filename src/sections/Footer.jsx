import React from 'react'
import getlinked from "../images/getlinked.png"
import facebook from "../icons/facebook.svg"
import insta from "../icons/insta.svg"
import mdi from "../icons/mdi_instagram.svg"
import x from "../icons/x.svg"
import phone from "../icons/phone.svg"
import locate from "../icons/locate.svg"
const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-[#100B20]'>
      
    <div className='flex flex-col md:flex-row bg-[#100B20] w-full max-w-[1600px] py-20 lg:px-20 px-10 md:gap-40 gap-20'>
      {/*  the first flexbox */}
      <div className='md:w-1/3 w-full flex flex-col'>
        <div>
        <img src={getlinked} alt="logo" />
        </div>
        <p className='text-white font-montserrat font-normal text-xs leading-5 mt-2'>
        Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology
        </p>

        <p className='text-white font-montserrat font-normal text-xs leading-5 mt-[74px]'>
          Terms of Use <span className='text-light-purple font-normal text-xl mx-2'>|</span> Privacy Policy
        </p>

      </div>

      {/* the second flexbox */}
      <div>
      <p className='text-light-purple font-montserrat font-normal text-xs leading-5'>
      Useful Links
        </p>
        <p className='text-white font-montserrat font-normal text-xs leading-5 mt-2'>
       Overwiew
        </p>
        <p className='text-white font-montserrat font-normal text-xs leading-5 mt-4'>
       Timeline
        </p>
        <p className='text-white font-montserrat font-normal text-xs leading-5 mt-4'>
       FAQs
        </p>
        <p className='text-white font-montserrat font-normal text-xs leading-5 mt-4'>
       Register
        </p>
        <div className='flex flex-row gap-3'>
        <p className='text-light-purple font-montserrat font-normal text-xs leading-5 mt-4'>
       Follow us 
        </p>
        <div className='flex items-end'>
        <img src={mdi} alt="" />
        </div>

        <div className='flex items-end'>
        <img src={x} alt="" />
        </div>

        <div className='flex items-end'>
        <img src={facebook} alt="" />
        </div>

        <div className='flex items-end'>
        <img src={insta} alt="" />
        </div>
        
        </div>
      </div>

      {/* the third flex */}
      <div>
      <p className='text-light-purple font-montserrat font-normal text-xs leading-5'>
       Contact Us 
        </p>

        <div className='flex flex-row mt-4 gap-3'>
          <img src={phone} alt="" />
          <p className='text-white font-montserrat font-normal text-xs leading-5'>
          +234 6707653444
        </p>

        </div>

        <div className='flex flex-row mt-4 gap-3'>
          <img src={locate} alt="" />
          <p className='text-white font-montserrat font-normal text-xs leading-5 w-1/2'>
          27,Alara Street Yaba 100012 Lagos State
        </p>

        </div>
      </div>

    </div>
    {/* the writing on the bottom */}
    <p className='text-white font-montserrat font-normal text-xs leading-5 w-1/2 text-center mb-10'>
    All rights reserved. © getlinked Ltd.
        </p>
    </div>
  )
}

export default Footer