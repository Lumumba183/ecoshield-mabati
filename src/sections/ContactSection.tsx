import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    productInterest: 'Stone-Coated Tiles',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data as any).toString(),
    })
      .then(() => {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          productInterest: 'Stone-Coated Tiles',
          message: '',
        });
      })
      .catch((error) => {
        console.error('Form submission error:', error);
        alert('Something went wrong. Please try again.');
      });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-left',
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
        '.contact-right',
        { x: 40, opacity: 0 },
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="section-padding bg-[#3B251A]">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Contact info */}
          <div className="contact-left opacity-0">
            <h2 className="text-[clamp(1.75rem,4vw,3rem)] text-[#F4EFE6] mb-6">
              Get Your Free Quote Today
            </h2>
            <p className="text-[#EBE6DE]/80 text-[clamp(0.875rem,1vw,1rem)] leading-relaxed mb-10">
              Ready to roof your dream home? Contact us for a free consultation
              and quote. Our team is standing by to help you choose the perfect
              roofing solution.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-[#C75B39]/20 flex items-center justify-center">
                  <Phone size={18} className="text-[#C75B39]" />
                </div>
                <div>
                  <p className="font-['Plus_Jakarta_Sans'] font-medium text-[#F4EFE6] mb-1">
                    Phone / WhatsApp
                  </p>
                  <a
                    href="tel:+254701710684"
                    className="text-[#EBE6DE]/70 hover:text-[#C75B39] transition-colors"
                  >
                    +254 701 710684
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-[#C75B39]/20 flex items-center justify-center">
                  <Mail size={18} className="text-[#C75B39]" />
                </div>
                <div>
                  <p className="font-['Plus_Jakarta_Sans'] font-medium text-[#F4EFE6] mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:ecoshieldmabatifactory1@gmail.com"
                    className="text-[#EBE6DE]/70 hover:text-[#C75B39] transition-colors"
                  >
                    ecoshieldmabatifactory1@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-[#C75B39]/20 flex items-center justify-center">
                  <MapPin size={18} className="text-[#C75B39]" />
                </div>
                <div>
                  <p className="font-['Plus_Jakarta_Sans'] font-medium text-[#F4EFE6] mb-1">
                    Address
                  </p>
                  <p className="text-[#EBE6DE]/70">
                    Kindaruma Road, Kilimani, Nairobi, Kenya
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-[#C75B39]/20 flex items-center justify-center">
                  <Clock size={18} className="text-[#C75B39]" />
                </div>
                <div>
                  <p className="font-['Plus_Jakarta_Sans'] font-medium text-[#F4EFE6] mb-1">
                    Business Hours
                  </p>
                  <p className="text-[#EBE6DE]/70">Mon - Sat: 8:00 AM - 5:30 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-right opacity-0">
            {submitted ? (
              <div className="bg-white rounded-xl p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-semibold text-[#2E333B] mb-2">
                  Thank You!
                </h3>
                <p className="text-[#2E333B]/70">
                  We have received your message and will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-[#C75B39] font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-xl p-6 md:p-8 space-y-5"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p style={{ display: 'none' }}>
                  <label>
                    Don&apos;t fill this out if you&apos;re human:{" "}
                    <input name="bot-field" />
                  </label>
                </p>

                <div>
                  <label htmlFor="name" className="form-label">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="John Kamau"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="form-label">
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="+254 7XX XXX XXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="productInterest" className="form-label">
                    Product Interest
                  </label>
                  <select
                    id="productInterest"
                    name="productInterest"
                    value={formData.productInterest}
                    onChange={handleChange}
                    className="form-input"
                  >
                    <option value="Stone-Coated Tiles">Stone-Coated Tiles</option>
                    <option value="Standard Mabati">Standard Mabati</option>
                    <option value="PVC Gutters">PVC Gutters</option>
                    <option value="Steel Trusses">Steel Trusses</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="form-input resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
