import { UsersRound, GitBranch, Zap, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollFadeIn } from '@/components/scroll-fade-in';

const features = [
  {
    icon: UsersRound,
    title: "Опытная команда",
    description: "Наша команда состоит из квалифицированных специалистов с многолетним опытом работы в сфере информационных технологий."
  },
  {
    icon: GitBranch,
    title: "Прозрачный процесс",
    description: "Мы верим в четкую коммуникацию и держим вас в курсе событий на каждом этапе разработки."
  },
  {
    icon: Zap,
    title: "Гибкое взаимодействие",
    description: "Мы предлагаем гибкие модели взаимодействия в соответствии с потребностями вашего проекта и бюджетом."
  },
  {
    icon: Clock,
    title: "Поддержка 24/7",
    description: "Наша специальная служба поддержки доступна круглосуточно, чтобы помочь вам в решении любых вопросов."
  },
];

const WhyUs = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <ScrollFadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему выбирают pandirect?</h2>
          <p className="text-light-gray max-w-2xl mx-auto">
            Мы объединяем технологии и опыт для достижения выдающихся результатов. Вот что отличает нас от других.
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
