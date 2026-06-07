import { Target, Globe, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function AboutUs() {
  const heroSection = useScrollAnimation();
  const missionSection = useScrollAnimation();
  const storySection = useScrollAnimation();
  const valuesSection = useScrollAnimation();
  const statsSection = useScrollAnimation();
  const ctaSection = useScrollAnimation();

  return (
    <section id="about" className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[var(--navy)] to-[var(--navy-dark)] py-20 lg:py-32">
        <div
          ref={heroSection.elementRef}
          className={`max-w-7xl mx-auto px-6 text-center transition-all duration-700 ${
            heroSection.isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-block bg-[var(--cyan)]/10 border border-[var(--cyan)]/30 text-[var(--cyan)] text-sm font-semibold mb-6 uppercase tracking-wide px-4 py-2 rounded-full">
            ABOUT PROBEA AI
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight max-w-4xl mx-auto">
            Building the <span className="text-[var(--cyan)]">Intelligence Layer</span><br />
            for Modern Healthcare
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transforming healthcare through AI-powered diagnostics, critical care intelligence, and clinical workflow automation.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-6 -mt-16 pb-20">
        <div
          ref={missionSection.elementRef}
          className={`grid md:grid-cols-2 gap-6 mb-20 transition-all duration-700 ${
            missionSection.isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-white rounded-2xl p-8 shadow-2xl border-l-4 border-[var(--cyan)]">
            <div className="w-14 h-14 bg-[var(--cyan)]/10 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-[var(--cyan)]" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              Transform healthcare data into actionable clinical intelligence—enabling faster, more accurate diagnoses and better patient outcomes through advanced AI technology.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl border-l-4 border-[var(--navy)]">
            <div className="w-14 h-14 bg-[var(--navy)]/10 rounded-xl flex items-center justify-center mb-6">
              <Globe className="w-7 h-7 text-[var(--navy)]" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              Make world-class AI-assisted healthcare accessible everywhere—empowering clinicians with intelligent tools that augment human expertise and improve care delivery.
            </p>
          </div>
        </div>

        {/* Company Story */}
        <div
          ref={storySection.elementRef}
          className={`mb-20 transition-all duration-700 ${
            storySection.isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Who We Are</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Founded by professionals with 40+ years of combined experience in AI, data science, enterprise technology, and digital transformation.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[var(--cyan)]/5 to-white rounded-2xl p-8 lg:p-12 border border-[var(--cyan)]/20">
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Probea AI is developing a next-generation healthcare intelligence platform that combines medical imaging AI, critical care intelligence, and clinical workflow automation to enable faster, more informed decisions.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              We're focused on solving some of healthcare's most pressing challenges: rising diagnostic workloads, fragmented clinical data, workforce shortages, and operational inefficiencies—bringing together cutting-edge technology and deep healthcare expertise.
            </p>
          </div>
        </div>

        {/* What Drives Us */}
        <div
          ref={valuesSection.elementRef}
          className={`mb-20 transition-all duration-700 ${
            valuesSection.isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Drives Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The core principles and values that guide everything we build and every decision we make.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Patient-First */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1584516150909-c43483ee7932?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                  alt="Healthcare professional with patient"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="inline-block bg-[var(--cyan)] text-white px-4 py-1 rounded-full text-sm font-semibold mb-2">
                    01
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Patient-First Approach</h4>
                <p className="text-gray-600 leading-relaxed">
                  Every feature we build, every algorithm we train, and every decision we make is designed with one goal: improving patient outcomes and delivering better quality of care.
                </p>
              </div>
            </div>

            {/* Clinical Excellence */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                  alt="Medical professional with stethoscope"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="inline-block bg-[var(--cyan)] text-white px-4 py-1 rounded-full text-sm font-semibold mb-2">
                    02
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Clinical Excellence</h4>
                <p className="text-gray-600 leading-relaxed">
                  We partner with leading medical experts and institutions to ensure our AI solutions meet the highest standards of accuracy, safety, and clinical validity.
                </p>
              </div>
            </div>

            {/* Innovation */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581093577421-f561a654a353?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                  alt="Research and innovation in healthcare technology"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="inline-block bg-[var(--cyan)] text-white px-4 py-1 rounded-full text-sm font-semibold mb-2">
                    03
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Relentless Innovation</h4>
                <p className="text-gray-600 leading-relaxed">
                  Continuous advancement in AI technology, machine learning, and data science to stay ahead of evolving healthcare challenges and deliver cutting-edge solutions.
                </p>
              </div>
            </div>

            {/* Trust & Security */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                  alt="Data security and privacy protection"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="inline-block bg-[var(--cyan)] text-white px-4 py-1 rounded-full text-sm font-semibold mb-2">
                    04
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Trust & Security</h4>
                <p className="text-gray-600 leading-relaxed">
                  Uncompromising commitment to data security, patient privacy, and regulatory compliance. Your data is protected with enterprise-grade security at every level.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          ref={statsSection.elementRef}
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 transition-all duration-700 ${
            statsSection.isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-gradient-to-br from-[var(--cyan)]/10 to-[var(--cyan)]/5 rounded-xl p-8 text-center">
            <div className="text-4xl font-bold text-[var(--cyan)] mb-2">40+</div>
            <div className="font-semibold text-gray-900 mb-1">Years Experience</div>
            <div className="text-sm text-gray-600">Combined AI & Healthcare Expertise</div>
          </div>

          <div className="bg-gradient-to-br from-[var(--navy)]/10 to-[var(--navy)]/5 rounded-xl p-8 text-center">
            <div className="text-4xl font-bold text-[var(--navy)] mb-2">3</div>
            <div className="font-semibold text-gray-900 mb-1">AI Platforms</div>
            <div className="text-sm text-gray-600">Imaging • Critical Care • Workflows</div>
          </div>

          <div className="bg-gradient-to-br from-[var(--cyan)]/10 to-[var(--cyan)]/5 rounded-xl p-8 text-center">
            <div className="text-4xl font-bold text-[var(--cyan)] mb-2">&lt;10s</div>
            <div className="font-semibold text-gray-900 mb-1">Analysis Time</div>
            <div className="text-sm text-gray-600">From Scan to Structured Report</div>
          </div>

          <div className="bg-gradient-to-br from-[var(--navy)]/10 to-[var(--navy)]/5 rounded-xl p-8 text-center">
            <div className="text-4xl font-bold text-[var(--navy)] mb-2">100%</div>
            <div className="font-semibold text-gray-900 mb-1">Healthcare Focus</div>
            <div className="text-sm text-gray-600">Built Exclusively for Healthcare</div>
          </div>
        </div>

        {/* CTA Section */}
        <div
          ref={ctaSection.elementRef}
          className={`bg-gradient-to-r from-[var(--cyan)]/10 via-blue-50 to-[var(--cyan)]/10 rounded-2xl p-8 lg:p-12 border-2 border-[var(--cyan)]/30 transition-all duration-700 ${
            ctaSection.isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-[var(--cyan)] rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              The Future of Healthcare is AI-Assisted
            </h3>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Probea AI is building intelligent systems that augment clinicians, streamline operations, and improve patient outcomes—bringing together medical imaging, critical care intelligence, and clinical workflow automation into one unified platform.
            </p>
            <a
              href="/#request-demo"
              className="inline-flex items-center gap-2 bg-[var(--navy)] text-white px-8 py-4 rounded-lg hover:bg-[var(--navy-dark)] transition-all duration-200 font-semibold shadow-lg hover:shadow-xl cursor-pointer"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
