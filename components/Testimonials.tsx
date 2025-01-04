"use client"
import Image from 'next/image';
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
import testimonialsData from '@/components/testimonialsData';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const Testimonials = () => {

  const [emblaRef, embla] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
    inViewThreshold: 0.7,
  });

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
          className="mx-auto flex size-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-3xl xl:max-w-6xl"
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
              <CarouselItem key={index} className="lg:basis-1/2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="cursor-pointer bg-white text-black">
                      <CardContent className="flex flex-col gap-4 p-6">
                        <p className="line-clamp-[4] min-h-[130px]">
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
                          <div className="min-h-[85px]">
                            <h3 className="font-semibold">{testimonial.name}</h3>
                            <p className="text-sm text-gray-600">
                              {testimonial.position}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader className='flex flex-row gap-4'>
                      
                    <Image src={testimonial.photo} alt={testimonial.name} width={50} height={50} className='rounded-full'></Image>
                    <div>                      
                    <DialogTitle>{testimonial.name}</DialogTitle>
                      <DialogDescription>{testimonial.position}</DialogDescription>
                    </div>
                    </DialogHeader>
                    <p className="whitespace-pre-line">{testimonial.quote}</p>
                  </DialogContent>
                </Dialog>
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
