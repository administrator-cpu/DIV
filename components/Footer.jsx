import Link from "next/link";
import { Hexagon, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          
          {/* Brand & Description */}
          <div className="space-y-6 xl:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-blue-600">
              <Hexagon className="h-8 w-8 fill-current" />
              <span className="font-bold text-xl tracking-tight text-gray-900">DIV</span>
            </Link>
            <p className="text-sm leading-6 text-gray-600 max-w-xs">
              Empowering businesses with robust, scalable digital solutions and seamless modern workflows.
            </p>
            <div className="flex space-x-5 border-t border-gray-100 pt-6">
              {/* Twitter / X Icon */}
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
                </svg>
              </a>
              {/* GitHub Icon */}
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              {/* LinkedIn Icon */}
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation & Contact Links */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              
              {/* Quick Links */}
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Navigation</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/" className="text-sm leading-6 text-gray-600 hover:text-blue-600 transition-colors">Home</Link>
                  </li>
                  <li>
                    <Link href="/products" className="text-sm leading-6 text-gray-600 hover:text-blue-600 transition-colors">Products</Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-sm leading-6 text-gray-600 hover:text-blue-600 transition-colors">Contact</Link>
                  </li>
                </ul>
              </div>

              {/* Legal Links */}
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="#" className="text-sm leading-6 text-gray-600 hover:text-blue-600 transition-colors">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm leading-6 text-gray-600 hover:text-blue-600 transition-colors">Terms of Service</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Information */}
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Contact Us</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="flex items-center gap-3 text-sm leading-6 text-gray-600">
                    <MapPin className="h-5 w-5 text-gray-400" />
                    <span>Noida, Uttar Pradesh, India</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm leading-6 text-gray-600">
                    <Mail className="h-5 w-5 text-gray-400" />
                    <a href="mailto:hello@div.com" className="hover:text-blue-600 transition-colors">hello@div.com</a>
                  </li>
                  <li className="flex items-center gap-3 text-sm leading-6 text-gray-600">
                    <Phone className="h-5 w-5 text-gray-400" />
                    <a href="tel:+910000000000" className="hover:text-blue-600 transition-colors">+91 00000 00000</a>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-16 border-t border-gray-100 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-500 text-center">
            &copy; {currentYear} Development Innovation Vector Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}