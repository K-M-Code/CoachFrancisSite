"use client"
import Image from 'next/image';
import Lin from '@/public/images/testimonials/Lin ThumYunThai.jpg';
import Joona from '@/public/images/testimonials/Joona.jpg';
import Rashida from '@/public/images/testimonials/Rashida Mohammed.jpg';
import Charles from '@/public/images/testimonials/Charles.jpg';
import Anjan from '@/public/images/testimonials/Anjan Bayalkoti.jpg';
import Cathy from '@/public/images/testimonials/Cathy Leonelle.jpg';
import Uche from '@/public/images/testimonials/Uchechukwu Unachukwu.jpg';
import Rhoda from '@/public/images/testimonials/Rhoda.jpg';
import MaleIcon from '@/public/images/icons/male1.svg';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useEmblaCarousel from 'embla-carousel-react';
import AutoPlay from 'embla-carousel-autoplay';
import {  useEffect, useCallback } from "react";

const Testimonials = () => {
  const testimonialsData = [
    {
      quote:
        "Francis is a friendly, open, and knowledgeable person with a deep understanding of both business theory and real-world practice. His recommendations, especially for key hires like Yen, have been invaluable. Our discussions are always insightful, and his connections have significantly benefited our restaurant business. A truly great collaborator!",
      name: 'Lin',
      position: 'Tom Yum Thai',
      photo: Lin.src,
    },
    {
      quote:
        "I have received professional advice from Francis on how to improve my CV. He helped me understand what to highlight and how to present my skills in a way that stands out to employers. I can warmly recommend Francis for anyone looking for support with job applications, CV writing, or career advice.",
      name: 'Joona',
      position: 'University of Vaasa',
      photo: Joona.src,
    },
    {
      quote:
        "My name is Rashida Mohammed. I am a Ghanaian studying MSc. Industrial Management at the University of Vaasa. I must admit that the booked CV and Cover Letter Writing session I had with Francis recently was an amazing experience! He pays extreme attention to details, so passionate and professional. In the end, it was worth his time and effort as I fell in love with my CV and Cover Letter. I highly recommend his services to everyone",
      name: 'Rashida Mohammed',
      position: 'University of Vaasa',
      photo: Rashida.src,
    },
    {
      quote:
        "All the way from Nigeria , I want to appreciate and thank  you my coach and mentor Mr Oye, for your great support in mentoring me on how to achieve my goal in line with my desired profession of which have been struggling with , but when I came in contact with you , i have  learned so much  from you  and now am getting it right thank you boss. 👍🏽",
      name: 'Charles',
      position: 'Nigeria',
      photo: Charles.src,
    },
    {
      quote:
        "I'm Anjan Bayalkoti, an IT student at VAMK. Moving to Finland was challenging, but Oyeyiola Francis, my talent and career coach, greatly helped with my adaptation and career growth. His motivation and example inspire me, especially his advice to stay brave and face obstacles. Thank you, Francis!",
      name: 'Anjan Bayalkoti',
      position: 'VAMK',
      photo: Anjan.src,
    },
    {
      quote:
        "Having Mr. Francis as a talent coach has been a life-changing experience for me! His guidance helped me regain confidence and clarity through various phases of my life, both academically and professionally. Mr. Francis has a unique ability to uplift others, helping you see solutions where you once saw obstacles. I truly value his skills and mindset, and I cannot recommend him highly enough!",
      name: 'Cathy Leonelle',
      position: 'VAMK',
      photo: Cathy.src,
    },
    {
      quote:
        "Francis has definitely made my life in Finland much more enjoyable. Plus , he’s always positive and bubbly and full of positivity .. definitely learnt a lot from him 😁",
      name: 'Uchechukwu Unachukwu',
      position: 'VAMK',
      photo: Uche.src,
    },
    {
      quote:
        "Francis gave me room to express my needs and gave me a good listening ear. I learnt key things about career development and a new perspective of viewing my career from him. Regular self-evaluation about my work, self-awareness and actively listening to those experienced in my field are things I have learnt to pay attention to from this session. Looking forward to booking other sessions for other aspects.",
      name: 'Rhoda',
      position: 'Savonia',
      photo: Rhoda.src,
    },
    {
      quote:
        "Francis is a very empathetic, sincere, and positive person. He carefully listened to my request and guided me toward steps that truly suited me best! Highly recommend.",
      name: 'Nazar',
      position: '',
      photo: MaleIcon.src,
    },
    {
      quote:
        "It was the best session that I ever attended, and thanks to Mr. Francis, I have experienced the most productive week in my life.",
      name: 'Peter',
      position: 'Accounting Student',
      photo: MaleIcon.src,
    },
    {
      quote:
        "It was an excellent session with Mentor Francis. Thank you for your advice on adjusting my CV to have more opportunities in the job market.",
      name: 'Hau',
      position: 'Business Student',
      photo: MaleIcon.src,
    },
  ];

  const [emblaRef, embla] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
    inViewThreshold: 0.7,
  });

  // Removed unused scrollTo
  const onSelect = useCallback(() => {
    if (!embla) return;
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
  }, [embla, onSelect]);

  return (
    <section id="testimonials" className="bg-primary py-20 text-white">
      <div className="container mx-auto">
        <h2 className="mb-12 text-center">What people say about my services?</h2>

        <Carousel
          ref={emblaRef}
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-3xl xl:max-w-6xl mx-auto flex h-full"
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            AutoPlay({
              delay: 2500,
            }),
          ]}
        >
          <CarouselContent className="h-full">
            {testimonialsData.map((testimonial, index) => (
              <CarouselItem key={index} className="lg:basis-1/2 h-full">
                <Card className="bg-white text-black">
                  <CardContent className="flex flex-col gap-4 p-6">
                    <p className="line-clamp-[11] sm:line-clamp-[9] lg:line-clamp-6">
                      {testimonial.quote}
                    </p>
                    <div className="flex items-center gap-4">
                      <Image
                        src={testimonial.photo}
                        alt={testimonial.name}
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                      <div>
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
