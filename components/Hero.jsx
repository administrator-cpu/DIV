import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden pt-24 pb-32 sm:pt-32 sm:pb-40">
      {/* Subtle dotted background pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          
          {/* Highlight Badge */}
          <div className="mb-8 flex justify-center">
            <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600">
              Welcome to the DIV Platform
            </span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            Build digital solutions with <span className="text-blue-600">Confidence</span>
          </h1>
          
          {/* Subtitle */}
          <p className="mt-6 text-lg leading-8 text-gray-600">
            The ultimate platform for showcasing your products and connecting with your audience. Fast, reliable, and designed for modern workflows.
          </p>
          
          {/* Call to Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/products"
              className="w-full sm:w-auto rounded-lg bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all flex items-center justify-center gap-2"
            >
              Explore Products
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link 
              href="/contact" 
              className="w-full sm:w-auto rounded-lg bg-gray-50 px-8 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-100 transition-all"
            >
              Contact Sales
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
