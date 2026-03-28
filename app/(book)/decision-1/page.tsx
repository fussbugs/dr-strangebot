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

export default function Decision1Page() {
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
          DECISION 1
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
          What Are You Building and Why?
        </h1>
      </div>

      {/* Content */}
      <div className="prose-chapter">
        <p>Here&apos;s all the wrong reasons companies build AI: FOMO, stock price theater, fundraising narratives, talent competition. Your competitor announces an AI project. Your employee survey asks why you&apos;re not &ldquo;leveraging&rdquo; AI. Your board wants to hear about the future. Your recruiters say top engineers won&apos;t join companies without AI projects.</p>

        <p>So you start one. Not because you have a problem. Because you&apos;re afraid of looking behind.</p>

        <p>You don&apos;t have an AI problem. You have a fear problem wearing an AI costume.</p>

        <p>Start with the problem, not the technology. Real problems, not PowerPoint slides.</p>

        <p>Picture this: Your maintenance supervisor gets forty work orders per week. Equipment breaks. Operators complain. Everything seems urgent. He prioritizes based on who yells loudest, not what matters most. The critical conveyor belt showing stress fractures? Nobody&apos;s yelling about it yet. So it waits. Until it snaps during peak production. Three days down. Millions of dollars lost.</p>

        <div className="insight-box">
          <p>What you need to know: In mining, maintenance teams are always underwater. More equipment than people. More problems than time. They triage constantly. But gut-based triage misses the quiet failures—the equipment degrading slowly until it fails catastrophically. That&apos;s what kills production.</p>
        </div>

        <p>The problem: going from &ldquo;whoever yells loudest gets fixed first&rdquo; to &ldquo;fixing what&apos;s about to fail before it costs millions&rdquo; when &ldquo;everything feels urgent and you can&apos;t tell what really is.&rdquo;</p>

        <p>Be specific. You know the problem when you see it: the supervisor who&apos;s always reacting, never preventing. Fixing what broke instead of what&apos;s about to break.</p>

        <p>Now you can evaluate if AI helps. Maybe AI prioritizes work orders by failure risk. Maybe it predicts which equipment fails next. Or maybe the real solution is simpler—better sensors, better checklists, an extra supervisor.</p>

        <p>Before jumping to AI, ask: Can we simplify the process first? Can we eliminate steps that no one needs? Then can we automate with simple rules? AI is the last option, not the first.</p>

        <p>Most &ldquo;AI problems&rdquo; are process problems that someone stuck an AI label on.</p>

        <p>Your real competition isn&apos;t other AI solutions. It&apos;s the spreadsheet, the gut call, the supervisor&apos;s twenty years of experience. Sometimes experience wins. Your AI needs to be dramatically better to justify the switch.</p>

        <p>If you don&apos;t understand the actual problem—the specific outcome someone needs in a specific circumstance—you&apos;ll optimize for the wrong things. You&apos;ll make your AI faster when people need it simpler. You&apos;ll add features when they need fewer steps. You&apos;ll measure technical accuracy when they measure &ldquo;does this make my day easier?&rdquo;</p>

        <p>Here&apos;s a mining company—call them Northern Star Mining. Fictional, but you&apos;ll recognize them. Maybe you work there. Maybe your competitor is them. They have three AI projects running right now. One will save them money. One will help them compete. One might transform their business. They&apos;re making different bets at different speeds with different risk profiles. Same company, same leadership, same constraints. Watch how they make wildly different decisions for each.</p>

        <h2>The Catch-Up Project: Predictive Maintenance</h2>

        <p>Northern Star&apos;s equipment keeps breaking unexpectedly. A crusher failure halts production for three days. A conveyor belt snaps during peak shift. Each surprise failure costs hundreds of thousands in lost production, plus emergency repairs at premium rates.</p>

        <div className="insight-box">
          <p>What you need to know: Mining equipment operates 24/7 in brutal conditions—heat, dust, vibration, heavy loads. When a crusher breaks unexpectedly, ore piles up behind it. When conveyors fail, nothing moves. Maintenance teams scramble. Costs multiply. Predictive maintenance means catching problems before they cause failures.</p>
        </div>

        <p>The problem: going from &ldquo;surprise equipment failures that halt production&rdquo; to &ldquo;planned maintenance during scheduled downtime&rdquo; when &ldquo;you can&apos;t afford unexpected shutdowns&rdquo; instead of &ldquo;running equipment until it breaks and hoping for the best.&rdquo;</p>

        <p>The starting point: reactive maintenance. Fix it when it breaks. The desired end point: predictive maintenance. Fix it before it breaks. The circumstance: running 24/7 operations where downtime is expensive. What they do today: scheduled maintenance based on manufacturer recommendations, plus emergency repairs when things explode.</p>

        <p>But here&apos;s the thing: every mining company is doing this. Northern Star&apos;s competitors finished deploying predictive maintenance two years ago. Their maintenance costs are 15% lower than Northern Star&apos;s. Their unplanned downtime is half what Northern Star experiences.</p>

        <p>This isn&apos;t innovation. This is survival. This is catching up before the gap becomes insurmountable. Northern Star has maybe twelve months before being behind on predictive maintenance becomes being uncompetitive on costs. They&apos;re racing against time and competitors who already crossed the finish line.</p>

        <h2>The Compete-Better Project: Blast Optimization</h2>

        <p>Northern Star mines ore. The quality varies—some sections are rich, some are lean. Blasting—using explosives to break rock—determines how much valuable ore you recover versus how much you waste.</p>

        <div className="insight-box">
          <p>What you need to know: Mining uses controlled explosives to break rock. Get the blast pattern right, and you fracture the rock cleanly—easy to process, good ore recovery. Get it wrong, and you either pulverize good ore into dust you can&apos;t process, or you leave valuable ore locked in rock you can&apos;t break. Expert blast engineers design patterns. But even experts guess to some extent. Small improvements in blast patterns can mean millions in recovered value.</p>
        </div>

        <p>The problem: going from &ldquo;blast patterns based on engineer experience and some guesswork&rdquo; to &ldquo;optimized blast patterns that recover 3-5% more ore&rdquo; when &ldquo;competitors are squeezing margins and every percentage point matters.&rdquo;</p>

        <p>Current state: experienced blast engineers design patterns. They&apos;re good. But they can&apos;t see patterns across thousands of blasts. They can&apos;t optimize for subtle geological variations. AI can.</p>

        <p>Other mining companies are deploying blast optimization. Some are getting 2-3% better ore recovery. Northern Star wants to get 4-5%—not just matching competitors, but beating them. This isn&apos;t about catching up. This is about competing better on execution within operations everyone does.</p>

        <p>If they pull it off, they extract more value from the same ore. Better margins. Better profitability. Competitive advantage that lasts until competitors catch up. Maybe two years. Maybe three. Then everyone&apos;s equal again and someone needs to find the next edge.</p>

        <h2>The Nobody-Else-Is-Doing-This Project: Remote Site Operations</h2>

        <p>Northern Star has mineral deposits in locations so remote that staffing them with experienced engineers isn&apos;t economically viable. Flying experts to sites 300 miles from the nearest town costs more than the site generates. Local talent doesn&apos;t have the specialized skills. So these sites sit dormant. Valuable ore in the ground. No way to extract it profitably.</p>

        <div className="insight-box">
          <p>What you need to know: Remote mining sites might be hundreds of miles from civilization—deep wilderness regions, isolated terrain, accessible only by helicopter or seasonal roads. Getting a specialized engineer there costs tens of thousands in flights, accommodation, and time. If the site only generates a few million per year in revenue, you can&apos;t afford half a million annually in expert labor costs. So these sites sit dormant, or they operate poorly, or they never get developed. The ore is there. The economics aren&apos;t.</p>
        </div>

        <p>This is different. The catch-up project and the compete-better project are improving or optimizing current operations. Remote sites? Northern Star is enabling operations that weren&apos;t economically viable before. AI isn&apos;t making them better at what they do. It&apos;s letting them do things they couldn&apos;t do at all.</p>

        <p>If it works, Northern Star operates sites competitors can&apos;t. New revenue. New sites. New possibilities. The advantage won&apos;t last forever—eventually someone else figures it out. But it creates a window where Northern Star does something competitors don&apos;t.</p>

        <p>Three projects. Three different jobs. Same company, different ambitions.</p>

        <p>Your budget is your strategy&apos;s confession booth. It tells the truth when your PowerPoint lies.</p>

        <p>Most companies get ambition levels wrong. They confuse them. They announce they&apos;re pursuing &ldquo;transformational AI&rdquo; when they&apos;re really just catching up to competitors. Or they measure a genuinely transformational project with quarterly ROI expectations. Both paths fail.</p>

        <p>The catch-up project needs speed. Competitors finished this two years ago. Northern Star is racing to close a gap before it becomes fatal. Timeline: six to twelve months, not because that&apos;s ideal, but because they don&apos;t have longer. If this takes two years, the gap widens beyond recovery. They&apos;re executing a playbook that exists. Fast implementation, proven approach, table stakes to stay competitive.</p>

        <p>The compete-better project needs better execution than competitors. Everyone has blast optimization. Northern Star wants theirs to deliver more value. Timeline: twelve to eighteen months because they need to tune the AI to their specific geology, their specific equipment, their specific blast patterns. Rush it and they deploy something mediocre that doesn&apos;t beat competitors. Take too long and competitors improve while they&apos;re still building.</p>

        <p>The nobody-else-is-doing-this project needs patience. Timeline: twenty-four to thirty-six months because Northern Star is creating something that doesn&apos;t exist yet. No playbook. No vendor solution. They&apos;re figuring it out as they go. If leadership measures this on quarterly ROI, they&apos;ll kill it before it works. This is the project that could enable fifteen million in new annual revenue from sites currently sitting idle. But it takes years to prove out.</p>

        <p>Three timelines. Three risk profiles. Three different ways to compete.</p>

        <p>The trap: Northern Star&apos;s leadership announces the remote sites project as &ldquo;transformational AI&rdquo; to the board. The board gets excited. Then finance measures it on twelve-month ROI. The project burns through budget in year one with limited results because it&apos;s still being developed. Finance gets nervous. Leadership defends it but can&apos;t show the transformation they promised. Project dies in year two, three months before it would have worked.</p>

        <p>Or the opposite trap: Northern Star treats the catch-up project like an experiment. They give it a patient timeline and tolerance for learning. Eighteen months later, they&apos;ve built something good. Their competitors finished the same thing in nine months using vendor solutions. Northern Star spent twice as long and twice as much to reach table stakes.</p>

        <p>Match ambition to timeline. Match timeline to resource allocation. Match resource allocation to how you measure success.</p>

        <p>Be honest about what you&apos;re building. The catch-up project is survival. The compete-better project is racing competitors. The nobody-else project is attempting something new. Call each what it is.</p>

        <p>What&apos;s the specific outcome? Not vague transformation. Not innovation slides. What does someone need to start doing, stop doing, or do differently? What makes this urgent? What are they using instead of AI?</p>

        <p>If you can&apos;t answer specifically, you don&apos;t have a problem. You have a technology looking for a problem to justify it.</p>

        <p>Dr. Strangebot loves that ambiguity. He feeds on it.</p>

        <p>Now that you know what you&apos;re building and why, here&apos;s the uncomfortable question: What are you willing to kill to fund it?</p>
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
        <Link href="/prologue" className="chapter-nav-link">
          <span style={navLabel}>PREVIOUS CHAPTER</span>
          <span style={navTitle}>← Prologue: Dr. Strangebot</span>
        </Link>
        <Link href="/decision-2" className="chapter-nav-link" style={{ textAlign: 'right' }}>
          <span style={navLabel}>NEXT CHAPTER</span>
          <span style={navTitle}>Decision 2: What Dies to Fund This? →</span>
        </Link>
      </nav>
    </article>
  );
}
