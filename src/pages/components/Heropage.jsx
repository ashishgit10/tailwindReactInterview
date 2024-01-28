import React from 'react'
import hero from '../../assets/Landing/hero.svg'
import srch from '../../assets/Landing/search.png'

const Heropage = () => {

    const list = [{
        id: 1,
        title: "Python course",
    },
    {
        id: 2,
        title: "User Interface course",
    },
    {
        id: 3,
        title: "Frontend Developer course",
    },
    {
        id: 4,
        title: "Figma course",
    },
    {
        id: 5,
        title: "Flutter course",
    },
    {
        id: 6,
        title: "Backend Developer course",
    },
    {
        id: 7,
        title: "Python course",
    },
    {
        id: 8,
        title: "User Interface course",
    },
    {
        id: 9,
        title: "Frontend Developer course",
    },

    ]
    return (
        <div className='w-full'>
            <div className='flex justify-center items-center p-4 md:pt-6 flex-col md:flex-row md:max-w-screen-lg md:m-auto'>

                <div className='md:w-[45%]'>
                    <img className='w-[100%]' src={hero} />
                </div>
                <div className='md:w-[55%]'>
                    <div className='text-center'>
                        <h2 className='text-[#4E4FEB] text-xl md:text-4xl font-bold'>Find the best courses, wherever they exist</h2>
                        <h3 className='py-2 font-semibold'>7000+ Course Are Available Courses from Top Institutions And Mentors.</h3>
                    </div>
                    <div className=' flex drop-shadow-md bg-white rounded-lg py-2 px-6 items-center '>
                        <img className='w-6' src={srch} />
                        <input className='px-6 border-none bg-transparent outline-none placeholder-gray-500' type='text' placeholder='Eg. Best UI/UX Course' />
                    </div>
                    <div className='pt-8 md:pt-4'>
                        <h4 className='font-bold'>Or browse by subject or language</h4>
                        <div className='flex flex-wrap justify-center'>
                            {
                                list.map(lists => (

                                    <div key={lists.id} className='flex drop-shadow-md bg-white rounded-lg flex-row my-2 md:my-1 p-2 mx-4 md:mx-1'>
                                        <div className='text-sm'>{lists.title}</div>
                                    </div>
                                )
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Heropage