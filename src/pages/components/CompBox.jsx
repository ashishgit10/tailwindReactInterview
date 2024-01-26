import React from 'react'
import bottom from '../../assets/Landing/CompBox/RecBottom.png'


const CompBox = (props) => {
    return (<>
        <div className='bg-black h-[100px]  w-[250px] rounded-md relative'>
            <div className='absolute text-white pt-1 px-2 text-lg'>{props.prop.title}</div>
            <img className='h-[140px] rounded-md' src={bottom} />
        </div>
    </>
    )
}

export default CompBox