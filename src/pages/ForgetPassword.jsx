import React from 'react'

const ForgetPassword = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-slate-200'>
      <div className=' bg-white h-60 w-80 p-6 rounded-3xl'>
        <div className='font-bold text-sky-900 uppercase'>Forgot Your Password?</div>
        <div className='pt-2 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ipsum dolor sit amet consectetur.</div>
        <div className='flex flex-col pt-3'>
                <label htmlFor='email' className='text-xs'>Email Address</label>
                <input className='px-3 border-2 placeholder:text-sm' type='email' placeholder='Your Email' required/></div>
            <button className='border-2 mt-4 text-white w-full bg-sky-700 rounded-md text-xs py-1'>Request Reset Link</button>
            </div>
      </div>
  )
}

export default ForgetPassword