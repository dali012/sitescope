import Features from '@/components/landing/features';
import Footer from '@/components/landing/footer';
import Hero from '@/components/landing/hero';
import HowItWorks from '@/components/landing/how-it-works';
import Navbar from '@/components/landing/navbar';
import Pricing from '@/components/landing/pricing';
import TrustedBy from '@/components/landing/trusted-by';

export default function Home() {
  return (
    <div className="h-screen overflow-y-auto bg-white font-sans text-stone-900 selection:bg-stone-200 dark:bg-zinc-950 dark:text-stone-100">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
      <HowItWorks />
      <Pricing />
      <Footer />
    </div>
  );
}
