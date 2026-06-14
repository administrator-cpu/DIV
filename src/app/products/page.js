'use client';

import React from 'react';
import Link from 'next/link';
import { DIV_PRODUCTS } from '../../../src/constants/productsData';

export default function ProductsDirectoryPage() {
  return (
    <main className="w-full bg-white text-gray-900 min-h-screen">
      
      {/* 1. authoritative SEO Hero Header */}
      <section className="relative w-full py-28 px-4 text-center overflow-hidden bg-gray-50/50 border-b border-gray-100">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white pointer-events-none" aria-hidden="true" />
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[60%] rounded-full bg-gradient-to-tr from-pink-100/40 to-orange-50/40 blur-[120px] pointer-events-none" aria-hidden="true" />
        
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
            <span className="sr-only">Enterprise Software Solutions Ecosystem</span>
            <span className="bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent" aria-hidden="true">
              Enterprise Software Solutions
            </span>{' '}
            <span aria-hidden="true">Engineered For Scale</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl leading-relaxed">
            Explore our ecosystem of purpose-built platforms designed to streamline operations, secure financial transactions, and automate support infrastructure.
          </p>
        </div>
      </section>

      {/* 2. Asymmetrical Directory Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24" aria-label="Product Portfolio">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {DIV_PRODUCTS.map((product) => {
            const Icon = product.heroIcon;
            return (
              <article 
                key={product.id}
                className="group relative bg-white border border-gray-200/80 rounded-[2rem] p-8 flex flex-col justify-between hover:shadow-2xl hover:shadow-black/5 hover:border-gray-300 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-50 to-orange-50 text-pink-500 flex items-center justify-center border border-pink-100/50">
                      {Icon && <Icon className="w-6 h-6" strokeWidth={1.5} />}
                    </div>
                    <span className="text-xs font-bold tracking-widest uppercase bg-gray-100 text-gray-500 px-3 py-1.5 rounded-full">
                      {product.id === "samadhan" ? "Support Infrastructure" : product.id === "bahikhata" ? "Fintech Ledger" : "Core Operations"}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight group-hover:text-pink-500 transition-colors">
                    {product.title}
                  </h2>
                  <p className="text-gray-500 font-semibold text-sm mb-3 line-clamp-1 italic">
                    &ldquo;{product.tagline}&rdquo;
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-8">
                    {product.shortDesc}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-6 border-t border-gray-100 mt-auto">
                  <Link 
                    href={`/products/${product.id}`}
                    className="px-4 py-2.5 rounded-xl bg-gray-900 text-white font-semibold text-xs text-center hover:bg-gray-800 shadow-sm transition-colors"
                  >
                    View Architecture
                  </Link>
                  <a 
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-white text-gray-700 font-semibold text-xs text-center border border-gray-200 hover:border-gray-900 transition-colors"
                  >
                    Launch Platform
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 3. Global Trust, Security & Compliance Layer */}
      <section className="bg-[#1C1C1C] text-white py-24 px-6 md:px-12 relative overflow-hidden" aria-labelledby="compliance-heading">
        <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[60%] rounded-full bg-gradient-to-bl from-pink-500/10 to-transparent blur-[120px] pointer-events-none" aria-hidden="true" />
        
        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <h2 id="compliance-heading" className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Enterprise-Grade <br />
              <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Security Architecture
              </span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Every system built under our network complies with high security configurations, including multi-factor access rules and automated data encryption protocols.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Dual-Layer Verification", desc: "Rigid transaction isolation models protecting accounting logs from system anomalies." },
              { title: "Continuous Monitoring", desc: "24/7 endpoint threat logs analyzing database interactions automatically." },
              { title: "Zero Data Single Point", desc: "Decoupled cloud parameters routing storage arrays across segregated clusters." },
              { title: "Strict SLA Alignment", desc: "Ticketing thresholds executing strict automatic scaling and escalation protocols." }
            ].map((stat, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/[0.08] p-6 rounded-2xl">
                <h3 className="font-bold text-white text-base mb-2">{stat.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}