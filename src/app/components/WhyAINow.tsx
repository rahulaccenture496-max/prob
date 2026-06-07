import { TrendingUp, Users, Activity, FileText, Database, Shield, Heart } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function WhyAINow() {
  const section = useScrollAnimation();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={section.elementRef}
          className={`bg-gradient-to-br from-[var(--navy)] to-[var(--navy-dark)] rounded-3xl p-8 lg:p-12 transition-all duration-700 ${
            section.isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Healthcare Needs AI Now
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Healthcare systems face unprecedented challenges. AI-powered solutions are no longer optional—they're essential.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group bg-[#1a2332] rounded-xl p-6 border border-gray-800 hover:border-[var(--cyan)] hover:shadow-2xl hover:shadow-[var(--cyan)]/20 transition-all duration-300">
              <div className="w-12 h-12 bg-[var(--cyan)]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--cyan)]/20 transition-colors">
                <TrendingUp className="w-6 h-6 text-[var(--cyan)]" />
              </div>
              <h4 className="font-semibold text-white mb-2">Rising Workloads</h4>
              <p className="text-sm text-gray-400 leading-relaxed">Healthcare teams overwhelmed with patient volumes and complex cases</p>
            </div>

            <div className="group bg-[#1a2332] rounded-xl p-6 border border-gray-800 hover:border-[var(--cyan)] hover:shadow-2xl hover:shadow-[var(--cyan)]/20 transition-all duration-300">
              <div className="w-12 h-12 bg-[var(--cyan)]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--cyan)]/20 transition-colors">
                <Users className="w-6 h-6 text-[var(--cyan)]" />
              </div>
              <h4 className="font-semibold text-white mb-2">Specialist Shortage</h4>
              <p className="text-sm text-gray-400 leading-relaxed">Limited access to medical expertise across regions and facilities</p>
            </div>

            <div className="group bg-[#1a2332] rounded-xl p-6 border border-gray-800 hover:border-[var(--cyan)] hover:shadow-2xl hover:shadow-[var(--cyan)]/20 transition-all duration-300">
              <div className="w-12 h-12 bg-[var(--cyan)]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--cyan)]/20 transition-colors">
                <Activity className="w-6 h-6 text-[var(--cyan)]" />
              </div>
              <h4 className="font-semibold text-white mb-2">Delayed Diagnosis</h4>
              <p className="text-sm text-gray-400 leading-relaxed">Triage delays directly impact patient outcomes and recovery</p>
            </div>

            <div className="group bg-[#1a2332] rounded-xl p-6 border border-gray-800 hover:border-[var(--cyan)] hover:shadow-2xl hover:shadow-[var(--cyan)]/20 transition-all duration-300">
              <div className="w-12 h-12 bg-[var(--cyan)]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--cyan)]/20 transition-colors">
                <FileText className="w-6 h-6 text-[var(--cyan)]" />
              </div>
              <h4 className="font-semibold text-white mb-2">Documentation Burden</h4>
              <p className="text-sm text-gray-400 leading-relaxed">Excessive time on paperwork leads to clinician burnout</p>
            </div>

            <div className="group bg-[#1a2332] rounded-xl p-6 border border-gray-800 hover:border-[var(--cyan)] hover:shadow-2xl hover:shadow-[var(--cyan)]/20 transition-all duration-300">
              <div className="w-12 h-12 bg-[var(--cyan)]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--cyan)]/20 transition-colors">
                <Database className="w-6 h-6 text-[var(--cyan)]" />
              </div>
              <h4 className="font-semibold text-white mb-2">Fragmented Data</h4>
              <p className="text-sm text-gray-400 leading-relaxed">Data silos prevent comprehensive patient views</p>
            </div>

            <div className="group bg-[#1a2332] rounded-xl p-6 border border-gray-800 hover:border-[var(--cyan)] hover:shadow-2xl hover:shadow-[var(--cyan)]/20 transition-all duration-300">
              <div className="w-12 h-12 bg-[var(--cyan)]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--cyan)]/20 transition-colors">
                <Shield className="w-6 h-6 text-[var(--cyan)]" />
              </div>
              <h4 className="font-semibold text-white mb-2">Security Concerns</h4>
              <p className="text-sm text-gray-400 leading-relaxed">Protecting sensitive patient data while enabling innovation</p>
            </div>

            <div className="group bg-[#1a2332] rounded-xl p-6 border border-gray-800 hover:border-[var(--cyan)] hover:shadow-2xl hover:shadow-[var(--cyan)]/20 transition-all duration-300">
              <div className="w-12 h-12 bg-[var(--cyan)]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--cyan)]/20 transition-colors">
                <Users className="w-6 h-6 text-[var(--cyan)]" />
              </div>
              <h4 className="font-semibold text-white mb-2">ED Overcrowding</h4>
              <p className="text-sm text-gray-400 leading-relaxed">Time-critical decisions need speed and accuracy</p>
            </div>

            <div className="group bg-[#1a2332] rounded-xl p-6 border border-gray-800 hover:border-[var(--cyan)] hover:shadow-2xl hover:shadow-[var(--cyan)]/20 transition-all duration-300">
              <div className="w-12 h-12 bg-[var(--cyan)]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--cyan)]/20 transition-colors">
                <Heart className="w-6 h-6 text-[var(--cyan)]" />
              </div>
              <h4 className="font-semibold text-white mb-2">Care Variability</h4>
              <p className="text-sm text-gray-400 leading-relaxed">Inconsistent quality across facilities and providers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
