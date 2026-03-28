import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
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
            <Image src="/icons/robot.svg" alt="" width={18} height={18} style={{ opacity: 0.6 }} />
            Dr. Strangebot
          </Link>
        </div>
      </header>

      <main style={{ maxWidth: '720px', margin: '0 auto', padding: '4rem 2rem 6rem' }}>
        {/* Page header */}
        <div style={{ marginBottom: '3rem' }}>
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
            AUTHOR
          </div>
          <h1
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              color: 'var(--text-primary)',
            }}
          >
            About
          </h1>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.75rem',
          }}
        >
          <p
            style={{
              color: 'var(--text-body)',
              fontSize: '1.1rem',
              lineHeight: 1.9,
            }}
          >
            Vinay Poojary is a senior technology executive who has led digital transformation and AI strategy at global Fortune 100 enterprises across healthcare, mining, utilities, and telecommunications.
          </p>

          <p
            style={{
              color: 'var(--text-body)',
              fontSize: '1.1rem',
              lineHeight: 1.9,
            }}
          >
            He has worked with Boards and executive leadership to build and scale technology initiatives at Vale, Oracle Cerner, PwC, Deloitte, and Aon—spanning operations across North America, Asia, and South America.
          </p>

          <p
            style={{
              color: 'var(--text-body)',
              fontSize: '1.1rem',
              lineHeight: 1.9,
            }}
          >
            His work focuses on making transformation projects succeed in traditional organizations—and preventing the failures that happen despite having the right technology, the right talent, and executive support.
          </p>
        </div>

        <div
          style={{
            marginTop: '3rem',
            paddingTop: '2rem',
            borderTop: '1px solid var(--border-dim)',
          }}
        >
          <a
            href="https://linkedin.com/in/poojary"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
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
