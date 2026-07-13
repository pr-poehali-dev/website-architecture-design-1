import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Catalog from '@/components/Catalog';
import Service from '@/components/Service';
import AppPromo from '@/components/AppPromo';
import Business from '@/components/Business';
import Footer from '@/components/Footer';

const Index = () => (
  <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    <Header />
    <Hero />
    <Marquee />
    <Catalog />
    <Service />
    <AppPromo />
    <Business />
    <Footer />
  </div>
);

export default Index;
