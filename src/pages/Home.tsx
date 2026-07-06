import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../sections/Navbar';
import HeroVideo from '../sections/HeroVideo';
import TrustBar from '../sections/TrustBar';
import ProductShowcase from '../sections/ProductShowcase';
import PerspectiveText from '../sections/PerspectiveText';
import DiagonalGallery from '../sections/DiagonalGallery';
import ServicesSection from '../sections/ServicesSection';
import ProductComparison from '../sections/ProductComparison';
import ContactSection from '../sections/ContactSection';
import Footer from '../sections/Footer';
import WhatsAppFloat from '../sections/WhatsAppFloat';
import QuoteModal from '../sections/QuoteModal';
import ProductModal from '../sections/ProductModal';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [productIndex, setProductIndex] = useState(0);

  const openQuote = () => setQuoteOpen(true);
  const openProduct = (index: number) => {
    setProductIndex(index);
    setProductOpen(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="relative">
      <Navbar onQuoteClick={openQuote} />
      <HeroVideo onQuoteClick={openQuote} />
      <TrustBar />
      <ProductShowcase onProductClick={openProduct} />
      <PerspectiveText />
      <DiagonalGallery />
      <ServicesSection onQuoteClick={openQuote} />
      <ProductComparison onQuoteClick={openQuote} onProductClick={openProduct} />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
      <ProductModal
        isOpen={productOpen}
        onClose={() => setProductOpen(false)}
        productIndex={productIndex}
      />
    </div>
  );
}
