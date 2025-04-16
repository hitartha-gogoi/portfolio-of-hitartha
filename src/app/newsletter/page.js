import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import OverlappingPhotos from "@/components/photographs";
import MyAudioPlayer from "@/components/audio-player";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-screen bg-white">
        <Navbar textColor={`black`} />
        <Sidebar />
        <OverlappingPhotos />
     
    </div>
  );
}
