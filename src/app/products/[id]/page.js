import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DIV_PRODUCTS } from "../../../constants/productsData";

// 1. generateStaticParams ensures all dynamic paths compile to instant-load static HTML
export async function generateStaticParams() {
  return DIV_PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = DIV_PRODUCTS.find((p) => p.id === id);

  if (!product) return { title: 'Product Not Found' };

  return {
    title: product.title, // e.g., "Samadhan | Development Innovation Vector"
    description: product.shortDesc,
    openGraph: {
      title: `${product.title} Architecture`,
      description: product.shortDesc,
    },
  };
}

export default async function DynamicProductPage(props) {
  const params = await props.params;
  const { id } = params;

  // Locate the dedicated product configuration in the dataset
  const product = DIV_PRODUCTS.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const PageIcon = product.heroIcon;

  return (
    <main className="w-full bg-white  text-gray-900 min-h-screen">
      {/* Dynamic Product Hero Banner */}
      <section className="relative w-full py-22 px-6 border-b border-gray-100 overflow-hidden bg-gray-50/30">
        <div
          className="absolute top-[-30%] right-[-10%] w-[50%] h-[70%] rounded-full bg-gradient-to-bl from-pink-500/5 to-yellow-500/5 blur-[120px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Text Summary */}
          <div className="lg:col-span-7 flex flex-col items-start relative z-10">
            <Link
              href="/products"
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-pink-500 mb-8 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
              Back To Products
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-500 flex items-center justify-center">
                {PageIcon && <PageIcon className="w-5 h-5" />}
              </div>
              <span className="text-sm font-bold tracking-widest text-pink-500 uppercase">
                {product.title} Architecture
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-[1.15] mb-6">
              {product.tagline}
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-2xl">
              {product.fullDesc}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-bold text-sm text-center shadow-lg shadow-pink-500/10 hover:opacity-90 hover:-translate-y-0.5 transition-all"
              >
                Launch Live Interface
              </a>
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-full bg-white text-gray-800 font-bold text-sm text-center border border-gray-200 hover:border-gray-900 transition-colors"
              >
                Request Customization Audit
              </Link>
            </div>
          </div>

          {/* Visual Showcase Block */}
          <div
            className="lg:col-span-5 relative w-full aspect-square max-w-md mx-auto"
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-200/40 via-orange-100/30 to-yellow-200/40 rounded-[2.5rem] p-8">
              <div className="w-full h-full overflow-hidden bg-white rounded-3xl shadow-xl border border-gray-100 flex items-center justify-center p-6 text-center text-gray-400 font-medium text-sm">
                <img 
                  src={product.featureImagePrimary} 
                  alt={`${product.title} Main Dashboard`}
                  className="w-full h-full rounded-2xl object-top object-cover "
                />
                {/* {product.title} Dashboard Layout Preview Panel */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Breakdown Section */}
      <section
        className="max-w-7xl mx-auto px-6 md:px-12 py-24"
        aria-label="Technical Highlights"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
            Technical Platform Pillars
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Core capabilities designed for isolation, operational durability,
            and seamless middleware integration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {product.features.map((feature) => {
            const FeatureIcon = feature.icon;
            return (
              <div
                key={feature.id}
                className="bg-gray-50/50 border border-gray-100 p-8 rounded-3xl flex flex-col items-start"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-800 mb-6 shadow-sm">
                  {FeatureIcon && <FeatureIcon className="w-5 h-5" />}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
                  {feature.text.split(":")[0]}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.text.split(":")[1] || feature.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
