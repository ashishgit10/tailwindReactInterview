import React from 'react'

const ResBox = (props) => {
    return (
        <>
            <div className='bg-white my-6 drop-shadow-xl rounded-xl p-6  w-[300px] '>
                <img src={props.props.img} alt={props.props.title} />
                <div>
                    <div><h4 className='font-bold'>{props.props.title}</h4></div>
                    <div>{props.props.disc}</div>
                </div>
            </div>
        </>
    )
}
export default ResBox