'use client'
import { useState } from "react"

export default function Blog({ title, description, imageUrl }){
    return(
        <>
        <div style={{ backgroundImage: `url(${imageUrl})` }} className={`w-80 h-[400px] rounded-lg bg-white bg-cover bg-center cursor-pointer shadow-md transition-transform duration-300 transform hover:-translate-y-1 hover:shadow-2xl`}>
          <div className="flex flex-col items-start h-full text-white pt-6 pl-4">
            <p className="text-xl banner-text text-black font-bold uppercase">{title}</p>
            <p className="text-sm mt-2 orbitron-font text-gray-600 uppercase">{description}</p>
          </div>
        </div>

        </>
    )
}