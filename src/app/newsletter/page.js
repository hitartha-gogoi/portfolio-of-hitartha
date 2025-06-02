'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Mail, Lightbulb, Rocket, ShieldCheck } from "lucide-react";

export default function NewsletterPage() {

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: handle your API logic here (e.g., Mailchimp, Resend, etc.)
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full bg-white">
        <Navbar textColor={`black`} />

        {/* TOP HEADING */}
         <h1 className={`font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 sm:w-3/6 w-80 text-center text-4xl sm:text-6xl leading-tight space-y-2 mt-32`}>  Write the posts you need to grow on <span className="bg-gray-200 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-teal-600 mt-10 px-2 rounded-md">LinkedIn</span></h1>
         
         {/* TOP TEXT */}
         <p className="text-lg max-w-2xl text-center md:text-xl text-gray-600 mb-8 mt-2">
          Join 10,000+ tech enthusiasts receiving curated insights on AI, startups, and innovation every week.
        </p>

        {/* EMAIL INPUT AND SUBSCRIBE BUTTON */}
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center gap-4 justify-center">
          <motion.input whileFocus={{ scale: 1.02 }} whileHover={{ scale: 1.01 }} type="email" required value={email} onChange={(e) => setEmail(e.target.value)}  placeholder="Enter your email" className="w-full max-w-96 min-w-72 px-4 py-3 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black transition-all" />
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit" className="bg-black text-white px-6 py-3 text-lg rounded-md flex items-center gap-2 hover:bg-gray-900 transition">
            <Mail className="h-5 w-5" /> Subscribe</motion.button>
        </form>

        {/* SUBSCRIBE INFO */}
        <p className="text-sm text-gray-500 mt-4">
          No spam. Unsubscribe anytime.
        </p>

        {/* Scrolling Row */}
        <div className="relative h-screen w-full py-20 overflow-hidden">
          <div className="scroll-container">
            <div className="scroll-content">
              {/* Cards (Manually Inserted) */}
               <div className="scroll-item bg-[url('https://www.azuki.com/homepage/thumbnail-anthology.jpg')]"></div>
               <div className="scroll-item bg-[url('https://www.azuki.com/_next/image?url=%2Fhomepage%2FCarousel%2Fwaiting-man.jpg&w=600&q=75')]"></div>
               <div className="scroll-item bg-[url('https://www.azuki.com/_next/image?url=%2Fhomepage%2FCarousel%2Fsisters.jpg&w=600&q=75')]"></div>
               <div className="scroll-item bg-[url('https://www.azuki.com/_next/image?url=%2Fhomepage%2FCarousel%2Fsatoshi.jpg&w=600&q=75')]"></div>
            </div>

           {/* Duplicate Content to Ensure Seamless Loop */}
           <div className="scroll-content">
            <div className="scroll-item bg-[url('https://www.azuki.com/homepage/thumbnail-anthology.jpg')]"></div>
             <div className="scroll-item bg-[url('https://www.azuki.com/_next/image?url=%2Fhomepage%2FCarousel%2Fwaiting-man.jpg&w=600&q=75')]"></div>
             <div className="scroll-item bg-[url('https://www.azuki.com/_next/image?url=%2Fhomepage%2FCarousel%2Fsisters.jpg&w=600&q=75')]"></div>
             <div className="scroll-item bg-[url('https://www.azuki.com/_next/image?url=%2Fhomepage%2FCarousel%2Fsatoshi.jpg&w=600&q=75')]"></div>
            </div>
          </div>
        </div>

         {/* FOR WHOM? */}
        <section className="w-full flex flex-col items-center bg-black justify-center space-y-6 text-center mb-12 banner-text py-10">
          <h2 className="text-center sm:w-4/6 w-80 font-inter  text-4xl sm:text-6xl font-semibold text-gray-300 py-28">How they are growing their audience with Tapilio</h2>
          <p className="text-lg banner-text font-light text-gray-100"></p>
          
        </section>

        {/* WHY SUBSCRIBE */}
        <div className="rounded-2xl shadow-xl max-w-3xl p-8 space-y-8 my-8">

          <div className="space-y-4">
            <h2 className="text-3xl font-extrabold banner-text text-gray-900">Why 99X Weekly?</h2>
            <p className="text-gray-700 banner-text font-medium">
                Every week, we deliver <span className="text-black font-semibold">high-quality, deeply-researched insights</span> across AI, including how it’s used in Computer Vision, NLP, RAGs, LLM architectures, and much more.
            </p>
          </div>

    
          <div className="grid sm:grid-cols-2 gap-6 font-medium banner-text">
            <div className="flex items-start gap-4">
             <i className="ph ph-brain text-2xl text-black font-bold"></i>
              <div>
                <h3 className="font-semibold text-gray-900">Deep Technical Breakdowns</h3>
                 <p className="text-gray-700 text-sm">Understand how LLMs like GPT-4 and Claude are trained, optimized, and deployed in real-world pipelines.</p>
             </div>
            </div>

            <div className="flex items-start gap-4">
             <i className="ph ph-chart-line text-2xl text-black font-bold"></i>
             <div>
               <h3 className="font-semibold text-gray-900">Startup & Research Insights</h3>
               <p className="text-gray-700 text-sm">Explore case studies, research papers, and product breakdowns with actionable takeaways.</p>
             </div>
            </div>

            <div className="flex items-start gap-4">
              <i className="ph ph-image-square text-2xl text-black font-bold"></i>
              <div>
                <h3 className="font-semibold text-gray-900">Computer Vision Use Cases</h3>
                <p className="text-gray-700 text-sm">Real-world applications of AI in medical imaging, self-driving, manufacturing, and defense.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <i className="ph ph-chat-circle-dots text-2xl text-black font-bold"></i>
              <div>
             <h3 className="font-semibold text-gray-900">NLP & Prompt Engineering</h3>
             <p className="text-gray-700 text-sm">Learn the art of prompt design, transformers, retrieval-augmented generation (RAG), and more.</p>
            </div>
           </div>
          </div>

          <div className="text-center pt-6 space-y-4">
            <p className="text-gray-700 text-sm">For just <span className="text-black font-bold">₹99/month</span>, get deep insights that level up your understanding & strategy.</p>
          </div>
  
        </div>

        

        <Footer />
    </div>
  );
}
