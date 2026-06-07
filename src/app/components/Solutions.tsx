import {
  Activity,
  Heart,
  FileText,
  CheckCircle2
} from 'lucide-react';

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 bg-gradient-to-b from-[var(--cyan)]/5 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="inline-block bg-[var(--cyan)]/10 border border-[var(--cyan)]/30 text-[var(--cyan)] text-sm font-semibold mb-4 uppercase tracking-wide px-4 py-2 rounded-full">
            SOLUTIONS
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything you need to deploy <span className="text-[var(--cyan)]">clinical AI</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            End-to-end AI platform for radiology, critical care and intelligent clinical workflows. Built for healthcare teams, designed for real-world impact.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg border-b-4 border-[var(--cyan)]">
            <div className="w-16 h-16 bg-[var(--cyan)]/10 rounded-xl flex items-center justify-center mb-6">
              <Activity className="w-8 h-8 text-[var(--cyan)]" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Radiology Intelligence</h3>
            <p className="text-gray-600 mb-6 text-sm">
              AI-powered analysis across a wide range of imaging modalities to help radiologists detect critical findings and speed up report consistency.
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="w-5 h-5 text-[var(--cyan)] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Chest X-ray (PA, AP, Lateral)</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="w-5 h-5 text-[var(--cyan)] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Lumbar Spine X-ray (AP, Lateral)</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="w-5 h-5 text-[var(--cyan)] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Knee X-ray (AP, Lateral, Oblique)</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="w-5 h-5 text-[var(--cyan)] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Shoulder X-ray</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="w-5 h-5 text-[var(--cyan)] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Hand & Wrist X-ray</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="w-5 h-5 text-[var(--cyan)] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Foot & Ankle X-ray</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="w-5 h-5 text-[var(--cyan)] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">CT (Chest, Abdomen, Brain, etc.)</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="w-5 h-5 text-[var(--cyan)] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">MRI</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="w-5 h-5 text-[var(--cyan)] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Nodule, Mass, Fracture & MSK AI</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="w-5 h-5 text-[var(--cyan)] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Structured Reporting</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border-b-4 border-[var(--navy)]">
            <div className="w-16 h-16 bg-[var(--navy)]/10 rounded-xl flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-[var(--navy)]" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Critical Care Intelligence</h3>
            <p className="text-gray-600 mb-6 text-sm">
              Real-time patient monitoring and risk stratification for early intervention in high-acuity settings.
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="w-5 h-5 text-[var(--navy)] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">ED Triage & Risk Scoring</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="w-5 h-5 text-[var(--navy)] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Early Warning & Deterioration Detection</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="w-5 h-5 text-[var(--navy)] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">eICU Monitoring & Analytics</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="w-5 h-5 text-[var(--navy)] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Care Team Alerts</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="w-5 h-5 text-[var(--navy)] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Trend Analysis & Predictive Insights</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border-b-4 border-[var(--cyan)]">
            <div className="w-16 h-16 bg-[var(--cyan)]/10 rounded-xl flex items-center justify-center mb-6">
              <FileText className="w-8 h-8 text-[var(--cyan)]" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Clinical Workflow Intelligence</h3>
            <p className="text-gray-600 mb-6 text-sm">
              Intelligent documentation and workflow support to reduce time on routine tasks and improve clinical productivity.
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="w-5 h-5 text-[var(--cyan)] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">OPD & IPD Patient Clinical Summary</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="w-5 h-5 text-[var(--cyan)] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Patient Conversation (AI Scribe)</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="w-5 h-5 text-[var(--cyan)] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Auto Draft Clinical Notes</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="w-5 h-5 text-[var(--cyan)] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Prescription Creation from Doctor</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="w-5 h-5 text-[var(--cyan)] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Smart Templates & Suggestions</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="w-5 h-5 text-[var(--cyan)] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Discharge Summary Automation</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="w-5 h-5 text-[var(--cyan)] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Voice-to-Text & Summarization</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="w-5 h-5 text-[var(--cyan)] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Clinical Decision Support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
