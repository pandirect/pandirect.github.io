import Image from 'next/image';
import { ScrollFadeIn } from '@/components/scroll-fade-in';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const values = [
    { title: 'Качество превыше всего', description: 'Мы обеспечиваем безупречный результат, который превосходит ожидания.' },
    { title: 'Своевременная разработка', description: 'Наш гибкий процесс гарантирует соблюдение каждого срока, каждый раз.' },
    { title: 'Полная прозрачность', description: 'Вы всегда в курсе процесса разработки, благодаря чёткой коммуникации и отчётности.' },
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
              Ваш надёжный партнёр в сфере <span className="text-primary">цифровых инноваций</span>
            </h2>
            <p className="text-light-gray mb-8">
              В pandirect мы — больше чем просто агентство по разработке. Мы команда увлечённых создателей, мыслителей и решателей задач, посвящённых тому, чтобы превращать ваши идеи в мощные цифровые решения. Наша приверженность совершенству побуждает нас создавать приложения, которые не только функциональны, но и красивы и интуитивно понятны.
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
