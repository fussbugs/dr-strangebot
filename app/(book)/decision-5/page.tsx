import Link from 'next/link';

export default function Decision5Page() {
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
            Decision 5: Are You Ready to Build?
          </h1>

          <div className="space-y-20 text-lg leading-[2] text-gray-900">
            
            <p>You've defined the problem. You've allocated resources. You've proven it works in a pilot. You've assigned clear ownership. Now comes the question most organizations skip: Are you actually ready to build this?</p>

            <p>Not "do you have budget?" Not "do you have a team?" The question is: Do you have the foundational capabilities to build AI that works in production, not just demos that work in labs?</p>

            <p>Most organizations discover the answer is no after they've already started building. That's expensive.</p>

            <p>Here's the gap nobody talks about: AI trained on clean pilot data fails when it meets messy production data. The model that worked beautifully in the lab breaks when it encounters the chaos of real operations.</p>

            <p>Northern Star Mining's predictive maintenance pilot used six months of clean sensor data from one crusher. The data science team labeled failures, filtered anomalies, and built a model that predicted failures with 85% accuracy. Success.</p>

            <p>Then they deployed to production across ten crushers. Accuracy dropped to 60%. Why? Because production data is a disaster compared to pilot data.</p>

            <div style={{marginTop: '50px', marginBottom: '50px'}}>
              <p className="italic text-base leading-normal bg-gray-50 p-8 border-l-4 border-gray-300">
                What you need to know: Pilot data is curated. Someone cleaned it, labeled it, and removed obvious errors. Production data is whatever the sensors captured—including the weeks when sensors were miscalibrated, the days when maintenance teams unplugged equipment to test something else, the periods when data logging failed silently. Production data is messy. Pilots hide that mess. Deployment exposes it.
              </p>
            </div>

            <p>The pilot data: Six months from one crusher. Maintained consistently. Operated under normal conditions. Failures clearly labeled by maintenance teams who knew what they were looking for.</p>

            <p>The production data: Ten crushers with different maintenance histories. Some well-maintained. Some run past recommended service intervals. Sensors installed at different times with different calibrations. Data logging that sometimes fails without alerting anyone. Failures that sometimes get recorded and sometimes don't.</p>

            <p>The AI trained on the clean pilot data couldn't handle the messiness of production. It flagged normal operations as failures because sensor readings didn't match the clean patterns it learned. It missed actual failures because production data was noisier than pilot data.</p>

            <p>This is where most AI projects die. Not because the AI doesn't work. Because the organization isn't ready to support AI at scale. They have pilot-quality data infrastructure. They need production-quality data infrastructure. The gap kills them.</p>

            <p>Production-quality data infrastructure means: Sensors that are calibrated consistently across all equipment. Data logging that alerts when it fails. Data quality monitoring that catches drift before it breaks AI. Data pipelines that can handle volume and messiness at scale. None of this exists in most organizations. They discover this after they've committed to building AI.</p>

            <p>The question before you build: Do you have production-quality data infrastructure or pilot-quality data infrastructure pretending to be production-ready? If you don't know, you're not ready to build.</p>

            <p>Here's the test: Can you pull six months of sensor data from ten pieces of equipment right now, and can you trust that data is accurate, complete, and consistent? If the answer is no, you're not ready for production AI. You need to fix data infrastructure first.</p>

            <p>Most organizations skip this step. They say "we'll fix data issues as we go." They won't. Data infrastructure problems compound. The more equipment you add, the worse it gets. Fix it before you scale or accept that your AI will never work reliably.</p>

            <p>Northern Star has three options for predictive maintenance: Build it themselves. Buy a vendor solution. Tune an existing model. Each option has different requirements and different risks.</p>

            <p>Build it themselves: Requires data scientists who understand both AI and mining equipment. Requires data infrastructure to support model training and deployment. Requires ongoing maintenance as equipment changes and failure patterns evolve. High upfront cost. High ongoing cost. Maximum flexibility. Maximum control. Works if Northern Star has scarce expertise and wants competitive advantage from custom models.</p>

            <p>Buy a vendor solution: Lower upfront cost. Proven approach. Faster deployment. But the model is generic—trained on many mining companies' data, not optimized for Northern Star's specific equipment. Limited customization. Ongoing licensing costs. Vendor controls updates and features. Works if Northern Star is catching up and needs fast deployment of proven technology.</p>

            <p>Tune an existing model: Start with an open-source or vendor model. Customize it with Northern Star's data. Middle ground between build and buy. Requires some AI expertise but less than building from scratch. Requires good data infrastructure. More flexible than pure vendor solutions. Less expensive than building everything custom. Works if Northern Star has moderate AI capability and wants balance between cost and customization.</p>

            <p>The wrong decision: Northern Star builds custom models because "we're a technology-forward company" even though they lack the AI expertise and data infrastructure. Two years later, they've spent millions, the models barely work, and competitors who bought vendor solutions are already benefiting from predictive maintenance.</p>

            <p>The right decision: Northern Star assesses their AI maturity honestly. They have good data infrastructure. They have one experienced data scientist and two junior ones. They don't have deep AI expertise. They choose to tune an existing model. They get 80% of custom model benefits at 40% of custom model cost. The AI works within nine months. They're not leading on AI innovation, but they're competitive on outcomes.</p>

            <p>That's honest assessment of readiness. Not aspirational. Not what they wish they had. What they actually have and what that means for build-versus-buy decisions.</p>

            <div style={{marginTop: '50px', marginBottom: '50px'}}>
              <p className="italic text-base leading-normal bg-gray-50 p-8 border-l-4 border-gray-300">
                What you need to know: Build-versus-buy isn't about pride. It's about matching your capabilities to the problem's requirements. Building custom AI when you lack capability wastes money. Buying generic solutions when you need differentiation wastes competitive advantage. The question isn't "what do we want to do?" It's "what can we actually execute given our capabilities and constraints?"
              </p>
            </div>

            <p>AI isn't static. Models degrade. Data drifts. Equipment changes. Failure patterns evolve. What works today might not work in six months. Production AI requires ongoing maintenance, not just initial deployment.</p>

            <p>Northern Star's blast optimization AI works well initially. It designs blast patterns that recover 4% more ore than expert patterns. Success. But six months later, the mine starts working a new ore body. Different geology. Different rock properties. The AI's patterns don't work as well. Recovery drops to 2% improvement.</p>

            <p>Why? The AI was trained on data from the old ore body. The new ore body has different characteristics. The model needs retraining with data from the new conditions. That requires someone to collect new data, label blast outcomes, retrain the model, validate it works, and deploy the updated version.</p>

            <p>That's ongoing maintenance. Most organizations don't budget for it. They budget for initial development and deployment. Then they're surprised when models degrade and nobody has time or budget to fix them.</p>

            <p>The maintenance burden: For every AI model in production, someone needs to monitor performance, detect when it degrades, diagnose why, collect new training data, retrain models, validate improvements, and redeploy. That's ongoing work. Forever. As long as the AI is in production.</p>

            <p>If you're not ready to commit resources to ongoing maintenance, you're not ready to deploy AI. Unmaintained AI becomes worse than no AI because people stop trusting it but it's still consuming resources.</p>

            <p>Northern Star's remote sites project is the nobody-else-is-doing-this project. They're building something custom. No vendor solutions exist. They're figuring it out as they go. That means they need to build AI capability, not just buy it.</p>

            <p>Building AI capability means: Hiring data scientists with relevant expertise. Building data infrastructure to support model development. Creating processes for model governance, testing, and deployment. Establishing ongoing maintenance and monitoring. Training operational teams to work with AI. This takes years and millions of dollars. It's not a quick fix.</p>

            <p>Northern Star assesses honestly: They don't have this capability today. Building it will take three years and $5M in hiring, infrastructure, and process development. But the remote sites opportunity is worth $15M annually if it works. The investment makes sense if they're serious about remote sites. It doesn't make sense if this is just an experiment.</p>

            <p>Decision: Northern Star commits to building AI capability because remote sites are strategic, not experimental. They hire a head of AI, two senior data scientists, and begin building infrastructure. They accept this is a multi-year investment. They're not trying to do it cheap or fast. They're building foundational capability to support ongoing innovation.</p>

            <p>That's different from the catch-up projects where buying vendor solutions makes sense. For transformation, you need capability. For catch-up, you need speed. Match your approach to your ambition level.</p>

            <p>Here's what most organizations miss: AI isn't just models. It's infrastructure, processes, expertise, and culture. You can't deploy AI successfully if you're only ready on models but not on the rest.</p>

            <p>The readiness checklist: Do you have production-quality data infrastructure or are you faking it? Do you have AI expertise appropriate to your build-versus-buy decision? Do you have processes for ongoing model maintenance or will models degrade unchecked? Do you have organizational capability to work with AI or will people reject it because it doesn't fit their workflows? Do you have realistic timelines or are you hoping AI deploys faster than reality allows?</p>

            <p>Most organizations answer "we'll figure it out as we go" to at least three of those questions. That's not a plan. That's hope. And hope isn't enough when you're betting millions on AI.</p>

            <p>Northern Star runs the checklist for all three projects: Predictive maintenance: Production data infrastructure exists. AI expertise is limited but sufficient for tuning existing models. Maintenance processes are established. Organizational readiness is high because maintenance teams are desperate for better tools. Timeline is realistic—nine months for tuning and deployment. Green light.</p>

            <p>Blast optimization: Production data infrastructure needs improvement but is fixable in parallel with AI development. AI expertise is moderate—enough to customize models with support from external consultants. Maintenance processes need to be created but blast engineers understand the need. Organizational readiness is good. Timeline is realistic—twelve months. Yellow light—proceed with caution on data infrastructure.</p>

            <p>Remote sites: No production data infrastructure for remote operations—needs to be built. AI expertise is insufficient for custom development—needs significant hiring. Maintenance processes don't exist for this use case—need to be created. Organizational readiness is unknown—untested. Timeline is uncertain—two to three years is a guess. Red light—not ready to build yet. Need to invest in capability first.</p>

            <p>Three projects. Three readiness levels. Only one is ready to build now. One needs some fixes. One needs significant capability building before it's feasible. That's honest assessment. That's what prevents Dr. Strangebot.</p>

            <p>The trap: Northern Star's executive team wants to announce all three projects to the board. "We're pursuing transformational AI across maintenance, operations, and exploration." Sounds impressive. But only one project is ready to build. The other two will fail if started prematurely.</p>

            <p>The right move: Launch predictive maintenance now. Start blast optimization but invest in data infrastructure first. Delay remote sites and build AI capability over the next year. Sequence the projects based on readiness, not ambition.</p>

            <p>That's boring. It's also what works.</p>

            <p>Dr. Strangebot loves organizations that start building before they're ready. He feeds on data infrastructure gaps, missing AI expertise, unclear maintenance processes, and organizational resistance. He thrives when organizations skip readiness assessments because they're eager to start.</p>

            <p>The antidote: honest assessment of capability gaps. Realistic timelines for closing those gaps. Willingness to delay projects until you're actually ready to build them successfully.</p>

            <p>You're ready to build. Now the hardest question: Will anyone actually use it?</p>

          </div>

          <div className="mt-20 pt-8 border-t border-gray-200 flex justify-between">
            <Link href="/decision-4" className="text-blue-600 hover:underline">
              ← Previous: Decision 4
            </Link>
            <Link href="/decision-6" className="text-blue-600 hover:underline">
              Next: Decision 6 →
            </Link>
          </div>

        </div>

        {/* Footer */}
        <footer className="mt-12 pt-12 border-t-2 border-gray-300 px-8">
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