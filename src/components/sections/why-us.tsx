import { UsersRound, GitBranch, Zap, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollFadeIn } from '@/components/scroll-fade-in';
import { useTranslations } from 'next-intl';

const featureData = [
  { key: 'team', icon: UsersRound },
  { key: 'process', icon: GitBranch },
  { key: 'flexibility', icon: Zap },
  { key: 'support', icon: Clock },
];

const WhyUs = () => {
  const t = useTranslations('common');

  return (
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <ScrollFadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('whyUs.title')}</h2>
            <p className="text-light-gray max-w-2xl mx-auto">{t('whyUs.description')}</p>
          </ScrollFadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featureData.map((feature, index) => (
                <ScrollFadeIn key={feature.key} delay={index * 100}>
                  <Card className="border-0 shadow-none bg-transparent">
                    <CardContent className="p-0 text-center">
                      <div className="inline-block bg-primary/10 text-primary p-5 rounded-full mb-5">
                        <feature.icon className="h-10 w-10" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{t(`whyUs.features.${feature.key}.title`)}</h3>
                      <p className="text-light-gray">{t(`whyUs.features.${feature.key}.description`)}</p>
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
