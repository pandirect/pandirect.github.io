import { UsersRound, GitBranch, Zap, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollFadeIn } from '@/components/scroll-fade-in';

const features = [
  {
    icon: UsersRound,
    title: "Experienced Team",
    description: "Our team consists of skilled professionals with years of experience in the tech industry."
  },
  {
    icon: GitBranch,
    title: "Transparent Process",
    description: "We believe in clear communication and keep you updated at every stage of the development."
  },
  {
    icon: Zap,
    title: "Flexible Engagement",
    description: "We offer flexible engagement models to suit your project needs and budget."
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Our dedicated support team is available around the clock to assist you with any issues."
  },
];

const WhyUs = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <ScrollFadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Apex Apps?</h2>
          <p className="text-light-gray max-w-2xl mx-auto">
            We combine technology and expertise to deliver outstanding results. Here’s what sets us apart.
          </p>
        </ScrollFadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <ScrollFadeIn key={index} delay={index * 100}>
              <Card className="border-0 shadow-none bg-transparent">
                <CardContent className="p-0 text-center">
                  <div className="inline-block bg-primary/10 text-primary p-5 rounded-full mb-5">
                    <feature.icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-light-gray">{feature.description}</p>
                </CardContent>
              </Card>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
