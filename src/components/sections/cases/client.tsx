'use client';

import { useTranslations } from 'next-intl';
import { ScrollFadeIn } from "@/components/scroll-fade-in";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import React from "react";
import { Case } from "@/components/sections/cases/case";

type Props = {
  cases: TCase[];
}

const FeaturedCasesClient: React.FC<Props> = ({ cases }) => {
  const t = useTranslations('common');

  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <ScrollFadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t(`cases.title`)}</h2>
          <p className="text-light-gray max-w-2xl mx-auto">
            {t(`cases.description`)}
          </p>
        </ScrollFadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <ScrollFadeIn key={index} delay={index * 100}>
              <Case item={item} />
            </ScrollFadeIn>
          ))}
        </div>

        <ScrollFadeIn className="text-center mt-12">
          <Link href="/case-studies">
            <Button variant="secondary" size="lg" className="text-lg">
              {t('cases.buttons.all')}
            </Button>
          </Link>
        </ScrollFadeIn>
      </div>
    </section>
  );
};

export default FeaturedCasesClient;