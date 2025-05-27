import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { BsCheckCircleFill } from "react-icons/bs";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full bg-white">
      <Navbar textColor={`black`} />

      <h1 className={`font-semibold text-gray-700 sm:w-3/6 w-80 text-center text-4xl sm:text-6xl leading-tight space-y-2 mt-28`}>  Write the posts you need to grow on <span className="bg-gray-200 text-black mt-10 px-2 rounded-md">LinkedIn</span> </h1>
      
      <div className="flex flex-row justify-center items-center flex-wrap sm:space-y-0 space-y-4 sm:space-x-4 space-x-0 mt-16">
        <div className="text-black font-extrabold text-xs text-center px-4 py-2 rounded-2xl border-black border uppercase hover:scale-105  bg-black/10 shadow-xl shadow-gray-300 transition-all duration-300 flex"><BsCheckCircleFill className="text-black mr-2" size={16} /> SEARCH VIRAL POSTS FOR IDEAS</div>
        <div className="text-black font-extrabold text-xs text-center px-4 py-2 rounded-2xl border-black border uppercase hover:scale-105  bg-black/10 shadow-xl shadow-gray-300 transition-all duration-300 flex"><BsCheckCircleFill className="text-black mr-2" size={16} /> SEARCH VIRAL POSTS FOR IDEAS</div>
        <div className="text-black font-extrabold text-xs text-center px-4 py-2 rounded-2xl border-black border uppercase hover:scale-105  bg-black/10 shadow-xl shadow-gray-300 transition-all duration-300 flex"><BsCheckCircleFill className="text-black mr-2" size={16} /> SEARCH VIRAL POSTS FOR IDEAS</div>
      </div>

      <button className="w-80 my-10 py-3 bg-black text-white font-semibold rounded-lg hover:bg-zinc-800 hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md uppercase">start now</button>

      <div className="flex flex-col justify-center items-center w-full min-h-96 text-5xl font-semibold text-center text-gray-300 bg-black uppercase my-10">
       <span className="text-center sm:w-4/6 w-80 font-inter">Discover  , your go-to solution to make people hear about you on LinkedIn</span> 

      </div>

      <Footer />


    </div>
  );
}
