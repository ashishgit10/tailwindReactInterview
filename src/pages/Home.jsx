import React from 'react'
import logo from "../assets/bot.png"
import react from "../assets/R.svg"
import node from "../assets/Node.svg"
import js from "../assets/js.svg"
import firebase from "../assets/firebase.svg"
import fb from "../assets/fb.svg"
import web from "../assets/web.svg"
import insta from "../assets/insta.svg"
import tweet from "../assets/tweet.svg"
import git from "../assets/git.svg"
const Home = () => {
  const skillsData = [
    {
      id: "1",
      image: react,
      name: "React-Native"
    },
    {
      id: "2",
      image: node,
      name: "Node.js"
    },
    {
      id: "3",
      image: js,
      name: "Javascript"
    },
    {
      id: "4",
      image: firebase,
      name: "Firebase"
    },
  ];

  const redirectToGitHub = () => {
    window.location.href = 'https://github.com/ashishgit10/';
  };
  return (
    <div className='pt-5 p-[10px] bg-gradient-to-r from-sky-300 to-pink-300 sm:h-screen'>
      <div className='md:flex md:max-w-[65rem] md:justify-between md:m-auto'>
        <div className='w-full md:max-w-[25rem]'>
          <div className=' bg-black bg-opacity-5 backdrop-filter backdrop-blur-md rounded-3xl pb-7 flex justify-center flex-col items-center p-4 border-blue-50 border-2 text-center'>
            <div>
              <img className='w-20 border-2 rounded-full' src={logo} />
            </div>
            <div className='font-bold pt-3 text-white'>@ashishgit10</div>
            <div className='text-white font-bold'>Frontend Developer</div>
            <div className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quisquam quia hic tempore.</div>
            <div className='flex gap-3 pt-4'>
              <div className='bg-blue-500 py-1 rounded-md px-6 hover:bg-blue-400 cursor-pointer'>Follow</div>
              <div className='bg-blue-200 py-1 rounded-md px-6 hover:bg-blue-400 cursor-pointer'>Message</div>
            </div>
          </div>
          <div className=' bg-black bg-opacity-5 backdrop-filter border-blue-50 border-2 backdrop-blur-md rounded-3xl pb-7 flex justify-center flex-col items-center p-4 mt-3'>
            <div className='flex justify-between items-center w-full border-b-[1px] border-gray-400'>
              <div className='flex pb-2'>
                <img className='w-6 pr-1' src={web} /><div className='text-white'>Website</div></div>
              <div className='text-white'>https://ashishgit10.com</div>

            </div>
            <div className='flex justify-between items-center w-full border-b-[1px] border-gray-400'>
              <div className='flex items-center pb-2 pt-2'>
                <img className='w-6 pr-1' src={insta} /><div className='text-white'>Instagram</div></div>
              <div className='text-white'>@instaashish10</div>

            </div>
            <div className='flex justify-between items-center w-full border-b-[1px] border-gray-400'>
              <div className='flex items-center pb-2 pt-2'>
                <img className='w-6 pr-1' src={tweet} /><div className='text-white'>X.com</div></div>
              <div className='text-white'>@tweetashish10</div>

            </div>
            <div className='flex justify-between items-center w-full border-b-[1px] border-gray-400'>
              <div className='flex items-center pb-2 pt-2'>
                <img className='w-6 pr-1' src={fb} /><div className='text-white'>Facebook</div></div>
              <div className='text-white'>@fbashish10</div>

            </div>

          </div>
        </div>


        <div className='md:w-[60%]'>

          <div className='bg-black bg-opacity-5 backdrop-filter backdrop-blur-md border-blue-50 border-2 rounded-3xl mt-3 md:mt-0 flex justify-center flex-col items-center p-4 '>
            <div className='flex w-full'>
              <div className='md:pr-20'>
                <div className='text-white'>Enter name :</div>
                <div className='text-white'>Email :</div>
                <div className='text-white'>Phone :</div>
                <div className='text-white'>City :</div>
              </div>
              <div className='flex flex-col'>
                <div className='pl-4 text-white' >
                  Ashish kumar Sharma
                </div>
                <div className='pl-4 text-white' >
                  ashishsharma.mail10@gmail.com
                </div>
                <div className='pl-4 text-white' >
                  790*******
                </div>
                <div className='pl-4 text-white' >
                  Jamshedpur
                </div>
              </div>
            </div>
          </div>
          <div className='bg-black bg-opacity-5 backdrop-filter backdrop-blur-md border-blue-50 border-2 rounded-3xl pb-7 mt-3 flex justify-cener flex-col p-4 '>
            <div>
              <h1 className='text-white'>Professional Skill</h1>
              <div>
                <div className='flex flex-col'>
                  <span className='text-white'>
                  <img className='w-[30px]' src={react}/>
                  React Native :</span>
                  <progress className='h-2 bg-blue-500' style={{ backgroundColor: '#4299e1' }} max="100" value="40">40%</progress>
                </div>
                <div className='flex flex-col pt-3'>
                  <span className='text-white'>
                  <img className='w-[30px]' src={git}/>Github  :</span>
                  <progress className='h-2 text-blue' max="100" value="60">60%</progress>
                </div>
                <div className='flex flex-col pt-3'>
                  <span className='text-white'>
                  <img className='w-[30px]' src={js}/>Javascript :</span>
                  <progress className='h-2 text-blue' max="100" value="80">40%</progress>
                </div>
                <div className='flex flex-col pt-3'>
                  <span className='text-white'>
                  <img className='w-[30px]' src={firebase}/>Firebase :</span>
                  <progress className='h-2 text-blue' max="100" value="50">40%</progress>
                </div>
                <div className='flex flex-col pt-3'>
                  <span className='text-white'>
                  <img className='w-[30px]' src={node}/>NodeJs :</span>
                  <progress className='h-2 text-blue' max="100" value="50">40%</progress>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home