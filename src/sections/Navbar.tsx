import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onQuoteClick: () => void;
}

export default function Navbar({ onQuoteClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'nav-solid' : 'nav-transparent'
        }`}
      >
        <div className="container-main flex items-center justify-between h-16 md:h-20">
          <a href="#" className="display-font text-xl md:text-2xl text-[#F4EFE6] tracking-wide">
            ECOSHIELD
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: 'Home', id: 'hero' },
              { label: 'Products', id: 'products' },
              { label: 'Projects', id: 'projects' },
              { label: 'Services', id: 'services' },
              { label: 'Contact', id: 'contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-[#F4EFE6] font-['Plus_Jakarta_Sans'] text-sm font-medium hover:text-[#C75B39] transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => onQuoteClick()}
              className="btn-primary text-sm py-2.5 px-5"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-[#F4EFE6] p-2"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="mobile-menu md:hidden">
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-5 right-5 text-[#F4EFE6] p-2"
          >
            <X size={28} />
          </button>
          {[
            { label: 'Home', id: 'hero' },
            { label: 'Products', id: 'products' },
            { label: 'Projects', id: 'projects' },
            { label: 'Services', id: 'services' },
            { label: 'Contact', id: 'contact' },
          ].map((item) => (
            <button key={item.id} onClick={() => scrollTo(item.id)}>
              {item.label}
            </button>
          ))}
          <button
            onClick={() => { setMobileOpen(false); onQuoteClick(); }}
            className="btn-primary mt-4"
          >
            Get Free Quote
          </button>
        </div>
      )}
    </>
  );
}
