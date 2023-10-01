import React from 'react'
import { motion } from "framer-motion"

import '../index.css'
import one from '../icons/one.svg'
import two from '../icons/two.svg'
import three from '../icons/three.svg'
import four from '../icons/four.svg'
import five from '../icons/five.svg'
import six from '../icons/six.svg'

const Timeline = () => {

  return (
   <div className='bg-deep-blue' id='timeline'>
      
    <div className="relative container mx-auto px-6 flex flex-col space-y-8">
            <div
                className="absolute z-0 w-1 h-full bg-light-purple shadow-md inset-0 left-12 md:mx-auto md:right-0 md:left-0"
            ></div>
            {/* the first box */}
            <div className="relative z-10"> 
              {/*for the number in the circle  */}
            <motion.img
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.2 }}
            variants={{
                hidden: { opacity: 0, x: -5 },
                visible: {opacity: 1, x: 0 }
            }}
                    src={one}
                    alt=""
                    className="bg-light-purple p-2 h-12 w-12 rounded-full shadow-md border-8 border-deep-blue xs:absolute md:mx-auto md:left-0 md:right-0 md:top-"
                />
                <div className='flex flex-col md:flex-row ml-10 md:ml-0'>

                  {/* the first flex */}
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay:0.1 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: {opacity: 1, x: 0 }
                }}
                className="relative xs:pl-28 xs:pt-0 md:w-1/2 ml-auto md:pl-16">
                    
                    <div className="rounded-md shadow-md">
                        
                        <h1 className="text-2xl font-bold pt-1 text-light-purple font-montserrat">
                           Hackathon Announcement.
                        </h1>
                        <p className="pt-3 text-white font-montserrat w-3/4">
                        The getlinked tech hackathon 1.0 is formally announced
                        to the general public and teams begin to get ready to register
                        </p>
                    </div>
                </motion.div>
                  {/* the second flex */}
                  <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay:0.2 }}
                  variants={{
                      hidden: { opacity: 0, x: 50 },
                      visible: {opacity: 1, x: 0 }
                  }}
                  className='md:mr-[25%] ml-0'>
                  <span
                            className="font-bold text-light-purple lg:text-2xl md:text-xl text-lg tracking-wide mr-0 font-montserrat"
                            >November 18, 2023</span>
                  </motion.div>
                
                </div>
                   
    </div>


           {/* the second box */}
           <div className="relative z-10"> 
              {/*for the number in the circle  */}
              <div className='mt-10'>
              <motion.img
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.2 }}
              variants={{
                  hidden: { opacity: 0, x: -5 },
                  visible: {opacity: 1, x: 0 }
              }}
                    src={two}
                    alt=""
                    className="bg-light-purple p-1 h-12 w-12 rounded-full shadow-md border-8 border-deep-blue xs:absolute md:mx-auto md:left-0 md:right-0"
                />
              </div>
           
                <div className='flex flex-col-reverse md:flex-row ml-10 md:ml-0'>
                  {/* the first flex */}
                  <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay:0.1 }}
                  variants={{
                      hidden: { opacity: 0, x: -50 },
                      visible: {opacity: 1, x: 0 }
                  }}
                  className='md:ml-[25%] ml-0'>
                  <span
                            class="font-bold text-light-purple lg:text-2xl md:text-xl text-lg tracking-wide mr-0 font-montserrat"
                            >November 18, 2023</span>
                  </motion.div>
                {/* the second flex */}
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay:0.2 }}
                variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: {opacity: 1, x: 0 }
                }}
                class="relative xs:pl-28 xs:pt-0 md:w-1/2 ml-auto md:pl-16">
                    
                    <div className="rounded-md shadow-md">
                        
                        <h1 className="text-2xl font-bold pt-1 text-light-purple font-montserrat">
                        Teams Registration begins.
                        </h1>
                        <p className="pt-3 text-white font-montserrat w-3/4">
                        Interested teams can now show their interest in the
                        getlinked tech hackathon 1.0 2023 by proceeding to register
                        </p>
                    </div>
                </motion.div>
                </div>
                   
    </div>


      {/* the third box */}
      <div className="relative z-10"> 
              {/*for the number in the circle  */}
            <motion.img
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.2 }}
            variants={{
                hidden: { opacity: 0, x: -5 },
                visible: {opacity: 1, x: 0 }
            }}
                    src={three}
                    alt=""
                    className="bg-light-purple p-2 h-12 w-12 rounded-full shadow-md border-8 border-deep-blue xs:absolute md:mx-auto md:left-0 md:right-0 md:top-"
                />
                <div className='flex flex-col md:flex-row ml-10 md:ml-0'>

                  {/* the first flex */}
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay:0.1 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: {opacity: 1, x: 0 }
                }}
                className="relative xs:pl-28 xs:pt-0 md:w-1/2 ml-auto md:pl-16">
                    
                    <div className="rounded-md shadow-md">
                        
                        <h1 className="text-2xl font-bold pt-1 text-light-purple font-montserrat">
                        Teams Registration ends
                        </h1>
                        <p className="pt-3 text-white font-montserrat w-3/4">
                        Interested Participants are no longer Allowed to
                          register
                        </p>
                    </div>
                </motion.div>
                  {/* the second flex */}
                  <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay:0.2 }}
                  variants={{
                      hidden: { opacity: 0, x: 50 },
                      visible: {opacity: 1, x: 0 }
                  }}
                  className='md:mr-[25%] ml-0'>
                  <span
                            class="font-bold text-light-purple lg:text-2xl md:text-xl text-lg tracking-wide mr-0 font-montserrat"
                            >November 18, 2023</span>
                  </motion.div>
                
                </div>
                   
    </div>


              {/* the fourth box */}
              <div className="relative z-10"> 
              {/*for the number in the circle  */}
              <div className='mt-10'>
              <motion.img
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.2 }}
              variants={{
                  hidden: { opacity: 0, x: -5 },
                  visible: {opacity: 1, x: 0 }
              }}
                    src={four}
                    alt=""
                    className="bg-light-purple p-1 h-12 w-12 rounded-full shadow-md border-8 border-deep-blue xs:absolute md:mx-auto md:left-0 md:right-0"
                />
              </div>
           
                <div className='flex flex-col-reverse md:flex-row ml-10 md:ml-0'>
                  {/* the first flex */}
                  <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay:0.1 }}
                  variants={{
                      hidden: { opacity: 0, x: -50 },
                      visible: {opacity: 1, x: 0 }
                  }}
                  className='md:ml-[25%] ml-0'>
                  <span
                            class="font-bold text-light-purple lg:text-2xl md:text-xl text-lg tracking-wide mr-0 font-montserrat"
                            >November 18, 2023</span>
                  </motion.div>
                {/* the second flex */}
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay:0.2 }}
                variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: {opacity: 1, x: 0 }
                }}
                className="relative xs:pl-28 xs:pt-0 md:w-1/2 ml-auto md:pl-16">
                    
                    <div className="rounded-md shadow-md">
                        
                        <h1 className="text-2xl font-bold pt-1 text-light-purple font-montserrat w-3/4">
                        Announcement of the accepted teams
                        and ideas
                        </h1>
                        <p className="pt-3 text-white font-montserrat w-3/4">
                        All teams whom idea has been accepted into getlinked tech
                        hackathon 1.0 2023 are formally announced
                        </p>
                    </div>
                </motion.div>
                </div>
                   
    </div>

    
      {/* the fifth box */}
      <div className="relative z-10"> 
              {/*for the number in the circle  */}
            <motion.img
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.2 }}
            variants={{
                hidden: { opacity: 0, x: -5 },
                visible: {opacity: 1, x: 0 }
            }}
                    src={five}
                    alt=""
                    className="bg-light-purple p-2 h-12 w-12 rounded-full shadow-md border-8 border-deep-blue xs:absolute md:mx-auto md:left-0 md:right-0 md:top-"
                />
                <div className='flex flex-col md:flex-row ml-10 md:ml-0'>

                  {/* the first flex */}
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay:0.1 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: {opacity: 1, x: 0 }
                }}
                className="relative xs:pl-28 xs:pt-0 md:w-1/2 ml-auto md:pl-16">
                    
                    <div className="rounded-md shadow-md">
                        
                        <h1 className="text-2xl font-bold pt-1 text-light-purple font-montserrat w-3/4">
                        Getlinked Hackathon 1.0 Offically Begins
                        </h1>
                        <p className="pt-3 text-white font-montserrat w-3/4">
                        Accepted teams can now proceed to build their
                        ground breaking skill driven solutions
                        </p>
                    </div>
                </motion.div>
                  {/* the second flex */}
                  <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay:0.2 }}
                  variants={{
                      hidden: { opacity: 0, x: 50 },
                      visible: {opacity: 1, x: 0 }
                  }}
                  className='md:mr-[25%] ml-0'>
                  <span
                            class="font-bold text-light-purple lg:text-2xl md:text-xl text-lg tracking-wide mr-0 font-montserrat"
                            >November 18, 2023</span>
                  </motion.div>
                
                </div>
                   
    </div>


    
              {/* the sixth box */}
              <div className="relative z-10"> 
              {/*for the number in the circle  */}
              <div className='mt-10'>
              <motion.img
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.2 }}
              variants={{
                  hidden: { opacity: 0, x: -5 },
                  visible: {opacity: 1, x: 0 }
              }}
                    src={six}
                    alt=""
                    className="bg-light-purple p-1 h-12 w-12 rounded-full shadow-md border-8 border-deep-blue xs:absolute md:mx-auto md:left-0 md:right-0"
                />
              </div>
           
                <div className='flex flex-col-reverse md:flex-row ml-10 md:ml-0'>
                  {/* the first flex */}
                  <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay:0.1 }}
                  variants={{
                      hidden: { opacity: 0, x: -50 },
                      visible: {opacity: 1, x: 0 }
                  }}
                  className='md:ml-[25%] ml-0'>
                  <span
                            class="font-bold text-light-purple lg:text-2xl md:text-xl text-lg tracking-wide mr-0 font-montserrat"
                            >November 18, 2023</span>
                  </motion.div>
                {/* the second flex */}
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay:0.2 }}
                variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: {opacity: 1, x: 0 }
                }}
                className="relative xs:pl-28 xs:pt-0 md:w-1/2 ml-auto md:pl-16">
                    
                    <div className="rounded-md shadow-md">
                        
                        <h1 className="text-2xl font-bold pt-1 text-light-purple font-montserrat w-3/4">
                        Demo Day
                        </h1>
                        <p className="pt-3 text-white font-montserrat w-3/4">
                        Teams get the opportunity to pitch their projects to judges.
                        The winner of the hackathon will also be announced on
                        this day
                        </p>
                    </div>
                </motion.div>
                </div>
                   
    </div>
  </div>
  </div>
  )
}

export default Timeline