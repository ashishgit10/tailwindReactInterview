import React from 'react'
import bg from "../assets/bg1.jpg"

const Signup = () => {
  return (
    <div className='pt-4 bg-gradient-to-r from-cyan-300 to-blue-400 w-full h-screen'>
      <div className='bg-white max-w-[90%] sm:flex  sm:max-w-[50%] md:max-w-screen m-auto rounded-3xl '>
        <div className=' p-4 w-full'>

          <div className='flex justify-around'>
            <div>
              <div className='font-bold'>Anywhere App<span className='font-bolder text-lg text-blue-600'>.</span></div>
            </div>
            <div className='text-gray-400'>Home</div>
            <div className='text-gray-400'>Join</div>
          </div>
          <div className='pt-20'>
            <div className='text-xs font-bold text-gray-400'>START FOR FREE</div>
            <div className='text-4xl pt-2 font-bold'>Create new account<span className='rounded text-blue-700'>.</span></div>
            <div className='text-gray-500 pt-3'>Already a Member? <span className='text-blue-500'>Log in</span></div>
          </div>
          <div className='pt-6'>
            <div className='flex justify-between'>
              <div className='w-[40%] bg-gray-200 px-4 py-2 rounded-xl flex flex-col'>
                <span className='text-xs'>First name</span>
                <input className='bg-transparent border-b-2 border-white' type="mail" />
              </div>
              <div className='w-[40%] bg-gray-200 px-4 py-2 rounded-xl flex flex-col'>
                <span className='text-xs'>Last Name</span>
                <input className='bg-transparent border-b-2 border-white' type="mail" />
              </div>
            </div>
          </div>
          <div>
            <div className=' w-full mt-3 bg-gray-200 px-4 py-2 rounded-xl flex flex-col'>
              <span className='text-xs'>Email</span>
              <input className='bg-transparent border-b-2 border-white ' type="mail" />
            </div></div>
          <div className='flex justify-around pt-4'>
            <div className='bg-gray-300 p-3 rounded-3xl text-gray-500'>Change Method</div>
            <div className='bg-blue-600 p-3 rounded-3xl text-white'>Create Method</div>
          </div>
        </div>
        <div className='hidden md:block'>
          <img className='rounded-r-3xl w-full before:content-[""]' src={bg} />
        </div>
      </div>
    </div>
  )
}

export default Signup