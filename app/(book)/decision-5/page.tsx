import Link from 'next/link';
import type { CSSProperties } from 'react';

const navLabel: CSSProperties = {
  fontSize: '0.6rem',
  fontWeight: 700,
  letterSpacing: '0.18em',
  color: 'var(--accent-violet)',
  fontFamily: 'var(--font-geist-mono)',
};

const navTitle: CSSProperties = {
  color: 'var(--text-primary)',
  fontWeight: 600,
  fontSize: '0.875rem',
  lineHeight: 1.4,
};

export default function Decision5Page() {
  return (
    <article>
      {/* Chapter header */}
      <div style={{ marginBottom: '3.5rem' }}>
        <div
          style={{
            fontSize: '0.6rem',
            fontWeight: 700,
            letterSpacing: '0.22em',
            color: 'var(--accent-violet)',
            marginBottom: '0.875rem',
            fontFamily: 'var(--font-geist-mono)',
          }}
        >
          DECISION 5
        </div>
        <h1
          style={{
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: '-0.025em',
            color: 'var(--text-primary)',
          }}
        >
          Are You Ready to Build?
        </h1>
      </div>

      {/* Content */}
      <div className="prose-chapter">
        <p>You&apos;ve defined the problem. You&apos;ve allocated resources. You&apos;ve proven it works in a pilot. You&apos;ve assigned clear ownership. Now comes the question most organizations skip: Are you actually ready to build this?</p>

        <p>Not &ldquo;do you have budget?&rdquo; Not &ldquo;do you have a team?&rdquo; The question is: Do you have the foundational capabilities to build AI that works in production, not just demos that work in labs?</p>

        <p>Most organizations discover the answer is no after they&apos;ve already started building. That&apos;s expensive.</p>

        <p>Here&apos;s the gap nobody talks about: AI trained on clean pilot data fails when it meets messy production data. The model that worked beautifully in the lab breaks when it encounters the chaos of real operations.</p>

        <p>Northern Star Mining&apos;s predictive maintenance pilot used six months of clean sensor data from one crusher. The data science team labeled failures, filtered anomalies, and built a model that predicted failures with 85% accuracy. Success.</p>

        <p>Then they deployed to production across ten crushers. Accuracy dropped to 60%. Why? Because production data is a disaster compared to pilot data.</p>

        <div className="insight-box">
          <p>What you need to know: Pilot data is curated. Someone cleaned it, labeled it, and removed obvious errors. Production data is whatever the sensors captured—including the weeks when sensors were miscalibrated, the days when maintenance teams unplugged equipment to test something else, the periods when data logging failed silently. Production data is messy. Pilots hide that mess. Deployment exposes it.</p>
        </div>

        <p>The pilot data: Six months from one crusher. Maintained consistently. Operated under normal conditions. Failures clearly labeled by maintenance teams who knew what they were looking for.</p>

        <p>The production data: Ten crushers with different maintenance histories. Some well-maintained. Some run past recommended service intervals. Sensors installed at different times with different calibrations. Data logging that sometimes fails without alerting anyone. Failures that sometimes get recorded and sometimes don&apos;t.</p>

        <p>The AI trained on the clean pilot data couldn&apos;t handle the messiness of production. It flagged normal operations as failures because sensor readings didn&apos;t match the clean patterns it learned. It missed actual failures because production data was noisier than pilot data.</p>

        <p>This is where most AI projects die. Not because the AI doesn&apos;t work. Because the organization isn&apos;t ready to support AI at scale. They have pilot-quality data infrastructure. They need production-quality data infrastructure. The gap kills them.</p>

        <p>Production-quality data infrastructure means: Sensors that are calibrated consistently across all equipment. Data logging that alerts when it fails. Data quality monitoring that catches drift before it breaks AI. Data pipelines that can handle volume and messiness at scale. None of this exists in most organizations. They discover this after they&apos;ve committed to building AI.</p>

        <p>The question before you build: Do you have production-quality data infrastructure or pilot-quality data infrastructure pretending to be production-ready? If you don&apos;t know, you&apos;re not ready to build.</p>

        <p>Here&apos;s the test: Can you pull six months of sensor data from ten pieces of equipment right now, and can you trust that data is accurate, complete, and consistent? If the answer is no, you&apos;re not ready for production AI. You need to fix data infrastructure first.</p>

        <p>Most organizations skip this step. They say &ldquo;we&apos;ll fix data issues as we go.&rdquo; They won&apos;t. Data infrastructure problems compound. The more equipment you add, the worse it gets. Fix it before you scale or accept that your AI will never work reliably.</p>

        <p>Northern Star has three options for predictive maintenance: Build it themselves. Buy a vendor solution. Tune an existing model. Each option has different requirements and different risks.</p>

        <p>Build it themselves: Requires data scientists who understand both AI and mining equipment. Requires data infrastructure to support model training and deployment. Requires ongoing maintenance as equipment changes and failure patterns evolve. High upfront cost. High ongoing cost. Maximum flexibility. Maximum control. Works if Northern Star has scarce expertise and wants competitive advantage from custom models.</p>

        <p>Buy a vendor solution: Lower upfront cost. Proven approach. Faster deployment. But the model is generic—trained on many mining companies&apos; data, not optimized for Northern Star&apos;s specific equipment. Limited customization. Ongoing licensing costs. Vendor controls updates and features. Works if Northern Star is catching up and needs fast deployment of proven technology.</p>

        <p>Tune an existing model: Start with an open-source or vendor model. Customize it with Northern Star&apos;s data. Middle ground between build and buy. Requires some AI expertise but less than building from scratch. Requires good data infrastructure. More flexible than pure vendor solutions. Less expensive than building everything custom. Works if Northern Star has moderate AI capability and wants balance between cost and customization.</p>

        <p>The wrong decision: Northern Star builds custom models because &ldquo;we&apos;re a technology-forward company&rdquo; even though they lack the AI expertise and data infrastructure. Two years later, they&apos;ve spent millions, the models barely work, and competitors who bought vendor solutions are already benefiting from predictive maintenance.</p>

        <p>The right decision: Northern Star assesses their AI maturity honestly. They have good data infrastructure. They have one experienced data scientist and two junior ones. They don&apos;t have deep AI expertise. They choose to tune an existing model. They get 80% of custom model benefits at 40% of custom model cost. The AI works within nine months. They&apos;re not leading on AI innovation, but they&apos;re competitive on outcomes.</p>

        <p>That&apos;s honest assessment of readiness. Not aspirational. Not what they wish they had. What they actually have and what that means for build-versus-buy decisions.</p>

        <div className="insight-box">
          <p>What you need to know: Build-versus-buy isn&apos;t about pride. It&apos;s about matching your capabilities to the problem&apos;s requirements. Building custom AI when you lack capability wastes money. Buying generic solutions when you need differentiation wastes competitive advantage. The question isn&apos;t &ldquo;what do we want to do?&rdquo; It&apos;s &ldquo;what can we actually execute given our capabilities and constraints?&rdquo;</p>
        </div>

        <p>AI isn&apos;t static. Models degrade. Data drifts. Equipment changes. Failure patterns evolve. What works today might not work in six months. Production AI requires ongoing maintenance, not just initial deployment.</p>

        <p>Northern Star&apos;s blast optimization AI works well initially. It designs blast patterns that recover 4% more ore than expert patterns. Success. But six months later, the mine starts working a new ore body. Different geology. Different rock properties. The AI&apos;s patterns don&apos;t work as well. Recovery drops to 2% improvement.</p>

        <p>Why? The AI was trained on data from the old ore body. The new ore body has different characteristics. The model needs retraining with data from the new conditions. That requires someone to collect new data, label blast outcomes, retrain the model, validate it works, and deploy the updated version.</p>

        <p>That&apos;s ongoing maintenance. Most organizations don&apos;t budget for it. They budget for initial development and deployment. Then they&apos;re surprised when models degrade and nobody has time or budget to fix them.</p>

        <p>The maintenance burden: For every AI model in production, someone needs to monitor performance, detect when it degrades, diagnose why, collect new training data, retrain models, validate improvements, and redeploy. That&apos;s ongoing work. Forever. As long as the AI is in production.</p>

        <p>If you&apos;re not ready to commit resources to ongoing maintenance, you&apos;re not ready to deploy AI. Unmaintained AI becomes worse than no AI because people stop trusting it but it&apos;s still consuming resources.</p>

        <p>Northern Star&apos;s remote sites project is the nobody-else-is-doing-this project. They&apos;re building something custom. No vendor solutions exist. They&apos;re figuring it out as they go. That means they need to build AI capability, not just buy it.</p>

        <p>Building AI capability means: Hiring data scientists with relevant expertise. Building data infrastructure to support model development. Creating processes for model governance, testing, and deployment. Establishing ongoing maintenance and monitoring. Training operational teams to work with AI. This takes years and millions of dollars. It&apos;s not a quick fix.</p>

        <p>Northern Star assesses honestly: They don&apos;t have this capability today. Building it will take three years and $5M in hiring, infrastructure, and process development. But the remote sites opportunity is worth $15M annually if it works. The investment makes sense if they&apos;re serious about remote sites. It doesn&apos;t make sense if this is just an experiment.</p>

        <p>Decision: Northern Star commits to building AI capability because remote sites are strategic, not experimental. They hire a head of AI, two senior data scientists, and begin building infrastructure. They accept this is a multi-year investment. They&apos;re not trying to do it cheap or fast. They&apos;re building foundational capability to support ongoing innovation.</p>

        <p>That&apos;s different from the catch-up projects where buying vendor solutions makes sense. For transformation, you need capability. For catch-up, you need speed. Match your approach to your ambition level.</p>

        <p>Here&apos;s what most organizations miss: AI isn&apos;t just models. It&apos;s infrastructure, processes, expertise, and culture. You can&apos;t deploy AI successfully if you&apos;re only ready on models but not on the rest.</p>

        <p>The readiness checklist: Do you have production-quality data infrastructure or are you faking it? Do you have AI expertise appropriate to your build-versus-buy decision? Do you have processes for ongoing model maintenance or will models degrade unchecked? Do you have organizational capability to work with AI or will people reject it because it doesn&apos;t fit their workflows? Do you have realistic timelines or are you hoping AI deploys faster than reality allows?</p>

        <p>Most organizations answer &ldquo;we&apos;ll figure it out as we go&rdquo; to at least three of those questions. That&apos;s not a plan. That&apos;s hope. And hope isn&apos;t enough when you&apos;re betting millions on AI.</p>

        <p>Northern Star runs the checklist for all three projects: Predictive maintenance: Production data infrastructure exists. AI expertise is limited but sufficient for tuning existing models. Maintenance processes are established. Organizational readiness is high because maintenance teams are desperate for better tools. Timeline is realistic—nine months for tuning and deployment. Green light.</p>

        <p>Blast optimization: Production data infrastructure needs improvement but is fixable in parallel with AI development. AI expertise is moderate—enough to customize models with support from external consultants. Maintenance processes need to be created but blast engineers understand the need. Organizational readiness is good. Timeline is realistic—twelve months. Yellow light—proceed with caution on data infrastructure.</p>

        <p>Remote sites: No production data infrastructure for remote operations—needs to be built. AI expertise is insufficient for custom development—needs significant hiring. Maintenance processes don&apos;t exist for this use case—need to be created. Organizational readiness is unknown—untested. Timeline is uncertain—two to three years is a guess. Red light—not ready to build yet. Need to invest in capability first.</p>

        <p>Three projects. Three readiness levels. Only one is ready to build now. One needs some fixes. One needs significant capability building before it&apos;s feasible. That&apos;s honest assessment. That&apos;s what prevents Dr. Strangebot.</p>

        <p>The trap: Northern Star&apos;s executive team wants to announce all three projects to the board. &ldquo;We&apos;re pursuing transformational AI across maintenance, operations, and exploration.&rdquo; Sounds impressive. But only one project is ready to build. The other two will fail if started prematurely.</p>

        <p>The right move: Launch predictive maintenance now. Start blast optimization but invest in data infrastructure first. Delay remote sites and build AI capability over the next year. Sequence the projects based on readiness, not ambition.</p>

        <p>That&apos;s boring. It&apos;s also what works.</p>

        <p>Dr. Strangebot loves organizations that start building before they&apos;re ready. He feeds on data infrastructure gaps, missing AI expertise, unclear maintenance processes, and organizational resistance. He thrives when organizations skip readiness assessments because they&apos;re eager to start.</p>

        <p>The antidote: honest assessment of capability gaps. Realistic timelines for closing those gaps. Willingness to delay projects until you&apos;re actually ready to build them successfully.</p>

        <p>You&apos;re ready to build. Now the hardest question: Will anyone actually use it?</p>
      </div>

      {/* Chapter navigation */}
      <nav
        style={{
          marginTop: '4rem',
          paddingTop: '2.5rem',
          borderTop: '1px solid var(--border-dim)',
          display: 'flex',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        <Link href="/decision-4" className="chapter-nav-link">
          <span style={navLabel}>PREVIOUS CHAPTER</span>
          <span style={navTitle}>← Decision 4: Who&apos;s Responsible?</span>
        </Link>
        <Link href="/decision-6" className="chapter-nav-link" style={{ textAlign: 'right' }}>
          <span style={navLabel}>NEXT CHAPTER</span>
          <span style={navTitle}>Decision 6: Will It Work in Reality? →</span>
        </Link>
      </nav>
    </article>
  );
}
