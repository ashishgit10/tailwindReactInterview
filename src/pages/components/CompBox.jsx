import React from 'react'
import bottom from '../../assets/Landing/CompBox/RecBottom.png'


const CompBox = (props) => {
    return (<>
        <div className='bg-black h-[100px]  w-[250px] md:w-[240px] rounded-md relative hover:scale-105 transition-all duration-200 md:mx-2'>
            <div className='absolute text-white pt-1 px-2 text-lg'>{props.prop.title}</div>
            <img className='h-[140px] rounded-md' src={bottom} />
        </div>
    </>
    )
}

export default CompBox