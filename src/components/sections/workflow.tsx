"use client";

import { useState } from 'react';
import { ScrollFadeIn } from '@/components/scroll-fade-in';
import { Search, PenTool, Code, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const workflowSteps = [
  {
    icon: Search,
    title: "Анализ",
    description: "Мы начинаем с глубокого изучения ваших бизнес-целей, целевой аудитории и требований к проекту. Этот этап включает в себя всестороннее исследование рынка, анализ конкурентов и создание подробной дорожной карты проекта, которая обеспечит прочную основу для успеха."
  },
  {
    icon: PenTool,
    title: "Дизайн",
    description: "Наша команда дизайнеров разрабатывает интуитивно понятные интерфейсы UI / UX и высокоточные макеты. Мы фокусируемся на создании бесшовного и привлекательного пользовательского интерфейса, который будет одновременно эстетичным и функционально надежным, подчеркивая индивидуальность вашего бренда."
  },
  {
    icon: Code,
    title: "Разработка",
    description: "Наши опытные разработчики воплощают проекты в жизнь с помощью чистого, эффективного и масштабируемого кода. Мы придерживаемся гибких методологий, предоставляя регулярные обновления и сборки для обеспечения прозрачности и гибкости на протяжении всего жизненного цикла разработки."
  },
  {
    icon: Rocket,
    title: "Запуск & Поддержка",
    description: "После тщательного тестирования мы выводим ваше приложение на рынок. Наши обязательства не заканчиваются с запуском; мы обеспечиваем постоянную поддержку и сопровождение, чтобы ваше приложение работало бесперебойно, оставалось безопасным и развивалось в соответствии с потребностями вашего бизнеса."
  }
];

const Workflow = () => {
  const [activeStep, setActiveStep] = useState(0);
  const CurrentStepIcon = workflowSteps[activeStep].icon;

  return (
    <section className="section-padding bg-secondary/20">
      <div className="container mx-auto px-4">
        <ScrollFadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Рабочий процесс</h2>
          <p className="text-light-gray max-w-2xl mx-auto">
            Мы следуем структурированному и открытому процессу разработки, чтобы обеспечить успешную реализацию вашего проекта.
          </p>
        </ScrollFadeIn>
        
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <ScrollFadeIn className="md:col-span-1 flex justify-center md:sticky md:top-24">
            <div className="relative w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:flex md:flex-col md:gap-8 md:space-y-0">
                {workflowSteps.map((step, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className="flex  items-center space-x-4 cursor-pointer group"
                  >
                    <div className={cn(
                      "flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full transition-all duration-300 border-2 bg-secondary/50",
                      activeStep === index
                        ? "bg-primary border-primary text-primary-foreground scale-110"
                        : "border-border text-foreground group-hover:border-primary group-hover:bg-primary/10 group-hover:text-primary"
                    )}>
                      <step.icon className="h-6 w-6" />
                    </div>
                    <h3 className={cn(
                      "text-lg font-semibold transition-colors duration-300",
                      activeStep === index ? "text-primary" : "text-light-gray group-hover:text-white"
                    )}>{step.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </ScrollFadeIn>
          
          <ScrollFadeIn delay={200} className="md:col-span-2">
            <Card className="bg-secondary/50 border-secondary p-8 min-h-[300px] flex flex-col items-center justify-center">
              <div className="block md:hidden">
                <p className="text-sm text-primary font-semibold text-center">Step {activeStep + 1}</p>
                <h3 className="text-2xl font-bold mb-2 text-center">{workflowSteps[activeStep].title}</h3>
              </div>
              <CardContent className="p-0">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div
                      className="hidden md:inline-block bg-primary/10 text-primary p-4 rounded-full ring-4 ring-primary/20">
                    <CurrentStepIcon className="h-8 w-8"/>
                  </div>
                  <div className="hidden md:block">
                    <p className="text-sm text-primary font-semibold">Шаг {activeStep + 1}</p>
                    <h3 className="text-2xl font-bold mb-2">{workflowSteps[activeStep].title}</h3>
                  </div>
                  <p className="text-light-gray">{workflowSteps[activeStep].description}</p>
                </div>
              </CardContent>
            </Card>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
