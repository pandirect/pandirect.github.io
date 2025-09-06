import Image from 'next/image';
import {ScrollFadeIn} from '@/components/scroll-fade-in';
import {CheckCircle} from 'lucide-react';
import {useTranslations} from 'next-intl';
import parse from 'html-react-parser';

const About = () => {
    const t = useTranslations('common');

    const valuesKeys = ['quality', 'delivery', 'transparency'];

    return (
        <section id="about" className="section-padding bg-background">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <ScrollFadeIn>
                        <img
                            src="./team.png"
                            alt="Our Team"
                            data-ai-hint="team collaboration"
                            className="object-cover"
                        />
                    </ScrollFadeIn>

                    <ScrollFadeIn delay={200}>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            {parse(t('about.title'))}
                        </h2>
                        <p className="text-light-gray mb-8">{t('about.description')}</p>

                        <div className="space-y-6">
                            {valuesKeys.map((key) => (
                                <div key={key} className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 bg-primary/10 text-primary rounded-full p-2">
                                        <CheckCircle className="h-6 w-6"/>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">{t(`about.values.${key}.title`)}</h3>
                                        <p className="text-light-gray">{t(`about.values.${key}.description`)}</p>
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
