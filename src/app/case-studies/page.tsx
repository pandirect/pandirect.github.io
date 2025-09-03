import Hero from '@/components/sections/hero';
import Footer from '@/components/footer';
import CasesClient from '@/app/case-studies/client';
import { getCaseStudies } from "@/lib/case-studies-data";

export default async function CaseStudies() {
  const cases = await getCaseStudies();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Hero showContent={false} />
      <main className="flex-grow">
        <CasesClient cases={cases} />
      </main>
      <Footer />
    </div>
  );
}
