'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollFadeIn } from '@/components/scroll-fade-in';
import { Briefcase, ChartSpline, Code, Palette, Rocket, Smartphone, Store } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { Case } from "@/components/sections/cases/case";

export const categories: TCategory[] = [
  { key: 'all', icon: Briefcase },
  { key: 'web', icon: Code },
  { key: 'mobile', icon: Smartphone },
  { key: 'design', icon: Palette },
  { key: 'ecommerce', icon: Store },
  { key: 'analytics', icon: ChartSpline },
  { key: 'own', icon: Rocket }
];

type Props = {
  cases: TCase[];
};

const CasesClient: React.FC<Props> = ({ cases }) => {
  const t = useTranslations('common');

  const [activeCategory, setActiveCategory] = useState<TCategoryKey>('all');

  const filteredStudies = activeCategory === 'all'
    ? cases
    : cases.filter(study => study.categories.includes(activeCategory));

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
              <Case item={item} />
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesClient;
