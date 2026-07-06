import { Facebook, Instagram, Youtube } from 'lucide-react';

const navLinks = [
  { label: 'Home', id: 'hero' },
  { label: 'Products', id: 'products' },
  { label: 'Services', id: 'services' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#2E333B] py-12 md:py-16">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-10">
          {/* Logo & description */}
          <div>
            <h3 className="display-font text-2xl text-[#F4EFE6] mb-4 tracking-wide">
              ECOSHIELD
            </h3>
            <p className="text-[#EBE6DE]/60 text-sm leading-relaxed max-w-xs">
              Kenya&apos;s trusted roofing partner. Premium stone-coated tiles,
              standard mabati, PVC gutters &amp; steel trusses. 50-year warranty.
              Free delivery nationwide.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-['Plus_Jakarta_Sans'] font-semibold text-[#F4EFE6] mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-left text-[#EBE6DE]/60 hover:text-[#C75B39] transition-colors text-sm"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social & contact */}
          <div>
            <h4 className="font-['Plus_Jakarta_Sans'] font-semibold text-[#F4EFE6] mb-4">
              Connect With Us
            </h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://www.facebook.com/share/1AiLFq4oxF/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#F4EFE6]/10 flex items-center justify-center text-[#F4EFE6] hover:bg-[#C75B39] transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com/eco_shield_mabati_factory"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#F4EFE6]/10 flex items-center justify-center text-[#F4EFE6] hover:bg-[#C75B39] transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.tiktok.com/@ecoshieldmabati"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#F4EFE6]/10 flex items-center justify-center text-[#F4EFE6] hover:bg-[#C75B39] transition-colors"
              >
                <Youtube size={18} />
              </a>
            </div>
            <p className="text-[#EBE6DE]/60 text-sm">
              <a href="tel:+254701710684" className="hover:text-[#C75B39] transition-colors">
                +254 701 710684
              </a>
            </p>
            <p className="text-[#EBE6DE]/60 text-sm mt-1">
              <a
                href="mailto:ecoshieldmabatifactory1@gmail.com"
                className="hover:text-[#C75B39] transition-colors"
              >
                ecoshieldmabatifactory1@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#F4EFE6]/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#EBE6DE]/40 text-sm">
            &copy; 2026 EcoShield Mabati Factory. All rights reserved.
          </p>
          <p className="text-[#EBE6DE]/40 text-sm">
            Kindaruma Road, Kilimani, Nairobi, Kenya
          </p>
        </div>
      </div>
    </footer>
  );
}
