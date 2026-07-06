import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Truck, Star, BadgeCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const items = [
  { icon: Shield, label: '50-Year Warranty' },
  { icon: Truck, label: 'Free Countrywide Delivery' },
  { icon: Star, label: 'Gauge 26 Premium Quality' },
  { icon: BadgeCheck, label: 'KEBS Certified' },
];

export default function TrustBar() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.trust-item',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="bg-[#3B251A] py-6 md:py-8">
      <div className="container-main grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {items.map((item, i) => (
          <div
            key={i}
            className="trust-item flex items-center gap-3 text-[#EBE6DE] opacity-0"
          >
            <item.icon size={22} className="text-[#C75B39] shrink-0" />
            <span className="font-['Plus_Jakarta_Sans'] text-sm font-medium">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
