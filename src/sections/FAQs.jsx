import React from 'react'
import cloud from '../images/cloud.png'
import plus from '../icons/plus.svg'
const FAQs = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row justify-center items-center bg-deep-blue'>
      
    <div className='flex flex-col md:flex-row bg-deep-blue w-full max-w-[1600px] py-20 lg:px-20 px-10'>

      

      {/* the first flexbox */}
      <div className='flex flex-col gap-2 md:w-1/2 text-center w-full md:text-start pt-10 md:px-0 justify-center items-center md:items-start'>

      <h1 className='font-bold font-montserrat text-xl md:text-3xl lg:text-4xl  text-white'>Frequently Ask</h1>
          <h1 className='font-bold font-montserrat text-xl md:text-3xl lg:text-4xl text-light-purple'>Questions</h1>

          <p className='text-white font-montserrat font-normal text-base leading-7 md:w-1/2 w-3/4 mt-4'>We got questions to answers you might want to ask about <span className='font-bold'>getlinked 1.0</span></p>
        
        {/* div holding the FAQS */}
          <div className='flex-flex-col mt-[68px] w-full lg:w-3/4 text-start'>
          {/* FAQ 1 */}
          <div className='flex flex-col mb-6'>
            <div className='flex flex-row text-white font-montserrat'>
              <p>Can I work on a project I started before the hackathon?</p>
              <img src={plus} className="ml-auto"/>
            </div>

            {/* the line beneath */}
            
            <hr className='border-light-purple mt-[13px]'/>
            

          </div>

          {/* FAQ 2 */}
          <div className='flex-flex-col mb-6'>
            <div className='flex flex-row text-white font-montserrat'>
              <p>What happens if I need help during the hackathon?</p>
              <img src={plus} alt="" className="ml-auto"   />
              
            </div>

            {/* the line beneath */}
            
            <hr className='border-light-purple mt-[13px]'/>
            

          </div>

          {/* FAQ 3 */}
          <div className='flex-flex-col mb-6'>
            <div className='flex flex-row text-white font-montserrat'>
              <p>What happens if I don't have an idea for a project?</p>
              <img src={plus} alt="" className="ml-auto" />
            </div>

            {/* the line beneath */}
            
            <hr className='border-light-purple mt-[13px]'/>
            

          </div>

          {/* FAQ 4 */}
          <div className='flex-flex-col mb-6'>
            <div className='flex flex-row text-white font-montserrat'>
              <p>Can I join a team or do I have to come with one?</p>
              <img src={plus} alt="" className="ml-auto" />
            </div>

            {/* the line beneath */}
            
            <hr className='border-light-purple mt-[13px]'/>
            

          </div>

          {/* FAQ 5 */}
          <div className='flex-flex-col mb-6'>
            <div className='flex flex-row text-white font-montserrat'>
              <p>What happens after the hackathon ends</p>
              <img src={plus} alt="" className="ml-auto"/>
            </div>

            {/* the line beneath */}
            
            <hr className='border-light-purple mt-[13px]'/>
            

          </div>

          {/* FAQ 6 */}
          <div className='flex-flex-col mb-6'>
            <div className='flex flex-row text-white font-montserrat'>
              <p>Can I work on a project I started before the hackathon?</p>
              <img src={plus} alt="" className="ml-auto"/>
            </div>

            {/* the line beneath */}
            
            <hr className='border-light-purple mt-[13px]'/>
            

          </div>

          </div>

      </div>

      {/* the second flexbox */}
      <div className='md:w-1/2 w-full flex items-center justify-center mt-16 md:mt-0'>
          <img src={cloud} alt="" className="ml-auto"/>
      </div>
      
    </div>
  </div>
  )
}

export default FAQs