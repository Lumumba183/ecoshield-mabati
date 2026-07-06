import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: 'Karen Residence',
    description: 'Stone-coated Classic profile in Coffee Brown',
    image: '/images/project-karen.jpg',
  },
  {
    name: 'Runda Estate',
    description: 'Milano profile in Terracotta',
    image: '/images/project-runda.jpg',
  },
  {
    name: 'Kilimani Apartments',
    description: 'Shingle profile in Charcoal',
    image: '/images/project-kilimani.jpg',
  },
  {
    name: 'Lavington Villa',
    description: 'Roman profile in Forest Green',
    image: '/images/project-lavington.jpg',
  },
  {
    name: 'Karen Residence',
    description: 'Stone-coated Classic profile in Coffee Brown',
    image: '/images/project-karen.jpg',
  },
  {
    name: 'Runda Estate',
    description: 'Milano profile in Terracotta',
    image: '/images/project-runda.jpg',
  },
  {
    name: 'Kilimani Apartments',
    description: 'Shingle profile in Charcoal',
    image: '/images/project-kilimani.jpg',
  },
  {
    name: 'Lavington Villa',
    description: 'Roman profile in Forest Green',
    image: '/images/project-lavington.jpg',
  },
];

export default function DiagonalGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const col1 = col1Ref.current;
    const col2 = col1Ref.current;
    if (!section || !track || !col1 || !col2) return;

    const ctx = gsap.context(() => {
      // Opposing column scroll - column 1 moves up, column 2 moves down
      gsap.to(col1Ref.current, {
        yPercent: -40,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.fromTo(
        col2Ref.current,
        { yPercent: -20 },
        {
          yPercent: 20,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        }
      );

      // Detect which project is in view
      const allImages = section.querySelectorAll('.gallery-image-wrapper');
      allImages.forEach((wrapper, index) => {
        ScrollTrigger.create({
          trigger: wrapper,
          start: 'top 60%',
          end: 'bottom 40%',
          onEnter: () => setActiveProject(index % 4),
          onEnterBack: () => setActiveProject(index % 4),
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="diagonal-gallery">
      {/* Rotated diagonal track - contained within section */}
      <div ref={trackRef} className="diagonal-gallery__track">
        <div
          className="diagonal-gallery__rotated"
          style={{ transform: 'rotate(-25deg)' }}
        >
          <div ref={col1Ref} className="gallery-col gallery-col-1">
            {projects.slice(0, 4).map((project, i) => (
              <div key={i} className="gallery-image-wrapper">
                <img
                  src={project.image}
                  alt={project.name}
                  className="gallery-image"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <div ref={col2Ref} className="gallery-col gallery-col-2">
            {projects.slice(4, 8).map((project, i) => (
              <div key={i} className="gallery-image-wrapper">
                <img
                  src={project.image}
                  alt={project.name}
                  className="gallery-image"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Info panel - scrolls with section */}
      <div className="gallery-info">
        <h3 className="gallery-info__title">
          {projects[activeProject].name}
        </h3>
        <p className="gallery-info__desc">
          {projects[activeProject].description}
        </p>
      </div>
    </section>
  );
}
