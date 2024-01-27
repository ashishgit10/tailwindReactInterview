import React from 'react'

const Footer = ({paddingtop}) => {
    return (
        <div className={`bg-black ${paddingtop} w-full md:pt-6`}>
        <div className=' md:max-w-screen-lg md:m-auto'>
            <div className='flex justify-center items-center'>
                <div className='mx-4'><hr className='border-1 w-36 md:w-64'></hr></div>
                <div className='text-center'>
                    <h6 className='text-xs text-white'>MADE WITH ❤️ BY </h6>
                    <h5 className='text-white'>C<span className='text-sky-500'>R</span>X</h5>
                </div>
                <div className='mx-4'><hr className='border-1 w-36 md:w-64'></hr></div>
            </div>
            <div className='flex flex-col justify-center items-center md:pt-6'>
                <div className='text-white'>Important Links</div>
                <div className='text-white'>Impressum/Imprint</div>
            </div>
            <div className=' flex justify-around py-10 '>
                <div>
                    <h4 className='text-white'>COMPANY</h4>
                    <div>
                        <p className='text-white text-xs py-1'>About Us</p>
                        <p className='text-white text-xs py-1'>Careers</p>
                        <p className='text-white text-xs py-1'>BLogs</p>
                        <p className='text-white text-xs py-1'>Team</p>
                    </div>
                </div>
                <div>
                    <h4 className='text-white'>CONTACT</h4>
                    <div>
                        <p className='text-white text-xs py-1'>Help & Support</p>
                        <p className='text-white text-xs py-1'>Event Venue</p>

                    </div>
                </div>
                <div>
                    <h4 className='text-white'>LEGAL</h4>
                    <div>
                        <p className='text-white text-xs py-1'>Terms & Conditions</p>
                        <p className='text-white text-xs py-1'>Privacy Policy</p>
                        <p className='text-white text-xs py-1'>Cookie Policy</p>
                    </div>
                </div>
            </div>
            </div>
            <div className='border-t-2 border-t-white p-2'>
                <h5 className='text-white text-xs text-center'>Copyright © 2023 - All rights reserved by Coderscruxx</h5>
            </div>
        </div>
    )
}

export default Footer