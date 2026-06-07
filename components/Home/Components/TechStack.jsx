import React from 'react';

// Organized data structure for your complete stack
const TECH_CATEGORIES = [
  {
    title: "Frontend Development",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    technologies: ["Next.js", "React", "Tailwind CSS"]
  },
  {
    title: "Backend & Database",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    technologies: ["Node.js", "MongoDB", "PostgreSQL"]
  },
  {
    title: "DevOps & Deployment",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.45m.311-.06a15.09 15.09 0 012.448 2.45m0 0a15.09 15.09 0 01-2.448-2.45" />
      </svg>
    ),
    technologies: ["Vercel", "Render", "GitHub", "Git", "npm"]
  },
  {
    title: "UI/UX & Design",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    technologies: ["Adobe Creative Cloud", "Affinity", "Canva"]
  }
];

function TechStack() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16 md:py-24">
      
      {/* Section Header */}
      {/* <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase bg-gradient-to-r from-[#FF1493] via-[#FF8C00] to-[#FFD700] bg-clip-text text-transparent mb-3 block">
          Powered By Modern Technology
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#0B0B1A] tracking-tight mb-4">
          Our Full-Stack Ecosystem
        </h2>
        <p className="text-gray-500 text-sm md:text-base leading-relaxed">
          From pixel-perfect interfaces to robust backend architectures, we leverage industry-leading tools to build scalable, high-performance applications.
        </p>
      </div> */}

      {/* Responsive Grid for Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {TECH_CATEGORIES.map((category, idx) => (
          <div 
            key={idx} 
            className="group relative bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-gray-300 transition-all duration-300 overflow-hidden flex flex-col h-full"
          >
            {/* Top Hover Accent Line */}
            {/* <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF1493] via-[#FF8C00] to-[#FFD700] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}
            
            {/* Category Icon */}
            <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 mb-6 group-hover:bg-gradient-to-br group-hover:from-[#FF1493] group-hover:to-[#FF8C00] group-hover:text-white group-hover:border-transparent transition-all duration-300 shrink-0">
              {category.icon}
            </div>

            {/* Category Title */}
            <h3 className="text-lg font-bold text-[#0B0B1A] tracking-tight mb-4">
              {category.title}
            </h3>

            {/* Pills / Badges for individual technologies */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {category.technologies.map((tech, techIdx) => (
                <span 
                  key={techIdx} 
                  className="px-3 py-1.5 bg-gray-50 text-gray-600 border border-gray-200 rounded-lg text-xs font-semibold tracking-wide hover:bg-gray-100 hover:text-[#0B0B1A] transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default TechStack;