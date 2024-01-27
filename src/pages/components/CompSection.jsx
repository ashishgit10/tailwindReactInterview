import React from 'react'
import CompBox from './CompBox'

const CompSection = () => {

    const list = [{
        id: 1,
        title: "Hackathons",
    },
    {
        id: 2,
        title: "Events",
    },
    {
        id: 3,
        title: "Cources",
    },
    {
        id: 4,
        title: "Internship",
    },
    ]


    return (
        <div className="bg-comp w-full bg-no-repeat bg-center bg-cover pb-6 p-10">
        <div className='md:max-w-screen-lg md:m-auto '>

            <div className=' pb-8'>
                <h2 className='text-blue-700 font-bold text-2xl md:text-3xl'>Competitions</h2>
                <h3 className='text-sm pt-2'>Gear up for some great EXPERIENCE!</h3>
            </div>
            <div className='flex flex-wrap justify-center md:justify-evenly items-center w-full'>
                {
                    list.map(lists => (
                        <div key={lists.id} className=' flex justify-center items-center mb-12'>
                            <CompBox prop={lists} />
                        </div>
                    ))
                }
        </div>
            </div>
        </div>
    )
}

export default CompSection