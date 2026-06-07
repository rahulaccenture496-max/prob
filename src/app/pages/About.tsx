import { Target, Users, Lightbulb, TrendingUp, Award, Globe } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[var(--navy)] to-[var(--navy-dark)] py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[var(--cyan)]/10 border border-[var(--cyan)]/20 px-4 py-2 rounded-full mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--cyan)] animate-pulse"></div>
              <span className="text-sm font-medium text-[var(--cyan)]">ABOUT PROBEA AI</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Building the Future of <br />
              <span className="text-[var(--cyan)]">Healthcare Intelligence</span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              Probea AI is developing a next-generation healthcare intelligence platform that combines medical imaging AI, critical care intelligence, and clinical workflow automation to help healthcare providers make faster, more informed decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-[var(--cyan)]/10 to-[var(--cyan)]/5 border-l-4 border-[var(--cyan)] rounded-r-2xl p-8 lg:p-12 mb-16">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-[var(--cyan)] rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                  <p className="text-2xl text-gray-800 font-semibold">
                    Transform healthcare data into actionable clinical intelligence.
                  </p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Founded by professionals with <strong>40+ years of combined experience</strong> in AI, data analytics, enterprise technology, and digital transformation, Probea AI is focused on solving some of healthcare's most pressing challenges: rising diagnostic workloads, fragmented clinical data, workforce shortages, and operational inefficiencies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Focus Areas */}
      <section className="py-20 bg-gradient-to-b from-white to-[var(--cyan)]/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Platform</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three integrated solutions working together to transform healthcare delivery
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[var(--cyan)]/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[var(--cyan)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Medical Imaging AI</h3>
              <p className="text-gray-600 leading-relaxed">
                Advanced AI-powered analysis of X-rays, CT scans, and MRI studies to assist radiologists with faster, more accurate diagnoses.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[var(--navy)]/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[var(--navy)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Critical Care Intelligence</h3>
              <p className="text-gray-600 leading-relaxed">
                Real-time monitoring and early warning systems that support better clinical decisions in high-acuity environments.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[var(--cyan)]/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[var(--cyan)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Clinical Workflow Automation</h3>
              <p className="text-gray-600 leading-relaxed">
                Intelligent documentation support and data insights that streamline clinical workflows and enhance decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Drives Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core values guide everything we build and every decision we make
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--cyan)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-10 h-10 text-[var(--cyan)]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation First</h3>
              <p className="text-gray-600">
                Pushing the boundaries of AI and healthcare technology to create meaningful solutions
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--navy)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-[var(--navy)]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Healthcare-Centric</h3>
              <p className="text-gray-600">
                Every feature is designed with clinicians and patients at the center
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--cyan)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-[var(--cyan)]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Clinical Excellence</h3>
              <p className="text-gray-600">
                Committed to the highest standards of accuracy, safety, and reliability
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--navy)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-[var(--navy)]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Scalable Impact</h3>
              <p className="text-gray-600">
                Building solutions that can serve healthcare providers of all sizes globally
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--cyan)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-10 h-10 text-[var(--cyan)]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Accessible Healthcare</h3>
              <p className="text-gray-600">
                Making advanced diagnostic tools available to underserved communities
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--navy)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-[var(--navy)]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data-Driven</h3>
              <p className="text-gray-600">
                Leveraging data science and AI to deliver actionable clinical insights
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-[var(--navy)] to-[var(--navy-dark)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-[var(--cyan)] mb-2">40+</div>
              <div className="text-white font-semibold mb-1">Years Combined Experience</div>
              <div className="text-sm text-gray-400">AI, Healthcare, Data & Enterprise</div>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-[var(--cyan)] mb-2">3</div>
              <div className="text-white font-semibold mb-1">Core Platforms</div>
              <div className="text-sm text-gray-400">Imaging • Critical Care • Workflows</div>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-[var(--cyan)] mb-2">100%</div>
              <div className="text-white font-semibold mb-1">Healthcare Focused</div>
              <div className="text-sm text-gray-400">Built exclusively for healthcare</div>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-[var(--cyan)] mb-2">1</div>
              <div className="text-white font-semibold mb-1">Mission</div>
              <div className="text-sm text-gray-400">Better Decisions, Better Outcomes</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Join Us in Transforming Healthcare
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Partner with Probea AI to bring intelligent, AI-powered diagnostics to your healthcare organization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#get-started"
              className="bg-[var(--navy)] text-white px-8 py-4 rounded-lg hover:bg-[var(--navy-dark)] transition-colors font-semibold text-lg inline-flex items-center justify-center gap-2"
            >
              Request Demo
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/#contact"
              className="border-2 border-gray-300 text-gray-900 px-8 py-4 rounded-lg hover:border-gray-400 transition-colors font-semibold text-lg inline-flex items-center justify-center gap-2"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
