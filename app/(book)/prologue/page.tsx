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

export default function ProloguePage() {
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
          PROLOGUE
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
          Dr. Strangebot
        </h1>
      </div>

      {/* Content */}
      <div className="prose-chapter">
        <p>You&apos;ve met Dr. Strangebot.</p>

        <p>He was in that meeting last Tuesday—the one about the AI pilot that&apos;s been running for nine months. Where someone said &ldquo;we&apos;re seeing promising early indicators&rdquo; and nobody asked why, after nine months, the indicators are still early.</p>

        <p>You&apos;ve read his status reports. &ldquo;The team continues to make progress.&rdquo; &ldquo;Adoption is building momentum.&rdquo; Words that sound like progress but describe a project running in place.</p>

        <p>You might be building him right now.</p>

        <p>Dr. Strangebot begins with good intentions. An executive reads about AI. A competitor announces an initiative. Someone says: &ldquo;We&apos;re falling behind.&rdquo; Within weeks, there&apos;s a project. Nobody asked what problem it solves—that feels small. Dr. Strangebot is about transformation. Innovation. The future.</p>

        <p>So you fund him. You staff him. You announce him. And Dr. Strangebot takes his first breath.</p>

        <h2>Dr. Strangebot eats three things:</h2>

        <p><strong>Budget.</strong> Not catastrophically. Just steadily. Nobody adds it up. If you did, you&apos;d realize you could have built three real things with what you spent keeping him alive.</p>

        <p><strong>Credibility.</strong> Every extended pilot, every lowered bar, every &ldquo;we&apos;re learning&rdquo; instead of &ldquo;this isn&apos;t working&rdquo;—you spend credibility. Next time you propose AI, people smile politely and decline.</p>

        <p><strong>Opportunity.</strong> Your data scientist maintains Dr. Strangebot instead of building the next thing. Meanwhile, your competitor killed their failing pilot in month three and moved on. They&apos;re winning because they didn&apos;t spend eighteen months feeding a zombie.</p>

        <p>Everyone knows he&apos;s not working. Yet nobody kills him. Because killing him requires someone to say three words out loud, with witnesses: &ldquo;This isn&apos;t working.&rdquo;</p>

        <p>Nobody will say them. So instead they say: &ldquo;Let&apos;s give it one more quarter.&rdquo;</p>

        <p>Dr. Strangebot has one weakness: decisions. Clear decisions. Made quickly. Made honestly. Made when they&apos;re uncomfortable.</p>

        <p>He&apos;s born when you start without defining the problem. He grows when you can&apos;t articulate success. He survives when you won&apos;t say when to stop.</p>

        <p>There are six moments in every AI project where you either make a clear decision or invite Dr. Strangebot in. Some organizations nail these decisions. Some whiff on them. The one they whiff on? That&apos;s where Dr. Strangebot gets in.</p>

        <p>But if you make all six decisions clearly—define the problem, articulate success, set kill conditions, and actually stop when that moment comes—Dr. Strangebot can&apos;t survive. He needs ambiguity. He needs &ldquo;let&apos;s see.&rdquo; He needs &ldquo;one more quarter.&rdquo;</p>

        <p>Deny him those things, and he starves.</p>

        <p>You&apos;re about to read six decisions. They&apos;re not complicated. They&apos;re not technical. What they are is uncomfortable.</p>

        <p>Some organizations can&apos;t make them. Not because they lack capability. Because they lack courage.</p>

        <p>Dr. Strangebot counts on this. He&apos;s been banking on it for decades.</p>

        <p>But some organizations make the uncomfortable decisions. They don&apos;t build Dr. Strangebot. They build AI that works.</p>

        <p>You can be one of them.</p>

        <p>This book is about making those decisions.</p>

        <p>Dr. Strangebot is waiting to see if you will.</p>
      </div>

      {/* Chapter navigation */}
      <nav
        style={{
          marginTop: '4rem',
          paddingTop: '2.5rem',
          borderTop: '1px solid var(--border-dim)',
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Link href="/decision-1" className="chapter-nav-link" style={{ textAlign: 'right' }}>
          <span style={navLabel}>NEXT CHAPTER</span>
          <span style={navTitle}>Decision 1: What Are You Building and Why? →</span>
        </Link>
      </nav>
    </article>
  );
}
