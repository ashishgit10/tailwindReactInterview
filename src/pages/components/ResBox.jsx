import React from 'react'

const ResBox = (props) => {
    return (
        <>
            <div className='bg-white my-6 drop-shadow-xl rounded-xl p-6 flex justify-center items-center flex-col w-[300px] hover:scale-105 transition-all duration-300'>
                <img className='w-40 ' src={props.props.img} alt={props.props.title} />
                <div>
                    <div><h4 className='font-bold pt-4'>{props.props.title}</h4></div>
                    <div className='text-sm pt-1'>{props.props.disc}</div>
                </div>
            </div>
        </>
    )
}
export default ResBox