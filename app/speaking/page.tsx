import Link from 'next/link';

export default function SpeakingPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="w-full max-w-[700px] mx-auto">
        
        <div className="pt-8 px-8">
          <Link href="/" className="text-blue-600 hover:underline text-sm">
            ← Home
          </Link>
        </div>

        <div className="px-8 py-16">
          
          <h1 className="text-3xl font-bold mb-16 text-black">
            Speaking
          </h1>

          <div className="space-y-10">
            
            <p className="text-lg leading-[2] text-gray-900">Vinay has led digital transformation and emerging technology deployments at scale across mining, healthcare, utilities, and telecommunications—working with executive leadership and Boards at global Fortune 100 enterprises.</p>

            <p className="text-lg leading-[2] text-gray-900">He speaks on what actually works when deploying AI, managing organizational change, and building technology initiatives that survive contact with operational reality.</p>

            <h2 className="text-2xl font-semibold mt-16 mb-12 text-black">Speaking Topics</h2>

            <div className="space-y-16 text-base">
              <div>
                <p style={{fontWeight: 900}} className="text-black text-lg mb-3">• Digital Transformation in Traditional Industries</p>
                <p className="text-gray-700 leading-relaxed">How to deploy emerging technologies in organizations with legacy systems, entrenched workflows, and operational constraints that kill half-baked implementations. Based on leading transformations across mining, healthcare, and utilities at global scale.</p>
              </div>

              <div>
                <p style={{fontWeight: 900}} className="text-black text-lg mb-3">• Why AI Projects Fail (And How to Prevent It)</p>
                <p className="text-gray-700 leading-relaxed">The six decisions that separate projects that deliver value from expensive zombies that consume resources without producing results. Drawn from leading AI deployments at Fortune 100 enterprises.</p>
              </div>

              <div>
                <p style={{fontWeight: 900}} className="text-black text-lg mb-3">• Leading Change When Nobody Wants to Change</p>
                <p className="text-gray-700 leading-relaxed">Managing organizational resistance, political dynamics, and stakeholder conflicts during large-scale technology rollouts. Practical approaches from deploying systems across continents and cultures.</p>
              </div>

              <div>
                <p style={{fontWeight: 900}} className="text-black text-lg mb-3">• Building Technology That Works in Production</p>
                <p className="text-gray-700 leading-relaxed">The gap between proof-of-concept and production deployment—and how to design for operational reality, not lab conditions. Based on scaling technology initiatives across North America, Asia, and South America.</p>
              </div>

              <div>
                <p style={{fontWeight: 900}} className="text-black text-lg mb-3">• Resource Allocation: What to Kill to Fund What Matters</p>
                <p className="text-gray-700 leading-relaxed">How executives make hard decisions about stopping projects, reallocating resources, and admitting when initiatives aren't working—before they become expensive failures.</p>
              </div>

              <div>
                <p style={{fontWeight: 900}} className="text-black text-lg mb-3">• High-Stakes Technology Deployments</p>
                <p className="text-gray-700 leading-relaxed">Leading implementations where failure has significant operational, financial, or safety consequences. Lessons from deploying mission-critical systems in 24/7 industrial operations.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-16 mb-8 text-black">Past Engagements</h2>

            <div className="space-y-2 text-base text-gray-700">
              <p>Mining Investment North America</p>
              <p>Decarbonized Mines Summit Canada</p>
              <p>Digitalization in Mining North America</p>
              <p>Energy Transition and Emission Reduction</p>
              <p>Mining 4.0 (Europe & North America)</p>
              <p>Digitalization and AI in Mining</p>
              <p>Mining Tech</p>
              <p>Missouri University of Science and Technology</p>
            </div>

            <p className="mt-16 text-base">For speaking inquiries: <a href="https://linkedin.com/in/poojary" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">Connect on LinkedIn</a></p>

          </div>

        </div>

        {/* Footer */}
        <footer className="mt-20 pt-12 border-t-2 border-gray-300 px-8">
          <div className="flex justify-center items-center gap-2 text-sm mb-6">
            <Link href="/about" className="text-blue-600 hover:underline">
              About
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/speaking" className="text-blue-600 hover:underline">
              Speaking
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/disclaimer" className="text-blue-600 hover:underline">
              Disclaimer
            </Link>
            <span className="text-gray-400">•</span>
            <a 
              href="https://linkedin.com/in/poojary" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
          </div>
          <p className="text-center text-gray-600 text-sm pb-12">
            © 2025 Virapo Limited
          </p>
        </footer>

      </div>
    </div>
  );
}