import React, {useState} from 'react'
import Header from '../sections/Header'
import { useForm } from 'react-hook-form'
import three from "../images/3d.png"
import walk from "../images/walking.png"


const Register = () => {
  const { register, handleSubmit, watch, formState: { errors }} = useForm();
  const [userInfo, setUserInfo] = useState()
  const [numValue, setNumValue] = useState()
  const [textValue, setTextValue] = useState()
  const [emailValue, setEmailValue]  = useState()
  const [textsValue, setTextsValue] = useState();
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOptions, setSelectedOptions] = useState('');
  const [isChecked, setIsChecked] = useState(false);





  const handleCheckboxChange = (e) => {setIsChecked(e.target.checked)};

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleChanges = (e) => {
    e.preventDefault();
    setSelectedOptions(e.target.value);
  };


  // for the submitting of the form
  const onSubmit = async (data, event) => {
    event.preventDefault();
    setIsChecked(false)
    setSelectedOption('');
    setSelectedOptions('')
    setNumValue('');
    setTextValue('');
    setEmailValue('');
    setTextsValue('');
    setUserInfo(data);
    console.log(data)}




  return (
    <div className='h-auto w-full second-grad pb-5'>
      <div>
        <Header />
      </div>

      {/* the div holding the 2 flexbox divs */}
      <div className='flex lg:flex-row flex-col max-w-[1350px] mx-auto items-center'>

      {/* the first flexbox */}
      <div className='my-10 lg:w-1/2 w-full'>
        <img src={three} alt="" className='w-full h-auto' />
      
      </div>


      {/* the second div */}
      <div className=' flex flex-col lg:w-1/2 w-[350px] shadow-3xl ring-1 ring-gray-900/5 border rounded-lg bg-white bg-opacity-5 border-opacity-30 border-black mt-5 md:mt-10 lg:px-12 px-6 mx-2 md:mx-0'>
        {/* the writing at the top */}
        <div className='mt-[15%] font-montserrat'>
        <p className='text-light-purple font-montserrat font-bold text-3xl leading-5 mb-4'>
        Register
        </p>
        <div className='flex flex-row gap-1 mt-10'>
        <p className='text-white font-montserrat font-normal text-sm leading-5 flex items-end'>
         Be part of this movement....
        </p>
        <img src={walk} alt="" />
        </div>
        

        <p className=' text-white font-montserrat font-normal lg:text-2xl text-xl leading-5 mt-6'>
        CREATE YOUR ACCOUNT
        </p>
        </div>

        {/* for the form */}
        <div className='font-montserrat mt-10 flex flex-col items-center justify-center'>
          <form onSubmit={handleSubmit(onSubmit)}>

            {/* the fist row input at the top */}
            <div className='flex md:flex-row gap-4 flex-col'>
              {/* Team Name */}
              <div>
                <h3 className='font-normal text-sm text-white mb-2' >
                  Team's Name
                </h3>
              <input
            
            type="text" value={textValue} placeholder='Enter the name of your group' id='name' className='px-4 text-white font-montserrat text-base w-[263px] md:h-[47px] h-[39px] placeholder:font-normal placeholder:text-sm placeholder:text-slate-400 border-white border-2 rounded-md bg-transparent placeholder:placeholder:py-0' {...register("name", { required: true })}
            />
              </div>
           
            {/* Phone number */}
            <div>
            <h3 className='font-normal text-sm text-white mb-2' >
                  Team's Phone
                </h3>
            <input
            
            type="number" value={numValue} placeholder='Enter your phone number' id='number'  className='px-4 text-white font-montserrat text-base w-[263px] md:h-[47px] h-[39px] first:placeholder:font-normal placeholder:text-sm placeholder:text-slate-400 border-white border-2 rounded-md bg-transparent placeholder:placeholder:py-0' {...register("number", { required: true })}
            />
            </div>
           
            </div>

            {/* the second row */}
              <div className='flex md:flex-row gap-4 flex-col mt-4'>
                  {/* email field */}
                  <div className='flex flex-col'>
                  <h3 className='font-normal text-sm text-white mb-2' >
                  Email
                </h3>
                  <input
            
            type="email" value={textValue} placeholder='Enter your email address' id='email' className='px-4 text-white font-montserrat text-base w-[263px] md:h-[47px] h-[39px] placeholder:font-normal placeholder:text-sm placeholder:text-slate-400 border-white border-2 rounded-md bg-transparent placeholder:placeholder:py-0'  {...register("email", { required: true })}
            />
            {/* the error message to be displayed */}
            {errors.name && ( <span role="alert" className='text-red-400 font-montserrat mt-2'>
          This field is required </span>)}
                  </div>

                  {/* the project topic */}
                  <div className='flex flex-col'>
                  <h3 className='font-normal text-sm text-white mb-2' >
                  Project Topic
                </h3>
                  <input
            
            type="text" value={textValue} placeholder='What is your group project topic' id='project' className='px-4 text-white font-montserrat text-base w-[263px] md:h-[47px] h-[39px] placeholder:font-normal placeholder:text-sm placeholder:text-slate-400 border-white border-2 rounded-md bg-transparent placeholder:placeholder:py-0'  {...register("project", { required: true })}
            />
            {/* the error message to be displayed */}
            {errors.name && ( <span role="alert" className='text-red-400 font-montserrat mt-2'>
          This field is required </span>)}
                  </div>
                 
              </div>

              {/* the third row */}
              <div className='flex md:flex-row gap-4 flex-col mt-4'>

                  {/* category field */}
                  <div className='flex flex-col'>
                  <h3 className='font-normal text-sm text-white mb-2' >
                  Category
                </h3>
                <label>
                
                  <select placeholder='What is your group project topic' className='px-4 text-white font-montserrat text-base w-[263px] md:h-[47px] h-[39px] placeholder:font-normal placeholder:text-sm placeholder:text-slate-400 border-white border-2 rounded-md bg-transparent placeholder:placeholder:py-0 bg-black bg-opacity-30' value={selectedOption} onChange={handleChange}>
                    <option value="">Select your category</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </label>
            {/* the error message to be displayed */}
            {errors.name && ( <span role="alert" className='text-red-400 font-montserrat mt-2'>
          This field is required </span>)}
                  </div>

                  {/* the group size field*/}
                  <div className='flex flex-col'>
                  <h3 className='font-normal text-sm text-white mb-2' >
                  Project Topic
                </h3>

                <label>
                
                <select placeholder='What is your group project topic' className='px-4 text-white font-montserrat text-base w-[263px] md:h-[47px] h-[39px] placeholder:font-normal placeholder:text-sm placeholder:text-slate-400 border-white border-2 rounded-md bg-transparent placeholder:placeholder:py-0 bg-black bg-opacity-30' value={selectedOptions} onChange={handleChanges}>
                  <option value="">Select</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </label>
                
            {/* the error message to be displayed */}
            {errors.name && ( <span role="alert" className='text-red-400 font-montserrat mt-2'>
          This field is required </span>)}
                  </div>
                 
              </div>      
        
              <p className='font-montserrat italic text-red-600 md:text-xs text-[9px] mt-4'>Please review your registration details before submitting</p>

              {/* for the checkbox */}
              <label className="mt-10 font-montserrat text-white text-xs">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                required
              />
              {' '}I agree with the event terms and conditions  and privacy policy
            </label>

            {/* for the button */}
        <div className='flex justify-center mt-8 mb-8'>

        <button href="" className='px-10 py-4 md:w-full w-[172px] text-white text-center rounded-md font-normal font-montserrat primary-color'>Submit</button>
        </div>
          </form>
        </div>

        

      </div>


      </div>
    </div>
  )
}

export default Register