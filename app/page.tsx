import HomeHero from "@/components/HomeHero";
import HomeServices from "@/components/HomeServices";
import HomeBlog from "@/components/HomeBlog";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coach Oye",
  description: "Coach Francis Oye",
}

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
