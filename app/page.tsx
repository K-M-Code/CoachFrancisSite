import Header from "@/components/Header";
import HomeHero from "@/components/HomeHero";
import HomeServices from "@/components/HomeServices";
// import HomeBlog from "@/components/HomeBlog";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    
    <div>
      <Header/>
      <HomeHero/>
      <HomeServices/>
      <Testimonials/>
      {/* <HomeBlog/> */}
      <Footer/>
    </div>
  );
}
