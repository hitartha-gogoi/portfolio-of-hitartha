'use client'
import { useState } from "react"
import Blog from "./blog"

const blogData = [  
  {
    title: "Marketplaces",
    description: "Connecting buyers & sellers in specific industries.",
    imageUrl: "https://www.azuki.com/_next/image?url=%2Fhomepage%2FCarousel%2Fwaiting-man.jpg&w=600&q=75",
  },
  {
    title: "AI Agents",
    description: "Personalized AI assistants for business workflows.",
    imageUrl: "https://www.azuki.com/_next/image?url=%2Fhomepage%2FCarousel%2Fsisters.jpg&w=600&q=75",
  },
  {
    title: "SaaS",
    description: "Software based solutions for niche markets.",
    imageUrl: "https://www.azuki.com/_next/image?url=%2Fhomepage%2FCarousel%2Fsatoshi.jpg&w=600&q=75",
  },
  {
    title: "Workflow Automation",
    description: "Tools for streamlining business operations.",
    imageUrl: "https://www.azuki.com/_next/image?url=%2Fhomepage%2FCarousel%2Fbeanz-101.jpg&w=600&q=75",
  },
  {
    title: "LINE FRIENDS X BEANZ",
    description: "Physical collectibles",
    imageUrl: "https://www.azuki.com/_next/image?url=%2Fhomepage%2FCarousel%2Fbrown-x-beanz-winter.jpg&w=600&q=75",
  },
  {
    title: "AR/VR Prototypes",
    description: "Training, gaming, or virtual shopping experiences.",
    imageUrl: "https://www.azuki.com/_next/image?url=%2Fhomepage%2FCarousel%2Forigin-of-the-garden.jpg&w=600&q=75",
  },
]

export default function Blogs(){
    return(
        <>
        <div className="w-full h-[34rem] overflow-x-auto scrollbar-white">
            <div className="inline-flex w-max h-full flex-nowrap space-x-4 px-4 pt-10">
              {blogData.map((blog, index) => (
                <Blog key={index} title={blog.title} description={blog.description} imageUrl={blog.imageUrl} />
              ))}
            </div>
        </div>
        </>
    )
}