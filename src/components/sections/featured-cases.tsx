import Link from 'next/link';
import Image from 'next/image';
import { getCaseStudies } from '@/lib/case-studies-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollFadeIn } from '@/components/scroll-fade-in';
import { ArrowRight } from 'lucide-react';
import { Badge } from '../ui/badge';

const FeaturedCases = () => {
  const featuredStudies = getCaseStudies().slice(0, 3);

  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <ScrollFadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши лучшие работа</h2>
          <p className="text-light-gray max-w-2xl mx-auto">
            Наши любимые проекты, которые демонстрируют наш опыт и стремление к достижению результатов.
          </p>
        </ScrollFadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredStudies.map((item, index) => (
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

        <ScrollFadeIn className="text-center mt-12">
          <Link href="/case-studies">
            <Button variant="outline" size="lg" className="text-lg">
              Просмотреть все работы
            </Button>
          </Link>
        </ScrollFadeIn>
      </div>
    </section>
  );
};

export default FeaturedCases;
