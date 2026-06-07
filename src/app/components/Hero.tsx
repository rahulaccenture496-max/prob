import { Activity, ArrowRight, FileSearch, AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-[var(--cyan)]/5 to-white py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[var(--cyan)]/10 border border-[var(--cyan)]/20 px-4 py-2 rounded-full mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--cyan)] animate-pulse"></div>
              <span className="text-sm font-medium text-[var(--navy)]">AI-Powered Clinical Intelligence</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Healthcare Intelligence <br />
              <span className="text-[var(--cyan)]">for the Future of</span> <br />
              Clinical Care
            </h1>

            <p className="text-base lg:text-lg text-gray-600 mb-8 max-w-xl">
              Probea AI builds intelligent solutions that help healthcare teams interpret data, act faster, and deliver better outcomes across radiology, critical care and clinical workflows.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="bg-[var(--navy)] text-white px-5 py-2.5 lg:px-6 lg:py-3 rounded-lg hover:bg-[var(--navy-dark)] transition-colors flex items-center justify-center gap-2 text-sm lg:text-base">
                Request Demo
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border-2 border-gray-300 text-gray-900 px-5 py-2.5 lg:px-6 lg:py-3 rounded-lg hover:border-gray-400 transition-colors flex items-center justify-center gap-2 text-sm lg:text-base">
                Explore Solutions
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#0f1419] to-[#1a1f2e] rounded-2xl p-4 lg:p-6 shadow-2xl border border-gray-800">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-[var(--cyan)]" />
                <span className="text-white font-semibold">Radiology Intelligence</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>AI Processing Complete</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-4 lg:gap-6">
              {/* Left: X-ray Image with Annotations */}
              <div className="space-y-4">
                <div className="bg-black rounded-xl overflow-hidden relative group">
                  <img
                    src="https://images.unsplash.com/photo-1778612506355-c9ed8385bca2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                    alt="Chest X-ray Analysis"
                    className="w-full h-auto object-contain"
                  />

                  {/* AI Detection Overlays */}
                  <div className="absolute top-1/4 right-1/4 w-20 h-20 border-2 border-red-500 rounded-full animate-pulse">
                    <div className="absolute -top-8 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                      Opacity 92%
                    </div>
                  </div>

                  <div className="absolute bottom-1/3 left-1/3 w-16 h-16 border-2 border-orange-400 rounded-full">
                    <div className="absolute -bottom-8 left-0 bg-orange-400 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                      Nodule 87%
                    </div>
                  </div>

                  {/* Info Bar */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                    <div className="flex items-center justify-between text-xs text-white">
                      <span>Chest X-ray - PA View</span>
                      <span className="text-[var(--cyan)]">Analysis Time: 2.8s</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1a2332] rounded-xl p-4 border border-gray-800">
                  <h5 className="text-white text-xs font-semibold mb-3 uppercase tracking-wide">Key Findings</h5>
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between p-2.5 bg-[#0f1419] rounded-lg border border-gray-800">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 bg-[var(--cyan)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <FileSearch className="w-4 h-4 text-[var(--cyan)]" />
                        </div>
                        <span className="text-white text-sm font-medium">Total Findings</span>
                      </div>
                      <div className="text-[var(--cyan)] text-xl font-bold">4</div>
                    </div>

                    <div className="flex items-center justify-between p-2.5 bg-[#0f1419] rounded-lg border border-gray-800">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <AlertTriangle className="w-4 h-4 text-red-400" />
                        </div>
                        <span className="text-white text-sm font-medium">Critical</span>
                      </div>
                      <div className="text-red-400 text-xl font-bold">2</div>
                    </div>

                    <div className="flex items-center justify-between p-2.5 bg-[#0f1419] rounded-lg border border-gray-800">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-4 h-4 text-green-400" />
                        </div>
                        <span className="text-white text-sm font-medium">Confidence</span>
                      </div>
                      <div className="text-green-400 text-xl font-bold">91%</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Diagnostic Report */}
              <div className="space-y-4">
                <div className="bg-[#1a2332] rounded-xl p-4 border border-gray-800">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-white font-semibold">Diagnostic Report</h4>
                    <span className="text-xs text-gray-400">XR-2026-4587</span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-[#0f1419] rounded-lg border-l-4 border-red-500">
                      <div>
                        <div className="text-white text-sm font-medium">Lung Opacity</div>
                        <div className="text-gray-400 text-xs mt-0.5">Right upper zone</div>
                      </div>
                      <div className="text-right">
                        <div className="text-red-400 text-lg font-bold">92%</div>
                        <div className="text-xs text-red-400/60">High Risk</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-[#0f1419] rounded-lg border-l-4 border-orange-400">
                      <div>
                        <div className="text-white text-sm font-medium">Pulmonary Nodule</div>
                        <div className="text-gray-400 text-xs mt-0.5">Left lower zone</div>
                      </div>
                      <div className="text-right">
                        <div className="text-orange-400 text-lg font-bold">87%</div>
                        <div className="text-xs text-orange-400/60">Medium</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-[#0f1419] rounded-lg border-l-4 border-green-500">
                      <div>
                        <div className="text-white text-sm font-medium">No Acute Findings</div>
                        <div className="text-gray-400 text-xs mt-0.5">Overall assessment</div>
                      </div>
                      <div className="text-right">
                        <div className="text-green-400 text-lg font-bold">95%</div>
                        <div className="text-xs text-green-400/60">Normal</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1a2332] rounded-xl p-4 border border-gray-800">
                  <h5 className="text-white text-sm font-semibold mb-3">Recommended Actions</h5>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-xs text-gray-300">
                      <span className="text-[var(--cyan)]">→</span>
                      Urgent clinical correlation
                    </li>
                    <li className="flex items-center gap-2 text-xs text-gray-300">
                      <span className="text-[var(--cyan)]">→</span>
                      Consider CT chest evaluation
                    </li>
                    <li className="flex items-center gap-2 text-xs text-gray-300">
                      <span className="text-[var(--cyan)]">→</span>
                      Follow-up imaging in 3-6 months
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
