import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Services from '@/components/sections/services';
import WhyUs from '@/components/sections/why-us';
import Testimonials from '@/components/sections/testimonials';

import Workflow from '@/components/sections/workflow';
import Cta from '@/components/sections/cta';
import Footer from '@/components/footer';
import Cases from '@/components/sections/cases';

export default async function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <main className="flex-grow">
        <About />
        <Services />
        <Cases />
        <WhyUs />
        <Testimonials />
        {/*<Technologies />*/}
        <Workflow />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
