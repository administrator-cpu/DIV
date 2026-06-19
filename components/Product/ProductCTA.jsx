'use client';

import Link from 'next/link';

export default function ProductCTA({ product }) {
  return (
    <section className="bg-gradient-to-r from-pink-500 to-yellow-400 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to get started?
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Let&apos;s discuss how {product?.title || 'our product'} can help your business grow.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-4 rounded-xl bg-white text-gray-900 text-base font-bold shadow-lg hover:bg-gray-50 transition-all"
          >
            Contact Sales
          </Link>
          <a
            href="#demo"
            className="px-8 py-4 rounded-xl border-2 border-white text-base font-semibold text-white hover:bg-white/10 transition-all"
          >
            Request Demo
          </a>
        </div>
      </div>
    </section>
  );
}