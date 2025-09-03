import { Button } from '@/components/ui/button';
import { ScrollFadeIn } from '@/components/scroll-fade-in';
import { useTranslations } from 'next-intl';
import Link from "next/link";

const Cta = () => {
  const t = useTranslations('common');

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto px-4 text-center">
        <ScrollFadeIn>
          <div className="bg-secondary/20 rounded-2xl p-10 md:p-16 border border-secondary">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('cta.title')}
            </h2>
            <p className="text-light-gray max-w-2xl mx-auto mb-8">
              {t('cta.description')}
            </p>
            <Link href="https://t.me/kanyushkova_m" target="_blank">
              <Button size="lg" className="btn-gradient text-lg px-8 py-6">
                {t('cta.button')}
              </Button>
            </Link>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
};

export default Cta;
