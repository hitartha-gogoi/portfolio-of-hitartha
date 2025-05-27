"use client"
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Tweets from "@/components/tweets";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full bg-black">
        <Navbar />
   

    {/* BANNER */}

    <div className={`flex flex-col w-full h-4/5 justify-center items-center pt-96 sm:pt-72 `}> 
        <h1 className="text-9xl text-white text-center uppercase  font-extrabold"> 99x</h1>
        <span className="text-6xl text-white text-center uppercase  font-light"> Insights</span>

    </div>

        <div className="mt-96 sm:mt-40 w-full h-2 border-t border-white"></div>
        <div className="mt-14 w-full h-2 border-t border-white"></div>
        <div className="mt-14 w-full h-2 border-t border-white"></div>
        <div className="mt-14 w-full h-2 border-t border-white"></div>
        <div className="mt-14 w-full h-2 border-t border-white"></div>

    {/* THE PROBLEM */}

    <div className={`flex flex-col w-full  h-screen justify-start items-center mt-24`}> 

        <div className="flex flex-col justify-between space-y-24 w-full mt-40 ">
            <h1 className="text-4xl sm:text-6xl text-left ml-6 sm:ml-20 text-white uppercase montserrat-extrabold "> the problem ?</h1>
            <p className="text-2xl sm:text-4xl text-left self-end mr-0 sm:mr-20 text-white uppercase montserrat-light w-80 sm:w-96">In today's era of AI and ML, brushing up skills have really become difficult</p>
        </div>

    </div>

    {/* THE SOLUTION */}


    <div className={`flex flex-col w-full h-screen justify-start items-center border-t border-white`}> 

        <div className="flex flex-col justify-between space-y-12 w-full mt-40 ">
            <h1 className="text-4xl sm:text-6xl text-left ml-6 sm:ml-20 text-white uppercase montserrat-extrabold "> the solution </h1>
            <p className="text-2xl sm:text-4xl text-left self-end mr-0 sm:mr-20 text-white uppercase montserrat-light w-80 sm:w-96">In today's era of AI and ML, brushing up skills have really become difficult</p>
        </div>

    </div>

    {/* */}




    <Footer />

    </div>
  );
}
