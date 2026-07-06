import { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface HeroVideoProps {
  onQuoteClick: () => void;
}

export default function HeroVideo({ onQuoteClick }: HeroVideoProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      headlineRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2 },
      0.3
    )
      .fromTo(
        subtitleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        0.6
      )
      .fromTo(
        ctaRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        0.9
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section id="hero" ref={sectionRef} className="hero-video">
      <video
        className="hero-video__bg"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/comparison-tiles.jpg"
      >
        <source src="/videos/hero-african-home.mp4" type="video/mp4" />
      </video>
      <div className="hero-video__overlay" />
      <div className="hero-video__content">
        <h1
          ref={headlineRef}
          className="display-font text-[clamp(2.5rem,10vw,7rem)] leading-[1] tracking-tight mb-6 opacity-0"
        >
          ECOSHIELD
          <br />
          <span className="text-[clamp(1.5rem,5vw,3.5rem)] font-['Plus_Jakarta_Sans'] font-semibold">
            MABATI FACTORY
          </span>
        </h1>
        <p
          ref={subtitleRef}
          className="text-[clamp(1rem,1.5vw,1.25rem)] max-w-2xl mb-8 opacity-0 font-['DM_Sans']"
        >
          Premium Stone-Coated Roofing Tiles &amp; Steel Solutions — Built to Last 50 Years.
          Free delivery to all 47 counties in Kenya.
        </p>
        <button
          ref={ctaRef}
          onClick={onQuoteClick}
          className="btn-primary opacity-0"
        >
          Get a Free Quote
        </button>
      </div>
    </section>
  );
}
