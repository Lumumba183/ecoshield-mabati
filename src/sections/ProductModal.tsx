import { useState } from 'react';
import { X, CheckCircle, ArrowRight } from 'lucide-react';

interface ProductDetail {
  title: string;
  image: string;
  howMade: string;
  whyBest: string[];
  specs: { label: string; value: string }[];
}

const productDetails: ProductDetail[] = [
  {
    title: 'Stone-Coated Roofing Tiles',
    image: '/images/product-tiles.jpg',
    howMade:
      'Our stone-coated tiles begin with a premium Alu-Zinc steel core (55% Aluminum, 43.4% Zinc, 1.6% Silicon) that provides 6x greater rust protection than standard galvanized steel. The steel is coated with an anti-corrosive primer, followed by an acrylic resin base coat. Natural volcanic stone chips are then applied and baked at 800°C+ to fuse the color into the stone matrix, creating UV-resistant, fade-free colors. A clear acrylic overglaze with anti-algae and anti-moss inhibitors creates a self-cleaning surface that lasts decades.',
    whyBest: [
      '50-Year Warranty — longest in the Kenyan market',
      '6x greater rust protection than standard mabati',
      'UV-resistant volcanic stone chips — colors never fade',
      'Lightweight — 85% lighter than clay tiles, less timber support needed',
      'Class A Fire Rating — non-combustible',
      'Wind resistant up to 120 mph (193 km/h)',
      'Noise dampening — rain sounds quieter than on metal',
      '100% recyclable — environmentally friendly',
    ],
    specs: [
      { label: 'Material', value: 'Alu-Zinc coated steel' },
      { label: 'Thickness', value: '0.40–0.45mm (Gauge 26)' },
      { label: 'Dimensions', value: '1340 x 420mm' },
      { label: 'Coverage', value: '~0.48 m² per tile' },
      { label: 'Weight', value: '2.3–3.8 kg per tile' },
      { label: 'Warranty', value: '50 years' },
      { label: 'Profiles', value: 'Classic, Milano, Shingle, Roman' },
      { label: 'Colors', value: 'Coffee Brown, Terracotta, Charcoal, Forest Green, Maroon, Tile Red' },
    ],
  },
  {
    title: 'Standard Mabati',
    image: '/images/product-mabati.jpg',
    howMade:
      'Our standard mabati is manufactured from high-quality galvanized steel that undergoes a rigorous cleaning and pre-treatment process. The steel is then shaped into either trapezoidal box profile or classic sinusoidal corrugated wave using precision roll-forming machines. A premium paint coating is applied using coil-coating technology, where the steel strip is continuously cleaned, pre-treated, primed, and top-coated before being cut to standard lengths. This ensures uniform thickness, consistent color, and superior adhesion.',
    whyBest: [
      '15-Year Warranty against manufacturing defects',
      'Multiple gauges available — G26, G28, G30 for different budgets',
      'Box profile and corrugated options for any roof design',
      'Glossy and matte finishes available',
      'KEBS certified for quality assurance',
      'Affordable pricing without compromising durability',
      'Quick installation — saves labor costs',
      'Available in multiple colors to match any aesthetic',
    ],
    specs: [
      { label: 'Material', value: 'Galvanized steel' },
      { label: 'Gauges', value: 'G26 (0.40mm), G28 (0.30mm), G30 (0.25mm)' },
      { label: 'Width', value: '1000mm (effective ~800mm box, ~762mm corrugated)' },
      { label: 'Lengths', value: '2m, 3m, 4m, 6m' },
      { label: 'Min Roof Pitch', value: '5° (box), 10° (corrugated)' },
      { label: 'Warranty', value: '15 years' },
      { label: 'Finishes', value: 'Glossy, Matte' },
      { label: 'Colors', value: 'Charcoal, Sky Blue, Maroon, Tile Red, Coffee Brown, Dark Green' },
    ],
  },
  {
    title: 'PVC Gutters & Accessories',
    image: '/images/product-gutters.jpg',
    howMade:
      'Our PVC gutters are crafted from high-grade UPVC (Unplasticized Polyvinyl Chloride) using extrusion molding technology. The unplasticized formulation makes the material rigid, durable, and completely rust-proof. Each gutter channel, downpipe, bracket, and fitting is precision-molded to ensure perfect interlocking connections. The white UV-stabilized finish prevents yellowing and degradation under intense Kenyan sun, maintaining its appearance and structural integrity for years.',
    whyBest: [
      '100% rust-free — never corrodes like metal gutters',
      'Lightweight — easy to transport and install',
      'Low maintenance — no painting or treatment needed',
      'UV-stabilized — won\'t degrade in Kenyan sun',
      'Complete system — gutters, downpipes, brackets, fittings',
      'Smooth interior surface — prevents debris buildup',
      'Leak-proof joints with precision-molded fittings',
      'Cost-effective long-term solution',
    ],
    specs: [
      { label: 'Material', value: 'UPVC' },
      { label: 'Profile', value: 'Box (Square/Rectangular)' },
      { label: 'Standard Length', value: '4 meters' },
      { label: 'Sizes', value: '140mm (5.2") & 165mm (6.5")' },
      { label: 'Color', value: 'White (UV-stabilized)' },
      { label: 'Key Advantage', value: '100% rust-free' },
      { label: 'Maintenance', value: 'Minimal — occasional cleaning' },
      { label: 'Lifespan', value: '20+ years' },
    ],
  },
  {
    title: 'Steel Trusses',
    image: '/images/product-trusses.jpg',
    howMade:
      'Our light gauge steel (LGS) trusses are engineered using cold-formed steel sections produced from high-tensile galvanized steel coils. The steel is fed through a series of rollers that progressively shape it into C-sections, Z-sections, and custom profiles with precise dimensions. Each truss is then assembled using advanced fastening techniques in a controlled factory environment. The galvanized coating provides excellent corrosion resistance, making these trusses ideal for Kenyan climates.',
    whyBest: [
      'Termite-proof — steel is impervious to termite damage',
      'Fire-resistant — maintains structural integrity during fires',
      'Lightweight — easier to transport and install than timber',
      '30–50 year lifespan vs. 10–15 years for timber',
      'Precision-engineered — exact dimensions every time',
      'Quick installation — prefabricated components assemble rapidly',
      '100% recyclable — environmentally friendly end-of-life disposal',
      'No warping, rotting, or splitting like wood',
    ],
    specs: [
      { label: 'Material', value: 'Light gauge galvanized steel' },
      { label: 'Section Types', value: 'SHS, RHS, Zed Purlin' },
      { label: 'Typical Length', value: '6m – 12m' },
      { label: 'Weight', value: '3.8 – 7.5 kg/m' },
      { label: 'Lifespan', value: '30–50 years' },
      { label: 'Fire Rating', value: 'Non-combustible' },
      { label: 'Installation', value: 'Prefabricated, rapid assembly' },
      { label: 'Recyclable', value: '100%' },
    ],
  },
];

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  productIndex: number;
}

