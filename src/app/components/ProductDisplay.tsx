import { Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function ProductDisplay() {
  const container = useScrollAnimation();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={container.elementRef}
          className={`bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-200 transition-all duration-700 ${
            container.isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
            <div className="bg-gray-100 px-6 py-3 flex items-center gap-2 border-b border-gray-200">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="flex-1 text-center text-sm text-gray-500">
                probea.ai / diagnostic-viewer
              </div>
            </div>

            <div className="grid lg:grid-cols-3 min-h-[500px]">
              <div className="lg:col-span-2 bg-[var(--navy)] p-6">
                <div className="grid grid-cols-2 gap-6 h-full">
                  <div>
                    <h3 className="text-white text-lg font-semibold mb-4">Chest X-ray (PA View)</h3>
                    <div className="bg-black rounded-lg h-64 flex items-center justify-center relative overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1631651363531-fd29aec4cb5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                        alt="Chest X-ray"
                        className="w-full h-full object-cover opacity-90"
                      />
                      <div className="absolute top-4 right-4 bg-[var(--cyan)] text-white text-xs px-3 py-1 rounded-full">
                        Lung Mass • 98%
                      </div>
                      <div className="absolute bottom-4 left-4 bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
                        Consolidation • 97%
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-white text-lg font-semibold mb-4">Knee X-ray (AP View)</h3>
                    <div className="bg-black rounded-lg h-64 flex items-center justify-center relative overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1763198302745-57cb94135f11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                        alt="Knee X-ray"
                        className="w-full h-full object-cover opacity-90"
                      />
                      <div className="absolute top-4 right-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                        Joint Space Narrowing • 97%
                      </div>
                      <div className="absolute bottom-4 left-4 bg-purple-500 text-white text-xs px-3 py-1 rounded-full">
                        Osteophytes • 96%
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-4 text-[var(--cyan)] text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>ANALYSIS COMPLETE • 3.2s</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Verified</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 border-l border-gray-200">
                <div className="mb-6">
                  <div className="text-xs text-gray-500 mb-2">PATIENT • XR-2026-05217</div>
                  <h2 className="text-xl font-bold text-gray-900">AI Analysis Report</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Findings</h3>

                    <div className="space-y-2.5">
                      <div className="p-3 bg-red-50 border-l-4 border-red-500 rounded">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-semibold text-gray-900">Lung Mass</span>
                          <span className="text-xs font-bold text-red-600">98%</span>
                        </div>
                        <p className="text-xs text-gray-600">Right upper zone</p>
                      </div>

                      <div className="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-semibold text-gray-900">Consolidation</span>
                          <span className="text-xs font-bold text-orange-600">97%</span>
                        </div>
                        <p className="text-xs text-gray-600">Right lower zone</p>
                      </div>

                      <div className="p-3 bg-red-50 border-l-4 border-red-500 rounded">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-semibold text-gray-900">Joint Space Narrowing</span>
                          <span className="text-xs font-bold text-red-600">97%</span>
                        </div>
                        <p className="text-xs text-gray-600">Medial compartment</p>
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-[var(--navy)] text-white py-3 rounded-lg hover:bg-[var(--navy-dark)] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer">
                    Export Report
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
