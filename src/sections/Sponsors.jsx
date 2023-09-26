import React from 'react'
import partners from "../images/partners.png"

const Sponsors = () => {
  return (
    <div className='flex flex-col justify-center items-center mx-auto bg-deep-blue'>
      
    <div className=' bg-deep-blue w-full max-w-[1600px] py-10'>

        {/* the writing at the top */}
        <div className='text-white font-montserrat text-center mx-auto'>
            <h1 className='font-bold md:text-3xl text-xl'>Partners and Sponsors</h1>
            <p className='mx-auto md:w-[35%] w-full mt-5 text-xs md:text-base'>Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors</p>
        </div>

        {/* the image underneath */}
        <div className='flex justify-center mt-10'>
          <img src={partners} alt="" className='md:px-10 px-0'/>
      </div>
        </div>
        </div>
  )
}

export default Sponsors