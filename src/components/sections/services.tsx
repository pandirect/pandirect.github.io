import { Card, CardContent } from '@/components/ui/card';
import { Smartphone, Globe, PenTool, LifeBuoy, Briefcase } from 'lucide-react';
import { ScrollFadeIn } from '@/components/scroll-fade-in';

const services = [
  {
    icon: Smartphone,
    title: "Разработка мобильных приложений",
    description: "Создание интуитивно понятных и высокопроизводительных нативных и кроссплатформенных мобильных приложений для iOS и Android."
  },
  {
    icon: Globe,
    title: "Разработка веб-приложений",
    description: "Создание адаптивных, масштабируемых и безопасных веб-приложений с учетом ваших конкретных бизнес-потребностей."
  },
  {
    icon: PenTool,
    title: "UI/UX Дизайн",
    description: "Создание красивых, ориентированных на пользователя дизайнов, которые повышают удобство использования и обеспечивают привлекательный пользовательский опыт."
  },
  {
    icon: LifeBuoy,
    title: "Поддержка & Техническое обслуживание",
    description: "Обеспечение постоянной поддержки и сопровождения для обеспечения бесперебойной работы ваших приложений и их актуальности."
  },
  {
    icon: Briefcase,
    title: "ИТ-аутсорсинг",
    description: "Пополните свою команду нашими опытными разработчиками и инженерами, чтобы ускорить разработку вашего проекта."
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-secondary/20">
      <div className="container mx-auto px-4">
        <ScrollFadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши основные услуги</h2>
          <p className="text-light-gray max-w-2xl mx-auto">Мы предлагаем полный набор услуг для воплощения ваших цифровых продуктов в жизнь - от первоначальной концепции до постоянной поддержки.</p>
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
