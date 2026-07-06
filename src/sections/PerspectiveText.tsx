import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PerspectiveText() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=1000',
        pin: true,
      });

      gsap.fromTo(
        textRef.current,
        { rotateX: 0 },
        {
          rotateX: 60,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: '+=1000',
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="perspective-section">
      <div ref={textRef} className="perspective-text">
        <div className="perspective-text__line">COFFEE BROWN / TERRACOTTA</div>
        <div className="perspective-text__line">/ CHARCOAL / FOREST GREEN</div>
        <div className="perspective-text__line">/ MAROON / TILE RED</div>
        <div className="perspective-text__line" style={{ marginTop: '0.35em' }}>CLASSIC / MILANO / SHINGLE</div>
        <div className="perspective-text__line">/ ROMAN</div>
      </div>
    </section>
  );
}
