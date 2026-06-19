// constants/heroData.js

export const heroContent = {
  titleStart: "Custom Software",
  titleEnd: "Ecosystems",
  
  // The hidden text search engines and AI bots will read
  seoTitle: "Custom Software Development & Enterprise IT Ecosystems",
  
  // Keyword-rich paragraph for indexing
  description: "We engineer scalable web applications, secure CRMs, and robust APIs. Transform your business operations with intelligent tech solutions built for growth.",
  
  ctas: [
    { id: 1, label: "Start Your Project", href: "/support", primary: true }, 
    { id: 2, label: "View Our Work", href: "/products", primary: false }
  ],
  trust: {
    count: "100,000+",
    avatars: [
      "https://i.pravatar.cc/100?img=1",
      "https://i.pravatar.cc/100?img=2",
      "https://i.pravatar.cc/100?img=3",
      "https://i.pravatar.cc/100?img=4",
      "https://i.pravatar.cc/100?img=5"
    ]
  }
};

export const heroCards = [
  { 
    id: 1, 
    title: "App Solution", 
    desc: "Scale your business with high-performance mobile applications.", 
    icon: "mobile" // We can map this to an actual SVG component later
  },
  { 
    id: 2, 
    title: "Web Solution", 
    desc: "Custom web applications built for speed and security.", 
    icon: "globe" 
  },
  { 
    id: 3, 
    title: "Cloud Services", 
    desc: "Secure and scalable cloud infrastructure management.", 
    icon: "cloud" 
  }
];