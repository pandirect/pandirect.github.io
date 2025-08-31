import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Services from '@/components/sections/services';
import WhyUs from '@/components/sections/why-us';
import Testimonials from '@/components/sections/testimonials';
import Technologies from '@/components/sections/technologies';
import Workflow from '@/components/sections/workflow';
import Cta from '@/components/sections/cta';
import Footer from '@/components/footer';
import FeaturedCases from '@/components/sections/featured-cases';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <main className="flex-grow">
        <About />
        <Services />
        <FeaturedCases />
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
