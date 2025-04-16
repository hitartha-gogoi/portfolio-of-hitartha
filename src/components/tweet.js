"use client"; // Required in Next.js 15 for interactivity
import Link from "next/link"
import Image from "next/image";
import { IoCodeSlashSharp } from "react-icons/io5";
import { AiTwotoneCheckCircle, AiFillInstagram, AiFillTwitterSquare,  AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { FaXTwitter } from "react-icons/fa6";

function Tweet(){
  return (      
      <div className="bg-cover bg-center mr-5 cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105 flex flex-col justify-center items-center bg-black w-96 rounded-md border border-neutral-600 p-6 mx-4">

        <div className="flex flex-row justify-between items-center w-full ">
            <div className="flex flex-row w-4/5 justify-center items-center">
            <Image src={"https://www.azuki.com/_next/image?url=%2Fhomepage%2FCarousel%2Fbrown-x-beanz-winter.jpg&w=600&q=75"} alt="photo" height={40} width={40} className="rounded-full mr-4 border border-neutral-100" />
                <div className="flex flex-col justify-center w-4/5">
                  <span className="text-white text-lg text-left font-medium">Willian Candilian</span>
                  <span className="text-gray-400 banner-text text-lg text-left font-medium">@willian</span>
                </div>
            </div>
            <FaXTwitter />
        </div>

        {/* CONTENT */}
        <p className="banner-text text-left text-gray-300 font-medium block w-80 break-words whitespace-pre-wrap my-4">So @expo’s over the air update feature just saved us on launch day (yes, Friday, sorry). We had a crash happening on a critical path (didn’t happen in dev testing) but narrowed it down and deployed a fix using OTA in about an hour.</p>
      </div>
    
  );
};

export default Tweet;
