import Link from 'next/link';
import Image from 'next/image';
import { essays } from './essays';

export default function NewsletterPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-base)' }}>
      {/* Top nav */}
      <header style={{ borderBottom: '1px solid var(--border-dim)', padding: '1rem 2rem' }}>
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
            WRITING
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
            Newsletter
          </h1>
        </div>

        {essays.length === 0 ? (
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.8 }}>
            Essays coming soon.
          </p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {essays.map((essay) => (
              <Link
                key={essay.slug}
                href={`/newsletter/${essay.slug}`}
                style={{
                  display: 'block',
                  padding: '1.75rem 0',
                  borderBottom: '1px solid var(--border-dim)',
                  textDecoration: 'none',
                  transition: 'opacity 0.15s',
                }}
              >
                <div
                  style={{
                    fontSize: '0.6rem',
                    fontWeight: 700,
                    letterSpacing: '0.18em',
                    color: 'var(--text-muted)',
                    fontFamily: 'var(--font-geist-mono)',
                    marginBottom: '0.5rem',
                  }}
                >
                  {essay.date.toUpperCase()}
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem',
                  }}
                >
                  <h2
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      lineHeight: 1.4,
                      margin: 0,
                    }}
                  >
                    {essay.title}
                  </h2>
                  <span style={{ color: 'var(--text-muted)', flexShrink: 0 }}>→</span>
                </div>
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.925rem',
                    lineHeight: 1.7,
                    marginTop: '0.5rem',
                  }}
                >
                  {essay.body[0].length > 160
                    ? essay.body[0].slice(0, 160).trimEnd() + '…'
                    : essay.body[0]}
                </p>
              </Link>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid var(--border-dim)', padding: '2.5rem 2rem' }}>
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
            <a href="https://linkedin.com/in/poojary" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>LinkedIn</a>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>© 2026 Virapo Limited</p>
        </div>
      </footer>
    </div>
  );
}
