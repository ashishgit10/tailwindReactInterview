import React from 'react'
import Compiler from './components/Compiler'
import Button from './components/Button'
import logo1 from '../assets/LandingLogo/logo1.png'
import logo2 from '../assets/LandingLogo/logo2.png'
import logo3 from '../assets/LandingLogo/logo3.png'
import banner from '../assets/LandingLogo/iitbanner.png'
import mask from "../assets/LandingLogo/Mask.png"
import Footer from './components/Footer'
import EmailSection from './components/EmailSection'
const LandingPage = () => {


    const list = [{
        id: 1,
        title: "Hackathons",
        disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..",
        img: require("../assets/LandingLogo/Perklogo/pic.png"),
    },
    {
        id: 2,
        title: "Quizes",
        disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..",
        img: require("../assets/LandingLogo/Perklogo/pic.png"),
    },
    {
        id: 3,
        title: "Case Study",
        disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..",
        img: require("../assets/LandingLogo/Perklogo/pic.png"),
    },
    {
        id: 4,
        title: "Product Manage",
        disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..",
        img: require("../assets/LandingLogo/Perklogo/pic.png"),
    },

    ]

    const list2 = [{
        id: 1,
        img: require("../assets/LandingLogo/profilepic.png"),
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..",
        disc: "Chair Person GFG",
        name: "Ashish",
    },
    {
        id: 2,
        img: require("../assets/LandingLogo/profilepic.png"),
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..",
        disc: "Chair Person GFG",
        name: "Ashish",
    },
    {
        id: 3,
        img: require("../assets/LandingLogo/profilepic.png"),
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..",
        disc: "Chair Person GFG",
        name: "Ashish",
    },
    {
        id: 4,
        img: require("../assets/LandingLogo/profilepic.png"),
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..",
        disc: "Chair Person GFG",
        name: "Ashish",
    },
    ]
    return (
    <>
        <div className=" w-full  mx-auto py-4 px-4 drop-shadow-lg bg-white">
            <div className='md:max-w-screen-lg md:m-auto flex justify-between  items-center'>
                <div className=" text-black font-bold ">
                    <a href='#'>
                        <span className="text-3xl">C</span>
                        <span className="text-3xl bg-gradient-to-r from-[#3DEDC8] to-[#06E1FF] bg-clip-text text-transparent">r</span>
                        <span className="text-3xl">x</span>
                    </a>
                </div>
                <div className="">
                    <ul className='flex'>
                        <li className=" font-semibold list-none mx-2">
                            <a href='#'>Home</a>
                        </li>
                        <li className=" font-semibold list-none mx-2">
                            <a href='#'>Course</a>
                        </li>
                        <li className=" font-semibold list-none mx-2">
                            <a href='#'>About</a>
                        </li>
                        <li className=" font-semibold list-none mx-2">
                            <a href='#'>Register</a>
                        </li>
                    </ul>

                </div>
            </div>
        </div>



        <div className='md:mb-20'>
            <div className='md:max-w-screen-lg md:m-auto md:flex md:flex-row px-6'>
                <div className="flex md:w-[50%] flex-col justify-center items-center pt-6 md:px-1">
                    <div className=" text-center">
                        <div className='font-bold text-3xl md:text-4xl'>  That one go-to destination for Aspiring Engineers.</div>

                        <div className='text-md pt-2'>Welcome to Coders Crux: Where Knowledge Meets Code, Quizzes Challenge Minds, and Courses Shape Futures!</div>
                    </div>
                    <div className="flex justify-center mt-4">
                        <div className=" text-xl-5 font-bold text-gray-600 border-r-2 border-l-zinc-700 px-2">Learn</div>
                        <div className="text-xl-5 font-bold text-gray-600 border-r-2 border-l-zinc-700  px-2">Compete</div>
                        <div className=" text-xl-5 font-bold text-gray-600 px-2">Grow</div>
                    </div>
                    <div className='flex justify-center'>
                        <Button text={`Learn More`} border={`border-[1px]`} bordercolor={`border-black`} />
                        <Button text={`Get Started`} bgcolor={`linear-gradient(93.03deg, #06e1ff, #7dfc89)`} />
                    </div>
                </div>

                <div className="relative w-[100%] mx-auto mt-4 md:w-[50%] md:max-w-screen:flex md:max-w-screen:justify-center">
                    <Compiler />
                </div>
            </div></div>





        <div className='bg-white drop-shadow-xl mt-8'>
            <div className='flex justify-center md:justify-evenly py-10 w-full md:p-6'>
                <img className='w-[140px] md:w-[200px]' src={logo1} />
                <img className='w-[115px] md:w-[200px]' src={logo3} />
                <img className='w-[115px] md:w-[200px]' src={logo2} />
            </div>
        </div>

        <div className=' mt-8 md:4xl px-4 md:px-8'>

        <div className=' md:max-w-screen-lg md:m-auto flex flex-col justify-center items-center'>
            <h1 className='text-3xl font-bold text-center md:text-4xl '>Our Focus</h1>
            <p className='text-xs text-center text-gray-500 md:text-lg md:pt-4'>Our goal at Coders Crux is clear and resolute: to empower aspiring engineers and tech enthusiasts to reach their fullest potential. We believe that knowledge is the key to unlocking limitless possibilities, and we are committed to providing you with the tools, resources, and support needed to achieve greatness.</p>
            <Button text={`Learn More`} border={`border-[1px]`} bordercolor={`border-black`} bgcolor={`black`} textcolor={`white`} />
        </div>
        </div>



        {/* About Us */}
        <div className='mt-8'>
            <div className='p-6 md:max-w-screen-lg md:m-auto'>
                <h2 className='border-b-2 border-b-blue-500 inline-block font-bold md:text-4xl md:pb-3 '>About Us</h2>
                <div className='pt-6'>
                    <h2 className='font-bold md:text-lg'>Coders Crux Helps Engineering Students To Become Their Best Version.</h2>
                    <p className='text-xs pt-4 md:text-lg'>At Coders Crux, we are more than just an organization; we are a community of passionate individuals dedicated to nurturing the next generation of engineers and tech enthusiasts. Our journey began with a vision to empower budding engineers with knowledge, skills, and resources to excel in their chosen fields.</p>
                </div>
                <div className='rounded-lg flex p-4 items-center justify-center mt-8 md:justify-evenly' style={{ backgroundColor: 'rgba(251, 251, 251, 9)' }}>
                    <div>
                        <div className='flex flex-col border-r-2 pr-2 md:pr-16 py-2 justify-center items-center'>
                            <div style={{ color: 'rgba(255, 106, 124, 1)', fontSize: "35px", fontWeight: "bold" }}>1,000</div>
                            <div className='text-center text-sm'>Students from different colleges</div>
                        </div>
                    </div>

                    <div>
                        <div className='flex flex-col border-r-2 p-2 md:pr-16 py-2 justify-center items-center'>
                            <div style={{ color: 'rgba(255, 106, 124, 1)', fontSize: "35px", fontWeight: "bold" }}>79+</div>
                            <div className='text-center text-sm'>Different clubs all over india</div>
                        </div>
                    </div>

                    <div>
                        <div className='flex flex-col pl-2 py-2 justify-center items-center'>
                            <div style={{ color: 'rgba(255, 106, 124, 1)', fontSize: "35px", fontWeight: "bold" }}>23+</div>
                            <div className='text-center text-sm'>COLLEGES REGISTERED</div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <Button text={`Learn More`} border={`border-[1px]`} bordercolor={`border-black`} />
                    <Button text={`Register Now`} bgcolor={`linear-gradient(93.03deg, #06e1ff, #7dfc89)`} />
                </div>
            </div>
        </div>


        {/* Perks */}

        <div className='p-8'>
        <div className='md:max-w-screen-lg md:m-auto'>

      
            <h2 className='font-bold text-lg md:text-2xl '>Perks of joining Coders Crux</h2>
            <p>Join Coders Crux and unlock a world of opportunities:</p>
            <ul>
                <li className='list-disc'>Gain expertise with cutting-edge programming courses.</li>
                <li className='list-disc'>Challenge your skills with mind-boggling quizzes.</li>
                <li className='list-disc'>Connect with a vibrant community of fellow budding engineers.</li>
            </ul>

            <div className='flex w-full flex-wrap justify-center mt-8'>
                {
                    list.map(lists => (
                        <div key={lists.id} className='bg-slate-200 w-[90%] md:w-[40%] px-12 py-12 mx-4 my-4 flex flex-col justify-start rounded-lg'>
                            <div>
                                <img src={lists.img} />
                            </div>
                            <div className='font-bold py-2'>{lists.title}</div>
                            <div className='text-xs'>{lists.disc}</div>
                        </div>
                    ))
                }
            </div>
        </div>  </div>

        {/* About Us */}
        <div className='md:mt-8'>
            <div className='p-6 md:max-w-screen-lg md:m-auto'>
                <h2 className='border-b-2 border-b-blue-500 inline-block font-bold md:text-4xl md:pb-3'>Supported By</h2>
                <div className='pt-6'>
                    <h2 className='font-bold text-xl'>Ideation Innovation & Incubation (I-3) Foundation</h2>
                    <p className='text-sm pt-4'>Ideation Innovation & Incubation (I-3) Foundation (I3F), a section 8 company is an umbrella organization at IIT (BHU), Varanasi for fostering an entrepreneurial ecosystem and nurturing start-ups. It provide ‘Start to Scale’ support for entrepreneurship and facilitates research activities to convert into commercial ventures..</p>
                </div>
                <div className='mt-6 relative'>
                    <h2 className='absolute text-white left-2 top-2 font-bold text-lg md:text-4xl'>IIT BHU</h2>
                    <img className='rounded-md' src={banner} />
                </div>
            </div>
        </div>

        {/* Advisory Team */}
        <div className='md:my-8 p-4'>
        <div className='md:max-w-screen-lg md:m-auto'>
            <h1 className='font-bold text-2xl text-center'>Our advisory Team</h1>
            <div className='flex flex-wrap justify-evenly p-2 pb-8'>
                {
                    list2.map(lists => (
                        <div key={lists.id} className='bg-slate-100 w-[100%] md:w-[45%] p-3 md:p-2 my-2 rounded-lg flex flex-wrap '>
                            <div className='flex md:justify-center justify-center'>
                                <div className='w-[20%]'>
                                    <div className='relative'>
                                        <img className="w-16" src={lists.img} />
                                        <img className='absolute z-50 bottom-[-10px] left-[-12px] w-8' src={mask} />
                                    </div>
                                </div>
                                <div className='w-[70%] md:pl-3 pl-3'>
                                    <div className='text-sm pb-4'>{lists.about}</div>
                                    <div className=''>{lists.disc}</div>
                                    <div className='font-bold'>- {lists.name}</div>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
</div>
        {/* Footer */}

        <div className='mt-4'>


            <div className='relative'>
                <div className='flex justify-center'>
                    <div className='bg-white absolute top-[-50px] rounded-lg'>
                        <EmailSection padding={`md:p-6 p-2`} />
                    </div>
                </div>
                <Footer paddingtop={`md:pt-36 pt-36`} />
            </div>
        </div>

    </>
    )
}

export default LandingPage