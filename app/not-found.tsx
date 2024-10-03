import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import LogoImage from "@/public/images/logo.svg";

export default function NotFound() {
    return (
      <div>
        <Header/>
        <div className="container mx-auto flex flex-col items-center justify-center py-40">
          <Image
            src={LogoImage}
            alt="Coach Oye Logo"
            width={350}
            height={140}
            priority
          />
          <h1>404 - Page Not Found</h1>
        </div>
        <Footer/>
      </div>
    );
  }
  