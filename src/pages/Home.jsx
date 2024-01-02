import React from 'react'
import logo from "../assets/bot.png"
import react from "../assets/R.svg"
import node from "../assets/Node.svg"
import js from "../assets/js.svg"
import firebase from "../assets/firebase.svg"

const Home = () => {
  const redirectToGitHub = () => {
    window.location.href = 'https://github.com/ashishgit10/'; // Replace with your GitHub profile URL
  };
  return (
    <div className='bg-gradient-to-r from-violet-500 to-fuchsia-500 sm:h-screen'>
      <div className=' flex justify-center pt-9 px-4 max-w-2xl m-auto'>
        <div className='text-center'>
          <h1 className=' text-sm text-white'>A BIT ABOUT ME</h1>
          <h1 className=' text-4xl pt-3 font-bold text-sky-300'>WHO AM I?</h1>
          <div className='text-white'>I'm Ashish Kumar Sharma currently pursuing B.Tech from Rungta college of Engineering
            I Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae nobis minima doloribus nostrum blanditiis, incidunt rerum aperiam reiciendis quisquam placeat ullam numquam mollitia cupiditate, laudantium architecto dolore at. Culpa, aspernatur!
          </div>
        </div>
      </div>
      <div className='md:max-w-2xl m-auto w-[50%] sm:max-[65%] mt-8 flex justify-center items-center flex-col md:flex-row md:justify-center'>
        <div className='w-60 bg-sky-400 h-[200px] p-2 rounded-xl text-center'>
          <div className='flex justify-center'>
            <img className="w-20" src={logo} />
          </div>
          <div className='text-white text-sm'>
            I'm FrontEnd Web Developer
            and FrontEnd Android Developer
          </div>
          <button className='bg-white px-6 mt-4 rounded text-sm' onClick={redirectToGitHub}>GitHub</button>
        </div>
        <div className='sm:ml-4 text-center pb-8'>

          <h1 className='sm:pl-4 text-lg uppercase font-bold'>SKILL</h1>
          <div className=' w-56 h-40 sm:ml-4 rounded-xl grid grid-cols-2 gap-2'>
            <div className='bg-white p-2 text-sm'>
              <img  className='w-[45px]' src={react}/>
            React-Native
            </div>
            <div className='bg-white p-3 text-sm text-left'>
              <img  className='w-[45px]' src={node}/>
  Node.js
            </div>  <div className='bg-white p-2 text-sm'>
              <img  className='w-[45px]' src={js}/>
            Javascript
            </div>  <div className='bg-white p-2 text-sm'>
              <img  className='w-[45px]' src={firebase}/>
           Firebase
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home