'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ScrollFadeIn } from '@/components/scroll-fade-in';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Briefcase, Code, Palette, Smartphone, Store } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';

export const categories: TCategory[] = [
  { key: 'all', icon: Briefcase },
  { key: 'web', icon: Code },
  { key: 'mobile', icon: Smartphone },
  { key: 'design', icon: Palette },
  { key: 'ecommerce', icon: Store },
  { key: 'analytics', icon: Code }
];

type Props = {
  cases: TCase[];
};

const CasesClient: React.FC<Props> = ({ cases }) => {
  const t = useTranslations('common');

  const [activeCategory, setActiveCategory] = useState<TCategoryKey>('all');

  const filteredStudies = activeCategory === 'all'
    ? cases
    : cases.filter(study => study.category === activeCategory);

  return (
    <section id="case-studies" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <ScrollFadeIn className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{t('cases.title')}</h1>
          <p className="text-light-gray max-w-3xl mx-auto">{t('cases.description')}</p>
        </ScrollFadeIn>

        <ScrollFadeIn delay={200} className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map(({ key, icon: Icon }) => {
              return (
                <Button
                  key={key}
                  variant={activeCategory === key ? "default" : "outline"}
                  onClick={() => setActiveCategory(key)}
                  className={cn(
                    "transition-all duration-300",
                    activeCategory === key ? "bg-primary text-primary-foreground" : "border-border text-foreground hover:bg-secondary/50"
                  )}
                >
                  <Icon className="mr-2 h-4 w-4"/>
                  {t(`cases.categories.${key}`)}
                </Button>
              );
            })}
          </div>
        </ScrollFadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStudies.map((item, index) => (
            <ScrollFadeIn key={item.slug} delay={index * 100}>
              <Link href={`/case-studies/${item.slug}`} className="block h-full">
                <Card
                  className="group h-full flex flex-col overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-1 bg-secondary/20 border-secondary">
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
                        <Badge variant="secondary"
                               className="bg-primary/20 text-primary border-0 whitespace-nowrap">{item.category}</Badge>
                      </div>
                      <p className="text-gray-400 mb-4 text-sm">{item.card.subtitle}</p>

                      <div className="mb-4">
                        <h4 className="font-semibold text-sm mb-2 text-gray-300">Результат: <span
                          className="font-normal text-gray-400">{item.card.result}</span></h4>
                      </div>
                    </div>

                    <div
                      className="inline-flex items-center text-primary font-semibold group-hover:underline mt-auto pt-4 border-t border-secondary">
                      {t('cases.buttons.show')} <ArrowRight
                      className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"/>
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

export default CasesClient;
