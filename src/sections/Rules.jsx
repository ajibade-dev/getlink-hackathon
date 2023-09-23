import React from 'react'
import sitting from '../images/sitting.png'
const Rules = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center bg-deep-blue'>
      
      <div className='flex flex-col-reverse md:flex-row bg-deep-blue w-full items-center justify-center second-grad max-w-[1600px]'>

        {/* the first flexbox */}
        <div className='flex flex-col gap-2 md:w-1/2 justify-center text-center w-full md:px-20 px-10 md:text-start mt-10 md:mt-0'>

            <h1 className='font-bold font-montserrat text-xl md:text-3xl lg:text-4xl  text-white'>Rules and</h1>
            <h1 className='font-bold font-montserrat text-xl md:text-3xl lg:text-4xl text-light-purple'>Guidelines</h1>
            <p className='font-montserrat text-base text-white leading-7 lg:w-[580px] w-full mt-6 md:px-0'>Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!</p>
        </div>
        {/* the second flexbox */}
        <div className='md:w-1/2 w-full flex items-center justify-center third-grad'>
            <img src={sitting} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Rules