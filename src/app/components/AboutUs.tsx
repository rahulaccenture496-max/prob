import { Activity, Heart, FileText, Target, Shield, TrendingUp, Users, Database } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="text-[var(--cyan)] text-sm font-semibold mb-4 uppercase tracking-wide">
              ABOUT US
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Probea AI <br />
              Building the <span className="text-[var(--cyan)]">Intelligence Layer</span> <br />
              for Modern Healthcare
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Probea AI is developing a next-generation healthcare intelligence platform that combines medical imaging AI, critical care intelligence, and clinical workflow automation to enable faster, more informed decisions.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Founded by professionals with 40+ years of combined experience in AI, data science, enterprise technology, and digital transformation, Probea AI is focused on solving some of healthcare's most pressing challenges: rising diagnostic workloads, fragmented clinical data, workforce shortages, and operational inefficiencies.
            </p>

            <div className="bg-[var(--cyan)]/5 border-l-4 border-[var(--cyan)] p-6 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Target className="w-6 h-6 text-[var(--cyan)] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-900 font-semibold mb-2">Our mission is simple:</p>
                  <p className="text-gray-700 italic">
                    Transform healthcare data into actionable clinical intelligence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-[var(--cyan)]/10 to-[var(--cyan)]/5 rounded-2xl p-8 h-full flex flex-col justify-center">
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-[var(--cyan)]/10 rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5 text-[var(--cyan)]" />
                    </div>
                    <span className="font-semibold text-gray-900">Faster Diagnosis</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-[var(--navy)]/10 rounded-lg flex items-center justify-center">
                      <Target className="w-5 h-5 text-[var(--navy)]" />
                    </div>
                    <span className="font-semibold text-gray-900">Prioritized Findings</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-[var(--cyan)]/10 rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5 text-[var(--cyan)]" />
                    </div>
                    <span className="font-semibold text-gray-900">Structured Reports</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-[var(--navy)]/10 rounded-lg flex items-center justify-center">
                      <Heart className="w-5 h-5 text-[var(--navy)]" />
                    </div>
                    <span className="font-semibold text-gray-900">Better Outcomes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16 bg-gradient-to-br from-[var(--navy)] to-[var(--navy-dark)] rounded-3xl p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-white text-center mb-4">
            Why Healthcare Needs AI Now
          </h3>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Healthcare systems face unprecedented challenges. AI-powered solutions are no longer optional—they're essential.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group bg-[#1a2332] rounded-xl p-6 border border-gray-800 hover:border-[var(--cyan)] hover:shadow-2xl hover:shadow-[var(--cyan)]/20 transition-all duration-300">
              <div className="w-12 h-12 bg-[var(--cyan)]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--cyan)]/20 transition-colors">
                <TrendingUp className="w-6 h-6 text-[var(--cyan)]" />
              </div>
              <h4 className="font-semibold text-white mb-2">Increasing Diagnostic Workloads</h4>
              <p className="text-sm text-gray-400 leading-relaxed">Healthcare teams are overwhelmed with rising patient volumes and complex cases</p>
            </div>

            <div className="group bg-[#1a2332] rounded-xl p-6 border border-gray-800 hover:border-[var(--cyan)] hover:shadow-2xl hover:shadow-[var(--cyan)]/20 transition-all duration-300">
              <div className="w-12 h-12 bg-[var(--cyan)]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--cyan)]/20 transition-colors">
                <Users className="w-6 h-6 text-[var(--cyan)]" />
              </div>
              <h4 className="font-semibold text-white mb-2">ED Overcrowding & High Patient Loads</h4>
              <p className="text-sm text-gray-400 leading-relaxed">Time-critical decisions need speed and accuracy in high-pressure environments</p>
            </div>

            <div className="group bg-[#1a2332] rounded-xl p-6 border border-gray-800 hover:border-[var(--cyan)] hover:shadow-2xl hover:shadow-[var(--cyan)]/20 transition-all duration-300">
              <div className="w-12 h-12 bg-[var(--cyan)]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--cyan)]/20 transition-colors">
                <FileText className="w-6 h-6 text-[var(--cyan)]" />
              </div>
              <h4 className="font-semibold text-white mb-2">Clinical Documentation Burden</h4>
              <p className="text-sm text-gray-400 leading-relaxed">Excessive time on documentation leads to clinician burnout and inefficiency</p>
            </div>

            <div className="group bg-[#1a2332] rounded-xl p-6 border border-gray-800 hover:border-[var(--cyan)] hover:shadow-2xl hover:shadow-[var(--cyan)]/20 transition-all duration-300">
              <div className="w-12 h-12 bg-[var(--cyan)]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--cyan)]/20 transition-colors">
                <Activity className="w-6 h-6 text-[var(--cyan)]" />
              </div>
              <h4 className="font-semibold text-white mb-2">Delayed Diagnosis & Treatment</h4>
              <p className="text-sm text-gray-400 leading-relaxed">Delays in triage and insights directly impact patient outcomes and recovery</p>
            </div>

            <div className="group bg-[#1a2332] rounded-xl p-6 border border-gray-800 hover:border-[var(--cyan)] hover:shadow-2xl hover:shadow-[var(--cyan)]/20 transition-all duration-300">
              <div className="w-12 h-12 bg-[var(--cyan)]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--cyan)]/20 transition-colors">
                <Users className="w-6 h-6 text-[var(--cyan)]" />
              </div>
              <h4 className="font-semibold text-white mb-2">Limited Specialist Availability</h4>
              <p className="text-sm text-gray-400 leading-relaxed">Access to medical expertise remains a critical challenge across regions</p>
            </div>

            <div className="group bg-[#1a2332] rounded-xl p-6 border border-gray-800 hover:border-[var(--cyan)] hover:shadow-2xl hover:shadow-[var(--cyan)]/20 transition-all duration-300">
              <div className="w-12 h-12 bg-[var(--cyan)]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--cyan)]/20 transition-colors">
                <Database className="w-6 h-6 text-[var(--cyan)]" />
              </div>
              <h4 className="font-semibold text-white mb-2">Fragmented Patient Information</h4>
              <p className="text-sm text-gray-400 leading-relaxed">Data silos prevent comprehensive patient views and informed decisions</p>
            </div>

            <div className="group bg-[#1a2332] rounded-xl p-6 border border-gray-800 hover:border-[var(--cyan)] hover:shadow-2xl hover:shadow-[var(--cyan)]/20 transition-all duration-300">
              <div className="w-12 h-12 bg-[var(--cyan)]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--cyan)]/20 transition-colors">
                <Shield className="w-6 h-6 text-[var(--cyan)]" />
              </div>
              <h4 className="font-semibold text-white mb-2">Data Security Concerns</h4>
              <p className="text-sm text-gray-400 leading-relaxed">Protecting sensitive patient data while enabling innovation and insights</p>
            </div>

            <div className="group bg-[#1a2332] rounded-xl p-6 border border-gray-800 hover:border-[var(--cyan)] hover:shadow-2xl hover:shadow-[var(--cyan)]/20 transition-all duration-300">
              <div className="w-12 h-12 bg-[var(--cyan)]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--cyan)]/20 transition-colors">
                <Heart className="w-6 h-6 text-[var(--cyan)]" />
              </div>
              <h4 className="font-semibold text-white mb-2">Quality of Care Variability</h4>
              <p className="text-sm text-gray-400 leading-relaxed">Inconsistent care quality across facilities and healthcare providers</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-br from-[var(--cyan)]/10 to-[var(--cyan)]/5 rounded-xl p-8 text-center">
            <div className="text-4xl font-bold text-[var(--cyan)] mb-2">40+</div>
            <div className="font-semibold text-gray-900 mb-1">Years of Combined Experience</div>
            <div className="text-sm text-gray-600">AI, Healthcare, Data & Enterprise Technology</div>
          </div>

          <div className="bg-gradient-to-br from-[var(--navy)]/10 to-[var(--navy)]/5 rounded-xl p-8 text-center">
            <div className="text-4xl font-bold text-[var(--navy)] mb-2">3</div>
            <div className="font-semibold text-gray-900 mb-1">Core Healthcare AI Platforms</div>
            <div className="text-sm text-gray-600">Imaging • Critical Care • Clinical Workflows</div>
          </div>

          <div className="bg-gradient-to-br from-[var(--cyan)]/10 to-[var(--cyan)]/5 rounded-xl p-8 text-center">
            <div className="text-4xl font-bold text-[var(--cyan)] mb-2">100%</div>
            <div className="font-semibold text-gray-900 mb-1">Healthcare Product Vision</div>
            <div className="text-sm text-gray-600">Built exclusively for healthcare impact</div>
          </div>

          <div className="bg-gradient-to-br from-[var(--navy)]/10 to-[var(--navy)]/5 rounded-xl p-8 text-center">
            <div className="text-4xl font-bold text-[var(--navy)] mb-2">1</div>
            <div className="font-semibold text-gray-900 mb-1">Mission</div>
            <div className="text-sm text-gray-600">Better Clinical Decisions, Better Patient Outcomes</div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[var(--cyan)]/10 to-blue-50 rounded-2xl p-8 border-l-4 border-[var(--cyan)]">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[var(--cyan)] rounded-full flex items-center justify-center flex-shrink-0">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                The Future of Healthcare Will Be AI-Assisted
              </h3>
              <p className="text-gray-700">
                Probea AI is building intelligent systems that augment clinicians, streamline operations, and improve patient outcomes—bringing together medical imaging, critical care intelligence, and clinical workflow automation into one unified platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
