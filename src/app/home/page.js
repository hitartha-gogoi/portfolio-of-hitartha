"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Tweets from "@/components/tweets";
import { FaChartLine } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";
import { FiBox } from "react-icons/fi";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; 
import CountUp from "react-countup";
import millify from "millify";
import { BiBarChartAlt2 } from "react-icons/bi";
import { ReactTyped } from "react-typed";
import { MdOutlineTerminal } from "react-icons/md";

const FAQs = [
  { title: "What is Taplio and how can it help me grow my audience?", content: ` By accessing or using the Bar Association Bahadurgarh  ("the Website"), you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use the Website.` },
  { title: "What can I try during Taplio’s 7-day free trial?", content: "Bar Association Bahadurgarh reserves the right to modify, amend, or update these Terms and Conditions at any time without prior notice. Any changes will be effective immediately upon posting. Your continued use of the Website following the posting of changes constitutes your acceptance of those changes." },
  { title: "What is the Taplio X Chrome extension and why do I need it?", content: "You agree to use the Website for lawful purposes only and in compliance with all applicable laws and regulations. You shall not engage in any activity that may interfere with or disrupt the functioning of the Website or its associated services." },
  { title: "Is Taplio safe to use?", content: " If the Website offers user account registration, you are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to provide accurate and up-to-date information when creating your account and to update your information promptly if it changes." },
];


