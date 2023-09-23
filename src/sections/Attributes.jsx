import React from 'react'
import people from '../images/people.png'
import { Link } from 'react-router-dom'


const Attributes = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row justify-center items-center bg-deep-blue'>
      
    <div className='flex flex-col md:flex-row bg-deep-blue w-full max-w-[1600px] py-20'>

      {/* the first flexbox */}
      <div className='md:w-1/2 w-full flex items-center justify-center'>
          <img src={people} alt="" className='pt-20'/>
      </div>

      {/* the second flexbox */}
      <div className='flex flex-col gap-2 md:w-1/2 text-center w-full md:text-start pt-10 px-16 md:px-0'>

          <h1 className='font-bold font-montserrat text-xl md:text-3xl lg:text-4xl  text-white'>Judging Criteria</h1>
          <h1 className='font-bold font-montserrat text-xl md:text-3xl lg:text-4xl text-light-purple'>Key Attributes</h1>
          {/* the writing underneath */}
          <div className=''>
          <p className='font-montserrat text-base text-white leading-7 lg:w-[700px] w-full md:w-3/4 mt-6 md:px-0 font-bold'><span className='text-[#FF26B9]'>Innovation and Creativity:</span> Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.</p>

          <p className='font-montserrat text-base text-white leading-7 lg:w-[700px] w-full mt-6 md:px-0 font-bold'><span className='text-[#FF26B9]'>Functionality:</span>Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.</p>

          <p className='font-montserrat text-base text-white leading-7 lg:w-[700px] w-full mt-6 md:px-0 font-bold'><span className='text-[#FF26B9]'>Impact and Relevance:</span> Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.</p>

          <p className='font-montserrat text-base text-white leading-7 lg:w-[700px] w-full mt-6 md:px-0 font-bold'><span className='text-[#FF26B9]'>Technical Complexity:</span> Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.</p>

          <p className='font-montserrat text-base text-white leading-7 lg:w-[700px] w-full mt-6 md:px-0 font-bold'><span className='text-[#FF26B9]'>Adherence to Hackathon Rules:</span>Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.</p>
          </div>

          {/* for the button */}
          <div className='flex justify-center md:justify-normal mt-14'>

                       <Link to='/register'><a href="" className='px-10 py-4 text-white text-center rounded-md font-normal font-montserrat primary-color'>Read More</a></Link>
                       </div>

      </div>
      
    </div>
  </div>
  )
}

export default Attributes