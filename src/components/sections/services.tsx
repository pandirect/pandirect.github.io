import { Card, CardContent } from '@/components/ui/card';
import { Smartphone, Globe, PenTool, LifeBuoy, Briefcase, ChartLine } from 'lucide-react';
import { ScrollFadeIn } from '@/components/scroll-fade-in';
import { useTranslations } from 'next-intl';
import { servicesKeys } from "@/lib/constants";

const icons = {
  'outsourcing': Briefcase,
  'analysis': ChartLine,
  'uiux': PenTool,
  'webApps': Globe,
  'mobileApps': Smartphone,
  'support': LifeBuoy,
};

const Services = () => {
  const t = useTranslations('common');

  const services = servicesKeys.map((key) => ({
    // @ts-ignore
    icon: icons[key],
    title: t(`services.items.${key}.title`),
    description: t(`services.items.${key}.description`),
  }));

  return (
    <section id="services" className="section-padding bg-secondary/20">
      <div className="container mx-auto px-4">
        <ScrollFadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('services.title')}</h2>
          <p className="text-light-gray max-w-2xl mx-auto">{t('services.description')}</p>
        </ScrollFadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const ServiceIcon = service.icon;
            return (
              <ScrollFadeIn key={index} delay={index * 100}>
                <Card
                  className="h-full text-center transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/20 bg-secondary/50 border-secondary">
                  <CardContent className="p-8">
                    <div className="inline-block bg-primary/10 text-primary p-4 rounded-full mb-6">
                      <ServiceIcon className="h-8 w-8"/>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-light-gray">{service.description}</p>
                  </CardContent>
                </Card>
              </ScrollFadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
