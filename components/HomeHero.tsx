// components/HomeHero.tsx
import Image from 'next/image';
import HeroImage from '@/public/images/hero.jpg';

const HomeHero = () => {
  const heroBannerContent = [
    "Focusing on continuous development for both my clients and me.",
    "Working closely with clients to create a customized and cooperative coaching experience.",
    "Leveraging modern strategies and technological solutions to drive efficiency and creativity.",
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
              className="bg-secondary box-decoration-clone px-4 py-2 w-fit text-2xl lg:text-2xl 2xl:text-4xl font-semibold text-slate-900 "  
            >
              {text}<br />
            </span>
            
          ))}
        </div>
    </section>
  );
};
export default HomeHero;
