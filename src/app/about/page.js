"use client"
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Tweet from "@/components/tweet";
import Tweets from "@/components/tweets";
import { ReactTyped } from "react-typed";
import { MdOutlineTerminal } from "react-icons/md";
import { AiTwotoneCheckCircle, AiFillInstagram, AiFillTwitterSquare,  AiFillbuttonedin, AiFillGithub } from "react-icons/ai"
import CountUp from 'react-countup';

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full bg-black">
      <Navbar textColor={`white`} />
      <Sidebar />

      <div className="flex flex-col flex-wrap justify-center items-center w-full h-[rem] sm:h-screen mt-28">
        <h1 className="text-5xl sm:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 text-center w-80 sm:w-[50rem] uppercase">The web framework when it matters</h1>
        <span className="text-3xl my-8 font-medium text-gray-400 text-center w-80 h-60 sm:h-20 sm:w-[50rem] banner-text">
            <ReactTyped typeSpeed={10} backSpeed={10} loop startDelay={1000} backDelay={5000} className="text-white" strings={[`Peerless performance, efficiency and developer experience. Next.js is trusted by some of the biggest names of the web.` ]} />
         </span>

        <div className="flex flex-row justify-center w-full items-center my-6">
          <button  className="flex uppercase text-center p-4 mx-4 font-bold text-black bg-white rounded-2xl hover:scale-105 hover:shadow-xl hover:shadow-neutral-700 transition-transform duration-200 ease-in-out">
            DOWNLOAD
          </button>
          <button className="flex text-center uppercase p-4 mx-4 font-bold text-black bg-white rounded-2xl hover:scale-105 hover:shadow-xl hover:shadow-neutral-700 transition-transform duration-200 ease-in-out">
          view code
          </button>
        </div>

        {/* STATS */}
        <div className="bg-neutral-900 w-full py-10 flex flex-row justify-center items-center flex-wrap space-x-36 border-y border-neutral-500 mt-20">
            
            <div className="flex flex-col items-center justify-center space-y-2">
                <span className="text-white text-5xl font-bold"><CountUp delay={0} end={14} /></span>
                <span className="text-white text-2xl font-bold">Largest </span>
                <span className="text-gray-400 text-xl font-medium banner-text">On Github</span>
            </div>

            <div className="flex flex-col items-center justify-center space-y-2">
                <span className="text-white text-5xl font-bold"># 1</span>
                <span className="text-white text-3xl font-bold">React </span>
                <span className="text-gray-400 text-xl font-medium">Framework</span>
            </div>

            <div className="flex flex-col items-center justify-center space-y-2">
                <span className="text-white text-5xl font-bold w-28"><CountUp delay={0} duration={10} end={130000} /></span>
                <span className="text-white text-3xl font-bold">Stars </span>
                <span className="text-gray-400 text-xl font-medium">On Github</span>
            </div>
        </div>

        
      </div>

      {/* TWEETS */}
      <div className="flex flex-col flex-wrap justify-center items-center w-full h-screen ">
        <Tweets />
      </div>

      <div className="flex flex-col justify-evenly items-center w-full">

        {/* THE TWO BIG BALLS */}
        <div className="flex flex-col justify-center items-center w-80 h-80 rounded-full bg-blue-600/20 hover:scale-105 hover:shadow-xl transition-transform duration-200 ease-in-out">
          <div className="w-60 h-60 rounded-full bg-blue-600/30 flex flex-col justify-center items-center ">
            <span className="text-2xl font-semibold uppercase text-center text-blue-500 flex flex-col justify-center items-center ">
            <MdOutlineTerminal className="text-blue-500" size={40} />
            <span>DEVELOP</span>
            </span>
          </div>
        </div>

        {/* MIDDLE PART FOR THE LINE AND CONTENT ON SIDE */}
        <div className="flex justify-center items-center w-full">

            {/* THE LEFT CONTENT */}
            <div className="w-1/2 flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center w-80 h-56 rounded-md border border-neutral-900 hover:scale-105 hover:shadow-xl transition-transform duration-200 ease-in-out">
                    <span className="text-left w-full text-white banner-text p-4">Hello</span>
                </div>
            </div>

            {/* THE LINE */}
            <div className="border-x border-blue-500 h-96 "></div>

            {/* THE RIGHT CONTENT */}
            <div className="w-1/2 flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center w-80 h-56 rounded-md border border-neutral-900 hover:scale-105 hover:shadow-xl transition-transform duration-200 ease-in-out">
                    <span className="text-left w-full text-white banner-text p-4">Hello</span>
                </div>
            </div>
        </div>

        {/* THE NEXT TWO BALLS */}

        {/* THE TWO BIG BALLS */}
        <div className="flex flex-col justify-center items-center w-80 h-80 rounded-full bg-blue-600/20 hover:scale-105 hover:shadow-xl transition-transform duration-200 ease-in-out">
          <div className="w-60 h-60 rounded-full bg-blue-600/30 flex flex-col justify-center items-center">
            <span className="text-2xl font-semibold uppercase text-center flex flex-col justify-center items-center text-blue-500">develop</span>
          </div>
        </div>

        {/* MIDDLE PART FOR THE LINE AND CONTENT ON SIDE */}
        <div className="flex justify-center items-center w-full">

            {/* THE LEFT CONTENT */}
            <div className="w-1/2 flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center w-80 h-56 rounded-md border border-neutral-900 hover:scale-105 hover:shadow-xl transition-transform duration-200 ease-in-out">
                    <span className="text-left w-full text-white banner-text p-4">Hello</span>
                </div>
            </div>

            {/* THE LINE */}
            <div className="border-x border-blue-500 h-96 "></div>

            {/* THE RIGHT CONTENT */}
            <div className="w-1/2 flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center w-80 h-56 rounded-md border border-neutral-900 hover:scale-105 hover:shadow-xl transition-transform duration-200 ease-in-out">
                    <span className="text-left w-full text-white banner-text p-4">Hello</span>
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center items-center w-80 h-80 rounded-full bg-blue-600/20 hover:scale-105 hover:shadow-xl transition-transform duration-200 ease-in-out">
          <div className="w-60 h-60 rounded-full bg-blue-600/30 flex flex-col justify-center items-center">
            <span className="text-2xl font-semibold uppercase text-center text-blue-500">develop</span>
          </div>
        </div>

      </div>


    </div>
  );
}
