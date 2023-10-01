import React from 'react'
import partners from "../images/partners.png"
import { motion } from 'framer-motion'


const Sponsors = () => {
  return (
    <div className='flex flex-col justify-center items-center mx-auto bg-deep-blue'>
      
    <div className=' bg-deep-blue w-full max-w-[1600px] py-10'>

        {/* the writing at the top */}
        <div className='text-white font-montserrat text-center mx-auto'>
            <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, y: -50 },
                visible: {opacity: 1, y: 0 }
            }}
            className='font-bold md:text-3xl text-xl'>Partners and Sponsors</motion.h1>
            <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay:0.2 }}
            variants={{
                hidden: { opacity: 0, y: -40 },
                visible: {opacity: 1, y: 0 }
            }}
            className='mx-auto md:w-[35%] w-full mt-5 text-xs md:text-base'>Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors</motion.p>
        </div>

        {/* the image underneath */}
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay:0.3 }}
        variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {opacity: 1, y: 0 }
        }}
        className='flex justify-center mt-10'>
          <img src={partners} alt="" className='md:px-10 px-0'/>
      </motion.div>
        </div>
        </div>
  )
}

export default Sponsors