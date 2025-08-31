'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollFadeIn } from '@/components/scroll-fade-in';

const testimonials = [
  {
    name: "John Doe",
    title: "CEO, Innovate Inc.",
    quote: "Apex Apps transformed our mobile presence. Their team's expertise and dedication were evident from day one. We saw a 200% increase in user engagement after launch!",
    avatar: "https://picsum.photos/100/100?random=1",
    initials: "JD",
  },
  {
    name: "Jane Smith",
    title: "CTO, Tech Solutions",
    quote: "The web application they built for us is fast, scalable, and secure. Their transparent process and communication made the project a seamless experience.",
    avatar: "https://picsum.photos/100/100?random=2",
    initials: "JS",
  },
  {
    name: "Sam Wilson",
    title: "Founder, Startup Hub",
    quote: "Working with Apex Apps felt like having an in-house team. They are professional, responsive, and truly invested in our success. Highly recommended!",
    avatar: "https://picsum.photos/100/100?random=3",
    initials: "SW",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-secondary/20">
      <div className="container mx-auto px-4">
        <ScrollFadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-light-gray max-w-2xl mx-auto">
            We are proud to have partnered with amazing clients. Here's what they think about our work.
          </p>
        </ScrollFadeIn>
        
        <ScrollFadeIn>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <div className="p-2 h-full">
                    <Card className="h-full flex flex-col justify-between shadow-lg bg-secondary/50 border-secondary">
                      <CardContent className="p-6">
                        <blockquote className="text-lg text-light-gray border-l-4 border-primary pl-4 mb-6">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="flex items-center">
                          <Avatar>
                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint="person" />
                            <AvatarFallback>{testimonial.initials}</AvatarFallback>
                          </Avatar>
                          <div className="ml-4">
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden xl:flex" />
            <CarouselNext className="hidden xl:flex" />
          </Carousel>
        </ScrollFadeIn>
      </div>
    </section>
  );
};

export default Testimonials;
