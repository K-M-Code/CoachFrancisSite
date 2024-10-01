import Image from 'next/image';
import Male1 from '@/public/images/icons/male1.svg';
import Male2 from '@/public/images/icons/male2.svg';
import Male3 from '@/public/images/icons/male3.svg';
import Female1 from '@/public/images/icons/female1.svg';
import Female2 from '@/public/images/icons/female2.svg';
import Female3 from '@/public/images/icons/female3.svg';

const Testimonials = () => {
  const testimonialsData = [
    {
      quote:
        "I highly recommend working with Francis! He's knowledgeable, supportive, and helped me navigate my move to Finland with ease.",
      name: 'John Doe',
      position: 'Software Engineer',
      photo: Male1.src,
    },
    {
      quote:
        'Francis is an excellent coach and mentor. His guidance and expertise helped me secure a job in Finland and start a new chapter in my life.',
      name: 'Jane Smith',
      position: 'Marketing Specialist',
      photo: Female1.src,
    },
    {
      quote:
        "I was hesitant to make the move to Finland, but Francis's advice and support made the transition seamless. I'm so grateful to have worked with him!",
      name: 'Bob Johnson',
      position: 'Data Analyst',
      photo: Male2.src,
    },
    {
      quote:
        "I was hesitant to make the move to Finland, but Francis's advice and support made the transition seamless. I'm so grateful to have worked with him!",
      name: 'Jill Johnson',
      position: 'Data Scientist',
      photo: Female2.src,
    },
    {
      quote:
        "I was hesitant to make the move to Finland, but Francis's advice and support made the transition seamless. I'm so grateful to have worked with him!",
      name: 'Alex Johnson',
      position: 'Data Analyst',
      photo: Male3.src,
    },
    {
      quote:
        "I was hesitant to make the move to Finland, but Francis's advice and support made the transition seamless. I'm so grateful to have worked with him!",
      name: 'Emma Johnson',
      position: 'Data Scientist',
      photo: Female3.src,
    },
  ];

  return (
    <section className="testimonials bg-primary py-20 text-white">
      <div className="container mx-auto">
      <h2 className="mb-12 text-center">
        What people say about my services?
      </h2>

      <div
        className="relative flex overflow-hidden"
      >
        <div className="flex items-center justify-start space-x-8 animate-infinite-scroll">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-[75vw] sm:min-w-[45vw] lg:min-w-[30vw] flex-col gap-10 lg:flex-row bg-white text-black p-8 shadow-xl my-10 hover:shadow-2xl transform hover:scale-105 duration-300 rounded-xl"
            >
              <div className="flex flex-col gap-4">
                <p className="">{testimonial.quote}</p>
                <div className="flex gap-6">
                  <Image
                    src={testimonial.photo}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div className="flex flex-col gap-2">
                    <h3 className="">{testimonial.name}</h3>
                    <p className="">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Testimonials;
