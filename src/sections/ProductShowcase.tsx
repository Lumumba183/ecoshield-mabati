import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    image: '/images/product-tiles.jpg',
    title: 'Stone-Coated Roofing Tiles',
    description: '50-year warranty. Multiple profiles: Classic, Milano, Shingle, Roman. 7 stunning colors.',
  },
  {
    image: '/images/product-mabati.jpg',
    title: 'Standard Mabati',
    description: 'Box profile & corrugated iron sheets. Gauges G26, G28, G30. 15-year warranty.',
  },
  {
    image: '/images/product-gutters.jpg',
    title: 'PVC Gutters & Accessories',
    description: 'Rust-free UPVC rainwater systems. Complete gutter, downpipe & fitting sets.',
  },
  {
    image: '/images/product-trusses.jpg',
    title: 'Steel Trusses',
    description: 'Light gauge steel roof structures. Termite-proof, fire-resistant, 30-50 year lifespan.',
  },
];

interface ProductShowcaseProps {
  onProductClick: (index: number) => void;
}

export default function ProductShowcase({ onProductClick }: ProductShowcaseProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.product-card',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="products"
      ref={sectionRef}
      className="section-padding bg-[#F4EFE6]"
    >
      <div className="container-main">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] text-[#2E333B] mb-4">
            Our Roofing Solutions
          </h2>
          <p className="text-[#2E333B]/70 max-w-2xl mx-auto text-[clamp(0.875rem,1vw,1rem)]">
            From premium stone-coated tiles to durable standard mabati, we provide
            comprehensive roofing materials for every project and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {products.map((product, i) => (
            <div
              key={i}
              className="product-card group bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 opacity-0"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-semibold text-[#2E333B] mb-2">
                  {product.title}
                </h3>
                <p className="text-[#2E333B]/70 text-sm mb-4">{product.description}</p>
                <button
                  onClick={() => onProductClick(i)}
                  className="inline-flex items-center gap-2 text-[#C75B39] font-medium text-sm hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
