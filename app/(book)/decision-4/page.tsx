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

export default function Decision4Page() {
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
          DECISION 4
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
          Who&apos;s Responsible?
        </h1>
      </div>

      {/* Content */}
      <div className="prose-chapter">
        <p>AI projects fail most often not from bad technology but from unclear ownership. When everyone is responsible, no one is responsible. When no one is responsible, the project drifts until someone kills it or it becomes Dr. Strangebot.</p>

        <p>Here&apos;s how most organizations assign ownership: &ldquo;IT will build the AI. Operations will use it. The business will sponsor it.&rdquo; Three groups. Zero accountability. IT builds what they think operations needs. Operations complains it doesn&apos;t work how they need it to. Business gets frustrated that money is being spent with limited results. Everyone blames everyone else. Nothing works.</p>

        <p>Accountability requires one throat to choke. One person who can&apos;t point to someone else when the project fails. One person whose career depends on this working or knowing when to stop it.</p>

        <p>That&apos;s uncomfortable. Most organizations avoid it. They create steering committees, working groups, cross-functional teams. Lots of people involved. Nobody accountable. That&apos;s not governance. That&apos;s diffusion of responsibility.</p>

        <p>Northern Star Mining&apos;s predictive maintenance project needs an owner. Not a committee. Not &ldquo;IT and Operations jointly.&rdquo; One person whose success or failure is tied to whether this works.</p>

        <p>The wrong choice: Make the IT director responsible. They build the AI. They deploy the technology. But they don&apos;t use it. They don&apos;t maintain equipment. They don&apos;t make maintenance decisions. When the AI fails to predict a crusher breakdown, IT says &ldquo;the model worked as designed; operations didn&apos;t use it correctly.&rdquo; Operations says &ldquo;the model doesn&apos;t fit our workflow; IT didn&apos;t build what we needed.&rdquo; Nobody is accountable for the outcome.</p>

        <p>The right choice: Make the VP of Operations responsible. They use the AI. They benefit from it working. They suffer when it fails. They control resources needed to make it successful—people, processes, equipment access. They can&apos;t blame IT if it doesn&apos;t work. They own both the technology adoption and the operational outcome.</p>

        <p>But here&apos;s the trap: you can&apos;t give someone accountability without authority. The VP of Operations is accountable for predictive maintenance succeeding. But IT builds and operates the AI. If IT deprioritizes the project because they&apos;re slammed with other work, the VP of Operations has no leverage.</p>

        <p>Accountability without authority is a recipe for failure and resentment.</p>

        <p>So Northern Star does this: The VP of Operations owns the project outcome. They have budget authority to hire contractors if IT can&apos;t provide resources. They have escalation authority to the CEO if they&apos;re blocked. They control what gets built—requirements, priorities, timeline. IT provides technical expertise and execution, but the VP of Operations makes the final calls on tradeoffs.</p>

        <p>Authority matches accountability. That&apos;s the only way accountability works.</p>

        <div className="insight-box">
          <p>What you need to know: Authority doesn&apos;t mean &ldquo;do whatever you want without consequence.&rdquo; It means &ldquo;make decisions within defined boundaries and live with the results.&rdquo; The VP of Operations can decide what to build and when to stop. But they can&apos;t escape accountability by blaming someone else. That&apos;s the deal. Authority to decide. Accountability for outcomes. You can&apos;t have one without the other.</p>
        </div>

        <p>Here&apos;s how organizations usually structure AI projects: Technology team builds. Business team uses. Steering committee governs. Nobody is accountable for results because accountability is distributed across multiple people who each control only part of what&apos;s needed for success.</p>

        <p>Better structure: One owner with authority and accountability. Supporting teams with clear responsibilities but not shared ownership.</p>

        <p>Northern Star&apos;s blast optimization project is owned by the VP of Mining Operations. Not co-owned with the VP of Technology. Not governed by a steering committee of five executives. Owned. One person.</p>

        <p>The VP of Mining Operations decides what success looks like. They decide how much to invest. They decide when to expand, pivot, or stop. They have a technology team supporting them. They have geologists providing expertise. But when the CEO asks &ldquo;Is blast optimization working?&rdquo; there&apos;s one person who answers. And if the answer is no, there&apos;s one person accountable.</p>

        <p>That clarity changes everything. The VP can&apos;t say &ldquo;we&apos;re learning&rdquo; indefinitely. They can&apos;t blame technology teams for building the wrong thing. They can&apos;t blame geologists for not adopting it. They own the outcome.</p>

        <p>This is what separates projects that deliver from projects that drift. Clear ownership with matching authority.</p>

        <p>Most organizations assign ownership to people without skin in the game. A project manager coordinates. A steering committee oversees. But nobody&apos;s compensation or promotion depends on whether this works. So nobody makes the hard decisions. Nobody kills the project when it should die. Nobody pushes through obstacles when they could.</p>

        <p>Real accountability requires skin in the game. The owner&apos;s performance review reflects project outcomes. Their bonus depends on it. Their career trajectory changes based on whether this succeeds or fails. That&apos;s skin in the game.</p>

        <p>Northern Star&apos;s remote sites project has the highest risk and highest potential reward. If it works, they operate fifteen remote sites generating $15M annually. If it fails, they wasted two years and millions of dollars.</p>

        <p>Who owns it? Not IT. They&apos;re not operating remote sites. Not a steering committee. They&apos;re not betting their careers on this. The VP of Exploration owns it. Their job is to find and develop new mineral deposits. Remote sites are the future of their role. If this fails, their entire strategy fails. They have maximum skin in the game.</p>

        <p>When you give someone that much accountability, you have to give them matching authority. The VP of Exploration controls which sites to pilot, when to expand, how much to invest, and when to stop. They can hire external AI expertise if internal teams are overloaded. They can pull resources from other projects they own. They make the calls.</p>

        <p>And if it fails, they own the failure. No excuses. No blame-shifting. That&apos;s the deal.</p>

        <p>Most organizations can&apos;t stomach this level of accountability because failure becomes too visible. If the VP of Exploration owns remote sites and it fails, their failure is obvious. So organizations diffuse accountability to protect people from visible failure.</p>

        <p>Result: Nobody fails visibly. But nothing succeeds either.</p>

        <p>The right owner for an AI project isn&apos;t the person who builds it. It&apos;s the person who benefits from it working and suffers when it doesn&apos;t. The person closest to the operational impact. The person who controls the resources needed to make it successful.</p>

        <p>For predictive maintenance: VP of Operations. They maintain equipment. They benefit from reduced downtime. They suffer from unexpected failures. They control maintenance teams, processes, and priorities.</p>

        <p>For blast optimization: VP of Mining Operations. They design blasts. They benefit from better ore recovery. They suffer from poor blast patterns. They control geologists, blast engineers, and mining processes.</p>

        <p>For remote sites: VP of Exploration. They develop new sites. They benefit from operating previously uneconomical deposits. They suffer when remote sites can&apos;t operate profitably. They control which sites to develop and how to staff them.</p>

        <p>Same company. Three different owners. Because ownership should follow operational impact, not organizational hierarchy.</p>

        <p>The wrong owners are people who &ldquo;coordinate&rdquo; but don&apos;t operate. Project managers coordinate. They don&apos;t maintain equipment, design blasts, or operate sites. When things go wrong, they escalate to the real decision-makers. That delay kills projects. By the time real owners hear about problems, it&apos;s often too late to fix them.</p>

        <p>Right ownership means the person making daily decisions has authority to make those decisions without escalating every trade-off. They can shift priorities, reallocate resources, change direction. They don&apos;t need permission from three layers of management for every adjustment.</p>

        <p>Most organizations create ownership structures that require consensus for decisions. The technology team, business team, and steering committee all need to agree before anything changes. Result: nothing changes quickly enough to matter.</p>

        <p>Better: The owner makes decisions. Supporting teams provide input. But the owner decides. Fast. Without waiting for consensus that never comes.</p>

        <div className="insight-box">
          <p>What you need to know: Consensus-based ownership isn&apos;t ownership. It&apos;s a way to avoid accountability by ensuring no single person makes decisions that could be wrong. But AI projects require making decisions with incomplete information under uncertainty. Waiting for consensus means waiting until it&apos;s too late. Real owners make decisions, get feedback, adjust quickly, and own the outcomes.</p>
        </div>

        <p>Authority and accountability have to match. You can&apos;t hold someone accountable for outcomes they can&apos;t control. And you can&apos;t give someone authority without holding them accountable for how they use it.</p>

        <p>Northern Star&apos;s VP of Operations is accountable for predictive maintenance. They control budget allocation for the project. They decide when to expand or stop. They can hire external expertise if internal resources are constrained. They set priorities for their maintenance teams.</p>

        <p>What they can&apos;t control: Whether IT provides data infrastructure. Whether data science teams prioritize their project. Whether other executives support or undermine the initiative.</p>

        <p>So Northern Star gives them escalation paths. If IT can&apos;t deliver infrastructure, they escalate to the CEO. If data science teams are overloaded, they have budget to hire contractors. If other executives block resources, the CEO resolves it.</p>

        <p>That&apos;s matched authority and accountability. The VP controls most of what&apos;s needed for success. For things outside their control, they have mechanisms to remove blockers. They&apos;re not left helpless while still being held accountable.</p>

        <p>The failure mode: giving someone accountability without removing their blockers. &ldquo;You own predictive maintenance. Make it work. But you don&apos;t control IT, you can&apos;t hire externally, and you need three other executives to approve changes.&rdquo; That&apos;s accountability without authority. It fails.</p>

        <p>The question every organization must answer: Who wakes up at 3 AM worried about this project? That person should own it. If nobody wakes up worried, nobody cares enough to make it succeed.</p>

        <p>Northern Star&apos;s VP of Operations wakes up at 3 AM when equipment fails unexpectedly. That person should own predictive maintenance. The VP of Mining Operations wakes up when ore recovery is poor. They own blast optimization. The VP of Exploration wakes up when they can&apos;t develop profitable new sites. They own remote sites.</p>

        <p>Ownership follows worry. Accountability follows consequences.</p>

        <p>Most AI projects have owners who don&apos;t worry because failure doesn&apos;t affect them personally. The project manager coordinates, but their career doesn&apos;t depend on whether this works. The steering committee oversees, but their bonuses aren&apos;t tied to outcomes. The technology team builds, but they measure success by delivering code, not by operational impact.</p>

        <p>Nobody loses sleep. So nobody makes the hard calls. The project drifts. It becomes Dr. Strangebot. And everyone involved points to someone else when asked why it failed.</p>

        <p>Clear ownership means one person can&apos;t sleep if this isn&apos;t working. One person whose career, compensation, and reputation depend on outcomes. One person who has authority to make it work and accountability when it doesn&apos;t.</p>

        <p>That&apos;s uncomfortable. It&apos;s also the only way accountability works.</p>

        <p>Organizations that refuse to assign clear ownership with skin in the game shouldn&apos;t build AI. They&apos;re not serious enough to succeed. They&apos;ll spend money, build technology, and wonder why nothing delivers value.</p>

        <p>The answer: because nobody was responsible for delivering value. They were responsible for building technology, coordinating work, or providing oversight. But not for outcomes.</p>

        <p>Outcomes require ownership. Real ownership. The kind where one person&apos;s career depends on whether this works.</p>

        <p>Dr. Strangebot loves organizations with diffused responsibility. He feeds on steering committees and cross-functional coordination. He thrives when nobody owns outcomes.</p>

        <p>The antidote: one throat to choke. One person who can&apos;t point to someone else when it fails. One person whose authority matches their accountability.</p>

        <p>You know who&apos;s responsible. Now the harder question: Are you actually ready to build this?</p>
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
        <Link href="/decision-3" className="chapter-nav-link">
          <span style={navLabel}>PREVIOUS CHAPTER</span>
          <span style={navTitle}>← Decision 3: Can You Prove It&apos;s Worth It?</span>
        </Link>
        <Link href="/decision-5" className="chapter-nav-link" style={{ textAlign: 'right' }}>
          <span style={navLabel}>NEXT CHAPTER</span>
          <span style={navTitle}>Decision 5: Are You Ready to Build? →</span>
        </Link>
      </nav>
    </article>
  );
}
