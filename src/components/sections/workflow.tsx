"use client";

import { useState } from 'react';
import { ScrollFadeIn } from '@/components/scroll-fade-in';
import { Search, PenTool, Code, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const workflowSteps = [
  {
    icon: Search,
    title: "Analysis",
    description: "We start by diving deep into your business goals, target audience, and project requirements. This phase involves comprehensive market research, competitor analysis, and creating a detailed project roadmap to ensure a solid foundation for success."
  },
  {
    icon: PenTool,
    title: "Design",
    description: "Our design team crafts intuitive UI/UX wireframes and high-fidelity mockups. We focus on creating a seamless and engaging user experience that is both aesthetically pleasing and functionally robust, ensuring your brand's identity shines through."
  },
  {
    icon: Code,
    title: "Development",
    description: "Our expert developers bring the designs to life with clean, efficient, and scalable code. We follow agile methodologies, providing regular updates and builds to ensure transparency and flexibility throughout the development lifecycle."
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    description: "After rigorous testing, we deploy your application to the market. Our commitment doesn't end at launch; we provide ongoing support and maintenance to ensure your application runs smoothly, stays secure, and evolves with your business needs."
  }
];

const Workflow = () => {
  const [activeStep, setActiveStep] = useState(0);
  const CurrentStepIcon = workflowSteps[activeStep].icon;

  return (
    <section className="section-padding bg-secondary/20">
      <div className="container mx-auto px-4">
        <ScrollFadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work Process</h2>
          <p className="text-light-gray max-w-2xl mx-auto">
            We follow a structured and transparent process to ensure the successful delivery of your project.
          </p>
        </ScrollFadeIn>
        
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <ScrollFadeIn className="md:col-span-1 flex justify-center md:sticky md:top-24">
            <div className="relative w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:flex md:flex-col md:gap-8 md:space-y-0">
                {workflowSteps.map((step, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className="flex  items-center space-x-4 cursor-pointer group"
                  >
                    <div className={cn(
                      "flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full transition-all duration-300 border-2 bg-secondary/50",
                      activeStep === index
                        ? "bg-primary border-primary text-primary-foreground scale-110"
                        : "border-border text-foreground group-hover:border-primary group-hover:bg-primary/10 group-hover:text-primary"
                    )}>
                      <step.icon className="h-6 w-6" />
                    </div>
                    <h3 className={cn(
                      "text-lg font-semibold transition-colors duration-300",
                      activeStep === index ? "text-primary" : "text-light-gray group-hover:text-white"
                    )}>{step.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </ScrollFadeIn>
          
          <ScrollFadeIn delay={200} className="md:col-span-2">
            <Card className="bg-secondary/50 border-secondary p-8 min-h-[300px] flex flex-col items-center justify-center">
              <div className="block md:hidden">
                <p className="text-sm text-primary font-semibold text-center">Step {activeStep + 1}</p>
                <h3 className="text-2xl font-bold mb-2 text-center">{workflowSteps[activeStep].title}</h3>
              </div>
              <CardContent className="p-0">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div
                      className="hidden md:inline-block bg-primary/10 text-primary p-4 rounded-full ring-4 ring-primary/20">
                    <CurrentStepIcon className="h-8 w-8"/>
                  </div>
                  <div className="hidden md:block">
                    <p className="text-sm text-primary font-semibold">Step {activeStep + 1}</p>
                    <h3 className="text-2xl font-bold mb-2">{workflowSteps[activeStep].title}</h3>
                  </div>
                  <p className="text-light-gray">{workflowSteps[activeStep].description}</p>
                </div>
              </CardContent>
            </Card>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
