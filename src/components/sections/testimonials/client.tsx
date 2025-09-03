'use client';
import { Card } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ScrollFadeIn } from '@/components/scroll-fade-in';
import React from "react";
import { useTranslations } from "next-intl";
import { Feedback } from "@/components/sections/testimonials/feedback";

type Props = {
  items: TTestimonial[];
}

const TestimonialsClient: React.FC<Props> = ({ items }) => {
  const t = useTranslations('common');

  return (
    <section className="section-padding bg-secondary/20">
      <div className="container mx-auto px-4">
        <ScrollFadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('feedback.title')}</h2>
          <p className="text-light-gray max-w-2xl mx-auto">
            {t('feedback.description')}
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
              {items.map((testimonial, index) => (
                <CarouselItem key={index} >
                  <div className="p-2 h-full">
                    <Card className="h-full flex flex-col justify-between shadow-lg bg-secondary/50 border-secondary">
                      <Feedback item={testimonial} />
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

export default TestimonialsClient;
