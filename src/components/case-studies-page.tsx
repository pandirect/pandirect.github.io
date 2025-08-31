'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ScrollFadeIn } from '@/components/scroll-fade-in';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Briefcase, Code, Palette, Smartphone, Store } from 'lucide-react';
import { cn } from '@/lib/utils';
import { caseStudies } from '@/lib/case-studies-data';


const categories = [
  { name: 'All', icon: Briefcase },
  { name: 'Web Development', icon: Code },
  { name: 'Mobile Apps', icon: Smartphone },
  { name: 'UI/UX Design', icon: Palette },
  { name: 'E-commerce', icon: Store },
];

const CaseStudiesPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredStudies = activeCategory === 'All'
    ? caseStudies
    : caseStudies.filter(study => study.category === activeCategory);

  return (
    <section id="case-studies" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <ScrollFadeIn className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Our Case Studies</h1>
          <p className="text-light-gray max-w-3xl mx-auto">
            We've helped businesses across various industries to succeed with our cutting-edge solutions. Explore some of our favorite projects and see how we can help you achieve your goals.
          </p>
        </ScrollFadeIn>

        <ScrollFadeIn delay={200} className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map(category => (
              <Button
                key={category.name}
                variant={activeCategory === category.name ? "default" : "outline"}
                onClick={() => setActiveCategory(category.name)}
                className={cn(
                  "transition-all duration-300",
                  activeCategory === category.name ? "bg-primary text-primary-foreground" : "border-border text-foreground hover:bg-secondary/50"
                )}
              >
                <category.icon className="mr-2 h-4 w-4" />
                {category.name}
              </Button>
            ))}
          </div>
        </ScrollFadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStudies.map((item, index) => (
            <ScrollFadeIn key={index} delay={index * 100}>
              <Link href={`/case-studies/${item.slug}`} className="block h-full">
                <Card className="group h-full flex flex-col overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-1 bg-secondary/20 border-secondary">
                  <div className="relative w-full h-56 overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.title}
                      data-ai-hint={item.hint}
                      fill
                      className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-3">
                          <h3 className="text-xl font-bold text-white mb-2">{item.card.title}</h3>
                          <Badge variant="secondary" className="bg-primary/20 text-primary border-0 whitespace-nowrap">{item.category}</Badge>
                      </div>
                      <p className="text-gray-400 mb-4 text-sm">{item.card.subtitle}</p>
                      
                      <div className="mb-4">
                          <h4 className="font-semibold text-sm mb-2 text-gray-300">Result: <span className="font-normal text-gray-400">{item.card.result}</span></h4>
                      </div>
                    </div>

                    <div className="inline-flex items-center text-primary font-semibold group-hover:underline mt-auto pt-4 border-t border-secondary">
                      View Full Case Study <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesPage;
