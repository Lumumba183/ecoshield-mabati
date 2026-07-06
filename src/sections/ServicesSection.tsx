import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Truck, Ruler, Wrench, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Truck,
    title: 'Free Delivery',
    description:
      'We deliver to all 47 counties in Kenya. Nairobi: same/next day. Major towns: 2-4 days. Rural areas: 3-7 days.',
  },
  {
    icon: Ruler,
    title: 'Roof Measurement & Estimation',
    description:
      'Send us your roof plans and our team will provide accurate material estimates at no cost.',
  },
  {
    icon: Wrench,
    title: 'Installation Support',
    description:
      'We connect you with certified installation partners for professional, warranty-valid fitting.',
  },
];

interface ServicesSectionProps {
  onQuoteClick: () => void;
}

export default function ServicesSection({ onQuoteClick }: ServicesSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.services-heading',
        { x: -60, opacity: 0 },
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
        '.service-card',
        { x: 60, opacity: 0 },
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
    <section id="services" ref={sectionRef} className="section-padding bg-white">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Heading */}
          <div className="services-heading opacity-0">
            <h2 className="text-[clamp(1.75rem,4vw,3rem)] text-[#2E333B] mb-6">
              Our Services
            </h2>
            <p className="text-[#2E333B]/70 mb-8 text-[clamp(0.875rem,1vw,1rem)] leading-relaxed max-w-md">
              Beyond supplying premium roofing materials, we offer comprehensive
              support services to ensure your project succeeds from start to finish.
            </p>
            <button
              onClick={onQuoteClick}
              className="btn-primary"
            >
              Call or WhatsApp: +254 701 710684
              <ArrowRight size={18} className="ml-2" />
            </button>
          </div>

          {/* Right: Service cards */}
          <div className="flex flex-col gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="service-card flex gap-5 p-6 rounded-xl bg-[#F4EFE6] hover:bg-[#EBE6DE] transition-colors opacity-0"
              >
                <div className="shrink-0 w-12 h-12 rounded-lg bg-[#C75B39]/10 flex items-center justify-center">
                  <service.icon size={24} className="text-[#C75B39]" />
                </div>
                <div>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-semibold text-[#2E333B] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[#2E333B]/70 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
