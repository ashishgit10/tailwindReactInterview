import React from 'react'
import userImg from '../../assets/Landing/userImg.jpg'
const Navbar = () => {
    return (
        <div className='shadow-md'>

      
        <nav className=' h-14 flex md:max-w-screen-lg md:m-auto'>
            <div className='justify-between flex px-6 w-full items-center '>
                <div className='font-bold text-xl'>C<span className='text-blue-700 '>R</span>X</div>
                <div><img src={userImg} /></div>
            </div>
        </nav>
        </div>
    )
}

export default Navbar