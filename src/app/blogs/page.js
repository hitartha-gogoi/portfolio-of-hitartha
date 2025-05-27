'use client';
import { useState } from "react"
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ReactTyped } from "react-typed";
import { MdExplore } from "react-icons/md";
import Blogs from "@/components/blogs";
import { ChevronsRight } from "lucide-react";

export default function BlogsPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-white">
      <Navbar textColor={`black`} />

      {/* TOP HEADING */}
      <h1 className={`font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 sm:w-3/6 w-80 text-center text-4xl sm:text-6xl leading-tight space-y-2 mt-32`}>  Write the posts you need to grow on <span className="bg-gray-200 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-teal-600 mt-10 px-2 rounded-md">LinkedIn</span></h1>

      <span className="text-3xl my-8 font-medium text-gray-400 text-center w-80 h-60 sm:h-20 sm:w-[50rem] banner-text">
        <ReactTyped typeSpeed={10} backSpeed={10} loop startDelay={1000} backDelay={5000} className="text-black" strings={[`Peerless performance, efficiency and developer experience. Next.js is trusted by some of the biggest names of the web.` ]} />
      </span>

      <button className="w-60 text-center my-10 py-3 bg-black text-white font-semibold rounded-lg hover:bg-zinc-800 hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md uppercase px-8">explore <MdExplore className="h-8 w-8 inline text-white hover:text-blue-600 ml-4 " /></button>

      {/* BLOGS CATEGORY - LATEST */}
      <Blogs />

      {/* BLOGS CATEGORY - RAG */}
      <div className="flex w-full px-6 justify-between items-center font-bold text-4xl text-black text-center uppercase ">
        <span>rag and ai agents</span>
        <ChevronsRight className="text-gray-500 w-6 h-6" />
      </div>
      <Blogs />

      {/* BLOGS CATEGORY - PYTHON */}
      <div className="flex w-full px-6 justify-between items-center font-bold text-4xl text-black text-center uppercase ">
        <span>python</span>
        <ChevronsRight className="text-gray-500 w-6 h-6" />
      </div>
      <Blogs />

      {/* BLOGS CATEGORY - PYTHON */}
      <div className="flex w-full px-6 justify-between items-center font-bold text-4xl text-black text-center uppercase ">
        <span>Mern stack</span>
        <ChevronsRight className="text-gray-500 w-6 h-6" />
      </div>
      <Blogs />

      <div className="flex flex-col items-center justify-center w-full max-w-full p-8 ">
        
      
      </div>

      <Footer />
    </div>
  );
}
