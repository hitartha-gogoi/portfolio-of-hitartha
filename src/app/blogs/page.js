import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-screen bg-black">
      <Navbar textColor={`white`} />
      <Sidebar />

      <div className="flex flex-row flex-wrap justify-center items-center w-full h-screen">

        <div className="flex flex-col justify-center w-96 sm:w-1/2 pl-10 ">
            <h1 className="self-start text-4xl font-extrabold text-white banner-text mb-10">WHO WE ARE </h1>
            <span className="text-base text-white font-medium w-96 sm:w-[32rem]">At Azuki, we are building the future of anime through decentralized IP co-created with the community and innovative products that enrich the anime fan experience. Our Azuki collectibles have generated over $1B in secondary trading volume. Here are some things we’ve created so far.</span>
            <button className="bg-neutral-900 text-gray-300 w-40 h-10 rounded-2xl uppercase text-base font-medium m-6 banner-text"> explore </button>
        </div>

        <div className="flex flex-col flex-wrap justify-center w-96 sm:w-1/2 bg-[url('https://www.azuki.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fj7912igus1qi%2F3bcqtbdHgCoNWC1lMXw0V%2F925b5e8f89247a2aee52af1447fcc7fa%2Fpassport_book_cover.jpeg&w=3840&q=75')] bg-cover bg-center cursor-pointer h-screen w-full overflow-hidden">
        {/* Gradient overlay covering only the right half */}
          <div className="absolute top-0 right-0 bottom-0 w-1/2 bg-gradient-to-r from-black to-transparent opacity-80"></div>
          <div className="w-96 h-60 rounded-xl bg-[url('https://www.azuki.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fj7912igus1qi%2F3pjG5wpwFkPxhD6d506BxM%2F2188e498a4e208075a1bbcad278e51c7%2FBEANZ_101.jpg&w=3840&q=75')] bg-cover bg-center m-4"></div>
          <div className="w-96 h-60 rounded-xl bg-[url('https://www.azuki.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fj7912igus1qi%2F7dSZAanqclmkmZi0uhEyHG%2F883db454d4cdfd4cf2d2d0a677011e1c%2FBobu_About_Logo.png&w=3840&q=75')] bg-cover bg-center m-2"></div>
          <div className="w-[32rem] h-60 rounded-xl bg-[url('https://www.azuki.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fj7912igus1qi%2F2TGRrwDqu7Y3kZRfNs38fb%2F3c38987897a7ee061109464edf0ed4ff%2Fepik_high.jpg&w=2048&q=75')] bg-cover bg-center m-4"></div>
          <div className="w-96 h-60 rounded-xl bg-[url('https://www.azuki.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fj7912igus1qi%2F5XIBLRI4a9u5GUHQZsz0vx%2Fd8474d01fdc848b0b7246bbedd10fe16%2Fnyc_party.jpg&w=2048&q=75')] bg-cover bg-center m-2"></div>
          <div className="w-96 h-60 rounded-xl bg-[url('https://www.azuki.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fj7912igus1qi%2FijbWYa94XQb1lpPE9hnwF%2Ffe4b1f95732c96dcdb7b0475d257df9b%2Fproject_erc721a.jpg&w=3840&q=75')] bg-cover bg-center m-4"></div>
          <div className="w-96 h-60 rounded-xl  bg-[url('https://www.azuki.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fj7912igus1qi%2FijbWYa94XQb1lpPE9hnwF%2Ffe4b1f95732c96dcdb7b0475d257df9b%2Fproject_erc721a.jpg&w=3840&q=75')] bg-cover bg-center m-2"></div>
            
        </div>

      </div>


    </div>
  );
}
