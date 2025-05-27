"use client"
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ReactTyped } from "react-typed";
import MyAudioPlayer from "@/components/audio-player";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full bg-white">
      {/* Bottom-Left Positioned Audio Player */}
      <div className="absolute bottom-4 left-4 w-[300px] z-1400">
       <MyAudioPlayer />
      </div>
    <div className="flex flex-col items-center justify-center w-full h-screen relative overflow-hidden bg-neutral-900 border-b-8 border-blue-600/20">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover bg-black/50"
      >
        <source src="https://static-content.azuki.com/assets/anthology_ep2/ep2trailer.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
       {/* Content Over Video */}
       <Navbar textColor={`white`} />
       <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="text-7xl font-extrabold">VELOCITY MVPs</h1>
        <p className="text-lg mt-2 w-96 text-left"><ReactTyped typeSpeed={10} backSpeed={10} startDelay={1000} loop  backDelay={5000} className=" orbitron-font  font-light text-white "
         strings={[`We build momentum, so your vision takes off at full velocity." 🚀`, `Where ideas gain speed, and MVPs take flight.`, `Ideas in motion, MVPs in velocity.`, `Where ideas find momentum, and MVPs take flight at full velocity.` ]}
         /></p>
       
      </div>

       
    </div>

    {/* */}

    <div className="w-full h-[34rem] overflow-x-auto bg-neutral-950  scrollbar-black">
      <div className="inline-flex w-max h-full flex-nowrap space-x-4 px-4 pt-10">
        {/* CARD 1 */}
        <div className="w-80 h-[400px] rounded-lg bg-white bg-[url('https://www.azuki.com/_next/image?url=%2Fhomepage%2FCarousel%2Fwaiting-man.jpg&w=600&q=75')] bg-cover bg-center cursor-pointer shadow-md transition-transform duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-gray-900">
          <div className="flex flex-col items-start h-full text-white pt-6 pl-4">
            <p className="text-xl roboto-font font-bold uppercase">Marketplaces</p>
            <p className="text-sm mt-2 orbitron-font text-gray-200 uppercase">Connecting buyers & sellers in specific industries.</p>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="w-80 h-[400px] rounded-lg bg-white bg-[url('https://www.azuki.com/_next/image?url=%2Fhomepage%2FCarousel%2Fsisters.jpg&w=600&q=75')]  hover:shadow-gray-900 bg-cover bg-center cursor-pointer shadow-md transition-transform duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
          <div className="flex flex-col items-start h-full text-white pt-6 pl-4">
            <p className="text-xl banner-text font-bold uppercase">AI Agents</p>
            <p className="text-sm mt-2 orbitron-font text-gray-200 uppercase">Personalized AI assistants for business workflows.</p>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="w-80 h-[400px] rounded-lg bg-white bg-[url('https://www.azuki.com/_next/image?url=%2Fhomepage%2FCarousel%2Fsatoshi.jpg&w=600&q=75')] hover:shadow-gray-900 bg-cover bg-center cursor-pointer shadow-md transition-transform duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
          <div className="flex flex-col items-start h-full text-white pt-6 pl-4">
            <p className="text-xl banner-text font-bold uppercase">SaaS</p>
            <p className="text-sm mt-2 orbitron-font text-black uppercase">software based solutions for niche markets</p>
          </div>
        </div>

        {/* CARD 4 */}
        <div className="w-80 h-[400px] rounded-lg bg-white bg-[url('https://www.azuki.com/_next/image?url=%2Fhomepage%2FCarousel%2Fbeanz-101.jpg&w=600&q=75')] hover:shadow-gray-900 bg-cover bg-center cursor-pointer shadow-md transition-transform duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
          <div className="flex flex-col items-start h-full text-white pt-6 pl-4">
            <p className="text-xl banner-text font-bold uppercase">Workflow Automation</p>
            <p className="text-sm mt-2 orbitron-font text-white uppercase"> tools for streamlining business operations.</p>
          </div>
        </div>

        {/* CARD 5 */}
        <div className="w-80 h-[400px] rounded-lg bg-white bg-[url('https://www.azuki.com/_next/image?url=%2Fhomepage%2FCarousel%2Fbrown-x-beanz-winter.jpg&w=600&q=75')] hover:shadow-gray-900 bg-cover bg-center cursor-pointer shadow-md transition-transform duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
          <div className="flex flex-col items-start h-full text-white pt-6 pl-4">
            <p className="text-xl banner-text text-black font-bold uppercase">LINE FRIENDS X BEANZ</p>
            <p className="text-sm mt-2 orbitron-font text-gray-600 uppercase">PHYSICAL COLLECTIBLES</p>
          </div>
        </div>

        {/* CARD 6 */}
        <div className="w-80 h-[400px] rounded-lg bg-white bg-[url('https://www.azuki.com/_next/image?url=%2Fhomepage%2FCarousel%2Forigin-of-the-garden.jpg&w=600&q=75')]  hover:shadow-gray-900 bg-cover bg-center cursor-pointer shadow-md transition-transform duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
          <div className="flex flex-col items-start h-full text-white pt-6 pl-4">
            <p className="text-xl banner-text font-bold uppercase">AR/VR Prototypes</p>
            <p className="text-sm mt-2 orbitron-font text-white uppercase"> Training, gaming, or virtual shopping experiences.</p>
          </div>
        </div>

      </div>
    </div>

    {/* */}

    <div className="flex flex-col justify-center sm:flex-nowrap flex-wrap items-center bg-black h-screen w-full py-8">
      <div className="bg-white flex flex-row justify-center sm:flex-nowrap flex-wrap items-start p-6 sm:w-3/5 w-4/5 sm:h-screen h-screen">
        <div className="bg-white flex flex-col justify-center items-center pr-10">
          <span className="uppercase text-black font-extrabold text-3xl pt-6 text-left"> building the future of anime </span>
          <p className="font-normal text-black text-sm pt-6">In 2022, Azuki set out to create a decentralized anime brand, where the community can co-create and contribute to the IP and stories we tell, forging a new model of community-driven entertainment.</p>
          <p className="font-normal text-black text-sm pt-6">The Azuki community, through its creation of 100 subcommunities, a vast collection of fan and commissioned art, multiple community-led events around the world, and much more, has emphatically shown that it's possible to birth a new IP that originates from web3 in the fast world of anime.</p>
          <p className="font-normal text-black text-sm pt-6">From creating the largest decentralized anime IP, to enriching the anime fandom experience with groundbreaking products, Azuki’s mission is to build the future of anime by harnessing the power of community and blockchain technology.</p>
          <p className="font-normal text-black text-sm pt-6">We rise together. We build together. We grow together.
          いくぞ IKZ!</p>

        </div>
        <Image width={180} height={680} className="w-3/5 h-full" src="https://www.azuki.com/_next/image?url=%2Fhomepage%2FManifestoSection%2Fshao-sisters-scene.jpg&w=1920&q=75" />

      </div>

    </div>

    {/* */}

    <div className="flex flex-row justify-center items-center flex-wrap bg-gray-200 h-screen w-full py-20">

      <div className="flex flex-col justify-center items-center sm:w-1/2 w-96 border-r-2 border-gray-200 my-6">
        <span className="uppercase text-black font-extrabold text-2xl pt-6 text-center">anthology series</span>
        <span className="font-medium text-black text-base mb-6 mt-4 w-3/5 text-center"><strong>Enter the Garden</strong> is a 3-part anime anthology series created in collaboration with Dentsu and Goro Taniguchi</span>
        <button className="text-black font-semibold text-base uppercase bg-white py-2 px-6 rounded-3xl cursor-pointer hover:scale-105 transition-all duration-150 ease-out mb-8 shadow-md hover:shadow-2xl"> learn more </button>
        <Image width={640} height={640} className="object-cover rounded-lg" src="https://www.azuki.com/homepage/thumbnail-anthology.jpg" />
      </div>

      <div className="flex flex-col justify-center items-center w-1/2 border-r-2 border-gray-200 my-6">
        <span className="uppercase text-black font-extrabold text-2xl pt-6 text-center">world of azuki</span>
        <span className="font-medium text-black text-base mb-6 mt-4 w-3/5 text-center">Explore the Azuki universe from the Alley to the Garden through interactive web experiences.</span>
        <button className="text-black font-semibold text-base uppercase bg-white py-2 px-6 rounded-3xl cursor-pointer hover:scale-105 transition-all duration-150 ease-out mb-8 shadow-md hover:shadow-2xl"> learn more </button>
        <Image width={640} height={640} className="object-cover rounded-lg" src="https://www.azuki.com/homepage/thumbnail-world.jpg" />
      </div>

    </div>

    {/* */}

    <div className="relative bg-gradient-to-b from-neutral-900 to-black h-screen w-full py-20 overflow-hidden">
      
      {/* Scrolling Row */}
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

    {/* */}

    {/* */}

    {/* */}

    {/* */}
    <Footer />

    </div>
  );
}
