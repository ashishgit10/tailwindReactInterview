import React from 'react'

const EventSection = () => {
    const list = [{
        id: 1,
        title: "Problem Of The Day!!",
        disc: "A brief description of the problem would be appropriate here or maybe even the problem title.",
        img: require("../../assets/Landing/EventImg/pic1.png"),
        btntitle: "Solve"
    },
    {
        id: 2,
        title: "Event OF This Week!!",
        disc: "A brief description of the problem would be appropriate here or maybe even the problem title.",
        img: require("../../assets/Landing/EventImg/pic2.png"),
        btntitle: "Participant"
    },
    {
        id: 3,
        title: "Upcoming Contest/Hackathons",
        disc: "A brief description of the problem would be appropriate here or maybe even the problem title.",
        img: require("../../assets/Landing/EventImg/pic3.png"),
        btntitle: "Attend"
    },
    {
        id: 4,
        title: "YET TO BE DECIDED",
        disc: "A brief description of the problem would be appropriate here or maybe even the problem title.",
        img: require("../../assets/Landing/EventImg/pic4.png"),
        btntitle: "View"
    },]



    return (<>
        <div>Your college events</div>
        <div>Explore opportunities from across the globe to learn, showcase skills, gain CV points, & get hired by your dream company.</div>
        <div className='flex justify-center flex-wrap items-center'>
            {
                list.map(lists => (
                    <div key={lists.id} className='my-6 mx-4'>
                        <div className="bg-black w-[380px] h-[180px] relative flex justify-end">
                            <div className='absolute text-white max-w-[45%] left-4 pt-4'>
                                <h4>{lists.title}</h4>
                                <h6 className='py-4 text-xs'>{lists.disc}</h6>
                            </div>
                            <img src={lists.img} />
                            <div className='absolute bottom-6 right-12'><button className='text-black bg-white rounded-md px-8 py-1'>{lists.btntitle}</button> </div>
                        </div>
                    </div>
                ))
            }    </div>

    </>
    )
}

export default EventSection