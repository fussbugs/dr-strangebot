import Link from 'next/link';
import Image from 'next/image';

const topics = [
  {
    title: 'Digital Transformation in Traditional Industries',
    body: 'How to deploy emerging technologies in organizations with legacy systems, entrenched workflows, and operational constraints that kill half-baked implementations. Based on leading transformations across mining, healthcare, and utilities at global scale.',
  },
  {
    title: 'Why AI Projects Fail (And How to Prevent It)',
    body: 'The six decisions that separate projects that deliver value from expensive zombies that consume resources without producing results. Drawn from leading AI deployments at Fortune 100 enterprises.',
  },
  {
    title: 'Leading Change When Nobody Wants to Change',
    body: 'Managing organizational resistance, political dynamics, and stakeholder conflicts during large-scale technology rollouts. Practical approaches from deploying systems across continents and cultures.',
  },
  {
    title: 'Building the People Stack for an AI-First Organization',
    body: 'Who you hire has changed. How you train has changed. What you pay for, and why, has changed. Most enterprises are still running AI on top of job architectures, compensation models, and performance systems built for a pre-AI world — and wondering why the technology isn\'t delivering.',
  },
  {
    title: 'The Innovation Stack: Reimagining Creative Work in a Post-AI Enterprise',
    body: 'Every AI business case promises the same thing — free your people from the routine so they can do higher-order work. Almost no organization has figured out what that actually means or how to build for it. Creative thinking doesn\'t happen because you cleared someone\'s calendar. It requires different conditions, different incentives, and different leadership behaviors than the ones that made your operation run efficiently in the first place.',
  },
];

const engagements = [
  'Mining Investment North America',
  'Decarbonized Mines Summit Canada',
  'Digitalization in Mining North America',
  'Energy Transition and Emission Reduction',
  'Mining 4.0 (Europe & North America)',
  'Digitalization and AI in Mining',
  'Mining Tech',
  'Missouri University of Science and Technology',
];

export default function SpeakingPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-base)' }}>
      {/* Top nav */}
      <header
        style={{
          borderBottom: '1px solid var(--border-dim)',
          padding: '1rem 2rem',
        }}
      >
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--text-secondary)',
              fontSize: '0.875rem',
              fontWeight: 500,
              textDecoration: 'none',
            }}
          >
            <Image src="/icons/robot.svg" alt="" width={28} height={28} style={{ opacity: 0.75 }} />
            Dr. Strangebot
          </Link>
        </div>
      </header>

      <main style={{ maxWidth: '720px', margin: '0 auto', padding: '4rem 2rem 6rem' }}>
        {/* Page header */}
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
            ENGAGEMENTS
          </div>
          <h1
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              color: 'var(--text-primary)',
              marginBottom: '2rem',
            }}
          >
            Speaking
          </h1>

          {/* Bio with photo */}
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
            <div style={{ flex: 1 }}>
              <p
                style={{
                  color: 'var(--text-body)',
                  fontSize: '1.05rem',
                  lineHeight: 1.9,
                  marginBottom: '1.25rem',
                }}
              >
                Vinay Poojary has spent his career inside the most complex transformation programs in the world — partnering with Boards and C-suites at global Fortune 100 enterprises across healthcare, mining, utilities, and telecommunications.
              </p>
              <p
                style={{
                  color: 'var(--text-body)',
                  fontSize: '1.05rem',
                  lineHeight: 1.9,
                }}
              >
                He speaks from hard-won experience, not theory — on leading large-scale enterprise change, building the people and organizational systems that sustain transformation, navigating the intersection of technology and human complexity, and what it genuinely takes to make ambitious initiatives succeed in organizations where the stakes are real and the margin for failure is not.
              </p>
            </div>

            {/* Headshot */}
            <div style={{ flexShrink: 0 }}>
              <div
                style={{
                  width: '140px',
                  height: '140px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '2px solid var(--border)',
                  boxShadow: '0 0 32px rgba(139, 128, 249, 0.15)',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/vinay_poojary_grayscale.jpg"
                alt="Vinay Poojary"
                style={{ objectFit: 'cover', width: '100%', height: '100%', filter: 'grayscale(20%)' }}
              />
              </div>
            </div>
          </div>
        </div>

        {/* Topics */}
        <div style={{ marginBottom: '4rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}
          >
            <span
              style={{
                fontSize: '0.6rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-geist-mono)',
                whiteSpace: 'nowrap',
              }}
            >
              SPEAKING TOPICS
            </span>
            <div style={{ flex: 1, height: '1px', background: 'var(--border-dim)' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {topics.map((topic, i) => (
              <div
                key={i}
                style={{
                  padding: '1.75rem 0',
                  borderBottom: '1px solid var(--border-dim)',
                }}
              >
                <p
                  style={{
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    fontSize: '1rem',
                    marginBottom: '0.625rem',
                    lineHeight: 1.4,
                  }}
                >
                  {topic.title}
                </p>
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.925rem',
                    lineHeight: 1.75,
                  }}
                >
                  {topic.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Past Engagements */}
        <div style={{ marginBottom: '3rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}
          >
            <span
              style={{
                fontSize: '0.6rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-geist-mono)',
                whiteSpace: 'nowrap',
              }}
            >
              PAST ENGAGEMENTS
            </span>
            <div style={{ flex: 1, height: '1px', background: 'var(--border-dim)' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {engagements.map((e, i) => (
              <p
                key={i}
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.925rem',
                  paddingLeft: '1rem',
                  borderLeft: '2px solid var(--border-dim)',
                }}
              >
                {e}
              </p>
            ))}
          </div>
        </div>

        <div
          style={{
            padding: '1.5rem',
            background: 'var(--bg-surface)',
            borderRadius: '10px',
            border: '1px solid var(--border-dim)',
          }}
        >
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.75rem' }}>
            For speaking inquiries:
          </p>
          <a
            href="https://linkedin.com/in/poojary"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--accent-violet)',
              fontWeight: 600,
              fontSize: '0.9rem',
            }}
          >
            Connect on LinkedIn →
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          borderTop: '1px solid var(--border-dim)',
          padding: '2.5rem 2rem',
        }}
      >
        <div
          style={{
            maxWidth: '720px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '2rem',
              fontSize: '0.875rem',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <Link href="/about" style={{ color: 'var(--text-secondary)' }}>About</Link>
            <Link href="/speaking" style={{ color: 'var(--text-secondary)' }}>Speaking</Link>
            <Link href="/newsletter" style={{ color: 'var(--text-secondary)' }}>Newsletter</Link>
            <Link href="/disclaimer" style={{ color: 'var(--text-secondary)' }}>Disclaimer</Link>
            <a
              href="https://linkedin.com/in/poojary"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--text-secondary)' }}
            >
              LinkedIn
            </a>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
            © 2026 Virapo Limited
          </p>
        </div>
      </footer>
    </div>
  );
}
