"use client"

import React, { useState, useEffect, useRef, useMemo } from 'react';
import Image from 'next/image';
import Male1 from '@/public/images/icons/male1.svg';
import Male2 from '@/public/images/icons/male2.svg';
import Female1 from '@/public/images/icons/female1.svg';
import Female2 from '@/public/images/icons/female2.svg';

const Testimonials: React.FC = () => {
const testimonialsData = useMemo(() => [
{
    quote: "I highly recommend working with Francis! He's knowledgeable, supportive, and helped me navigate my move to Finland with ease.",
    name: 'John Doe',
    position: 'Software Engineer',
    photo: Male1.src
},
{
    quote: 'Francis is an excellent coach and mentor. His guidance and expertise helped me secure a job in Finland and start a new chapter in my life.',
    name: 'Jane Smith',
    position: 'Marketing Specialist',
    photo: Female1.src
},
{
    quote: "I was hesitant to make the move to Finland, but Francis's advice and support made the transition seamless. I'm so grateful to have worked with him!",
    name: 'Bob Johnson',
    position: 'Data Analyst',
    photo: Male2.src
},
{
    quote: "Francis's expertise in the Finnish job market was invaluable. His personalized approach made all the difference in my career transition.",
    name: 'Jill Johnson',
    position: 'Data Scientist',
    photo: Female2.src
},
], []);

const [currentIndex, setCurrentIndex] = useState(0);
const testimonialsRef = useRef<HTMLDivElement>(null);

useEffect(() => {
const interval = setInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
}, 2000);

return () => clearInterval(interval);
}, [testimonialsData.length]);

useEffect(() => {
if (testimonialsRef.current) {
    testimonialsRef.current.style.transform = `translateX(-${currentIndex * 100 / testimonialsData.length}%)`;
}
}, [currentIndex, testimonialsData.length]);

return (
<section className="testimonials bg-primary py-20 text-white overflow-hidden">
    <h2 className="mb-12 text-center text-4xl font-bold">
    What people say about my services?
    </h2>
    <div className="container mx-auto relative">
    <div
        ref={testimonialsRef}
        className="flex transition-transform duration-500 ease-in-out"
        style={{ width: `${testimonialsData.length * 100}%` }}
    >
        {testimonialsData.concat(testimonialsData).map((testimonial, index) => (
        <div
            key={index}
            className="w-full sm:w-1/3 px-4 snap-center"
        >
            <div className="flex flex-col gap-4 h-full">
            <p className="text-lg font-medium flex-grow">{testimonial.quote}</p>
            <div className="flex items-center gap-4">
                <Image
                src={testimonial.photo}
                alt={`${testimonial.name}'s photo`}
                width={60}
                height={60}
                className="rounded-full bg-secondary"
                />
                <div>
                <h3 className="text-xl font-bold">{testimonial.name}</h3>
                <p className="text-lg font-medium">{testimonial.position}</p>
                </div>
            </div>
            </div>
        </div>
        ))}
    </div>
    </div>
</section>
);
};

export default Testimonials;