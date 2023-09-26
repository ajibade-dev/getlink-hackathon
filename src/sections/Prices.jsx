import React from 'react'
import cup from "../images/cup.png"
import Rewards from "../images/Rewards.png"

const Prices = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center bg-deep-blue'>
      
    <div className='flex flex-col bg-deep-blue w-full max-w-[1600px] py-40'>

        {/* the first flexbox */}
        <div className='flex flex-col md:ml-[55%] ml-0'>
        <div className='text-center mx-auto md:text-start md:mx-0'>
        <h1 className='font-bold font-montserrat text-xl md:text-3xl lg:text-4xl text-white'>Prizes and</h1>
          <h1 className='font-bold font-montserrat text-xl md:text-3xl lg:text-4xl text-light-purple text-start'>Rewards</h1>
        </div>
        <div className='pt-6 md:w-3/5 w-full flex mx-auto lg:mx-0'> 
        <p className='text-white font-montserrat text-center md:text-start px-4 md:px-0'>
            Highlight of the prizes or rewards for the winners and for participants.
        </p>
        </div>
       
        </div>
       
        {/* the second flex */}
        <div className='flex md:flex-row flex-col'>
        {/* the div for the image */}
    <div className='md:w-1/2 w-full flex items-center justify-center'>
          <img src={cup} alt="" className='pt-20'/>
      </div>

      {/* the second flex  */}
      <div className='md:w-1/2 w-full flex md:-ml-10 -ml-0 px-6 items-center justify-center md:mt-20 mt-10'>
        <img src={Rewards} alt="" />
      </div>
        </div>        
     


        </div>
        </div>
  )
}

export default Prices