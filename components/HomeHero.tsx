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
    <section id='hero' className="relative h-[85vh] sm:h-[50vh]" >
      <Image
        src={HeroImage}
        alt=""
        fill={true}
        className='ml-auto object-cover'
      />
        <div className="absolute inset-x-2 top-1/2 flex -translate-y-1/4 flex-col  gap-4 sm:inset-x-10 lg:gap-10">
          {heroBannerContent.map((text, index) => (
            <span
              key={index}
              className="w-fit bg-secondary box-decoration-clone px-4 py-2 text-2xl font-semibold text-slate-900 lg:text-2xl 2xl:text-4xl "  
            >
              {text}<br />
            </span>
            
          ))}
        </div>
    </section>
  );
};
export default HomeHero;
