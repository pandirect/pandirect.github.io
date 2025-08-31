import { ReactLogo } from '@/components/icons/react-logo';
import { NextjsLogo } from '@/components/icons/nextjs-logo';
import { NodeLogo } from '@/components/icons/node-logo';
import { TypescriptLogo } from '@/components/icons/typescript-logo';
import { FirebaseLogo } from '@/components/icons/firebase-logo';
import { TailwindLogo } from '@/components/icons/tailwind-logo';
import { ScrollFadeIn } from '@/components/scroll-fade-in';

const technologies = [
  { name: 'React', component: ReactLogo },
  { name: 'Next.js', component: NextjsLogo },
  { name: 'Node.js', component: NodeLogo },
  { name: 'TypeScript', component: TypescriptLogo },
  { name: 'Firebase', component: FirebaseLogo },
  { name: 'Tailwind CSS', component: TailwindLogo },
];

const Technologies = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <ScrollFadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies We Use</h2>
          <p className="text-light-gray max-w-2xl mx-auto">
            We leverage the latest and greatest technologies to build robust, scalable, and future-proof applications.
          </p>
        </ScrollFadeIn>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-20">
          {technologies.map((tech, index) => (
            <ScrollFadeIn key={tech.name} delay={index * 100} className="text-center">
              <div className="flex justify-center items-center h-24 w-24 text-gray-400 transition-colors duration-300 hover:text-primary">
                <tech.component className="h-auto w-full max-w-[100px] max-h-[60px]" />
              </div>
              <p className="mt-2 text-sm font-semibold text-light-gray">{tech.name}</p>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;