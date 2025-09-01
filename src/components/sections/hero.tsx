'use client';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollFadeIn } from '../scroll-fade-in';
import Link from 'next/link';
import AnimatedBackground from '../animated-background';
import { cn } from '@/lib/utils';
import { Logo } from '../logo';
import { Menu, X } from 'lucide-react';

interface HeroProps {
  showContent?: boolean;
}

const Hero = ({ showContent = true }: HeroProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: '/#about', label: 'About Us' },
    { href: '/#services', label: 'Services' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/#contact', label: 'Contact' },
  ];

  return (
    <header className={cn(
      "relative overflow-hidden z-40",
      showContent ? "min-h-screen flex flex-col" : "h-20"
    )}>
      <div className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || !showContent ? "bg-background/80 backdrop-blur-sm shadow-md" : "bg-transparent"
      )}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <Logo />
            <nav className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="hidden md:block">
               <Button className="btn-gradient">Request Consultation</Button>
            </div>
            <div className="md:hidden">
              <Button onClick={() => setIsMenuOpen(!isMenuOpen)} variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">Open menu</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className={cn(
        "fixed inset-0 z-[100] bg-background/95 backdrop-blur-lg transition-opacity duration-500 md:hidden",
        isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
      )}>
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-20">
            <Logo />
            <Button onClick={() => setIsMenuOpen(false)} variant="ghost" size="icon">
              <X />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="flex flex-col items-center justify-center h-[calc(100%-5rem)] space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-3xl font-semibold text-foreground hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
            <Button size="lg" className="btn-gradient text-lg px-8 py-6 mt-8">Request Consultation</Button>
          </nav>
        </div>
      </div>
      
      {showContent && (
        <div className="flex-grow flex items-center justify-center">
          <AnimatedBackground />
          <div className="container mx-auto px-4 text-center text-white relative">
            <ScrollFadeIn>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                We develop mobile and web applications for business growth.
              </h1>
              <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200 mb-10" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.2)' }}>
                From concept to launch, our expert team delivers innovative and scalable solutions that drive results and elevate your brand.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <Link href="#contact">
                  <Button size="lg" className="btn-gradient text-lg px-8 w-56">
                    Request Consultation
                  </Button>
                </Link>
                <Link href="/case-studies">
                  <Button size="lg" variant="outline" className="text-lg px-8 w-56 bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300">
                    View Our Work
                  </Button>
                </Link>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      )}
    </header>
  );
};

export default Hero;
