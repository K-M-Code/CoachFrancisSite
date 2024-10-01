// components/HomeHero.tsx
import Image from 'next/image';
import HeroImage from '@/public/images/hero.jpg';

const HomeHero = () => {
  const heroBannerContent = [
    "Hyvää Huomenta",
    "I'm Francis. A Coach, Mentor and avid football fan.",
    "Let's navigate your journey to Finland, step by step.",
  ];

  return (
    <section className="relative h-[85vh] sm:h-[50vh]">
      <Image
        src={HeroImage}
        alt=""
        layout="fill"
        objectFit="cover"
        style={{ marginLeft: "auto" }}
      />
        <div className="absolute top-1/2 left-2 right-2 sm:left-10 sm:right-10 lg:left-20 -translate-y-1/4 flex flex-col gap-4 lg:gap-10">
          {heroBannerContent.map((text, index) => (
            <span
              key={index}
              className="bg-secondary box-decoration-clone px-4 py-2 w-fit text-3xl lg:text-4xl font-semibold text-slate-900 " 
            >
              {text}<br />
            </span>
            
          ))}
        </div>
    </section>
  );
};
export default HomeHero;
