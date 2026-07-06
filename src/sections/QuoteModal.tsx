import { useState } from 'react';
import { X } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    projectSize: '',
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
          phone: '',
          email: '',
          location: '',
          projectSize: '',
          productInterest: 'Stone-Coated Tiles',
          message: '',
        });
      })
      .catch((error) => {
        console.error('Form submission error:', error);
        alert('Something went wrong. Please try again.');
      });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white rounded-t-2xl border-b border-gray-100 px-6 py-4 flex items-center justify-between">
          <div>
            <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-semibold text-[#2E333B]">
              Get Your Free Quote
            </h3>
            <p className="text-sm text-[#2E333B]/60 mt-0.5">
              Tell us about your project and we will send you a tailored price
            </p>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 w-9 h-9 rounded-full bg-[#F4EFE6] flex items-center justify-center text-[#2E333B] hover:bg-[#EBE6DE] transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="font-['Plus_Jakarta_Sans'] text-lg font-semibold text-[#2E333B] mb-2">
                Quote Request Sent!
              </h4>
              <p className="text-[#2E333B]/70 text-sm">
                Our team will review your project details and get back to you with a custom quote within 24 hours.
              </p>
              <button
                onClick={() => { setSubmitted(false); onClose(); }}
                className="btn-primary mt-6"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="hidden" name="form-name" value="contact" />
              <p style={{ display: 'none' }}>
                <label>Don&apos;t fill this out if you&apos;re human: <input name="bot-field" /></label>
              </p>

              <div>
                <label htmlFor="quote-name" className="form-label">Full Name *</label>
                <input
                  id="quote-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Your full name"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="quote-phone" className="form-label">
                    Phone Number <span className="text-[#C75B39]">*</span>
                  </label>
                  <input
                    id="quote-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="+254 7XX XXX XXX"
                  />
                </div>
                <div>
                  <label htmlFor="quote-email" className="form-label">
                    Email <span className="text-[#C75B39]">*</span>
                  </label>
                  <input
                    id="quote-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="quote-location" className="form-label">
                  Project Location <span className="text-[#C75B39]">*</span>
                </label>
                <input
                  id="quote-location"
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="e.g., Karen, Nairobi / Kisumu / Mombasa"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="quote-projectSize" className="form-label">Project Size (approx. m²)</label>
                  <input
                    id="quote-projectSize"
                    type="text"
                    name="projectSize"
                    value={formData.projectSize}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="e.g., 150 m²"
                  />
                </div>
                <div>
                  <label htmlFor="quote-productInterest" className="form-label">Product Interest</label>
                  <select
                    id="quote-productInterest"
                    name="productInterest"
                    value={formData.productInterest}
                    onChange={handleChange}
                    className="form-input"
                  >
                    <option value="Stone-Coated Tiles">Stone-Coated Tiles</option>
                    <option value="Standard Mabati">Standard Mabati</option>
                    <option value="PVC Gutters">PVC Gutters</option>
                    <option value="Steel Trusses">Steel Trusses</option>
                    <option value="Multiple Products">Multiple Products</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="quote-message" className="form-label">Additional Details</label>
                <textarea
                  id="quote-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="form-input resize-none"
                  placeholder="Tell us more about your project, preferred profile, color, timeline..."
                />
              </div>

              <button type="submit" className="btn-primary w-full py-3">
                Request My Quote
              </button>

              <p className="text-xs text-[#2E333B]/50 text-center">
                All fields marked with <span className="text-[#C75B39]">*</span> are required. We will never share your information.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
