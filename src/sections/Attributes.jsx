import React from 'react'
import people from '../images/people.png'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"


const Attributes = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row justify-center items-center bg-deep-blue'>
      
    <div className='flex flex-col md:flex-row bg-deep-blue w-full max-w-[1600px] py-20'>

      {/* the first flexbox */}
      <motion.div
       initial="hidden"
       whileInView="visible"
       viewport={{ once: true, amount: 0.5 }}
       transition={{ duration: 0.5 }}
       variants={{
           hidden: { opacity: 0, x: -50 },
           visible: {opacity: 1, x: 0 }
       }}
      className='md:w-1/2 w-full flex items-center justify-center'>
          <img src={people} alt="" className='pt-20'/>
      </motion.div>

      {/* the second flexbox */}
      <div className='flex flex-col gap-2 md:w-1/2 text-center w-full md:text-start pt-10 px-16 md:px-0'>

          <motion.h1
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.5 }}
           transition={{ duration: 0.5, delay:0.2 }}
           variants={{
               hidden: { opacity: 0, x: 50 },
               visible: {opacity: 1, x: 0 }
           }}
          className='font-bold font-montserrat text-xl md:text-3xl lg:text-4xl  text-white'>Judging Criteria</motion.h1>
          <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay:0.2 }}
          variants={{
              hidden: { opacity: 0, x: 50 },
              visible: {opacity: 1, x: 0 }
          }}
          className='font-bold font-montserrat text-xl md:text-3xl lg:text-4xl text-light-purple'>Key Attributes</motion.h1>
          {/* the writing underneath */}
          <div className=''>
          <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay:0.3 }}
          variants={{
              hidden: { opacity: 0, x: 50 },
              visible: {opacity: 1, x: 0 }
          }}
           className='font-montserrat text-base text-white leading-7 lg:w-[500px] w-full md:w-3/4 mt-6 md:px-0 font-bold'><span className='text-[#FF26B9]'>Innovation and Creativity:</span> Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.</motion.p>

          <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay:0.4 }}
          variants={{
              hidden: { opacity: 0, x: 50 },
              visible: {opacity: 1, x: 0 }
          }}
          className='font-montserrat text-base text-white leading-7 lg:w-[500px] w-full mt-6 md:px-0 font-bold'><span className='text-[#FF26B9]'>Functionality:</span>Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.</motion.p>

          <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay:0.5 }}
          variants={{
              hidden: { opacity: 0, x: 50 },
              visible: {opacity: 1, x: 0 }
          }}
          className='font-montserrat text-base text-white leading-7 lg:w-[500px] w-full mt-6 md:px-0 font-bold'><span className='text-[#FF26B9]'>Impact and Relevance:</span> Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.</motion.p>

          <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay:0.6 }}
          variants={{
              hidden: { opacity: 0, x: 50 },
              visible: {opacity: 1, x: 0 }
          }}
          className='font-montserrat text-base text-white leading-7 lg:w-[500px] w-full mt-6 md:px-0 font-bold'><span className='text-[#FF26B9]'>Technical Complexity:</span> Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.</motion.p>

          <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay:0.7 }}
          variants={{
              hidden: { opacity: 0, x: 50 },
              visible: {opacity: 1, x: 0 }
          }}
          className='font-montserrat text-base text-white leading-7 lg:w-[500px] w-full mt-6 md:px-0 font-bold'><span className='text-[#FF26B9]'>Adherence to Hackathon Rules:</span>Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.</motion.p>
          </div>

          {/* for the button */}
          <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay:0.2 }}
          variants={{
              hidden: { opacity: 0, x: 50 },
              visible: {opacity: 1, x: 0 }
          }}
           className='flex justify-center md:justify-normal mt-14'>

                       <Link to='/register'><a href="" className='px-10 py-4 text-white text-center rounded-md font-normal font-montserrat primary-color'>Read More</a></Link>
                       </motion.div>

      </div>
      
    </div>
  </div>
  )
}

export default Attributes