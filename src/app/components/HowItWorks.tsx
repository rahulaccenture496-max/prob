import { Upload, Brain, FileText, Send, Shield, Zap, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function HowItWorks() {
  const card1 = useScrollAnimation();
  const card2 = useScrollAnimation();
  const card3 = useScrollAnimation();
  const card4 = useScrollAnimation();

  return (
    <section id="technology" className="py-20 bg-gradient-to-b from-white to-[var(--cyan)]/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#0B1C2E] text-[var(--cyan)] text-sm font-semibold mb-4 uppercase tracking-wide px-4 py-2 rounded-full">
            HOW IT WORKS
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            From scan to report in under <span className="text-[var(--cyan)]">10 seconds</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Probea AI streamlines the entire imaging workflow with advanced AI and seamless integrations — delivering accurate reports in real time.
          </p>
        </div>

        <div className="relative mb-16">
          <div className="absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--cyan)] via-[var(--cyan)] to-[var(--cyan)] hidden lg:block" style={{ width: '75%', left: '12.5%' }}></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div
              ref={card1.elementRef}
              className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-700 ${
                card1.isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[var(--cyan)] text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  01
                </div>
                <ChevronRight className="w-6 h-6 text-[var(--cyan)] hidden lg:block" />
              </div>

              <div className="w-12 h-12 bg-[var(--cyan)]/10 rounded-lg flex items-center justify-center mb-4">
                <Upload className="w-6 h-6 text-[var(--cyan)]" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">Upload imaging study</h3>

              <div className="bg-gradient-to-br from-[var(--navy)] to-[var(--navy-dark)] rounded-lg p-4 h-32 mb-4 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-2">
                  <div className="w-12 h-12 bg-[var(--cyan)]/20 rounded"></div>
                  <div className="w-12 h-12 bg-[var(--cyan)]/20 rounded"></div>
                  <div className="w-12 h-12 bg-[var(--cyan)]/20 rounded"></div>
                  <div className="w-12 h-12 bg-[var(--cyan)]/20 rounded"></div>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-3">
                Drag and drop DICOM, JPEG, or PNG files — or connect directly via PACS. Any modality, any series length.
              </p>

              <div className="flex items-center gap-2 text-[var(--cyan)] text-sm font-semibold">
                <Shield className="w-4 h-4" />
                Secure upload
              </div>
            </div>

            <div
              ref={card2.elementRef}
              className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-700 delay-150 ${
                card2.isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[var(--cyan)] text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  02
                </div>
                <ChevronRight className="w-6 h-6 text-[var(--cyan)] hidden lg:block" />
              </div>

              <div className="w-12 h-12 bg-[var(--cyan)]/10 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-[var(--cyan)]" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">AI inference</h3>

              <div className="bg-gradient-to-br from-[var(--navy)] to-[var(--navy-dark)] rounded-lg p-4 h-32 mb-4 flex items-center justify-center">
                <div className="relative">
                  <Brain className="w-16 h-16 text-[var(--cyan)]" />
                  <div className="absolute inset-0 bg-[var(--cyan)]/20 blur-xl rounded-full"></div>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-3">
                Probea AI analyzes the study using deep learning models to detect abnormalities and extract key findings with anatomical precision.
              </p>

              <div className="flex items-center gap-2 text-[var(--cyan)] text-sm font-semibold">
                <Zap className="w-4 h-4" />
                High-performance AI
              </div>
            </div>

            <div
              ref={card3.elementRef}
              className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-700 delay-300 ${
                card3.isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[var(--cyan)] text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  03
                </div>
                <ChevronRight className="w-6 h-6 text-[var(--cyan)] hidden lg:block" />
              </div>

              <div className="w-12 h-12 bg-[var(--cyan)]/10 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-[var(--cyan)]" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">Structured report</h3>

              <div className="bg-gray-50 rounded-lg p-4 h-32 mb-4 space-y-2 overflow-hidden">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[var(--cyan)]"></div>
                  <div className="h-2 bg-gray-300 rounded flex-1"></div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[var(--navy)]"></div>
                  <div className="h-2 bg-gray-300 rounded flex-1"></div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[var(--cyan)]"></div>
                  <div className="h-2 bg-gray-300 rounded flex-1"></div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[var(--navy)]"></div>
                  <div className="h-2 bg-gray-300 rounded flex-1"></div>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-3">
                Findings ranked by severity and evidence, formatted in a clean, structured report with visual highlights and key impressions.
              </p>

              <div className="flex items-center gap-2 text-[var(--cyan)] text-sm font-semibold">
                <FileText className="w-4 h-4" />
                Consistent & clear
              </div>
            </div>

            <div
              ref={card4.elementRef}
              className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-700 delay-[450ms] ${
                card4.isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[var(--cyan)] text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  04
                </div>
              </div>

              <div className="w-12 h-12 bg-[var(--cyan)]/10 rounded-lg flex items-center justify-center mb-4">
                <Send className="w-6 h-6 text-[var(--cyan)]" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">EHR delivery</h3>

              <div className="bg-gray-50 rounded-lg p-4 h-32 mb-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-600">PACS</span>
                    <div className="w-4 h-4 bg-[var(--cyan)] rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-600">EHR</span>
                    <div className="w-4 h-4 bg-[var(--cyan)] rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-600">Reporting System</span>
                    <div className="w-4 h-4 bg-[var(--cyan)] rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-xs text-[var(--cyan)] font-semibold mt-3">
                    ✓ Delivered in &lt;10 sec
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-3">
                Reports delivered instantly to your systems and care teams. Actionable insights, when it matters most.
              </p>

              <div className="flex items-center gap-2 text-[var(--cyan)] text-sm font-semibold">
                <Send className="w-4 h-4" />
                Instant delivery & alerts
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
