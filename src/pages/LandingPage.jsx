import React from 'react'
import Compiler from './components/Compiler'
import Button from './components/Button'
import logo1 from '../assets/LandingLogo/logo1.png'
import logo2 from '../assets/LandingLogo/logo2.png'
import logo3 from '../assets/LandingLogo/logo3.png'
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


    return (<>
        <div className=" w-full flex justify-between  items-center mx-auto py-4 px-4 drop-shadow-lg bg-white">

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




        <div className="flex flex-col justify-center items-center pt-6 px-4">
            <div className=" text-center">
                <div className='font-bold text-2xl'>  That one go-to destination for Aspiring Engineers.</div>

                <div className='text-sm pt-2'>Welcome to Coders Crux: Where Knowledge Meets Code, Quizzes Challenge Minds, and Courses Shape Futures!</div>
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


        <div className="relative max-[1024px]:w-[90%] mx-auto max-[1024px]:mt-4 shadow-xl">
            <Compiler />
        </div>






        <div className='bg-white drop-shadow-xl mt-6'>
            <div className='flex justify-center p-8'>
                <img className='w-[130px]' src={logo1} />
                <img className='w-[130px]' src={logo2} />
                <img className='w-[130px]' src={logo3} />
            </div>
        </div>
        <div className='mt-8 flex flex-col justify-center items-center'>
            <h1 className='text-3xl font-bold text-center'>Our Focus</h1>
            <p className='text-xs text-center text-gray-500'>Our goal at Coders Crux is clear and resolute: to empower aspiring engineers and tech enthusiasts to reach their fullest potential. We believe that knowledge is the key to unlocking limitless possibilities, and we are committed to providing you with the tools, resources, and support needed to achieve greatness.</p>
            <Button text={`Learn More`} border={`border-[1px]`} bordercolor={`border-black`} bgcolor={`black`} textcolor={`white`} />
        </div>



        {/* About Us */}
        <div className='mt-8'>
            <div className='p-6'>
                <h2 className='border-b-2 border-b-blue-500 inline-block'>About Us</h2>
                <div className='pt-6'>
                    <h2 className='font-bold'>Coders Crux Helps Engineering Students To Become Their Best Version.</h2>
                    <p className='text-xs pt-4'>At Coders Crux, we are more than just an organization; we are a community of passionate individuals dedicated to nurturing the next generation of engineers and tech enthusiasts. Our journey began with a vision to empower budding engineers with knowledge, skills, and resources to excel in their chosen fields.</p>
                </div>
                <div className='rounded-lg flex p-4 items-center justify-center mt-8' style={{ backgroundColor: 'rgba(251, 251, 251, 9)' }}>
                    <div>
                        <div className='flex flex-col border-r-2 pr-2 py-2 justify-center items-center'>
                            <div style={{ color: 'rgba(255, 106, 124, 1)', fontSize: "35px", fontWeight: "bold" }}>1,000</div>
                            <div className='text-center text-sm'>Students from different colleges</div>
                        </div>
                    </div>

                    <div>
                        <div className='flex flex-col border-r-2 p-2 py-2 justify-center items-center'>
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
            <h2 className='font-bold text-lg'>Perks of joining Coders Crux</h2>
            <p>Join Coders Crux and unlock a world of opportunities:</p>
            <ul>
                <li className='list-disc'>Gain expertise with cutting-edge programming courses.</li>
                <li className='list-disc'>Challenge your skills with mind-boggling quizzes.</li>
                <li className='list-disc'>Connect with a vibrant community of fellow budding engineers.</li>
            </ul>

            <div className='flex flex-wrap justify-center mt-8'>
                {
                    list.map(lists => (
                        <div key={lists.id} className='bg-slate-200 w-[80%] px-12 py-12 mx-4 my-4 flex flex-col justify-start rounded-lg'>
                            <div>
                                <img src={lists.img} />
                            </div>
                            <div className='font-bold py-2'>{lists.title}</div>
                            <div className='text-xs'>{lists.disc}</div>
                        </div>
                    ))
                }
            </div>
        </div>

    </>
    )
}

export default LandingPage