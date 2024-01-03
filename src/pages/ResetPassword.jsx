import React from 'react'
import hide from "../assets/hide.svg"
import show from "../assets/show.svg"
import { useState } from 'react'
const ResetPassword = () => {
  const [type, setType] = useState('password')
  const [icon, setIcon] = useState(hide)
  const pass = [{
    "id": "1",
    "rule": "lorem ipsum  contain passowrd"
  },
  {
    "id": "2",
    "rule": "lorem ipsum  contain passowrd"
  },
  {
    "id": "3",
    "rule": "lorem ipsum  contain passowrd"
  },
  {
    "id": "4",
    "rule": "lorem ipsum  contain passowrd"
  },
  {
    "id": "5",
    "rule": "lorem ipsum  contain passowrd"
  },
  {
    "id": "5",
    "rule": "lorem ipsum  contain passowrd"
  },
  ]
  const handleIcon = () => {
    if (type == 'password') {
      setIcon(show)
      setType('text')
    }
    else {
      setIcon(hide)
      setType('password')
    }
  }
  return (
    <div className='bg-slate-200 h-screen w-screen justify-center items-center flex'>
      <div className='w-80  bg-white rounded-3xl p-8'>
        <div className='font-bold uppercase text-sky-900'>
          Reset Password
        </div>
        <div className='pt-2 text-sm'> Please enter your new password</div>
        <div className='flex flex-col pt-3'>
          <label htmlFor='email' className='text-xs'>New Password</label>
          <div className='border-2 flex focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'>
            <input className='px-3  relative placeholder:text-xs  ' type={type} placeholder='Your Password' required />
            <span><img onClick={handleIcon} className='w-[25px]' src={icon} /></span>
          </div>
        </div>
        <label htmlFor='email' className='text-xs mt-2'>Re-enter your Password</label>
        <input className='px-3 border-2 placeholder:text-xs  w-[100%]  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500' type='password' placeholder='Your Password' required />
        <button className='border-2 mt-4 text-white w-full bg-sky-700 rounded-md text-xs py-1'> Reset Password</button>

        <div>
          <div className='pt-4 text-sm pb-3'>
            Your password must follow this rule
          </div>
        </div>{
          pass.map(passes => (
            <div key={passes.id} className='flex text-sm'>
              <input type="radio" checked className='mr-2 accent-green-500' />
              <div>{passes.rule}</div>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default ResetPassword