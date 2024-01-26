import React from 'react'

const EmailSection = () => {
    return (
        <div className='p-10 w-full'>
            <h2 className='text-xl'><span className='text-sky-500 font-bold '>Stay updated</span> on product releases and latest news from our team.</h2>
            <div className='flex justify-center items-center pt-8'>
                <div className='bg-white drop-shadow-md  rounded-md'>
                    <input className='outline-none border-1 border-gray-500 py-2 px-8 rounded-md ' type="text" placeholder='Enter Your Email Address' />
                </div>
                <button className='bg-sky-500 text-white px-6 py-2 rounded-md mx-4'>Submit</button>
            </div>
        </div>
    )
}

export default EmailSection