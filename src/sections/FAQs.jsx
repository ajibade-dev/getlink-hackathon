import React from 'react'
import cloud from '../images/cloud.png'
import plus from '../icons/plus.svg'
import { motion } from "framer-motion"

const FAQs = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row justify-center items-center bg-deep-blue' id='faq'>
      
    <div className='flex flex-col md:flex-row bg-deep-blue w-full max-w-[1600px] py-20 lg:px-20 px-10'>

      

      {/* the first flexbox */}
      <div className='flex flex-col gap-2 md:w-1/2 text-center w-full md:text-start pt-10 md:px-0 justify-center items-center md:items-start'>

      <motion.h1
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
          hidden: { opacity: 0, x: -50 },
          visible: {opacity: 1, x: 0 }
      }}
      className='font-bold font-montserrat text-xl md:text-3xl lg:text-4xl  text-white'>Frequently Ask</motion.h1>
          <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay:0.1 }}
          variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {opacity: 1, x: 0 }
          }}
          className='font-bold font-montserrat text-xl md:text-3xl lg:text-4xl text-light-purple'>Questions</motion.h1>

          <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay:0.2 }}
          variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {opacity: 1, x: 0 }
          }}
          className='text-white font-montserrat font-normal text-base leading-7 md:w-1/2 w-3/4 mt-4'>We got questions to answers you might want to ask about <span className='font-bold'>getlinked 1.0</span></motion.p>
        
        {/* div holding the FAQS */}
          <div className='flex-flex-col mt-[68px] w-full lg:w-3/4 text-start'>
          {/* FAQ 1 */}
          <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay:0.3 }}
          variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {opacity: 1, x: 0 }
          }}
          className='flex flex-col mb-6'>
            <div className='flex flex-row text-white font-montserrat'>
              <p>Can I work on a project I started before the hackathon?</p>
              <img src={plus} className="ml-auto"/>
            </div>

            {/* the line beneath */}
            
            <hr className='border-light-purple mt-[13px]'/>
            

          </motion.div>

          {/* FAQ 2 */}
          <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay:0.4 }}
          variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {opacity: 1, x: 0 }
          }}
          className='flex-flex-col mb-6'>
            <div className='flex flex-row text-white font-montserrat'>
              <p>What happens if I need help during the hackathon?</p>
              <img src={plus} alt="" className="ml-auto"   />
              
            </div>

            {/* the line beneath */}
            
            <hr className='border-light-purple mt-[13px]'/>
            

          </motion.div>

          {/* FAQ 3 */}
          <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay:0.4 }}
          variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {opacity: 1, x: 0 }
          }}
          className='flex-flex-col mb-6'>
            <div className='flex flex-row text-white font-montserrat'>
              <p>What happens if I don't have an idea for a project?</p>
              <img src={plus} alt="" className="ml-auto" />
            </div>

            {/* the line beneath */}
            
            <hr className='border-light-purple mt-[13px]'/>
            

          </motion.div>

          {/* FAQ 4 */}
          <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay:0.5 }}
          variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {opacity: 1, x: 0 }
          }}
          className='flex-flex-col mb-6'>
            <div className='flex flex-row text-white font-montserrat'>
              <p>Can I join a team or do I have to come with one?</p>
              <img src={plus} alt="" className="ml-auto" />
            </div>

            {/* the line beneath */}
            
            <hr className='border-light-purple mt-[13px]'/>
            

          </motion.div>

          {/* FAQ 5 */}
          <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay:0.6 }}
          variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {opacity: 1, x: 0 }
          }}
          className='flex-flex-col mb-6'>
            <div className='flex flex-row text-white font-montserrat'>
              <p>What happens after the hackathon ends</p>
              <img src={plus} alt="" className="ml-auto"/>
            </div>

            {/* the line beneath */}
            
            <hr className='border-light-purple mt-[13px]'/>
            

          </motion.div>

          {/* FAQ 6 */}
          <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay:0.7 }}
          variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {opacity: 1, x: 0 }
          }}
          className='flex-flex-col mb-6'>
            <div className='flex flex-row text-white font-montserrat'>
              <p>Can I work on a project I started before the hackathon?</p>
              <img src={plus} alt="" className="ml-auto"/>
            </div>

            {/* the line beneath */}
            
            <hr className='border-light-purple mt-[13px]'/>
            

          </motion.div>

          </div>

      </div>

      {/* the second flexbox */}
      <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay:0.3 }}
      variants={{
          hidden: { opacity: 0, x: 50 },
          visible: {opacity: 1, x: 0 }
      }}
      className='md:w-1/2 w-full flex items-center justify-center mt-16 md:mt-0'>
          <img src={cloud} alt="" className="ml-auto"/>
      </motion.div>
      
    </div>
  </div>
  )
}

export default FAQs