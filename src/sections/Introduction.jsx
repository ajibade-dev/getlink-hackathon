import React from 'react'
import lightbulb from '../images/lightbulb.png'

const Introduction = () => {
  return (
    <div className='flex flex-col md:flex-row mx-auto bg-deep-blue ' id='overview'>
      
      <div className='flex flex-col md:flex-row bg-deep-blue mx-auto items-center justify-center py-10 max-w-[1559px]'>

        {/* the first flexbox */}
        <div className='w-1/2  flex items-center justify-center'>
            <img src={lightbulb} alt="" />
        </div>
        {/* the second flexbox */}
        <div className='flex flex-col gap-2 md:w-1/2 w-full justify-center items-center md:items-start text-center md:text-start mt-10 md:mt-0'>
            <h1 className='font-bold font-montserrat text-xl md:text-3xl lg:text-4xl  text-white'>Introduction to getlinked</h1>
            <h1 className='font-bold font-montserrat text-xl md:text-3xl lg:text-4xl text-light-purple'>tech Hackathon 1.0</h1>
            <p className='font-montserrat text-base text-white leading-7 md:w-3/4 w-full px-6 md:px-0 mt-6'>Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!</p>
        </div>
      </div>
    </div>
  )
}

export default Introduction