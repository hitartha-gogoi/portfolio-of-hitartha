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
import { MdOutlineTerminal } from "react-icons/md";
import { ReactTyped } from "react-typed";

const FAQs = [
  { title: "What is PeakLauchers all about?", content: `We are a full-stack development agency specializing in fast, scalable web and mobile applications. We convert your ideas into high-quality digital products using cutting-edge technologies, including React, Next.js, Flask, FastAPI, React Native, and AI/ML frameworks. We also offer automation, web scraping, and AI solutions tailored to your business needs.` },
  { title: "What technologies do you specialize in?", content: "We specialize in full-stack development using React, Next.js, Flask, FastAPI, and the MERN stack. For mobile apps, we use React Native. We also provide automation with Puppeteer and Beautiful Soup, plus AI/ML solutions with PyTorch and TensorFlow." },
  { title: "Do you build both web and mobile applications?", content: "Yes, we develop highly scalable and SEO-friendly web applications as well as native-like mobile apps for Android using React Native." },
  { title: "Can you help with MVP and prototype development?", content: "Absolutely! We focus on rapid prototyping and MVP delivery to help you validate and launch your ideas quickly." },
  { title: "How do you ensure the security and quality of your applications?", content: "Our development process emphasizes clean, maintainable code, thorough testing, and adherence to best practices in security and performance to deliver enterprise-grade quality products." },
  { title: "Do you offer ongoing support and maintenance?", content: "Yes, we provide support and maintenance packages to ensure your applications run smoothly and stay updated with evolving technologies." },
  { title: "How long does it take to deliver a project?", content: "Project timelines depend on complexity and scope. However, we prioritize fast delivery with high quality, often providing MVPs within weeks." },
  { title: " Can you integrate AI or machine learning features into my app?", content: "Yes, we build AI/ML features using frameworks like PyTorch and TensorFlow, ranging from predictive models to automation and smart analytics." },
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
      <h1 className={`font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 sm:w-3/6 w-80 text-center text-4xl sm:text-6xl leading-tight space-y-2 mt-32`}>Build and craft your app with <span className="bg-gray-200 text-black mt-10 px-2 rounded-md">peak</span> <ReactTyped typeSpeed={10} backSpeed={10} loop startDelay={1000} backDelay={5000} className="" strings={[`potential`, `performance` ]} /></h1>

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
        <div className="text-black font-extrabold text-xs text-center px-4 py-2 rounded-2xl border-black border uppercase hover:scale-105  bg-black/10 shadow-xl shadow-gray-300 transition-all duration-300 flex"><BsCheckCircleFill className="text-black mr-2 uppercase" size={16} /> SEARCH VIRAL POSTS FOR IDEAS</div>
        <div className="text-black font-extrabold text-xs text-center px-4 py-2 rounded-2xl border-black border uppercase hover:scale-105  bg-black/10 shadow-xl shadow-gray-300 transition-all duration-300 flex"><FaChartLine className="text-black mr-2 uppercase" size={16} /> seo friendly web apps</div>
        <div className="text-black font-extrabold text-xs text-center px-4 py-2 rounded-2xl border-black border uppercase hover:scale-105  bg-black/10 shadow-xl shadow-gray-300 transition-all duration-300 flex"><BiBarChartAlt2 className="text-black mr-2 uppercase" size={16} /> highly scalable </div>
      </div>

      <button className="w-80 my-10 py-3 bg-black text-white font-semibold rounded-lg hover:bg-zinc-800 hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md uppercase">start now</button>

      <div className="flex flex-col justify-center items-center w-full min-h-96 text-4xl sm:text-6xl font-semibold text-center text-gray-300 bg-black my-10">
       <span className="text-center sm:w-4/6 w-80 font-inter">Discover  , your go-to solution for building highly scalable Full-Stack applications</span> 
      </div>


      {/* DESCRIPTION */}
      <div className="flex flex-col justify-center items-center w-full min-h-screen my-4">
        <div className="text-black font-extrabold text-xs text-center px-4 py-2 rounded-2xl border-black border uppercase hover:scale-105  bg-black/10 shadow-xl shadow-gray-300 transition-all duration-300 flex"><FiBox className="text-black mr-2" size={16} /> full stack web applications</div>

        <div className="flex flex-row items-center justify-center w-full mt-10 flex-wrap sm:space-x-4 space-x-0 sm:space-y-0 space-y-4 ">
            <div className="w-80 h-2/6 flex flex-col justify-center items-center space-y-8 rounded-lg shadow-lg px-4 sm:w-2/6 py-20">
                <h1 className="self-start font-semibold text-black text-3xl sm:text-4xl leading-tight font-inter">Full-Stack Web <span className="bg-gray-200 text-black mt-10 px-2 rounded-md">applications</span></h1>
                <p className="text-gray-700 text-xs sm:text-sm self-start font-medium">We build robust, scalable, and SEO-friendly full-stack web applications using React, Next.js, Flask, FastAPI, and the MERN stack. From MVPs to enterprise-grade products, we ensure fast delivery without compromising quality.</p>
                <span className="text-blue-600 self-start underline">Learn more</span>
            </div>
            <Image src="/images/hero.png" alt="Hero Image" width={500} height={500} className="w-80 sm:w-2/6  object-cover rounded-lg shadow-lg" />
        </div>

      </div>

      {/* DESCRIPTION */}
      <div className="flex flex-col justify-center items-center w-full min-h-screen my-2">
        <div className="text-black font-extrabold text-xs text-center px-4 py-2 rounded-2xl border-black border uppercase hover:scale-105  bg-black/10 shadow-xl shadow-gray-300 transition-all duration-300 flex"><FiBox className="text-black mr-2" size={16} /> native applications</div>

        <div className="flex flex-row items-center justify-center w-full mt-10 flex-wrap sm:space-x-4 space-x-0 sm:space-y-0 space-y-4 ">
            <Image src="/images/hero.png" alt="Hero Image" width={500} height={500} className="w-80 sm:w-2/6  object-cover rounded-lg shadow-lg" />
            <div className="w-80 h-2/6 flex flex-col justify-center items-center space-y-8 rounded-lg shadow-lg px-4 sm:w-2/6 py-20">
                <h1 className="self-start font-semibold text-black text-3xl sm:text-4xl leading-tight font-inter">Native Applications <span className="bg-gray-200 text-black mt-10 px-2 rounded-md">(Android)</span></h1>
                <p className="text-gray-700 text-xs sm:text-sm self-start font-medium">Using React Native, we create smooth, high-performance native mobile apps that deliver exceptional user experiences across platforms — fast, efficient, and ready to scale.</p>
                <span className="text-blue-600 self-start underline">Learn more</span>
            </div>
            
        </div>

      </div>

      {/* DESCRIPTION */}
      <div className="flex flex-col justify-center items-center w-full min-h-screen my-4">
        <div className="text-black font-extrabold text-xs text-center px-4 py-2 rounded-2xl border-black border uppercase hover:scale-105  bg-black/10 shadow-xl shadow-gray-300 transition-all duration-300 flex"><FiBox className="text-black mr-2" size={16} /> automation scripts</div>

        <div className="flex flex-row items-center justify-center w-full mt-10 flex-wrap sm:space-x-4 space-x-0 sm:space-y-0 space-y-4 ">
            <div className="w-80 h-2/6 flex flex-col justify-center items-center space-y-8 rounded-lg shadow-lg px-4 sm:w-2/6 py-20">
                <h1 className="self-start font-semibold text-black text-3xl sm:text-4xl leading-tight font-inter">Automation <span className="bg-gray-200 text-black mt-10 px-2 rounded-md">Workflows</span></h1>
                <p className="text-gray-700 text-xs sm:text-sm self-start font-medium">Boost productivity with custom automation scripts built using Puppeteer and Beautiful Soup. Automate repetitive tasks, data extraction, and web scraping tailored to your business needs.</p>
                <span className="text-blue-600 self-start underline">Learn more</span>
            </div>
            <Image src="/images/hero.png" alt="Hero Image" width={500} height={500} className="w-80 sm:w-2/6  object-cover rounded-lg shadow-lg" />
        </div>

      </div>
      
      {/* TESTIMONIALS */}
       <div className="flex flex-col justify-center items-center w-full min-h-screen my-10 bg-black mx-4 shadow-2xl">
       <p className="text-center sm:w-4/6 w-80 font-inter  text-4xl sm:text-6xl font-semibold text-gray-300 py-28">
       <p>Don't just take our words.</p>
       <p>Here's what people have to say about us</p>
       </p>
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
            <span className="text-center sm:w-4/6 w-80 font-inter self-center text-4xl sm:text-6xl font-semibold text-gray-300 py-28">Ready to launch your next app idea?</span>
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
