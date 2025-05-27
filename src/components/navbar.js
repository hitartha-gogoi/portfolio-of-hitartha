"use client"; // Required in Next.js 15 for interactivity
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "./sidebar";
import { FaDiscord } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

function Navbar({ textColor }) {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [ socialsOpen, setSocialsOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const moreItems = [
    { name: "pay fee", href: "/pay-fee" },
    { name: "sitting judges", href: "https://jhajjar.dcourts.gov.in/list-of-judges/" },
    { name: "voterlist", href: "/voterlist.pdf" },
    { name: "download forms", href: "/download-form.pdf" },
  ];

  const socials = [
    { name: 'Instagram', icon: <AiFillInstagram className="text-black group-hover:text-white transition mr-4" size={20} />, link: 'https://discord.com' },
    { name: 'YouTube', icon: <FaYoutube size={20} className="text-black group-hover:text-white transition mr-4"  />, link: 'https://discord.com' },
    { name: 'GitHub', icon: <FaGithubSquare size={20} className="text-black group-hover:text-white transition mr-4"  />, link: 'https://discord.com' },
    { name: 'X', icon: <FaXTwitter size={20} className="text-black group-hover:text-white transition mr-4" />, link: 'https://discord.com' },
    { name: 'Medium', icon: <FaMedium size={20} className="text-black group-hover:text-white transition mr-4" />, link: 'https://discord.com' },
    { name: 'Discord', icon: <FaDiscord size={20} className="text-black group-hover:text-white transition mr-4"  />, link: 'https://discord.com' },
  ];

  const closeAllPopups = () => {
    setMoreOpen(false);
    setSocialsOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest(".popup-menu")) {
        closeAllPopups();
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div className="z-[9998] w-full h-20 flex flex-row justify-between fixed top-0 left-0 bg-white shadow-sm">
      <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />

      {/* Logo */}
      <Link href="/home">
        <Image
          src="https://www.azuki.com/Azuki%20Logo%20White.svg"
          alt="logo"
          width={80}
          height={80}
          className="mr-2 p-2 m-4 rounded-md bg-red-600 hover:scale-105 transition-transform duration-200 ease-in-out"
        />
      </Link>

      {/* Nav Links */}
      <div className={`flex flex-row justify-center items-center sm:px-10 px-2 text-base uppercase text-${textColor}`}>
        <Link href="/services"><span className="hidden sm:block font-bold hover:shadow-xl mx-4 banner-text">services</span></Link>
        <Link href="/blogs"><span className="hidden sm:block font-bold hover:shadow-xl mx-4 banner-text">blogs</span></Link>
        <Link href="/newsletter"><span className="hidden sm:block font-bold hover:shadow-xl mx-4 banner-text">newsletter</span></Link>
        
        <span
          className="hidden sm:block font-bold hover:shadow-xl mx-4 banner-text cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            setMoreOpen(!moreOpen);
          }}
        >
          more
        </span>

        <span
          className="hidden sm:block font-bold hover:shadow-xl mx-4 banner-text cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            setSocialsOpen(!socialsOpen);
          }}
        >
          socials
        </span>

        

        <Link href="/contact"><span className="hidden sm:block font-bold hover:shadow-xl mx-4 banner-text">contact</span></Link>
      </div>

      {/* Sidebar Toggle */}
      <FaBars onClick={toggleSidebar} className="m-6 hover:scale-125 transition-transform duration-200 ease-in-out cursor-pointer" color="black" />

  
      {/* More Popup */}
      <AnimatePresence>
        {moreOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="popup-menu absolute left-[46%] -translate-x-1/2 top-full bg-white p-3 rounded-lg shadow-lg flex flex-col w-72"
            style={{ marginTop: "8px", paddingTop: "8px" }}
          >
            <span className="flex items-center text-xs text-neutral-900 p-4 h-4 border-b-2 border-gray-200">MORE STUFF</span>
            {moreItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group flex items-center gap-4 p-4 border-b-2 border-gray-200 text-black hover:text-white hover:bg-black"
              >
                <span className="font-extrabold uppercase">{item.name}</span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>


      {/* Socials Popup */}
      <AnimatePresence>
        {socialsOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="popup-menu absolute left-[46%] -translate-x-1/2 top-full bg-white p-3 rounded-lg shadow-lg flex flex-col w-72"
            style={{ marginTop: "8px", paddingTop: "8px" }}
          >
            <span className="flex items-center text-xs text-neutral-900 p-4 h-4 border-b-2 border-gray-200">socials</span>
            {socials.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="group flex items-center gap-4 p-4 border-b-2 border-gray-200 text-black hover:text-white hover:bg-black"
              >
                <span className="font-extrabold uppercase flex space-x-4">{item.icon} {item.name}</span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
