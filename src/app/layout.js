import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Providers from "../../components/Providers";


export const metadata = {
  metadataBase: new URL('https://thediv.in'), // Replace with your actual production domain
  title: {
    default: 'DIV | Enterprise Software Engineering & Architecture',
    template: '%s | Development Innovation Vector' // Automatically appends your brand to page titles
  },
  description: 'Development Innovation Vector (DIV) engineers resilient infrastructure, automated workflows, and custom enterprise tools designed to eliminate bottlenecks and accelerate growth.',
  keywords: ['Enterprise Software', 'Next.js Development', 'Custom CRM', 'Workflow Automation', 'Cloud Infrastructure', 'DIV Noida', 'B2B Software Agency'],
  authors: [{ name: 'spyder' }],
  creator: 'Development Innovation Vector Private Limited',
  publisher: 'DIV',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: 'efaBcbhTZch0n3sWNIxNX4hHln80syfiUwHryFpA40g', 
  },
  openGraph: {
    title: 'DIV | Enterprise Software Engineering',
    description: 'Architecting Scalable Digital Ecosystems for modern enterprises.',
    url: 'https://thediv.in',
    siteName: 'DIV',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DIV | Enterprise Software Engineering',
    description: 'Architecting Scalable Digital Ecosystems.',
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="" suppressHydrationWarning>
        <Providers>
          <Navbar />

          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
