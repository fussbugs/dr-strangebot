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

export default function Decision6Page() {
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
          DECISION 6
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
          Will It Work in Reality?
        </h1>
      </div>

      {/* Content */}
      <div className="prose-chapter">
        <p>You built the AI. It works in testing. The models are accurate. The infrastructure is solid. The team is ready. Now comes the moment most organizations underestimate: getting people to actually use it.</p>

        <p>This is where most AI projects die. Not from technical failure. From adoption failure. The AI works. Nobody uses it. Or they use it wrong. Or they use it for a while and then quietly stop.</p>

        <p>Technical success doesn&apos;t equal operational success. You can build perfect AI that delivers zero value because people won&apos;t adopt it or don&apos;t know how to use it effectively.</p>

        <p>Northern Star Mining deployed predictive maintenance AI. The system predicts equipment failures three days in advance with 85% accuracy. Better than the pilot. Better than expected. Success.</p>

        <p>Except maintenance teams aren&apos;t using it. Why? Because it doesn&apos;t fit their workflow. The AI sends alerts to a dashboard. Maintenance supervisors check the dashboard when they remember. They don&apos;t remember often. They&apos;re too busy responding to immediate fires. The AI becomes one more system they&apos;re supposed to monitor but don&apos;t.</p>

        <p>The AI works. The adoption infrastructure doesn&apos;t exist. So the AI delivers no value.</p>

        <div className="insight-box">
          <p>What you need to know: Adoption infrastructure isn&apos;t optional. It&apos;s the difference between AI that works and AI that creates value. Adoption infrastructure includes: how people learn about the AI, how they get trained to use it, how it fits their workflow, how they get support when it breaks, how they provide feedback to improve it, and how success gets measured and reinforced. Without this infrastructure, even perfect AI fails.</p>
        </div>

        <p>The fix: Northern Star changes how the AI delivers alerts. Instead of pushing to a dashboard, it sends alerts directly into the work order system maintenance supervisors already use. The alert becomes a work order with priority, deadline, and required resources pre-filled. Supervisors don&apos;t need to check another system. The AI fits into their existing workflow.</p>

        <p>Adoption jumps from 30% to 85% within two weeks. Not because the AI got better. Because it stopped requiring people to change their behavior.</p>

        <p>The principle: Don&apos;t make people come to your AI. Make your AI come to them where they already work.</p>

        <p>Even when AI fits into workflows, people need to trust it before they&apos;ll rely on it. Trust isn&apos;t assumed. It&apos;s earned. And it&apos;s fragile.</p>

        <p>Northern Star&apos;s blast optimization AI recommends blast patterns. Blast engineers can accept or override recommendations. Initially, they override 60% of recommendations. Why? They don&apos;t trust the AI yet. It&apos;s new. It&apos;s untested in their specific conditions. They&apos;re betting their reputations on blast outcomes. They&apos;re not delegating that to an AI they don&apos;t understand.</p>

        <p>The AI team gets frustrated. &ldquo;The AI is right. Engineers are ignoring good recommendations.&rdquo; They&apos;re missing the point. The engineers aren&apos;t wrong. They&apos;re being appropriately cautious with an untested tool that impacts their work.</p>

        <p>The solution: Northern Star builds trust gradually. They start by having the AI explain its recommendations. Not just &ldquo;use this blast pattern.&rdquo; But &ldquo;this pattern works because the ore body has these characteristics, similar to the north zone where this approach recovered 5% more ore.&rdquo; The engineer sees the reasoning. They can evaluate whether the AI&apos;s logic makes sense for this specific situation.</p>

        <p>Over three months, override rates drop from 60% to 20%. Not because the AI improved. Because engineers learned to trust it by seeing it explain itself and watching its recommendations work.</p>

        <p>Trust builds slowly through demonstrated competence. It breaks instantly through unexplained failures. Plan accordingly.</p>

        <p>AI fails. Models make mistakes. Predictions are wrong. Recommendations don&apos;t work. That&apos;s inevitable. The question isn&apos;t whether AI fails. The question is what happens when it does.</p>

        <p>Northern Star&apos;s predictive maintenance AI predicts a crusher will fail in three days. Maintenance teams schedule downtime, order parts, and prepare for repairs. Three days pass. The crusher doesn&apos;t fail. It keeps running fine. The AI was wrong.</p>

        <p>What happens next determines whether people keep trusting the AI. Option one: Nothing. The maintenance team wastes time and resources preparing for a failure that didn&apos;t happen. They lose trust. Next time the AI predicts a failure, they hesitate. &ldquo;It was wrong last time. Maybe it&apos;s wrong again.&rdquo; They delay action. Eventually, the AI predicts a real failure. They don&apos;t act fast enough. The equipment fails unexpectedly. The AI is blamed for being unreliable even though it tried to warn them.</p>

        <p>Option two: Northern Star has a process for AI failures. When the AI makes a wrong prediction, the data science team investigates. They find that a sensor was reading incorrectly, feeding bad data to the model. They fix the sensor. They retrain the model to be more robust to sensor noise. They tell maintenance teams what went wrong and what they fixed. The teams see that failures get investigated and resolved. Trust is maintained.</p>

        <p>The difference: Acknowledged failures with visible resolution build trust. Ignored failures erode trust. AI isn&apos;t perfect. Your response to imperfection matters more than the imperfection itself.</p>

        <p>People need three types of support to adopt AI successfully: Technical support when the AI breaks. Training support to learn how to use it effectively. Strategic support to evolve how they work as the AI capabilities grow.</p>

        <p>Northern Star structures support in three tiers: Tier 1: Site champions. One person per location who becomes the local AI expert. They handle basic troubleshooting, answer questions, and escalate issues. They&apos;re users who volunteered and got extra training. They&apos;re not full-time support staff. They&apos;re practitioners who help their peers. This is where 80% of support requests get resolved.</p>

        <p>Tier 2: Dedicated support team. Small team that handles escalated issues, coordinates with the data science team on model problems, and provides advanced training. They&apos;re full-time. They understand both the AI and the operations. They bridge the gap between technical teams and users.</p>

        <p>Tier 3: Data science team. Handles model failures, retraining, and major system changes. They&apos;re not directly supporting users. They&apos;re supporting the support team and fixing underlying technical issues.</p>

        <p>Three tiers. Each tier handles what the tier below can&apos;t resolve. Users rarely need to go past Tier 1. Complex issues get escalated efficiently. Nobody is overwhelmed. That&apos;s support infrastructure.</p>

        <div className="insight-box">
          <p>What you need to know: Support infrastructure determines whether AI scales or breaks. Without it, every issue becomes a crisis. With it, most issues get resolved quickly by people closest to the problem. The goal isn&apos;t zero issues. The goal is issues that get resolved before they stop people from using the AI.</p>
        </div>

        <p>AI doesn&apos;t stay static. Models improve. Features get added. Use cases evolve. Organizations need mechanisms to capture feedback and evolve the AI based on what people actually need, not what builders thought they&apos;d need.</p>

        <p>Northern Star builds feedback loops: Weekly feedback sessions with power users. What&apos;s working? What&apos;s frustrating? What would make this more valuable? Monthly reviews with site champions. What issues are they seeing repeatedly? What workarounds are people developing? Quarterly reviews with leadership. Is the AI delivering expected value? Should we expand, pivot, or stop?</p>

        <p>These aren&apos;t bureaucratic check-ins. They&apos;re structured mechanisms to surface problems early and make decisions about AI evolution based on real operational experience.</p>

        <p>The alternative: Leadership asks &ldquo;how&apos;s the AI going?&rdquo; Someone says &ldquo;fine.&rdquo; Six months later they discover nobody is using it anymore because three small issues made it annoying enough that people quietly went back to the old way. But nobody told anyone because there was no mechanism to surface that feedback.</p>

        <p>Feedback loops prevent silent abandonment. They make problems visible while they&apos;re still fixable.</p>

        <p>Here&apos;s a company that got everything right technically and failed on adoption. Call them Silver Ridge Mining. Fictional, but you&apos;ll recognize the pattern.</p>

        <p>Silver Ridge built an AI to optimize haul truck routes. The AI analyzed traffic, equipment status, and pit conditions to route trucks efficiently. It worked beautifully in testing. It reduced haul times by 12%. Millions in annual savings. Leadership celebrated. They deployed to all operations.</p>

        <p>Six months later, the AI was barely used. Dispatchers ignored route recommendations. Drivers followed their own judgment. The AI sat idle, consuming resources but delivering no value.</p>

        <p>What went wrong? Silver Ridge built AI. They didn&apos;t build adoption infrastructure. Dispatchers received no training on how to use the AI or why it mattered. The AI recommendations appeared in a separate system dispatchers had to log into. It didn&apos;t integrate with their dispatch software. When the AI made mistakes, nobody investigated or explained what went wrong. When dispatchers had questions, nobody could answer them. There were no site champions. No support team. No feedback mechanisms. The AI was technically perfect and operationally useless.</p>

        <p>Silver Ridge spent $3M building AI. They spent $50K on adoption infrastructure. The result: Dr. Strangebot. A technically successful AI project that delivered zero operational value because nobody thought about how people would actually adopt it.</p>

        <p>The lesson: Budget 30-40% of AI project resources for adoption infrastructure, not just 5%. Train people extensively. Build support systems. Create feedback loops. Integrate into existing workflows. Respond to failures visibly. Measure adoption as rigorously as you measure AI accuracy.</p>

        <p>Technical success is necessary but not sufficient. Adoption success determines whether AI delivers value.</p>

        <p>After six months of operation, Northern Star faces a decision with each AI project: scale it, stop it, or keep it as is. This decision separates projects that create lasting value from projects that plateau and eventually become Dr. Strangebot.</p>

        <p>Predictive maintenance: The AI works well on crushers. Should they expand to conveyors, trucks, and other equipment? The decision: Scale. Adoption is strong. Technical foundation is solid. Value is proven. They expand to five additional equipment types over twelve months. Staged expansion. Each stage proves itself before the next stage starts.</p>

        <p>Blast optimization: The AI works in some geology but not others. Should they try to make it work everywhere or accept limitations? The decision: Stay focused. They deploy the AI where it works well and keep human expertise where it doesn&apos;t. They don&apos;t try to force AI into contexts where it struggles. They accept that partial deployment delivering reliable value beats full deployment delivering inconsistent results.</p>

        <p>Remote sites: The first pilot site works. Should they expand to more remote locations? The decision: Scale cautiously. They add one more site, more remote than the first. If that works, they&apos;ll add three more. Staged expansion based on proven success at increasing difficulty levels. They&apos;re not betting everything on transformation. They&apos;re buying evidence one site at a time.</p>

        <p>Three different decisions. All appropriate to their context. Scale when adoption and value are proven. Stay focused when partial deployment delivers more reliable value than full deployment. Stop when evidence shows it won&apos;t work at acceptable cost.</p>

        <p>The trap: Organizations treat &ldquo;scale&rdquo; as the only successful outcome. If you&apos;re not scaling, you&apos;re failing. That&apos;s wrong. Sometimes the right decision is focused deployment. Sometimes it&apos;s stopping. The question isn&apos;t &ldquo;are we scaling?&rdquo; The question is &ldquo;what does the evidence say about where this AI creates value?&rdquo;</p>

        <p>Most AI projects die slowly. Not from dramatic failures. From quiet neglect. Usage drops gradually. Support requests decrease because people stop trying to use it. Feedback dries up. The AI keeps running but nobody pays attention to whether it&apos;s working.</p>

        <p>That&apos;s zombie AI. It&apos;s alive. It&apos;s consuming resources. It&apos;s delivering nothing. It&apos;s Dr. Strangebot.</p>

        <p>The way to prevent zombie AI: Measure adoption rigorously. Track usage trends. Monitor feedback volume. When adoption drops, investigate immediately. When feedback stops, that&apos;s a warning sign, not a success signal. Silent AI is often abandoned AI.</p>

        <p>Northern Star sets adoption metrics: Percentage of maintenance teams using predictive maintenance alerts. Percentage of blast patterns following AI recommendations. Percentage of remote site decisions relying on AI assistance. They track these monthly. When any metric drops more than 10%, they investigate. They don&apos;t wait until the AI is fully abandoned.</p>

        <p>Early intervention prevents zombie AI. By the time nobody is using the AI, it&apos;s too late to recover. Catch adoption problems early while they&apos;re still fixable.</p>

        <p>AI in production requires ongoing investment in both technology and adoption. Models need retraining. Infrastructure needs maintenance. People need continued training. Feedback needs incorporation. That&apos;s perpetual work. It doesn&apos;t end after deployment.</p>

        <p>Organizations that budget for deployment but not for ongoing operation create zombie AI. The AI works initially. Then it degrades. Nobody maintains it. People stop using it. But nobody kills it because killing projects is uncomfortable. So it limps along indefinitely.</p>

        <p>The alternative: Budget for ongoing operation from the start. Allocate resources for model maintenance, infrastructure updates, user training, support, and feedback incorporation. Treat AI as a living system that requires care, not a static tool that runs itself.</p>

        <p>Northern Star budgets 30% of initial development costs annually for ongoing operation. That covers model retraining, infrastructure maintenance, user support, training, and gradual feature improvements. It&apos;s significant investment. But it&apos;s what keeps AI delivering value long-term.</p>

        <p>You&apos;ve made all six decisions. You defined the problem. You allocated resources. You proved it works. You assigned ownership. You built it. You got people to use it. You&apos;ve done everything right. Now comes the question that determines whether this matters: What happens next?</p>
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
        <Link href="/decision-5" className="chapter-nav-link">
          <span style={navLabel}>PREVIOUS CHAPTER</span>
          <span style={navTitle}>← Decision 5: Are You Ready to Build?</span>
        </Link>
        <Link href="/what-next" className="chapter-nav-link" style={{ textAlign: 'right' }}>
          <span style={navLabel}>NEXT CHAPTER</span>
          <span style={navTitle}>Epilogue: What Happens Next →</span>
        </Link>
      </nav>
    </article>
  );
}
