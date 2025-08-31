import { Card, CardContent } from '@/components/ui/card';
import { Smartphone, Globe, PenTool, LifeBuoy, Briefcase } from 'lucide-react';
import { ScrollFadeIn } from '@/components/scroll-fade-in';

const services = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Crafting intuitive and high-performance native and cross-platform mobile applications for iOS and Android."
  },
  {
    icon: Globe,
    title: "Web App Development",
    description: "Building responsive, scalable, and secure web applications tailored to your specific business needs."
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    description: "Creating beautiful, user-centric designs that enhance usability and provide an engaging user experience."
  },
  {
    icon: LifeBuoy,
    title: "Support & Maintenance",
    description: "Providing ongoing support and maintenance to ensure your applications run smoothly and stay up-to-date."
  },
  {
    icon: Briefcase,
    title: "IT Outsourcing",
    description: "Augment your team with our expert developers and engineers to accelerate your project development."
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-secondary/20">
      <div className="container mx-auto px-4">
        <ScrollFadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Services</h2>
          <p className="text-light-gray max-w-2xl mx-auto">We offer a comprehensive suite of services to bring your digital products to life, from initial concept to ongoing support.</p>
        </ScrollFadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollFadeIn key={index} delay={index * 100}>
              <Card className="h-full text-center transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/20 bg-secondary/50 border-secondary">
                <CardContent className="p-8">
                  <div className="inline-block bg-primary/10 text-primary p-4 rounded-full mb-6">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-light-gray">{service.description}</p>
                </CardContent>
              </Card>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
