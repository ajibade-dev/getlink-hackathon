import React from 'react'
import Header from './Header'
import bulb from '../images/bulb.png'
import pink from '../images/pink.png'
import VR from '../images/VR.png'
import '../index.css'
import chain from '../images/chain.png'
import spark from '../images/spark.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="h-full first-grad pb-5">
        <div>
            <Header />
        </div>
        {/* for the innovative write up at the top */}
        <div className='flex flex-col justify-end max-w-[1280px] mx-auto px-2 md:px-0 min-w-fit'>
            <h3 className='text-white font-montserrat lg:text-3xl md:text-xl text-sm italic font-semibold flex md:justify-end justify-center'>Igniting an innovation in HR Innovation.</h3>
            {/* for the pink underline */}
            <div className='flex justify-end pr-10 md:pr-0'>
                <img src={pink} alt="" className='flex md:justify-end justify-center w-[30%] md:w-auto' />
            </div>
        </div>
        {/* div holding the two flexboxs together */}
        <div className='flex flex-col md:flex-row mx-auto max-w-[1280px]'>
            {/* first flexbox */}
                <div className='flex flex-col gap-2 md:w-1/2 w-full mx-auto'>

                    {/* for the first lightbulb */}
                    <div className='flex justify-end'>
                        <img src={bulb} alt="bulb" className='relative top-6 right-[46%] h-5 w-5 md:h-full md:w-auto' />
                    </div>
                    {/*  for the hero writeup*/}
                    <div className='flex flex-row'>
                       <h1 className='text-white font-montserrat font-extrabold lg:text-7xl text-4xl text-center md:text-start'>getlinked Tech Hackathon <span className='text-light-purple'>1.0</span></h1>
                       <div className=' hidden xl:flex justify-center items-center'>
                        <img src={chain} alt="" className='relative lg:top-[29%] lg:right-[2%]' />
                        <img src={spark} alt="" className='relative lg:top-[30%] lg:right-[2%]' />
                       </div>
                       
                    </div>
                    {/* second writeup */}
                    <div className='flex justify-center md:justify-normal'>
                        <h4 className='font-montserrat font-normal mt-5 text-white w-3/4 text-center md:text-justify '>
                            Participate in the getlinked tech Hackathono 2023 stand a chance to win a Big prize

                        </h4>
                       </div>
                       {/* for the button */}
                       <div className='mt-12 flex justify-center md:justify-normal'>
                       <Link to='/register'><a href="" className='px-10 py-4 text-white text-center rounded-md font-normal font-montserrat primary-color'>Register</a></Link>
                       </div>

                       {/* for the timer */}
                       <div className='flex flex-row gap-8 font-unica text-white justify-center md:justify-start mt-20'>
                        <div>
                            <h1 className='text-white text-5xl font-medium'>
                                00<span className='text-sm'>H</span>
                            </h1>
                        </div>
                        <div>
                            <h1 className='text-white text-5xl font-medium'>
                                00<span className='text-sm'>M</span>
                            </h1>
                        </div>
                        <div>
                            <h1 className='text-white text-5xl font-medium'>
                                00<span className='text-sm'>S</span>
                            </h1>
                        </div>

                       </div>

                      

                </div>

                {/* second flexbox */}
                <div className='flex flex-col md:w-1/2 w-full justify-end'>
                   <img src={VR} alt="" />
                </div>

        </div>
    </div>
  )
}

export default Hero