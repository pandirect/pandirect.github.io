'use client'

import Hero from "@/components/sections/hero";
import Image from "next/image";
import { ArrowLeft, Code, Lightbulb, Quote, Target, Trophy } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Cta from "@/components/sections/cta";
import Footer from "@/components/footer";
import React from "react";
import { useTranslations } from "next-intl";
import { Feedback } from "@/components/sections/testimonials/feedback";

type Props = {
  study: TCase;
}

const CaseDetailClient: React.FC<Props> = ({ study }) => {
  const t = useTranslations('common');

  const { title, tagline, detail, testimonial } = study;
  const { technologies = [] } = detail;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Hero showContent={false}/>
      <main className="flex-grow">
        <section className="relative h-[40vh] md:h-[50vh] flex items-end text-white pb-12">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10"/>
          <Image
            src={detail.image}
            alt={title}
            fill
            className="object-cover"
          />
          <div className="container mx-auto px-4 z-20 relative">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-2">{title}</h1>
            <p className="text-md md:text-lg text-gray-300 max-w-3xl">{tagline}</p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div
                className="grid md:grid-cols-3 gap-8 mb-12 text-center p-6 bg-secondary/10 rounded-lg border border-secondary/50">
                <div>
                  <h3 className="font-semibold text-muted-foreground text-sm mb-2">{t('cases.detail.industry')}</h3>
                  <p className="text-foreground">{detail.industry}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-muted-foreground text-sm mb-2">{t('cases.detail.client')}</h3>
                  <p className="text-foreground">{detail.client}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-muted-foreground text-sm mb-2">{t('cases.detail.projectType')}</h3>
                  <p className="text-foreground">{detail.type}</p>
                </div>
              </div>

              <div className="space-y-12">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 bg-primary/10 text-primary rounded-full p-3">
                      <Target className="h-6 w-6"/>
                    </div>
                    <h2 className="text-2xl font-semibold">{t('cases.detail.goal')}</h2>
                  </div>
                  <article
                    className="prose prose-invert max-w-none prose-p:text-light-gray prose-headings:text-foreground prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-li:text-light-gray">
                    <ReactMarkdown>{detail.goal}</ReactMarkdown>
                  </article>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 bg-primary/10 text-primary rounded-full p-3">
                      <Lightbulb className="h-6 w-6"/>
                    </div>
                    <h2 className="text-2xl font-semibold">{t('cases.detail.solution')}</h2>
                  </div>
                  <article
                    className="prose prose-invert max-w-none prose-p:text-light-gray prose-headings:text-foreground prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-li:text-light-gray">
                    <ReactMarkdown>{detail.solution}</ReactMarkdown>
                  </article>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 bg-primary/10 text-primary rounded-full p-3">
                      <Trophy className="h-6 w-6"/>
                    </div>
                    <h2 className="text-2xl font-semibold">{t('cases.detail.result')}</h2>
                  </div>
                  <article
                    className="prose prose-invert max-w-none prose-p:text-light-gray prose-headings:text-foreground prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-li:text-light-gray">
                    <ReactMarkdown>{detail.results}</ReactMarkdown>
                  </article>
                </div>

                {testimonial && (
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 bg-primary/10 text-primary rounded-full p-3">
                        <Quote className="h-6 w-6"/>
                      </div>
                      <h2 className="text-2xl font-semibold">{t('cases.detail.feedback')}</h2>
                    </div>
                    <div className="pl-4 md:pl-0">
                      <Card className="bg-secondary/20 border-secondary">
                        <Feedback item={testimonial}/>
                      </Card>
                    </div>
                  </div>
                )}
              </div>

              {technologies.length > 0 && (
                <div className="mt-16">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex-shrink-0 bg-primary/10 text-primary rounded-full p-3">
                      <Code className="h-6 w-6"/>
                    </div>
                    <h2 className="text-2xl font-semibold">{t('cases.detail.technologies')}</h2>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {detail.technologies.map(tech => (
                      <Badge
                        key={tech} variant="outline"
                        className="text-md px-4 py-2 bg-secondary/20 border-secondary hover:bg-secondary/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              <div className="text-center mt-16">
                <Link href="/case-studies">
                  <Button variant="outline">
                    <ArrowLeft className="mr-2 h-4 w-4"/>
                    {t('cases.detail.back')}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Cta/>

      </main>
      <Footer/>
    </div>
  );
}

export default CaseDetailClient;