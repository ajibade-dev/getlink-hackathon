import React from 'react'
import list from "../icons/list.svg"
import padlock from "../images/padlock.png"

const Privacy = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row justify-center items-center bg-deep-blue'>
      
    <div className='flex flex-col md:flex-row bg-deep-blue w-full max-w-[1600px] py-20 lg:px-20 px-10'>

      

      {/* the first flexbox */}
      <div className='flex flex-col gap-2 md:w-1/2 text-center w-full md:text-start pt-10 md:px-0 justify-center items-center md:items-start'>

      <h1 className='font-bold font-montserrat text-xl md:text-3xl lg:text-4xl  text-white'>Privacy Policy and</h1>
          <h1 className='font-bold font-montserrat text-xl md:text-3xl lg:text-4xl text-light-purple'>Terms</h1>

          <p className='text-slate-400 font-montserrat font-normal md:text-base text-xs leading-7 md:w-1/2 w-full mt-4'>
            Last updated on September 12, 2023
          </p>

          <p className='text-white font-montserrat font-normal md:text-base leading-7 md:w-3/4 w-full mt-4 text-xs'>Below are our privacy & policy, which outline a lot of goodies. It's our aim to always take care of our participant</p>
        
        {/* the box underneath */}
          <div className='flex-flex-col mt-[68px] w-full md:text-start h-auto md:px-16 md:py-14  py-8 bg-transparent border-2 rounded-md border-light-purple font-montserrat'>
        
          <p className='text-white font-montserrat font-normal md:text-base text-xs leading-[30px] w-full text-center px-4 md:px-0'>At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you participate in our tech hackathon event. By participating in our event, you consent to the practices described in this policy.</p>

          <h3 className='text-light-purple font-bold md:text-lg mt-6 text-sm'>Licensing Policy</h3>

          <h3 className='text-white md:font-bold md:text-lg text-xs'>Here are terms of our Standard License: </h3>

          {/* for the icons and word by the side */}
          <div className='flex flex-row mt-5 text-start px-4 md:px-0'>
          <img src={list} alt="" className="-mt-8"/>
          <p className='text-white font-montserrat font-normal md:text-base text-xs leading-[30px] w-full ml-4'>The Standard License grants you a non-exclusive right to navigate and register for our event</p>

          </div>

          <div className='flex flex-row mt-5 text-start px-4 md:px-0'>
          <img src={list} alt="" className="-mt-8"/>
          <p className='text-white font-montserrat font-normal md:text-base leading-[30px] w-full ml-4 text-xs'>You are licensed to use the item available at any free source sites, for your project developement</p>

          </div>
            {/* the button underneath */}
          <div className='flex justify-center mt-14'>

            <a href="" className='px-10 py-4 text-white text-center rounded-md font-normal font-montserrat primary-color'>Read More</a>
            </div>

      </div>

      
      
    </div>
    {/* the second flexbox */}
    <div className='md:w-1/2 w-full flex items-center justify-center mt-16 md:mt-0'>
          <img src={padlock} alt="" className="ml-auto"/>
      </div>
  </div>
  
  </div>
  )
}

export default Privacy