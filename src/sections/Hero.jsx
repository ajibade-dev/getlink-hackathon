import React from 'react'
import Header from './Header'
import bulb from '../images/bulb.png'
import pink from '../images/pink.png'
import VR from '../images/VR.png'
import '../index.css'
import chain from '../images/chain.png'
import spark from '../images/spark.png'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <div className="h-full first-grad pb-5">
        <div>
            <Header />
        </div>
        {/* for the innovative write up at the top */}
        <div className='flex flex-col justify-end max-w-[1280px] mx-auto px-2 md:px-0 min-w-fit'>
            <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: 50 },
                visible: {opacity: 1, x: 0 }
            }}
            className='text-white font-montserrat lg:text-3xl md:text-xl text-sm italic font-semibold flex md:justify-end justify-center'>Igniting an innovation in HR Innovation.</motion.h3>
            {/* for the pink underline */}
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: 50 },
                visible: {opacity: 1, x: 0 }
            }}
            className='flex justify-end pr-10 md:pr-0'>
                <img src={pink} alt="" className='flex md:justify-end justify-center w-[30%] md:w-auto' />
            </motion.div>
        </div>
        {/* div holding the two flexboxs together */}
        <div className='flex flex-col md:flex-row mx-auto max-w-[1280px]'>
            {/* first flexbox */}
                <div className='flex flex-col gap-2 md:w-1/2 w-full mx-auto'>

                    {/* for the first lightbulb */}
                    <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.3}}
                    variants={{
                        hidden: { opacity: 0, y: -30 },
                        visible: {opacity: 1, y: 0 }
                    }}
                    className='flex justify-end'>
                        <img src={bulb} alt="bulb" className='relative top-6 right-[46%] h-5 w-5 md:h-full md:w-auto' />
                    </motion.div>
                    {/*  for the hero writeup*/}
                    <div className='flex flex-row'>
                       <motion.h1
                       initial="hidden"
                       whileInView="visible"
                       viewport={{ once: true, amount: 0.5 }}
                       transition={{ duration: 0.3 }}
                       variants={{
                           hidden: { opacity: 0, y: -50 },
                           visible: {opacity: 1, y: 0 }
                       }}
                       className='text-white font-montserrat font-extrabold lg:text-7xl text-4xl text-center md:text-start'>getlinked Tech Hackathon <span className='text-light-purple'>1.0</span></motion.h1>
                       <motion.div
                       initial="hidden"
                       whileInView="visible"
                       viewport={{ once: true, amount: 0.5 }}
                       transition={{ duration: 0.3 }}
                       variants={{
                           hidden: { opacity: 0, y: -50 },
                           visible: {opacity: 1, y: 0 }
                       }}
                       className=' hidden xl:flex justify-center items-center'>
                        <img src={chain} alt="" className='relative lg:top-[29%] lg:right-[2%]' />
                        <img src={spark} alt="" className='relative lg:top-[30%] lg:right-[2%]' />
                       </motion.div>
                       
                    </div>
                    {/* second writeup */}
                    <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay:0.2 }}
                    variants={{
                        hidden: { opacity: 0, y: -50 },
                        visible: {opacity: 1, y: 0 }
                    }}
                    className='flex justify-center md:justify-normal'>
                        <h4 className='font-montserrat font-normal mt-5 text-white w-3/4 text-center md:text-justify '>
                            Participate in the getlinked tech Hackathono 2023 stand a chance to win a Big prize

                        </h4>
                       </motion.div>
                       {/* for the button */}
                       <motion.div
                       initial="hidden"
                       whileInView="visible"
                       viewport={{ once: true, amount: 0.5 }}
                       transition={{ duration: 0.7, delay:0.4 }}
                       variants={{
                           hidden: { opacity: 0, y: -50 },
                           visible: {opacity: 1, y: 0 }
                       }}
                       className='mt-12 flex justify-center md:justify-normal'>
                       <Link to='/register'><a href="" className='px-10 py-4 text-white text-center rounded-md font-normal font-montserrat primary-color'>Register</a></Link>
                       </motion.div>

                       {/* for the timer */}
                       <motion.div
                       initial="hidden"
                       whileInView="visible"
                       viewport={{ once: true, amount: 0.5 }}
                       transition={{ duration: 0.4, delay:0.6 }}
                       variants={{
                           hidden: { opacity: 0, y: -50 },
                           visible: {opacity: 1, y: 0 }
                       }}
                       className='flex flex-row gap-8 font-unica text-white justify-center md:justify-start mt-20'>
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

                       </motion.div>

                      

                </div>

                {/* second flexbox */}
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay:0.3 }}
                variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: {opacity: 1, x: 0 }
                }}
                className='flex flex-col md:w-1/2 w-full justify-end'>
                   <img src={VR} alt="" />
                </motion.div>

        </div>
    </div>
  )
}

export default Hero