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

export default function Decision2Page() {
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
          DECISION 2
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
          What Dies to Fund This?
        </h1>
      </div>

      {/* Content */}
      <div className="prose-chapter">
        <p>Every budget discussion pretends resources are infinite. They&apos;re not. Every dollar spent on AI is a dollar not spent somewhere else. Every engineer building AI isn&apos;t fixing production systems. Every hour in AI planning meetings is an hour not solving today&apos;s operational fires.</p>

        <p>The question isn&apos;t &ldquo;Can we afford this AI project?&rdquo; The question is &ldquo;What do we stop doing to afford it?&rdquo;</p>

        <p>Most organizations won&apos;t answer. They add the AI project on top of everything else. Everyone gets stretched thinner. Quality drops across the board. The AI project gets whatever&apos;s left over—which is never enough. So it limps along, underfunded and under-resourced, until someone kills it or it becomes Dr. Strangebot.</p>

        <p>Here&apos;s what killing something actually looks like: Northern Star Mining has three maintenance engineers. They currently maintain equipment, respond to failures, and optimize preventive maintenance schedules. That&apos;s their job. All of it matters.</p>

        <p>Northern Star wants to build the predictive maintenance AI. It needs one of those engineers full-time for nine months. Not &ldquo;whenever they have time.&rdquo; Not &ldquo;20% of their capacity.&rdquo; Full-time. Which means the other two engineers now cover the work three people used to do.</p>

        <p>So what dies? Option one: preventive maintenance optimization. The engineers stop improving the preventive maintenance schedules. They maintain existing schedules but don&apos;t optimize them. That means slightly higher maintenance costs—maybe 3-5% more than optimal. Northern Star accepts this. They&apos;re trading 3-5% higher costs this year for 15% lower costs next year when predictive maintenance works.</p>

        <p>Option two: response time. Equipment failures get fixed, but slower. Instead of two-hour response times, now it&apos;s four hours. Production halts a bit longer. Costs a bit more. But Northern Star accepts this temporary hit for the long-term gain.</p>

        <p>Option three: don&apos;t build predictive maintenance. Keep all three engineers doing what they&apos;re doing. Accept that competitors who deployed predictive maintenance will maintain their cost advantage.</p>

        <p>There&apos;s no fourth option where everyone works harder and does everything. That path leads to burnout and botched execution on all fronts.</p>

        <p>The trap: Northern Star announces the AI project. They &ldquo;assign&rdquo; the engineer. But they don&apos;t actually stop anything. The engineer still has maintenance duties. Still responds to failures. Still attends the same meetings. Now they&apos;re also building AI in the margins.</p>

        <p>Nine months later: the AI is half-built. Maintenance response times degraded anyway because the engineer was stretched too thin. Preventive maintenance optimization stopped happening. And the AI project failed because it never got the focus it needed.</p>

        <p>Worse than doing nothing. They paid the cost of stopping things without actually stopping them. And they paid the cost of building AI without actually building it.</p>

        <p>Clear trades look like this: &ldquo;We&apos;re taking Sarah full-time off maintenance optimization for nine months to build predictive maintenance AI. During those nine months, preventive maintenance schedules will not be optimized. That&apos;s approximately $200K in higher maintenance costs we&apos;re accepting. After nine months, if predictive maintenance works, we save $800K annually. If it doesn&apos;t work, we wasted nine months and $200K and we restart maintenance optimization.&rdquo;</p>

        <p>Unclear trades look like this: &ldquo;We&apos;re prioritizing AI while maintaining operational excellence across all functions.&rdquo; Which means: we&apos;re doing everything, which means we&apos;re doing nothing well.</p>

        <div className="insight-box">
          <p>What you need to know: Organizations hate explicit tradeoffs. Saying &ldquo;we&apos;re stopping X to do Y&rdquo; feels like failure. So they avoid it. They say &ldquo;we&apos;ll do both&rdquo; and hope harder work bridges the gap. It never does. The only way to do something new is to stop doing something old. The only question is whether you choose what stops or let it happen randomly.</p>
        </div>

        <p>Budget is easy to name. Headcount is harder. Attention is nearly impossible. But attention is where most AI projects die.</p>

        <p>Your VP of Operations has twelve priorities. You add AI as number thirteen. Guess which one gets their focus when there&apos;s a production crisis? The twelve things they were already managing. AI becomes the &ldquo;we&apos;ll get to it next quarter&rdquo; project. It never dies officially. It just fades from neglect.</p>

        <p>If AI is priority thirteen, kill it now. Save everyone the slow death.</p>

        <p>Real prioritization means something drops from the list. If AI matters, something else doesn&apos;t matter as much this year. Name it. The project that waits. The optimization that pauses. The initiative that gets shelved.</p>

        <p>Northern Star&apos;s blast optimization project needs two geologists and a data scientist for twelve months. The geologists currently analyze drill samples to identify ore grades. That analysis helps blast engineers design optimal patterns. It&apos;s valuable work. It directly impacts ore recovery.</p>

        <p>What dies? The geologists stop analyzing every drill sample in detail. They focus on high-value areas and use historical data for the rest. That means slightly less optimal blast patterns in some areas—maybe 1-2% less ore recovery in those zones. But once the AI works, the company gets 4-5% better recovery across all zones.</p>

        <p>Short-term sacrifice for long-term gain. Explicit trade. Everyone knows what&apos;s being risked and what&apos;s being gained.</p>

        <p>Or Northern Star could say &ldquo;the geologists will do both.&rdquo; They&apos;ll analyze samples and build AI. Reality: they&apos;ll do neither well. Sample analysis slows down, blast patterns suffer, and the AI project drags on for eighteen months instead of twelve because no one has dedicated time.</p>

        <p>The hardest question: what if the AI fails? Then Northern Star spent twelve months with suboptimal sample analysis and got nothing in return. They lost 1-2% ore recovery for a year and have no AI to show for it. That&apos;s the bet. That&apos;s what risk means.</p>

        <p>Organizations that can&apos;t stomach that trade shouldn&apos;t build transformational AI. They should buy proven vendor solutions for catch-up projects. Less risk. Less upside. But they don&apos;t have the risk tolerance for bets that might fail.</p>

        <p>Budget gets allocated in neat rows on spreadsheets. Money has clear owners. Someone controls that budget line and can redirect it. Uncomfortable, but clear.</p>

        <p>Headcount is messier. People report to managers who have incentives to keep their teams intact. Taking someone full-time means their manager loses capacity. That manager&apos;s metrics suffer. Their team delivers less. Their performance review reflects it.</p>

        <p>So managers fight it. &ldquo;Sarah can contribute 20% to the AI project while maintaining her current responsibilities.&rdquo; Translation: Sarah will be spread too thin to succeed at either.</p>

        <p>This is where executives matter. Someone senior enough to override local optimization. Someone who can say: &ldquo;Sarah is off your team for nine months. Your metrics will be adjusted to reflect reduced capacity. We&apos;re not pretending you can do the same work with fewer people.&rdquo;</p>

        <p>Without that air cover, the AI project gets whatever&apos;s left over. Which is never enough.</p>

        <p>The remote sites project at Northern Star is the nobody-else-is-doing-this project. It needs two years and significant resources. It might work. It might not. If it works, Northern Star operates fifteen remote sites generating $15M annually that competitors can&apos;t touch. If it fails, they spent two years and got nothing.</p>

        <p>What dies to fund it? Northern Star has been planning to expand their largest existing site. That expansion would add $8M in annual revenue. Proven approach. Known risks. Solid return.</p>

        <p>They can&apos;t do both. Not enough engineering capacity. Not enough capital. Not enough executive attention.</p>

        <p>Choice: Expand the proven site for $8M certain gain. Or build the remote sites capability for potential $15M gain that might not work.</p>

        <p>This is strategy. Choosing what not to do so you can do something else. Most organizations say &ldquo;we&apos;ll find a way to do both&rdquo; and end up doing neither well.</p>

        <p>The expansion gets delayed because resources keep getting pulled to the AI project. The AI project struggles because people keep getting pulled back to &ldquo;urgent&rdquo; expansion issues. Two years later, the expansion is half-done and over budget. The AI project is still in development with nothing operational.</p>

        <p>Better decision: Pick one. Kill the other. If you choose the remote sites AI, the expansion waits two years. Accept it. Plan for it. Adjust expectations. If the AI works, you get $15M. If it fails, you start the expansion in year three.</p>

        <p>If you choose the expansion, don&apos;t pretend to build the AI. Kill it cleanly. Take the $8M certain gain. Maybe revisit remote sites AI in three years when you have capacity.</p>

        <p>Both are defensible. What&apos;s indefensible is pretending you can do both and failing at both.</p>

        <div className="insight-box">
          <p>What you need to know: The trap isn&apos;t making the wrong choice. The trap is refusing to choose. Organizations that won&apos;t kill anything don&apos;t build anything meaningful. They spread resources across thirteen priorities and wonder why none of them succeed.</p>
        </div>

        <p>Killing something doesn&apos;t mean it&apos;s bad. It means something else matters more right now. That&apos;s all. Maybe it matters more next year. Maybe it never matters enough. But this year, it&apos;s not the priority.</p>

        <p>The projects that survive aren&apos;t the best projects. They&apos;re the projects someone was willing to kill something else to fund.</p>

        <p>Most AI initiatives die from resource starvation dressed up as patience. &ldquo;We&apos;re taking our time to do it right.&rdquo; Translation: nobody could agree what to stop, so the project gets scraps.</p>

        <p>If you won&apos;t kill something to fund AI, don&apos;t build AI. You&apos;re not serious enough to succeed.</p>

        <p>Dr. Strangebot loves organizations that refuse to choose. He feeds on divided attention and spread resources. He thrives in environments where everything is a priority, which means nothing is.</p>

        <p>The question isn&apos;t whether your AI project is worth doing. The question is whether it&apos;s worth more than the thing you&apos;d stop doing to fund it.</p>

        <p>Answer honestly or don&apos;t start.</p>

        <p>You&apos;ve decided what to build and what to kill to fund it. Now the question gets harder: How do you prove it&apos;s worth it before you&apos;ve built it?</p>
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
        <Link href="/decision-1" className="chapter-nav-link">
          <span style={navLabel}>PREVIOUS CHAPTER</span>
          <span style={navTitle}>← Decision 1: What Are You Building and Why?</span>
        </Link>
        <Link href="/decision-3" className="chapter-nav-link" style={{ textAlign: 'right' }}>
          <span style={navLabel}>NEXT CHAPTER</span>
          <span style={navTitle}>Decision 3: Can You Prove It&apos;s Worth It? →</span>
        </Link>
      </nav>
    </article>
  );
}
