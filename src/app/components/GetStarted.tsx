import { ArrowRight, CheckCircle } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function GetStarted() {
  const formSection = useScrollAnimation();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setIsSubmitting(false);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        organization: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <>
      {/* Section 1: Get Started Today - Benefits */}
      <section id="get-started" className="relative py-20 bg-gradient-to-br from-[var(--navy)] to-[var(--navy-dark)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[var(--cyan)]/10 border border-[var(--cyan)]/20 px-4 py-2 rounded-full mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--cyan)] animate-pulse"></div>
              <span className="text-sm font-medium text-[var(--cyan)]">GET STARTED TODAY</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your <br />
              <span className="text-[var(--cyan)]">Clinical Workflow?</span>
            </h2>

            <p className="text-lg text-gray-300 mb-8">
              Experience the power of AI-assisted diagnostics. Request a personalized demo and see how Probea AI can accelerate your radiology workflow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://probea.in/login"
                className="bg-white text-[var(--navy)] px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold flex items-center justify-center gap-2 cursor-pointer"
              >
                Sign In
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#request-demo"
                className="bg-[var(--cyan)] text-[var(--navy)] px-8 py-3 rounded-lg hover:bg-[var(--cyan-light)] transition-all duration-200 font-semibold flex items-center justify-center gap-2 cursor-pointer"
              >
                Request Demo
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Request Demo Form */}
      <section id="request-demo" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div
            ref={formSection.elementRef}
            className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
              formSection.isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Left Side - Info */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Request a Demo
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                See how Probea AI can transform your clinical workflow. Our team will provide a personalized demo tailored to your organization's needs.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--cyan)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[var(--cyan)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Quick Response</h3>
                    <p className="text-sm text-gray-600">Our team responds within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--cyan)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[var(--cyan)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Customized Demo</h3>
                    <p className="text-sm text-gray-600">Tailored to your specific use cases</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--cyan)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[var(--cyan)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">No Commitment</h3>
                    <p className="text-sm text-gray-600">Free trial with no credit card required</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  Have questions? Email us at{' '}
                  <a href="mailto:info@probea.in" className="text-[var(--cyan)] hover:underline">
                    info@probea.in
                  </a>
                </p>
              </div>
            </div>

            {/* Right Side - Form */}
            <div>
              <div className="bg-gradient-to-br from-[var(--cyan)]/5 to-white rounded-2xl p-8 shadow-lg border border-[var(--cyan)]/20">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
                    <p className="text-gray-600">We'll be in touch within 24 hours.</p>
                  </div>
                ) : (
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name *"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-[var(--cyan)] focus:ring-2 focus:ring-[var(--cyan)]/20 focus:outline-none transition-all"
                      />
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name *"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-[var(--cyan)] focus:ring-2 focus:ring-[var(--cyan)]/20 focus:outline-none transition-all"
                      />
                    </div>

                    <input
                      type="email"
                      name="email"
                      placeholder="Work Email *"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-[var(--cyan)] focus:ring-2 focus:ring-[var(--cyan)]/20 focus:outline-none transition-all"
                    />

                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-[var(--cyan)] focus:ring-2 focus:ring-[var(--cyan)]/20 focus:outline-none transition-all"
                    />

                    <input
                      type="text"
                      name="organization"
                      placeholder="Organization *"
                      value={formData.organization}
                      onChange={handleChange}
                      required
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-[var(--cyan)] focus:ring-2 focus:ring-[var(--cyan)]/20 focus:outline-none transition-all"
                    />

                    <textarea
                      rows={3}
                      name="message"
                      placeholder="Tell us about your needs..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-[var(--cyan)] focus:ring-2 focus:ring-[var(--cyan)]/20 focus:outline-none transition-all resize-none"
                    />

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[var(--navy)] text-white py-3.5 rounded-lg hover:bg-[var(--navy-dark)] transition-all duration-200 font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isSubmitting ? 'Submitting...' : 'Request Demo'}
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </form>
                )}

                {!isSubmitted && (
                  <p className="text-xs text-center text-gray-500 mt-4">
                    By submitting, you agree to our Privacy Policy
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
