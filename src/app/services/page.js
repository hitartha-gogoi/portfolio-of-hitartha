'use client';
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import Tweets from "@/components/tweets";
import { Mail, MapPin } from 'lucide-react';

const services = [
  {
    title: "Basic",
    description:
      "Fast prototype or MVP development with React/Next.js frontend and Flask/FastAPI backend. Ideal for startups validating ideas.",
    features: [
      "Responsive Web App",
      "API Integration",
      "Basic UI/UX",
      "2 Weeks Delivery",
    ],
    price:  1500,
  },
  {
    title: "Standard",
    description:
      "Complete full-stack web app with React/Next.js frontend, MERN or Flask backend, and automation scripts.",
    features: [
      "Custom UI/UX",
      "API & Database Setup",
      "Automation Scripts",
      "3-4 Weeks Delivery",
    ],
    price: 5000,
  },
  {
    title: "Premium",
    description:
      "End-to-end scalable web & mobile app solution with AI/ML integration, React Native mobile apps, and web scraping tools.",
    features: [
      "Full-stack Web + Mobile",
      "AI/ML Features",
      "Advanced Automation",
      "Maintenance & Support",
      "6+ Weeks Delivery",
    ],
    price: 20000,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  hover: { scale: 1.05, boxShadow: "0 10px 20px rgba(99, 102, 241, 0.3)" },
};

export default function ServicesPage() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full bg-white">
      <Navbar textColor={`black`} />

      <div className="flex flex-col items-center justify-center w-full max-w-4xl p-8 ">
        {/* TOP HEADING */}
      <h1 className="text-5xl sm:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-400 text-center w-80 sm:w-[50rem] uppercase mt-20">The web framework when it matters</h1>
      <span className="text-3xl my-8 font-medium text-gray-400 text-center w-80 h-60 sm:h-20 sm:w-[50rem] banner-text">
        <ReactTyped typeSpeed={10} backSpeed={10} loop startDelay={1000} backDelay={5000} className="text-black" strings={[`Peerless performance, efficiency and developer experience. Next.js is trusted by some of the biggest names of the web.` ]} />
      </span>
      </div>

      {/* PACKAGES */}
      <div as={motion.div} variants={containerVariants} initial="hidden" animate="visible" className="grid gap-10 md:grid-cols-3 px-8 py-8">
  {services.map(({ title, description, features, price }) => (
    <motion.div
      key={title}
      variants={cardVariants}
      whileHover="hover"
      className="bg-white rounded-xl shadow-lg p-8 flex flex-col cursor-pointer select-none border border-transparent hover:border-black transition-all duration-300"
    >
      <h3 className="text-2xl font-extrabold mb-3 text-black tracking-wide uppercase">{title}</h3>
      <p className="text-gray-800 mb-5 flex-grow leading-relaxed">{description}</p>
      <ul className="mb-8 text-left list-disc list-inside space-y-2 text-gray-600 font-medium">
        {features.map((feature) => (
          <li key={feature} className="transition-colors duration-200">
            {feature}
          </li>
        ))}
      </ul>
      <div className="text-2xl font-extrabold text-black mb-6">₹{price}</div>
      <button className="mt-auto bg-black text-white py-3 rounded-lg hover:bg-black active:scale-95 transform transition duration-150 font-semibold shadow-md">
        Contact Us
      </button>
    </motion.div>
  ))}
      </div>

       {/* TESTIMONIALS */}
             <div className="flex flex-col justify-center items-center w-full min-h-screen my-10 bg-black mx-4 shadow-2xl">
             <p className="text-center sm:w-4/6 w-80 font-inter  text-4xl sm:text-6xl font-semibold text-gray-300 py-28">
             <p>Don't just take our words.</p>
             <p>Here's what people have to say about us</p>
             </p>
             <Tweets />
            </div>
      

      
      <Footer />
    </div>
  );
}
