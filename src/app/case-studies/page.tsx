import CaseStudiesPage from '@/components/case-studies-page';
import Hero from '@/components/sections/hero';
import Footer from '@/components/footer';

export default function CaseStudies() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Hero showContent={false} />
      <main className="flex-grow">
        <CaseStudiesPage />
      </main>
      <Footer />
    </div>
  );
}
