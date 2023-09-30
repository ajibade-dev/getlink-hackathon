import React, { useState } from 'react'
import Header from '../sections/Header'
import facebook from "../icons/facebook.svg"
import insta from "../icons/insta.svg"
import mdi from "../icons/mdi_instagram.svg"
import x from "../icons/x.svg"

import { useForm} from "react-hook-form"


const Contact = () => {
  const { register, handleSubmit, watch, formState: { errors }} = useForm();
  const [userInfo, setUserInfo] = useState()
  const [textValue, setTextValue] = useState()
  const [emailValue, setEmailValue]  = useState()
  const [textsValue, setTextsValue] = useState();

  // for the submitting of the form
  const onSubmit = async (data, event) => {
    event.preventDefault();
    setTextValue('');
    setEmailValue('');
    setTextsValue('');
    setUserInfo(data);
    console.log(data)
  

    try {
      const response = await fetch('{{https://backend.getlinked.ai/}}/hackathon/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Set the appropriate content type
        },
        body: JSON.stringify(userInfo), // Convert data to JSON format
      });

      if (response.ok) {
        // Handle success, show success message, reset form, etc.
        const responseData = await response.json();
        console.log('API Response:', responseData);
      } else {
        // Handle errors, show error message, etc.
        console.error('API Error:', response.statusText);
      }
    } catch (error) {
      // Handle network errors, etc.
      console.error('Fetch Error:', error);

    }

  };

    console.log(errors);

  

  return (
    <div className='h-auto w-full second-grad pb-5'>
      <div>
        <Header />
      </div>

      {/* the div holding the 2 flexbox divs */}
      <div className='flex md:flex-row flex-col max-w-[1280px] mx-auto'>

      {/* the first flexbox */}
      <div className='hidden md:flex flex-col my-40 w-1/2'>
      <p className='text-light-purple font-montserrat font-bold text-4xl leading-5 mb-4'>
      Get in touch
        </p>
        <p className='text-white font-montserrat font-normal text-base leading-5 mt-4 '>
       Contact Information
        </p>
        <p className='text-white font-montserrat font-normal text-base leading-5 mt-6 w-1/3'>
        27,Alara Street Yaba 100012 Lagos State
        </p>
        <p className='text-white font-montserrat font-normal text-base leading-5 mt-6'>
        Call Us : 07067981819
        </p>
        <p className='text-white font-montserrat font-normal text-base leading-5 mt-6 w-1/2'>
        we are open from Monday-Friday 08:00am - 05:00pm
        </p>
        <div className='flex flex-col gap-3'>
        <p className='text-light-purple font-montserrat font-normal text-base leading-5 mt-4'>
       Share on
        </p>
        <div className='flex flex-row gap-3'>
        <div className='flex items-end'>
        <img src={mdi} alt="" />
        </div>

        <div className='flex items-end'>
        <img src={x} alt="" />
        </div>

        <div className='flex items-end'>
        <img src={facebook} alt="" />
        </div>

        <div className='flex items-end'>
        <img src={insta} alt="" />
        </div>
        </div>
        
        </div>
      </div>


      {/* the second div */}
      <div className='relative md:w-1/2 w-auto shadow-3xl ring-1 ring-gray-900/5 border rounded-lg bg-white bg-opacity-5 border-opacity-30 border-black mt-10 lg:px-20 px-6 mx-4 md:mx-0'>
        {/* the writing at the top */}
        <div className='mt-[15%] font-montserrat'>
        <p className='text-light-purple font-montserrat font-bold text-xl leading-5 mb-4'>
        Questions or need assistance?
        </p>
        <p className='text-light-purple font-montserrat font-bold text-xl leading-5 mb-4'>
        Let us know  about it!
        </p>

        <p className='flex md:hidden text-white font-montserrat font-normal text-sm leading-5 mb-4'>
        Email us below to any question related to our event
        </p>
        </div>

        {/* for the form */}
        <div className='font-montserrat mt-16'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
            
             type="text" value={textValue} placeholder='First Name' id='name' className='px-8 text-white font-montserrat text-base w-full placeholder:text-bold placeholder:text-white border-white border-2 rounded-md bg-transparent h-14 placeholder:px-8 placeholder:py-0' {...register("name", { required: true })}
             />
            {/* the error message to be displayed */}
            {errors.name && ( <span role="alert" className='text-red-400 font-montserrat mt-2'>
          This field is required </span>)}
            
            

            <input 
            
            type="email" value={emailValue} placeholder='Mail' id='email' className='px-8 text-white font-montserrat text-base w-full placeholder:text-bold placeholder:text-white border-white border-2 rounded-md bg-transparent h-14 placeholder:px-8 placeholder:py-0 mt-16' {...register("email", { required: true })}
            />

            {/* the error to be displayed */}
             {errors.email && ( <span role="alert" className='text-red-400 font-montserrat mt-2'>
              Dont you forget this field bruv!
          </span>)}
            
            
           

            <input
            
            type='text' value={textsValue} placeholder='Message' id='message' className='px-8 text-white font-montserrat text-base w-full placeholder:text-bold placeholder:text-white border-white border-2 rounded-md bg-transparent h-32 placeholder:py-0 mt-16' {...register("message", { required: true })}/>

            {/* the error to be displayed */}
             {errors.message && ( <span role="alert" className='text-red-400 font-montserrat mt-2'>
          Put in something for this field mate.</span>)}
           
            


            {/* for the button */}
        <div className='flex justify-center mt-8 mb-8'>

        <button href="" className='px-10 py-4 text-white text-center rounded-md font-normal font-montserrat primary-color'>Submit</button>
        </div>
          </form>
        </div>

        

      </div>
{/* for the other icons showing in the bottom */}
<div className='flex md:hidden flex-col mx-auto gap-3 mt-4'>
        <p className='text-light-purple font-montserrat font-normal text-base text-center leading-5 mt-4'>
       Share on
        </p>
        <div className='flex flex-row gap-3'>
        <div className='flex items-end'>
        <img src={mdi} alt="" />
        </div>

        <div className='flex items-end'>
        <img src={x} alt="" />
        </div>

        <div className='flex items-end'>
        <img src={facebook} alt="" />
        </div>

        <div className='flex items-end'>
        <img src={insta} alt="" />
        </div>
        </div>
        
        </div>
      </div>
    </div>
  )
  }

export default Contact