export default function ProductModal({ isOpen, onClose, productIndex }: ProductModalProps) {
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [orderData, setOrderData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    quantity: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const product = productDetails[productIndex] || productDetails[0];

  const handleOrderChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setOrderData({ ...orderData, [e.target.name]: e.target.value });
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const body = new URLSearchParams(data as any).toString();

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    })
      .then(() => setSubmitted(true))
      .catch(() => alert('Something went wrong. Please try again.'));
  };

  const resetAndClose = () => {
    setShowOrderForm(false);
    setSubmitted(false);
    setOrderData({ name: '', phone: '', email: '', location: '', quantity: '', message: '' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60" onClick={resetAndClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white rounded-t-2xl border-b border-gray-100 px-6 py-4 flex items-center justify-between z-10">
          <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-semibold text-[#2E333B]">
            {product.title}
          </h3>
          <button
            onClick={resetAndClose}
            className="shrink-0 w-9 h-9 rounded-full bg-[#F4EFE6] flex items-center justify-center text-[#2E333B] hover:bg-[#EBE6DE] transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5">
          {!showOrderForm ? (
            <>
              {/* Product Image */}
              <div className="aspect-[16/9] rounded-xl overflow-hidden mb-6">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
              </div>

              {/* How It's Made */}
              <div className="mb-6">
                <h4 className="font-['Plus_Jakarta_Sans'] text-lg font-semibold text-[#2E333B] mb-2">
                  How It&apos;s Made
                </h4>
                <p className="text-[#2E333B]/70 text-sm leading-relaxed">{product.howMade}</p>
              </div>

              {/* Why It's the Best */}
              <div className="mb-6">
                <h4 className="font-['Plus_Jakarta_Sans'] text-lg font-semibold text-[#2E333B] mb-3">
                  Why It&apos;s the Best Choice
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.whyBest.map((point, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-[#C75B39] shrink-0 mt-0.5" />
                      <span className="text-sm text-[#2E333B]/80">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              <div className="mb-6">
                <h4 className="font-['Plus_Jakarta_Sans'] text-lg font-semibold text-[#2E333B] mb-3">
                  Technical Specifications
                </h4>
                <div className="bg-[#F4EFE6] rounded-xl p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.specs.map((spec, i) => (
                    <div key={i}>
                      <span className="text-xs text-[#2E333B]/50 uppercase tracking-wider">{spec.label}</span>
                      <p className="text-sm font-medium text-[#2E333B]">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Button */}
              <button
                onClick={() => setShowOrderForm(true)}
                className="btn-primary w-full py-3"
              >
                Order This Product <ArrowRight size={18} className="ml-2" />
              </button>
            </>
          ) : submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="font-['Plus_Jakarta_Sans'] text-lg font-semibold text-[#2E333B] mb-2">
                Order Request Sent!
              </h4>
              <p className="text-[#2E333B]/70 text-sm">
                We have received your order request for {product.title}. Our team will contact you shortly to confirm details and arrange delivery.
              </p>
              <button onClick={resetAndClose} className="btn-primary mt-6">
                Close
              </button>
            </div>
          ) : (
            <>
              <h4 className="font-['Plus_Jakarta_Sans'] text-lg font-semibold text-[#2E333B] mb-1">
                Order {product.title}
              </h4>
              <p className="text-sm text-[#2E333B]/60 mb-4">
                Fill in your details and our team will contact you to confirm your order.
              </p>
              <form onSubmit={handleOrderSubmit} className="space-y-4">
                <input type="hidden" name="form-name" value="contact" />
                <p style={{ display: 'none' }}>
                  <label>Don&apos;t fill this out if you&apos;re human: <input name="bot-field" /></label>
                </p>
                <input type="hidden" name="productInterest" value={product.title} />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="form-label">Full Name *</label>
                    <input type="text" name="name" value={orderData.name} onChange={handleOrderChange} required className="form-input" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="form-label">Phone *</label>
                    <input type="tel" name="phone" value={orderData.phone} onChange={handleOrderChange} required className="form-input" placeholder="+254 7XX XXX XXX" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="form-label">Email *</label>
                    <input type="email" name="email" value={orderData.email} onChange={handleOrderChange} required className="form-input" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="form-label">Delivery Location *</label>
                    <input type="text" name="location" value={orderData.location} onChange={handleOrderChange} required className="form-input" placeholder="Your county/area" />
                  </div>
                </div>

                <div>
                  <label className="form-label">Estimated Quantity / Area</label>
                  <input type="text" name="projectSize" value={orderData.quantity} onChange={handleOrderChange} className="form-input" placeholder="e.g., 200 tiles / 100 m²" />
                </div>

                <div>
                  <label className="form-label">Message</label>
                  <textarea name="message" value={orderData.message} onChange={handleOrderChange} rows={3} className="form-input resize-none" placeholder="Any specific requirements, color preference, timeline..." />
                </div>

                <div className="flex gap-3">
                  <button type="button" onClick={() => setShowOrderForm(false)} className="flex-1 py-3 rounded-full border border-gray-200 text-[#2E333B] font-['Plus_Jakarta_Sans'] font-semibold text-sm hover:bg-gray-50 transition-colors">
                    Back
                  </button>
                  <button type="submit" className="btn-primary flex-1 py-3">
                    Submit Order
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
