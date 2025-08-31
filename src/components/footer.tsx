import Link from 'next/link';
import { Linkedin, Send, Youtube } from 'lucide-react';
import { Logo } from '@/components/logo';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-gray-400">
              Building applications for your business growth.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Send size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Youtube size={20} />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link href="/case-studies" className="text-gray-400 hover:text-white transition-colors text-sm">Case Studies</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Careers</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Mobile Development</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Web Development</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">UI/UX Design</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">IT Outsourcing</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li><a href="mailto:contact@pandirect.com" className="hover:text-white transition-colors">contact@pandirect.com</a></li>
              <li><a href="tel:+1234567890" className="hover:text-white transition-colors">+1 (234) 567-890</a></li>
              <li>123 Tech Avenue, Silicon Valley, CA</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Pandirect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
