import Image from 'next/image';
import { ScrollFadeIn } from '@/components/scroll-fade-in';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const values = [
    { title: 'Quality First', description: 'We deliver pixel-perfect results that exceed expectations.' },
    { title: 'On-Time Delivery', description: 'Our agile process ensures we meet every deadline, every time.' },
    { title: 'Full Transparency', description: 'You are always in the loop with clear communication and reporting.' },
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollFadeIn>
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
              <Image 
                src="https://picsum.photos/800/1000" 
                alt="Our Team"
                data-ai-hint="team collaboration"
                fill
                className="object-cover"
              />
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn delay={200}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Trusted Partner in <span className="text-primary">Digital Innovation</span>
            </h2>
            <p className="text-light-gray mb-8">
              At Apex Apps, we are more than just a development agency. We are a team of passionate creators, thinkers, and problem-solvers dedicated to transforming your ideas into powerful digital realities. Our commitment to excellence drives us to build applications that are not only functional but also beautiful and intuitive.
            </p>
            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-primary/10 text-primary rounded-full p-2">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{value.title}</h3>
                    <p className="text-light-gray">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
};

export default About;
