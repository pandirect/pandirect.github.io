import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getCaseStudyBySlug, getCaseStudies } from '@/lib/case-studies-data';
import Hero from '@/components/sections/hero';
import Footer from '@/components/footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Lightbulb, Target, Trophy, Quote, Code } from 'lucide-react';
import Cta from '@/components/sections/cta';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import ReactMarkdown from 'react-markdown';

export async function generateStaticParams() {
  const caseStudies = getCaseStudies();
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export default function CaseStudyDetailPage({ params }: { params: { slug: string } }) {
  const study = getCaseStudyBySlug(params.slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Hero showContent={false} />
      <main className="flex-grow">
        <section className="relative h-[40vh] md:h-[50vh] flex items-end text-white pb-12">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10" />
            <Image
                src={study.src}
                alt={study.title}
                fill
                className="object-cover"
                data-ai-hint={study.hint}
            />
            <div className="container mx-auto px-4 z-20 relative">
                <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-2">{study.card.title}</h1>
                <p className="text-md md:text-lg text-gray-300 max-w-3xl">{study.tagline}</p>
            </div>
        </section>

        <section className="section-padding">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 mb-12 text-center p-6 bg-secondary/10 rounded-lg border border-secondary/50">
                        <div>
                            <h3 className="font-semibold text-muted-foreground text-sm mb-2">Industry</h3>
                            <p className="text-foreground">{study.industry}</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-muted-foreground text-sm mb-2">Client</h3>
                            <p className="text-foreground">{study.client}</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-muted-foreground text-sm mb-2">Project Type</h3>
                            <p className="text-foreground">{study.projectType}</p>
                        </div>
                    </div>
                    
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0 bg-primary/10 text-primary rounded-full p-3">
                                    <Target className="h-6 w-6" />
                                </div>
                                <h2 className="text-2xl font-semibold">The Challenge</h2>
                            </div>
                            <article className="prose prose-invert max-w-none prose-p:text-light-gray prose-headings:text-foreground prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-li:text-light-gray">
                                <ReactMarkdown>{study.challenge}</ReactMarkdown>
                            </article>
                        </div>
                        
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0 bg-primary/10 text-primary rounded-full p-3">
                                    <Lightbulb className="h-6 w-6" />
                                </div>
                                <h2 className="text-2xl font-semibold">Our Solution</h2>
                            </div>
                             <article className="prose prose-invert max-w-none prose-p:text-light-gray prose-headings:text-foreground prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-li:text-light-gray">
                                <ReactMarkdown>{study.solution}</ReactMarkdown>
                            </article>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0 bg-primary/10 text-primary rounded-full p-3">
                                    <Trophy className="h-6 w-6" />
                                </div>
                                <h2 className="text-2xl font-semibold">The Results</h2>
                            </div>
                            <article className="prose prose-invert max-w-none prose-p:text-light-gray prose-headings:text-foreground prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-li:text-light-gray">
                                <ReactMarkdown>{study.results}</ReactMarkdown>
                            </article>
                        </div>

                        {study.testimonial && (
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0 bg-primary/10 text-primary rounded-full p-3">
                                        <Quote className="h-6 w-6" />
                                    </div>
                                    <h2 className="text-2xl font-semibold">Client Testimonial</h2>
                                </div>
                                <div className="pl-4 md:pl-0">
                                    <Card className="bg-secondary/20 border-secondary">
                                        <CardContent className="p-6">
                                            <blockquote className="text-lg text-light-gray border-l-4 border-primary pl-4 mb-6">
                                            "{study.testimonial.quote}"
                                            </blockquote>
                                            <div className="flex items-center">
                                                <Avatar>
                                                    <AvatarImage src={study.testimonial.avatar} alt={study.testimonial.name} data-ai-hint="person" />
                                                    <AvatarFallback>{study.testimonial.initials}</AvatarFallback>
                                                </Avatar>
                                                <div className="ml-4">
                                                    <p className="font-semibold">{study.testimonial.name}</p>
                                                    <p className="text-sm text-muted-foreground">{study.testimonial.title}</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="mt-16">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="flex-shrink-0 bg-primary/10 text-primary rounded-full p-3">
                                <Code className="h-6 w-6" />
                            </div>
                            <h2 className="text-2xl font-semibold">Technologies Used</h2>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {study.technologies.map(tech => (
                                <Badge key={tech} variant="outline" className="text-md px-4 py-2 bg-secondary/20 border-secondary hover:bg-secondary/50">{tech}</Badge>
                            ))}
                        </div>
                    </div>

                    <div className="text-center mt-16">
                        <Link href="/case-studies">
                            <Button variant="outline">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Case Studies
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>

        <Cta />

      </main>
      <Footer />
    </div>
  );
}
