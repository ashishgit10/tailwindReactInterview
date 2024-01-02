import React from 'react'
import bg from "../assets/bg1.jpg"
import logo from "../assets/bot.png"
import mail from "../assets/mail.svg"
import lock from "../assets/lock.svg"
import google from "../assets/google.svg"
const Login = () => {
  return (
    <div className='pt-10 h-screen w-full m-auto'>
      <div className='flex  max-w-2xl m-auto justify-center'>
        <div className=''>
          <img className='sm:w-[285px] hidden sm:block w-full sm:m-auto' src={bg} />
        </div>
        <div className='p-6 bg-slate-100 w-80 h-100 ml-4'>
          <div>
            <img className='w-8' src={logo} />
            <div className='text-blue-500 font-bold flex flex-col font text-[10px]'>Craxinno
              <span>CRM</span>
            </div>
            <div className='pt-4'>
              <div className='text-blue-600 text-2xl'> Welcome</div>
              <div className='text-2xl'>To <span className='font-bold text-blue-900'> Craxinno CRM</span></div>
            </div>
            <div className='flex flex-col pt-9'>
              <div className='flex flex-col'>
                <label htmlFor='email' className='text-xs'>Email</label>
                <div className='flex relative justify-center items-center'>
                  <img className="w-4 absolute top-2 left-2" src={mail} /></div>
                <input className='px-7 py-1 border-2 placeholder:text-sm flex-grow' type='email' placeholder='Enter your Email' />
              </div>
              <div className='flex flex-col pt-3'>
                <label htmlFor='email' className='text-xs'>Password</label>
                <div className='flex relative justify-center items-center'>
                  <img className="w-5 absolute top-2 left-1" src={lock} /></div>
                <input className='px-7 py-1 border-2 placeholder:text-sm flex-grow' type='password' placeholder='Enter your Password' />
              </div>
            </div>
            <div className='flex px-2 pt-1 justify-between'>
              <div className='flex' >
                <input type='checkbox'></input>
                <div className='px-1 text-xs'>Remember me</div>
              </div>
              <div className='text-xs'>Forgot Password?</div>
            </div>
            <div className='pt-10 text-center'>
              <button className='border-2 bg-white w-full border-sky-700 rounded-md text-xs py-1'>Login</button>
              <div className='py-2'>Or</div>
              <button className='border-2 flex justify-center items-center bg-white w-full border-sky-700  rounded-md text-xs py-1'>
                <img className='w-4 pr-1' src={google} />
                Login with Gmail</button>
            </div>
            <div className='pt-2 text-center text-sm'>
              <div>Don't have an Account?<a href="" className='text-sky-700'> Create Here</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login