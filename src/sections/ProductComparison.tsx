import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    image: '/images/comparison-tiles.jpg',
    label: 'Premium Tiles',
    description:
      'Stone-coated roofing tiles in Classic, Milano, Shingle, and Roman profiles. 50-year warranty, Gauge 26 thickness, 7 stunning colors.',
    cta: 'View Tile Options',
  },
  {
    image: '/images/comparison-mabati.jpg',
    label: 'Standard Mabati',
    description:
      'Box profile and corrugated iron sheets in multiple gauges (G26, G28, G30) and finishes. 15-year warranty, affordable pricing.',
    cta: 'View Mabati Options',
  },
];

interface ProductComparisonProps {
  onQuoteClick: () => void;
  onProductClick: (index: number) => void;
}

export default function ProductComparison({ onQuoteClick, onProductClick }: ProductComparisonProps) {
  const [activeCard, setActiveCard] = useState<0 | 1>(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.comparison-text-block',
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

      gsap.fromTo(
        '.comparison-card',
        { x: 40, opacity: 0 },
        {
          x: 0,
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
    <section ref={sectionRef} className="comparison-section">
      <div className="comparison-container">
        {/* Left: Text */}
        <div className="comparison-text-block flex flex-col justify-center opacity-0">
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] text-[#2E333B] mb-6">
            Choose Your Roofing Solution
          </h2>
          <p className="text-[#2E333B]/70 text-[clamp(0.875rem,1vw,1rem)] leading-relaxed mb-8">
            From premium stone-coated tiles with 50-year warranties to durable
            standard mabati for every budget, we have the perfect roof for your
            project.
          </p>
          <div className="flex flex-wrap gap-4">
            <button onClick={onQuoteClick} className="btn-primary">
              Request a Quote
            </button>
          </div>
        </div>

        {/* Right: Cards */}
        <div className="comparison-cards">
          {products.map((product, index) => (
            <div
              key={index}
              className={`comparison-card ${activeCard === index ? 'is-active' : ''}`}
              onClick={() => setActiveCard(index as 0 | 1)}
            >
              <img src={product.image} alt={product.label} />
              <div className="comparison-card__content">
                <span className="comparison-card__label">{product.label}</span>
                <p
                  className={`text-sm leading-relaxed transition-opacity duration-300 ${
                    activeCard === index ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {product.description}
                </p>
                <button
                  onClick={(e) => { e.stopPropagation(); onProductClick(index); }}
                  className={`comparison-card__cta transition-opacity duration-300 ${
                    activeCard === index ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {product.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