export default function Home() {

    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (index) => {
      setOpenSection(openSection === index ? null : index);
    };


  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full bg-white">
      <Navbar textColor={`black`} />

      {/* TOP HEADING */}
      <h1 className={`font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 sm:w-3/6 w-80 text-center text-4xl sm:text-6xl leading-tight space-y-2 mt-32`}>  Write the posts you need to grow on <span className="bg-gray-200 text-black mt-10 px-2 rounded-md">LinkedIn</span> </h1>

      {/* SOCIAL MEDIA STATS */}
      <div className="flex space-x-10 text-black font-bold text-xl mt-4 ">
        <CountUp end={12000} suffix="K" duration={10} formattingFn={(value) => millify(value, { precision: 1 })} />
        <CountUp end={16000} suffix="K" duration={10} formattingFn={(value) => millify(value, { precision: 1 })} />
        <CountUp end={1889} suffix="K" duration={10} formattingFn={(value) => millify(value, { precision: 1 })} />
      </div>

      {/* SOCIAL MEDIA ICONS */}
      <div className="flex space-x-4 text-black text-xl mb-10">
        <FaInstagram className="hover:text-pink-500 cursor-pointer h-14 w-14" />
        <FaYoutube className="hover:text-red-600 cursor-pointer h-14 w-14" />
        <FaXTwitter className="hover:text-blue-500 cursor-pointer h-14 w-14" />
      </div>
      
      {/* OTHER STATS */}
      <div className="flex flex-row justify-center items-center flex-wrap sm:space-y-0 space-y-4 sm:space-x-4 space-x-0">
        <div className="text-black font-extrabold text-xs text-center px-4 py-2 rounded-2xl border-black border uppercase hover:scale-105  bg-black/10 shadow-xl shadow-gray-300 transition-all duration-300 flex"><BsCheckCircleFill className="text-black mr-2" size={16} /> SEARCH VIRAL POSTS FOR IDEAS</div>
        <div className="text-black font-extrabold text-xs text-center px-4 py-2 rounded-2xl border-black border uppercase hover:scale-105  bg-black/10 shadow-xl shadow-gray-300 transition-all duration-300 flex"><FaChartLine className="text-black mr-2" size={16} /> SEARCH VIRAL POSTS FOR IDEAS</div>
        <div className="text-black font-extrabold text-xs text-center px-4 py-2 rounded-2xl border-black border uppercase hover:scale-105  bg-black/10 shadow-xl shadow-gray-300 transition-all duration-300 flex"><BiBarChartAlt2 className="text-black mr-2" size={16} /> SEARCH VIRAL POSTS FOR IDEAS</div>
      </div>

      <button className="w-80 my-10 py-3 bg-black text-white font-semibold rounded-lg hover:bg-zinc-800 hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md uppercase">start now</button>

      <div className="flex flex-col justify-center items-center w-full min-h-96 text-4xl sm:text-6xl font-semibold text-center text-gray-300 bg-black my-10">
       <span className="text-center sm:w-4/6 w-80 font-inter">Discover  , your go-to solution to make people hear about you on LinkedIn</span> 
      </div>


      {/* DESCRIPTION */}
      <div className="flex flex-col justify-center items-center w-full min-h-screen my-4">
        <div className="text-black font-extrabold text-xs text-center px-4 py-2 rounded-2xl border-black border uppercase hover:scale-105  bg-black/10 shadow-xl shadow-gray-300 transition-all duration-300 flex"><FiBox className="text-black mr-2" size={16} /> SEARCH VIRAL POSTS FOR IDEAS</div>

        <div className="flex flex-row items-center justify-center w-full mt-10 flex-wrap sm:space-x-4 space-x-0 sm:space-y-0 space-y-4 ">
            <div className="w-80 h-2/6 flex flex-col justify-center items-center space-y-8 rounded-lg shadow-lg px-4 sm:w-2/6 py-20">
                <h1 className="self-start font-semibold text-black text-3xl sm:text-4xl leading-tight font-inter">Get inspired by top viral posts in your specific <span className="bg-gray-200 text-black mt-10 px-2 rounded-md">LinkedIn</span></h1>
                <p className="text-gray-700 text-xs sm:text-sm self-start font-medium">Enter keywords, and Taplio curates thousands of the most successful posts on any topic you choose. Unlike LinkedIn search, we highlight what's working best among millions of posts, so you never run out of content ideas that work.</p>
                <span className="text-blue-600 self-start underline">Learn more</span>
            </div>
            <Image src="/images/hero.png" alt="Hero Image" width={500} height={500} className="w-80 sm:w-2/6  object-cover rounded-lg shadow-lg" />
        </div>

      </div>

      {/* DESCRIPTION */}
      <div className="flex flex-col justify-center items-center w-full min-h-screen my-2">
        <div className="text-black font-extrabold text-xs text-center px-4 py-2 rounded-2xl border-black border uppercase hover:scale-105  bg-black/10 shadow-xl shadow-gray-300 transition-all duration-300 flex"><FiBox className="text-black mr-2" size={16} /> SEARCH VIRAL POSTS FOR IDEAS</div>

        <div className="flex flex-row items-center justify-center w-full mt-10 flex-wrap sm:space-x-4 space-x-0 sm:space-y-0 space-y-4 ">
            <Image src="/images/hero.png" alt="Hero Image" width={500} height={500} className="w-80 sm:w-2/6  object-cover rounded-lg shadow-lg" />
            <div className="w-80 h-2/6 flex flex-col justify-center items-center space-y-8 rounded-lg shadow-lg px-4 sm:w-2/6 py-20">
                <h1 className="self-start font-semibold text-black text-3xl sm:text-4xl leading-tight font-inter">Get inspired by top viral posts in your specific <span className="bg-gray-200 text-black mt-10 px-2 rounded-md">LinkedIn</span></h1>
                <p className="text-gray-700 text-xs sm:text-sm self-start font-medium">Enter keywords, and Taplio curates thousands of the most successful posts on any topic you choose. Unlike LinkedIn search, we highlight what's working best among millions of posts, so you never run out of content ideas that work.</p>
                <span className="text-blue-600 self-start underline">Learn more</span>
            </div>
            
        </div>

      </div>

      {/* DESCRIPTION */}
      <div className="flex flex-col justify-center items-center w-full min-h-screen my-4">
        <div className="text-black font-extrabold text-xs text-center px-4 py-2 rounded-2xl border-black border uppercase hover:scale-105  bg-black/10 shadow-xl shadow-gray-300 transition-all duration-300 flex"><FiBox className="text-black mr-2" size={16} /> SEARCH VIRAL POSTS FOR IDEAS</div>

        <div className="flex flex-row items-center justify-center w-full mt-10 flex-wrap sm:space-x-4 space-x-0 sm:space-y-0 space-y-4 ">
            <div className="w-80 h-2/6 flex flex-col justify-center items-center space-y-8 rounded-lg shadow-lg px-4 sm:w-2/6 py-20">
                <h1 className="self-start font-semibold text-black text-3xl sm:text-4xl leading-tight font-inter">Get inspired by top viral posts in your specific <span className="bg-gray-200 text-black mt-10 px-2 rounded-md">LinkedIn</span></h1>
                <p className="text-gray-700 text-xs sm:text-sm self-start font-medium">Enter keywords, and Taplio curates thousands of the most successful posts on any topic you choose. Unlike LinkedIn search, we highlight what's working best among millions of posts, so you never run out of content ideas that work.</p>
                <span className="text-blue-600 self-start underline">Learn more</span>
            </div>
            <Image src="/images/hero.png" alt="Hero Image" width={500} height={500} className="w-80 sm:w-2/6  object-cover rounded-lg shadow-lg" />
        </div>

      </div>
      
      {/* TESTIMONIALS */}
       <div className="flex flex-col justify-center items-center w-full min-h-screen my-10 bg-black mx-4 shadow-2xl">
       <span className="text-center sm:w-4/6 w-80 font-inter  text-4xl sm:text-6xl font-semibold text-gray-300 py-28">How they are growing their audience with Tapilio</span> 
       <Tweets />
      </div>

      <h1 className={`font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 sm:w-3/6 w-80 text-center text-4xl sm:text-6xl leading-tight space-y-2 my-24`}>  Write the posts you need to grow on <span className="bg-gray-200 text-black mt-10 px-2 rounded-md">LinkedIn</span> </h1>
      <Image src="/images/hero.png" alt="Hero Image" width={500} height={500} className="w-80 sm:w-2/6  object-cover rounded-lg shadow-lg" />

      <div className="flex flex-col justify-evenly items-center w-full my-20">
      
              {/* THE TWO BIG BALLS */}
              <div className="flex flex-col justify-center items-center w-80 h-80 rounded-full bg-black/20 hover:scale-105 hover:shadow-xl transition-transform duration-200 ease-in-out">
                <div className="w-60 h-60 rounded-full bg-black flex flex-col justify-center items-center ">
                  <span className="text-2xl font-semibold uppercase text-center text-blue-500 flex flex-col justify-center items-center ">
                  <MdOutlineTerminal className="text-white" size={40} />
                  <span>DEVELOP</span>
                  </span>
                </div>
              </div>
      
              {/* MIDDLE PART FOR THE LINE AND CONTENT ON SIDE */}
              <div className="flex justify-center items-center w-full">
      
                  {/* THE LEFT CONTENT */}
                  <div className="w-1/2 flex flex-col justify-center items-center ">
                    <div className="hidden sm:block">
                      <div className="flex flex-col justify-center items-center w-96 h-72 space-y-6 rounded-md px-4 hover:scale-105 shadow-xl shadow-gray-300 transition-transform duration-200 ease-in-out">
                          <h1 className={`font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 w-4/5 text-center text-xl leading-tight`}><BsCheckCircleFill className="text-black w-4 h-4 inline" />  Write the posts you need to grow on <span className="text-black uppercase underline">something</span></h1>
                          <p className="text-gray-700 self-start text-sm font-medium">Enter keywords, and Taplio curates thousands of the most successful posts on any topic you choose. Unlike LinkedIn search, we highlight what's working best among millions of posts, so you never run out of content ideas that work.</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* THE LINE */}
                  <div className="border-x border-black h-96 "></div>
      
                  {/* THE RIGHT CONTENT */}
                  <div className="w-1/2 flex flex-col justify-center items-center">
                    <div className="hidden sm:block">
                      <div className="flex flex-col justify-center items-center w-96 h-72 space-y-6 rounded-md px-4 hover:scale-105 shadow-xl shadow-gray-300 transition-transform duration-200 ease-in-out">
                          <h1 className={`font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 w-4/5 text-center text-xl leading-tight space-y-2 `}> <BsCheckCircleFill className="text-black w-4 h-4 inline" />  Write the posts you need to grow on <span className="text-black uppercase underline">something</span></h1>
                          <p className="text-gray-700 self-start text-sm font-medium">Enter keywords, and Taplio curates thousands of the most successful posts on any topic you choose. Unlike LinkedIn search, we highlight what's working best among millions of posts, so you never run out of content ideas that work.</p>
                      </div>
                    </div>
                  </div>
              </div>

      
              {/* THE NEXT TWO BALLS */}
      
              {/* THE TWO BIG BALLS */}
              <div className="flex flex-col justify-center items-center w-80 h-80 rounded-full bg-black/20 hover:scale-105 hover:shadow-xl transition-transform duration-200 ease-in-out">
                <div className="w-60 h-60 rounded-full bg-black flex flex-col justify-center items-center">
                  <MdOutlineTerminal className="text-white" size={40} />
                  <span className="text-2xl font-semibold uppercase text-center flex flex-col justify-center items-center text-blue-500">Build</span>
                </div>
              </div>
      
              {/* MIDDLE PART FOR THE LINE AND CONTENT ON SIDE */}
              <div className="flex justify-center items-center w-full">
      
                  {/* THE LEFT CONTENT */}
                  <div className="w-1/2 flex flex-col justify-center items-center ">
                    <div className="hidden sm:block">
                      <div className="flex flex-col justify-center items-center w-96 h-72 space-y-6 rounded-md px-4 hover:scale-105 shadow-xl shadow-gray-300 transition-transform duration-200 ease-in-out">
                          <h1 className={`font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 w-4/5 text-center text-xl leading-tight`}><BsCheckCircleFill className="text-black w-4 h-4 inline" />  Write the posts you need to grow on <span className="text-black uppercase underline">something</span></h1>
                          <p className="text-gray-700 self-start text-sm font-medium">Enter keywords, and Taplio curates thousands of the most successful posts on any topic you choose. Unlike LinkedIn search, we highlight what's working best among millions of posts, so you never run out of content ideas that work.</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* THE LINE */}
                  <div className="border-x border-black h-96 "></div>
      
                  {/* THE RIGHT CONTENT */}
                  <div className="w-1/2 flex flex-col justify-center items-center">
                    <div className="hidden sm:block">
                      <div className="flex flex-col justify-center items-center w-96 h-72 space-y-6 rounded-md px-4 hover:scale-105 shadow-xl shadow-gray-300 transition-transform duration-200 ease-in-out">
                          <h1 className={`font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 w-4/5 text-center text-xl leading-tight space-y-2 `}> <BsCheckCircleFill className="text-black w-4 h-4 inline" />  Write the posts you need to grow on <span className="text-black uppercase underline">something</span></h1>
                          <p className="text-gray-700 self-start text-sm font-medium">Enter keywords, and Taplio curates thousands of the most successful posts on any topic you choose. Unlike LinkedIn search, we highlight what's working best among millions of posts, so you never run out of content ideas that work.</p>
                      </div>
                    </div>
                  </div>
              </div>

              {/* THE NEXT TWO BALLS */}
              <div className="flex flex-col justify-center items-center w-80 h-80 rounded-full bg-black/20 hover:scale-105 hover:shadow-xl transition-transform duration-200 ease-in-out">
                <div className="w-60 h-60 rounded-full bg-black flex flex-col justify-center items-center">
                    <MdOutlineTerminal className="text-white" size={40} />
                  <span className="text-2xl font-semibold uppercase text-center text-white">ship</span>
                </div>
              </div>
      
      </div>

      {/* CTA */}
      <div className="flex flex-col justify-center items-center bg-black w-full h-min-screen">
        <div className="flex flex-col justify-center items-center sm:w-4/6 w-88">
          <FaChartLine className="text-gray-300 w-20 h-20 self-start sm:ml-10 sm:mt-10 ml-0 mt-0" />
          <div className="flex flex-col items-center justify-center space-y-2">
            <span className="text-center sm:w-4/6 w-80 font-inter self-center text-4xl sm:text-6xl font-semibold text-gray-300 py-28">Ready to grow your LinkedIn brand?</span>
            <button className="w-80 my-10 py-3 bg-zinc-800 text-white hover:text-black font-semibold rounded-lg hover:bg-zinc-100 hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md uppercase">start now</button>
          </div>
          <BiBarChartAlt2 className="text-gray-300 w-20 h-20 self-end sm:mb-10 sm:mr-10 mb-0 mr-0" />
        </div>
      </div>

      {/* FAQs */}
      <main className="flex flex-col px-4 sm:px-8 lg:px-32 py-20 w-full text-black">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
          FAQs
        </h1>

        <div className="space-y-4">
          {FAQs.map((section, index) => (
            <div key={index} className="border-b pb-4 px-0 sm:px-20">
              <button
                onClick={() => toggleSection(index)}
                className="w-full text-left text-lg font-medium flex justify-between items-center hover:text-blue-600 transition-colors"
              >
                {section.title}
                <span className="text-xl">{openSection === index ? <FaChevronUp /> : <FaChevronDown />}</span>
              </button>

              {openSection === index && (
                <div className="mt-2 text-sm sm:text-base text-gray-700 ">
                  {section.link ? (
                    <a href={section.link} className="text-blue-600 underline">{section.content}</a>
                  ) : (
                    <p>{section.content}</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      <Footer />


    </div>
  );
}
