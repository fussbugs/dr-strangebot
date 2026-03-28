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

export default function Decision3Page() {
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
          DECISION 3
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
          Can You Prove It&apos;s Worth It?
        </h1>
      </div>

      {/* Content */}
      <div className="prose-chapter">
        <p>Most AI projects start with hope and end with disappointment. Not because the technology failed. Because nobody defined what success looked like before they started building.</p>

        <p>&ldquo;We&apos;ll learn as we go.&rdquo; &ldquo;Let&apos;s see what&apos;s possible.&rdquo; &ldquo;We&apos;re experimenting.&rdquo; These aren&apos;t strategies. They&apos;re ways to avoid making hard decisions about what you&apos;re actually trying to accomplish.</p>

        <p>Here&apos;s the uncomfortable truth: if you can&apos;t articulate what success looks like before you start, you won&apos;t recognize failure when it arrives. And you definitely won&apos;t stop the project when you should.</p>

        <p>Northern Star Mining&apos;s predictive maintenance project needs proof before they commit. Not faith. Not optimism. Proof that the AI can actually predict failures better than their current approach.</p>

        <p>Current approach: scheduled maintenance based on manufacturer recommendations. Replace parts every X operating hours. Some parts fail early. Some could run longer. But the schedule is simple and predictable.</p>

        <p>AI promise: predict failures before they happen. Replace parts just before they fail, not before or after. Reduce unplanned downtime by 40%. Lower maintenance costs by 15%.</p>

        <p>The pilot: Northern Star picks one piece of equipment—a critical crusher that processes 500 tons per hour. If the crusher fails unexpectedly, production stops. If they can predict failures three days in advance, maintenance teams can plan repairs during scheduled downtime.</p>

        <p>Success criteria: The AI must predict crusher failures three days in advance with 80% accuracy. It must have fewer than 10% false positives—alerts that predict failure when the equipment is fine. And it must beat the current scheduled maintenance approach on both cost and downtime within six months.</p>

        <p>Clear. Measurable. Time-bound. Everyone knows what success looks like. More importantly, everyone knows what failure looks like.</p>

        <div className="insight-box">
          <p>What you need to know: Pilots aren&apos;t about building the final system. They&apos;re about learning fast whether the approach works. The best pilots are small enough to learn cheap but real enough to learn true. Testing on one crusher isn&apos;t the full system. But it&apos;s real production equipment under real operating conditions. If it works here, it&apos;ll probably work elsewhere. If it fails here, you learned before spending millions.</p>
        </div>

        <p>Six months later: The AI predicts 70% of failures three days in advance. Good, but not 80%. False positives are at 15%—too high. Maintenance teams get alert fatigue. They start ignoring alerts. The AI costs more to operate than scheduled maintenance because of all the false alarms requiring investigation.</p>

        <p>Decision point: The AI didn&apos;t hit the success criteria. But it showed promise. 70% accuracy might improve with more training data. False positives might decrease with tuning. Do they stop or continue?</p>

        <p>This is where most organizations lie to themselves. &ldquo;We&apos;re close.&rdquo; &ldquo;We&apos;re learning.&rdquo; &ldquo;Let&apos;s give it another six months.&rdquo; They don&apos;t stop. They don&apos;t pivot. They don&apos;t adjust the criteria. They just keep going.</p>

        <p>Northern Star does something different. They ask: &ldquo;What would it take to get from 70% to 80% accuracy? What would it cost? How long would it take?&rdquo;</p>

        <p>Answer: Six more months and three more engineers. That&apos;s a much bigger bet than the initial pilot. It might work. It might not. The question isn&apos;t &ldquo;Is this promising?&rdquo; The question is &ldquo;Is this promising enough to double down with more resources?&rdquo;</p>

        <p>Northern Star decides: No. The pilot proved predictive maintenance is harder than expected on their equipment. Their crusher fails from complex combinations of factors the AI can&apos;t reliably predict. They kill the project. They accept that competitors who succeeded with predictive maintenance either have simpler equipment or invested more resources than Northern Star can justify.</p>

        <p>They lost six months and the cost of one pilot. But they learned something valuable: predictive maintenance on their specific equipment isn&apos;t currently feasible with their resources. They stop before wasting millions.</p>

        <p>That&apos;s a successful pilot. Not because it worked. Because it provided clear evidence to make a decision.</p>

        <p>Most pilots are designed to confirm what people already believe, not to test whether they&apos;re right. That&apos;s not a pilot. That&apos;s theater.</p>

        <p>Real pilots have three characteristics: They&apos;re small enough to fail cheap. They&apos;re real enough to learn true. They have clear kill conditions set before starting.</p>

        <p>Small enough to fail cheap: Northern Star&apos;s predictive maintenance pilot tested one crusher for six months with one data scientist. Total cost: maybe $200K including equipment sensors, data infrastructure, and personnel time. If it failed, they lost $200K. Painful but survivable.</p>

        <p>Compare that to deploying predictive maintenance across all equipment immediately. That&apos;s $5M minimum. If it fails, the company just burned money they can&apos;t recover. And they probably can&apos;t stop fast because they&apos;ve committed to vendors, built infrastructure, and announced the initiative.</p>

        <p>Real enough to learn true: Testing on a real crusher under real operating conditions with real maintenance teams. Not a sandbox. Not a lab. Not simulated data. The actual environment where the AI needs to work.</p>

        <p>Fake pilots test in controlled environments. They use clean data. They avoid messy reality. Then they deploy to production and discover nothing works. Because pilots that don&apos;t reflect real conditions don&apos;t teach real lessons.</p>

        <p>Clear kill conditions: Northern Star set success criteria before starting: 80% accuracy, under 10% false positives, beats scheduled maintenance on cost and downtime. They didn&apos;t say &ldquo;let&apos;s see what happens.&rdquo; They said &ldquo;here&apos;s what success looks like; anything less isn&apos;t good enough.&rdquo;</p>

        <p>Kill conditions make stopping possible. Without them, every pilot becomes an indefinite &ldquo;learning process&rdquo; that never quite proves value but never quite fails either. That&apos;s Dr. Strangebot&apos;s favorite breeding ground.</p>

        <p>The blast optimization project is different. Northern Star wants AI to design better blast patterns—recovering 4-5% more ore than current expert-designed patterns. They can test this.</p>

        <p>The pilot: Northern Star selects one blast zone. They have the AI design blast patterns for that zone. They execute those blasts. They measure ore recovery. They compare it to the recovery from expert-designed patterns in similar zones.</p>

        <p>Success criteria: The AI must achieve 4% better ore recovery than expert patterns within three months of testing on the pilot zone. If it hits 4%, they expand to five zones. If those five zones also average 4% improvement, they deploy across all blast operations.</p>

        <p>Staged investment. Each stage has clear success criteria. Each stage de-risks the next investment. They don&apos;t commit to full deployment until the AI proves itself at scale.</p>

        <p>Three months later: The AI designs patterns that recover 3.5% more ore than expert patterns. Close, but not 4%. The geologists analyze why. They discover the AI works better in certain rock types than others. In some geology, it hits 5% improvement. In others, it&apos;s only 2%.</p>

        <p>Decision: Northern Star recalibrates. They deploy the AI only in the rock types where it performs well. They keep expert patterns for the challenging geology. They get 4-5% improvement where the AI works and don&apos;t force it where it doesn&apos;t.</p>

        <p>Partial success. Pragmatic deployment. Not everything or nothing. Use the tool where it works. Keep the old approach where it&apos;s still better.</p>

        <p>That&apos;s how you de-risk AI. You stage the investment. You test in progressively larger contexts. You make go/no-go decisions at each stage based on evidence, not hope.</p>

        <div className="insight-box">
          <p>What you need to know: Staged investment isn&apos;t about being cautious. It&apos;s about learning cheap. Every stage answers a specific question: Can the AI work in this context? Can it scale to this volume? Can it handle this complexity? You invest more only when the previous stage provides clear evidence you should. You stop when evidence says it won&apos;t work at acceptable cost. That&apos;s not failure. That&apos;s smart resource allocation.</p>
        </div>

        <p>The remote sites project is the hardest to pilot because it&apos;s trying to enable something that doesn&apos;t exist yet. You can&apos;t test it on current operations because current operations don&apos;t include remote sites.</p>

        <p>Northern Star&apos;s approach: They pick the most accessible remote site—the one that&apos;s expensive but not impossible to staff. They send one experienced engineer and three junior operators. The AI assists with decision-making, but the experienced engineer can override it.</p>

        <p>Success criteria: The site must operate at 80% efficiency of fully-staffed sites while costing 50% less in labor. If it works for twelve months, they try a more remote site. If that works, they deploy to sites they can&apos;t currently staff at all.</p>

        <p>Staged risk. Start with the easiest version of the hard problem. Prove it there. Then tackle the harder version.</p>

        <p>Twelve months later: The site operates at 75% efficiency—close to target. Labor costs are 40% lower than full staffing, better than the 50% target. The AI handled most decisions well. The experienced engineer intervened less over time as the AI learned.</p>

        <p>Decision: Expand to a more remote site. This one requires helicopter access and can only keep one senior operator on site. If the AI can handle that, it&apos;ll work anywhere.</p>

        <p>They&apos;re not betting everything on transformation. They&apos;re buying evidence one stage at a time. If the second site fails, they still have the first site working profitably. They learned where the boundary is. Maybe remote sites work at accessibility level X but not level Y. That&apos;s useful knowledge. It tells them which sites to pursue and which to avoid.</p>

        <p>Most pilots are too big or too fake. Too big: &ldquo;Let&apos;s deploy AI across the entire maintenance organization and see what happens.&rdquo; Too fake: &ldquo;Let&apos;s test the AI in a controlled environment with clean data and perfect conditions.&rdquo;</p>

        <p>Big pilots fail expensively. Fake pilots fail to teach real lessons.</p>

        <p>The right size: Large enough to learn something meaningful. Small enough to fail cheap. Real enough to encounter actual problems. Fake pilots avoid problems. Real pilots surface them early when you can still adjust.</p>

        <p>Here&apos;s what kills most pilots: organizations set them up to succeed at learning, then measure them on delivering value. Pilots aren&apos;t for delivering value. They&apos;re for learning whether an approach can deliver value at scale.</p>

        <p>Northern Star&apos;s predictive maintenance pilot failed to hit targets. But it succeeded as a pilot because it clearly showed that their equipment was harder to predict than expected. They learned. They made a decision. They stopped before wasting millions.</p>

        <p>That&apos;s a successful pilot. Most organizations can&apos;t celebrate that kind of success. They see &ldquo;we stopped the project&rdquo; as failure. So they keep going. They invest more. They lower the bar. They redefine success. And they end up with Dr. Strangebot.</p>

        <p>Pilots should answer questions, not confirm assumptions. If you already know it&apos;ll work, you don&apos;t need a pilot. You need deployment.</p>

        <p>The questions pilots answer: Can the AI work in our specific context? Can we get enough quality data? Can we build it with our available talent? Will people actually use it? Will it deliver the value we expect at acceptable cost?</p>

        <p>The questions pilots don&apos;t answer: What&apos;s the ROI at full scale? How will it transform the business? What&apos;s the competitive advantage? Those questions come after pilots prove the approach works. Pilots come first. Transformation comes later. If at all.</p>

        <p>The best pilots are the ones that make stopping easy. Clear criteria. Clear timeline. Clear kill conditions. No ambiguity. No &ldquo;let&apos;s see what happens.&rdquo; Just &ldquo;here&apos;s what success looks like; we&apos;ll know in X months if we have it.&rdquo;</p>

        <p>Northern Star&apos;s blast optimization pilot had a three-month timeline. Not six months. Not &ldquo;until we figure it out.&rdquo; Three months to test blast patterns, measure recovery, and compare to expert patterns. Three months to know if they should invest more or stop.</p>

        <p>That&apos;s the point. Pilots should be time-boxed decisions, not open-ended experiments. Learn fast. Decide fast. Move on.</p>

        <p>Dr. Strangebot loves pilots without kill conditions. He loves &ldquo;learning processes&rdquo; that never conclude. He loves projects that show &ldquo;promise&rdquo; indefinitely without ever proving value.</p>

        <p>The antidote: clear criteria, defined before starting, measured objectively, and enforced even when it&apos;s uncomfortable to stop.</p>

        <p>You&apos;ve proven the AI can work. Now comes the harder question: Who&apos;s responsible when it doesn&apos;t?</p>
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
        <Link href="/decision-2" className="chapter-nav-link">
          <span style={navLabel}>PREVIOUS CHAPTER</span>
          <span style={navTitle}>← Decision 2: What Dies to Fund This?</span>
        </Link>
        <Link href="/decision-4" className="chapter-nav-link" style={{ textAlign: 'right' }}>
          <span style={navLabel}>NEXT CHAPTER</span>
          <span style={navTitle}>Decision 4: Who&apos;s Responsible? →</span>
        </Link>
      </nav>
    </article>
  );
}
