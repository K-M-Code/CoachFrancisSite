import HomeHero from "@/components/HomeHero";
import HomeServices from "@/components/HomeServices";
import HomeBlog from "@/components/HomeBlog";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    
    <>
      <HomeHero/>
      <HomeServices/>
      <Testimonials/>
      <HomeBlog/>
    </>
  );
}

export const revalidate = 0