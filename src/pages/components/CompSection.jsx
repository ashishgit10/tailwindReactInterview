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
        <div className="bg-comp w-full h-[100vh] bg-no-repeat bg-center bg-cover">
            <div className=' p-10'>
                <h2 className='text-blue-700 font-bold text-2xl'>Competitions</h2>
                <h3 className='text-sm pt-2'>Gear up for some great EXPERIENCE!</h3>
            </div>
            <div className='flex flex-wrap justify-around items-center w-full'>
                {
                    list.map(lists => (
                        <div key={lists.id} className=' flex justify-center items-center my-8'>
                            <CompBox prop={lists} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CompSection