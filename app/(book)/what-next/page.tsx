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

export default function WhatNextPage() {
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
          EPILOGUE
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
          What Happens Next
        </h1>
      </div>

      {/* Content */}
      <div className="prose-chapter">
        <p>You&apos;ve built AI that works. You made the six decisions that separate success from Dr. Strangebot. Your organization is different now. The question is: different how?</p>

        <p>Some organizations build AI and nothing else changes. They automate one process. They celebrate. Then they go back to business as usual. The AI becomes a tool they use, not a capability that changes how they compete.</p>

        <p>Other organizations build AI and discover they&apos;ve changed how they make decisions, allocate resources, and think about what&apos;s possible. The AI becomes a catalyst for broader transformation.</p>

        <p>The difference isn&apos;t the AI. It&apos;s what the organization does with the lessons from building it.</p>

        <p>Northern Star Mining built three AI systems. Predictive maintenance. Blast optimization. Remote site operations. Each one works. Each one delivers value. But the real impact isn&apos;t the AI itself. It&apos;s what Northern Star learned about themselves.</p>

        <p>They learned they can kill projects cleanly when evidence says they should stop. They learned they can stage investments and make go/no-go decisions based on proof, not politics. They learned they can assign clear ownership with matching authority and accountability. They learned they can measure adoption as rigorously as they measure accuracy.</p>

        <p>Those lessons apply far beyond AI. They apply to any transformation initiative. Any major technology investment. Any project where success requires changing how people work.</p>

        <p>The AI projects taught Northern Star how to make uncomfortable decisions. That&apos;s more valuable than any individual AI system.</p>

        <p>Here&apos;s what most people miss about AI: It&apos;s not replacing jobs. It&apos;s redefining what expertise means. The blast engineer who designed patterns based on twenty years of experience? Their expertise isn&apos;t obsolete. It&apos;s different. Now they&apos;re the person who knows when to trust the AI and when to override it. When to use the AI&apos;s recommendations and when geological conditions require human judgment. The AI doesn&apos;t replace their expertise. It changes what that expertise looks like.</p>

        <p>The maintenance supervisor who scheduled repairs based on manufacturer guidelines? Their job isn&apos;t going away. It&apos;s changing. Now they interpret AI predictions, decide when to act on alerts, and balance predictive maintenance against operational constraints. The AI handles the data analysis. The supervisor handles the judgment calls the AI can&apos;t make.</p>

        <p>That&apos;s the pattern: AI handles the data-intensive, pattern-recognition work. Humans handle the context-dependent, judgment-intensive work. Neither replaces the other. They complement each other.</p>

        <p>But here&apos;s the uncomfortable part: Not everyone adapts. Some people can&apos;t or won&apos;t make the transition from &ldquo;I decide based on experience&rdquo; to &ldquo;I decide based on AI recommendations plus experience.&rdquo; Some people can&apos;t trust AI. Some people can&apos;t learn to work with it effectively. Some people just want to keep doing what they&apos;ve always done.</p>

        <p>What happens to them?</p>

        <p>Organizations face hard choices. Keep people who can&apos;t adapt and accept reduced productivity. Retrain them intensively and hope they can adjust. Move them to roles where AI isn&apos;t needed. Or make the hardest choice: Some people won&apos;t have roles in the AI-augmented organization.</p>

        <p>That&apos;s the part nobody wants to say out loud. AI doesn&apos;t directly eliminate jobs. But it redefines competence. Some people can&apos;t meet the new definition. What happens to them isn&apos;t an AI question. It&apos;s an organizational values question.</p>

        <p>Different organizations will answer differently. Some will invest heavily in retraining and support. Some will accept higher costs to keep people in roles that AI could optimize away. Some will make cuts. None of those choices are obviously right or obviously wrong. They&apos;re choices that reflect what the organization values.</p>

        <p>The one thing that&apos;s clearly wrong: pretending the choice doesn&apos;t exist. Pretending AI won&apos;t change what expertise looks like. Pretending everyone will adapt seamlessly. That&apos;s denial. And denial doesn&apos;t help anyone—not the organization, not the people whose roles are changing.</p>

        <div className="insight-box">
          <p>What you need to know: The AI deployment itself might be technically neutral. But the organizational response to people who can&apos;t adapt isn&apos;t. That response reflects values: Do we invest in helping people transition? Do we accept reduced efficiency to retain people? Do we prioritize business outcomes over individual accommodation? There&apos;s no universally correct answer. But there is honesty or dishonesty about the tradeoffs.</p>
        </div>

        <p>Here&apos;s the paradox nobody talks about: AI makes some work so efficient that it exposes how much slack existed in the system. When predictive maintenance reduces unplanned downtime by 40%, you discover you needed fewer maintenance teams than you thought. When blast optimization improves ore recovery by 5%, you need fewer blasts to extract the same value. When remote sites operate with minimal staff, you realize how many people were needed only because the technology didn&apos;t exist to work differently.</p>

        <p>That slack wasn&apos;t waste. It was buffer against uncertainty. It was insurance against problems. It was the cost of operating without better tools. But when AI reduces that uncertainty, the buffer isn&apos;t needed anymore. What happens to the people who were the buffer?</p>

        <p>Some organizations deploy AI and keep the same staffing levels. The extra capacity goes into doing more—more maintenance, more optimization, more site development. Productivity per person increases. The organization grows without adding people. That&apos;s one path.</p>

        <p>Other organizations deploy AI and reduce headcount proportionally to efficiency gains. They capture the cost savings directly. The organization becomes leaner. That&apos;s another path.</p>

        <p>Both are economically rational. Both are organizationally defensible. The difference is values and strategy, not right and wrong.</p>

        <p>But here&apos;s what&apos;s not defensible: deploying AI, capturing efficiency gains, keeping headcount constant, and pretending nothing changed. That&apos;s the worst of all worlds. People are less engaged because they see their expertise becoming less valued. The organization doesn&apos;t capture the cost savings. And nobody is honest about what&apos;s happening.</p>

        <p>If you deploy AI and efficiency increases 40%, you face a choice: Do something more with the freed capacity or reduce costs by adjusting headcount. The one thing you can&apos;t do is nothing.</p>

        <p>The societal question: If AI makes many jobs more efficient, what happens to overall employment? Does productivity growth create new opportunities that absorb displaced workers? Or does it concentrate wealth among those who own AI systems while leaving others behind?</p>

        <p>That&apos;s beyond the scope of individual organizational decisions. But it&apos;s the question societies will grapple with as AI scales. The answer won&apos;t come from technology. It&apos;ll come from policy choices about education, redistribution, social safety nets, and how we define value in a world where AI handles many tasks humans used to do.</p>

        <p>What&apos;s clear: Organizations that deploy AI successfully will face pressure. From employees whose roles change. From communities where displaced workers live. From governments trying to manage economic transitions. How organizations respond to that pressure will define whether AI is seen as broadly beneficial or narrowly extractive.</p>

        <p>You can&apos;t solve societal problems from within one organization. But you can be honest about tradeoffs, transparent about impacts, and thoughtful about how you manage transitions. That won&apos;t solve everything. But it&apos;s better than pretending AI deployment is cost-free and impact-neutral.</p>

        <p>The economic logic of AI is straightforward: Organizations that deploy it successfully gain efficiency advantages. They produce more with less. They optimize operations competitors can&apos;t match. They operate in contexts others can&apos;t reach. That creates competitive pressure. Competitors must deploy AI or accept permanent disadvantage.</p>

        <p>That logic drives adoption even when individual organizations might prefer to avoid the workforce disruptions AI creates. You might wish you didn&apos;t have to redeploy people or reduce headcount. But if competitors deploy AI and gain 20% cost advantages, you either match them or lose market share until you can&apos;t compete.</p>

        <p>The result: AI adoption isn&apos;t optional for competitive organizations. It&apos;s driven by competitive dynamics, not just efficiency opportunities. Organizations that hesitate for ethical concerns about workforce impacts still face the same pressure. Competitors who prioritize efficiency over other values gain advantages that become hard to overcome.</p>

        <p>That&apos;s the dilemma: Individual organizations can&apos;t solve systemic problems. They can manage their transitions thoughtfully. They can support affected workers. They can be transparent about tradeoffs. But they can&apos;t opt out of competitive dynamics that force AI adoption.</p>

        <p>This is where policy matters. If societies want AI adoption to proceed in ways that distribute benefits broadly rather than concentrating them narrowly, policy intervention is required. Individual organizations acting within competitive markets won&apos;t spontaneously solve societal-level problems.</p>

        <p>But policy intervention is slow. Competitive dynamics are fast. Organizations face AI deployment decisions now based on current conditions, not future policy frameworks that might or might not emerge.</p>

        <p>Here&apos;s what organizations can control: How honestly they assess AI&apos;s impact on their workforce. How transparently they communicate changes. How much they invest in helping people transition. How thoughtfully they balance efficiency gains against other values. How clearly they make tradeoffs rather than pretending conflicts don&apos;t exist.</p>

        <p>None of that solves everything. But it&apos;s the difference between organizations that deploy AI responsibly within existing constraints and organizations that deploy it recklessly while pretending there are no tradeoffs.</p>

        <p>The future isn&apos;t written. AI&apos;s impact on work, employment, and society depends on choices we make—as organizations, as policymakers, as societies. Technology creates possibilities. Humans decide which possibilities to pursue and how to manage their consequences.</p>

        <p>The pattern is clear: AI that works gets deployed. Organizations that deploy it gain advantages. Competitors face pressure to match. Workers adapt or struggle. Some organizations manage transitions well. Others don&apos;t. Policy interventions might smooth the transitions. Or they might not.</p>

        <p>What&apos;s certain: AI deployment will continue because competitive dynamics drive it. The question isn&apos;t whether AI reshapes work. The question is whether we manage that reshaping thoughtfully or recklessly.</p>

        <p>You&apos;ve learned how to build AI that works. You&apos;ve learned how to avoid Dr. Strangebot. You&apos;ve learned how to make the six decisions that separate success from failure. Now comes the harder question: What do you do with that capability?</p>

        <p>Do you deploy AI to capture efficiency gains regardless of impacts? Do you deploy it while investing heavily in transition support? Do you hesitate until society figures out how to manage workforce disruptions? Do you try to balance competing values while knowing you can&apos;t optimize for everything simultaneously?</p>

        <p>There&apos;s no single right answer. There are choices that reflect your organization&apos;s values, your competitive context, your assessment of responsibilities, and your tolerance for complexity.</p>

        <p>What&apos;s not an option: pretending the question doesn&apos;t exist. Pretending AI deployment is neutral. Pretending everyone benefits equally. Pretending there are no tradeoffs between efficiency and other values.</p>

        <p>You killed Dr. Strangebot. You built AI that works. Now you face the consequences of success. How you manage those consequences will matter more than how you built the AI.</p>

        <p>Choose honestly. Choose thoughtfully. Choose knowing that any choice involves tradeoffs. But choose. Because choosing nothing is choosing to let competitive dynamics and organizational inertia make the choice for you.</p>

        <p>That&apos;s not better. That&apos;s just avoiding accountability.</p>

        <p>You know how to build AI that works. The question is: What will you build, and what will you do with it once it&apos;s working?</p>

        <p>That&apos;s what happens next.</p>
      </div>

      {/* Chapter navigation */}
      <nav
        style={{
          marginTop: '4rem',
          paddingTop: '2.5rem',
          borderTop: '1px solid var(--border-dim)',
          display: 'flex',
          justifyContent: 'flex-start',
        }}
      >
        <Link href="/decision-6" className="chapter-nav-link">
          <span style={navLabel}>PREVIOUS CHAPTER</span>
          <span style={navTitle}>← Decision 6: Will It Work in Reality?</span>
        </Link>
      </nav>
    </article>
  );
}
