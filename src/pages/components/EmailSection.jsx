import React from 'react'

const EmailSection = ({padding}) => {
    return (
        <div className={`${padding} w-full md:max-w-screen-lg md:m-auto`}>
            <h2 className='text-xl md:text-2xl'><span className='text-sky-600 font-bold '>Stay updated</span> on product releases and latest news from our team.</h2>
            <div className='flex justify-center items-center py-8'>
                <div className='bg-white drop-shadow-md  rounded-md md:w-[65%]'>
                    <input className='outline-none border-1 border-gray-500 py-2 px-8 rounded-md ' type="text" placeholder='Enter Your Email Address' />
                </div>
                <button className='bg-sky-600 text-white px-6 py-2 rounded-md ml-4'>Submit</button>
            </div>
        </div>
    )
}

export default EmailSection