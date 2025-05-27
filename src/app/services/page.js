import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Services() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full bg-white">
      <Navbar textColor={`black`} />

      <div className="flex flex-col items-center justify-center w-full max-w-4xl p-8 ">
        {/* TOP HEADING */}
      <h1 className={`font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 sm:w-3/6 w-80 text-center text-4xl sm:text-6xl leading-tight space-y-2 mt-32`}>  Write the posts you need to grow on </h1>
      </div>
      <Footer />
    </div>
  );
}
