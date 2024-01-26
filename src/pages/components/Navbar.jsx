import React from 'react'
import userImg from '../../assets/Landing/userImg.jpg'
const Navbar = () => {
    return (
        <nav className=' h-14 flex'>
            <div className='justify-between flex px-6 w-full items-center shadow-md'>
                <div className='font-bold text-xl'>C<span className='text-blue-700 '>R</span>X</div>
                <div><img src={userImg} /></div>
            </div>
        </nav>
    )
}

export default Navbar