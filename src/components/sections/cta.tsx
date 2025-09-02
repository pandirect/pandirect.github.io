import { Button } from '@/components/ui/button';
import { ScrollFadeIn } from '@/components/scroll-fade-in';

const Cta = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto px-4 text-center">
        <ScrollFadeIn>
          <div className="bg-secondary/20 rounded-2xl p-10 md:p-16 border border-secondary">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Готовы обсудить ваш проект?
            </h2>
            <p className="text-light-gray max-w-2xl mx-auto mb-8">
              После тщательного тестирования мы выводим ваше приложение на рынок. Наши обязательства не заканчиваются с запуском; мы обеспечиваем постоянную поддержку и сопровождение, чтобы ваше приложение работало бесперебойно, оставалось безопасным и развивалось в соответствии с потребностями вашего бизнеса.
            </p>
            <Button size="lg" className="btn-gradient text-lg px-8 py-6">
              Обсудить
            </Button>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
};

export default Cta;
