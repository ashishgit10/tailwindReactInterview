import React from 'react'

const Compiler = () => {
    return (
        <div>



            <div className="lg:w-[606px] pb-10 bg-[#2A2A2A] rounded-lg mt-10">
                <div className="[background:linear-gradient(93.03deg,#7dfc89,rgba(6,_225,_255,_100%))] w-full h-[36px] rounded-t-lg flex justify-start items-baseline ">

                    <div className="flex ml-5 mt-[15px] gap-x-3 justify-start items-baseline">
                        <div className="w-[8.21px] h-[8.21px] rounded-full bg-white"></div>
                        <div className="w-[8.21px] h-[8.21px] rounded-full bg-white"></div>
                        <div className="w-[8.21px] h-[8.21px] rounded-full bg-white"></div>
                    </div>
                </div>
                <ol className="m-0 font-inherit text-inherit pl-[21px]">
                    <li className="text-[#6A6A6A]">
                        <span>// Online C++ compiler to run C++ program online</span>
                    </li>
                    <li className="text-[#6A6A6A]">
                        <span className="text-white">{`#include <iostream>`}</span>
                    </li>
                    <li className="text-[#6A6A6A]">
                        <span className="text-white">&nbsp;</span>
                    </li>
                    <li className="text-[#6A6A6A]">
                        <span className="text-white">{`int main() {`}</span>
                    </li>
                    <li className="text-[#6A6A6A]">
                        <span className="text-white">{`    `}</span>
                        <span className="text-dimgray-200">// Write C++ code here</span>
                    </li>
                    <li className="text-[#6A6A6A]">
                        <span className="text-white">{`    std::cout << "Hello world!";`}</span>
                    </li>
                    <li className="text-[#6A6A6A]">
                        <span className="text-white"></span>
                    </li>
                    <li className="text-[#6A6A6A]">
                        <span className="text-white"> return 0;</span>
                    </li>
                    <li className="text-[#6A6A6A]">
                        <span className="text-white">{`}`}</span>
                    </li>
                </ol>
                <div className='flex justify-end mr-10'>
                <button className="rounded-lg [background:linear-gradient(93.03deg,_#06e1ff,_#7dfc89)] w-[95px] h-[30.7px] hover:scale-105 transition-all duration-300" >
                    <p className="my-auto text-[10.7px] font-medium font-lexend-deca text-white hover:cursor-pointer">Run</p>
                </button>
                </div>
               
            </div>


        </div>
    )
}

export default Compiler