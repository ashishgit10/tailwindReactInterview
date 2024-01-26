import React from 'react'
import ResBox from './ResBox';
const Resource = () => {
    const list = [{
        id: 1,
        title: "Backend Development",
        img: require("../../assets/Landing/ResImg/pic1.png"),
        disc: "Explore opportunities from across the globe to learn, showcase skills, gain CV points, & get hired by your dream company."
    },
    {
        id: 2,
        title: "Backend Development",
        img: require("../../assets/Landing/ResImg/pic2.png"),
        disc: "Explore opportunities from across the globe to learn, showcase skills, gain CV points, & get hired by your dream company."
    },
    {
        id: 3,
        title: "Backend Development",
        img: require("../../assets/Landing/ResImg/pic3.png"),
        disc: "Explore opportunities from across the globe to learn, showcase skills, gain CV points, & get hired by your dream company."
    },
    {
        id: 4,
        title: "Backend Development",
        img: require("../../assets/Landing/ResImg/pic4.png"),
        disc: "Explore opportunities from across the globe to learn, showcase skills, gain CV points, & get hired by your dream company."
    },
    {
        id: 5,
        title: "Backend Development",
        img: require("../../assets/Landing/ResImg/pic1.png"),
        disc: "Explore opportunities from across the globe to learn, showcase skills, gain CV points, & get hired by your dream company."
    },
    {
        id: 6,
        title: "Backend Development",
        img: require("../../assets/Landing/ResImg/pic2.png"),
        disc: "Explore opportunities from across the globe to learn, showcase skills, gain CV points, & get hired by your dream company."
    },
    {
        id: 7,
        title: "Backend Development",
        img: require("../../assets/Landing/ResImg/pic3.png"),
        disc: "Explore opportunities from across the globe to learn, showcase skills, gain CV points, & get hired by your dream company."
    },
    {
        id: 8,
        title: "Backend Development",
        img: require("../../assets/Landing/ResImg/pic4.png"),
        disc: "Explore opportunities from across the globe to learn, showcase skills, gain CV points, & get hired by your dream company."
    },

    ]
    return (
        <div className='p-10'>
            <div>
                <h2 className='text-blue-700 font-bold text-2xl'>Resource</h2>
                <h3 className='text-sm pt-2'>Handpicked content for all budding learners.</h3>
            </div>
            <div className='flex justify-around items-center flex-wrap'>
                {
                    list.map(lists => (
                        <ResBox key={lists.id} props={lists} />
                    )) 
                }
            </div>
        </div>
    )
}

export default Resource