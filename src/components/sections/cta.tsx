import { Button } from '@/components/ui/button';
import { ScrollFadeIn } from '@/components/scroll-fade-in';

const Cta = () => {
  return (
    <section id="contact" className="pt-24 pb-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <ScrollFadeIn>
          <div className="bg-secondary/20 rounded-2xl p-10 md:p-16 border border-secondary">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to discuss your project?
            </h2>
            <p className="text-light-gray max-w-2xl mx-auto mb-8">
              Let's turn your idea into a reality. Contact us today for a free consultation and let's build something amazing together.
            </p>
            <Button size="lg" className="btn-gradient text-lg px-8 py-6">
              Submit Request
            </Button>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
};

export default Cta;
