import Image from 'next/image';

const HomeHero = () => {
  return (
        <section className="relative min-w-full lg:min-h-[50vh] md:min-h-[25vh]">
      <Image 
        src="/hero.jpg"
        alt="" 
        layout="fill"
        objectFit="cover"
        priority
      />
            <div className="absolute top-3/4 left-10 transform -translate-y-1/2 text-white text-shadow-lg space-y-4">
                <span className="bg-blue-600 px-4 py-2 block text-3xl font-semibold">Hyvää Huomenta</span>
                <span className="bg-blue-600 px-4 py-2 block text-3xl font-semibold">I&#39;m Francis. A Coach, Mentor and avid football fan.</span>
                <span className="bg-blue-600 px-4 py-2 block text-3xl font-semibold">Let&#39;s navigate your journey to Finland, step by step.</span>
            </div>
        </section>
  );
};
export default HomeHero;