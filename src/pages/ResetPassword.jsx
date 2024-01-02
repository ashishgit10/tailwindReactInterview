import React from 'react'

const ResetPassword = () => {
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
  return (
    <div className='bg-slate-200 h-screen w-screen justify-center items-center flex'>
      <div className='w-80  bg-white rounded-3xl p-8'>
        <div className='font-bold uppercase text-sky-900'>
          Reset Password
        </div>
        <div className='pt-2 text-sm'> Please enter your new password</div>
        <div className='flex flex-col pt-3'>
          <label htmlFor='email' className='text-xs'>New Password</label>
          <input className='px-3 border-2 placeholder:text-xs' type='email' placeholder='Your Password' required /></div>
        <label htmlFor='email' className='text-xs mt-2'>Re-enter your Password</label>
        <input className='px-3 border-2 placeholder:text-xs  w-[100%]' type='email' placeholder='Your Password' required />
        <button className='border-2 mt-4 text-white w-full bg-sky-700 rounded-md text-xs py-1'> Reset Password</button>

        <div>
          <div className='pt-4 text-sm pb-3'>
            Your password must follow this rule
          </div>
        </div>{
          pass.map(passes => (
            <div className='flex text-sm'>
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