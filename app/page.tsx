import Image from 'next/image';
import Link from 'next/link';

const chapters = [
  { num: '00', label: 'Prologue', title: 'Dr. Strangebot', href: '/prologue' },
  { num: '01', label: 'Decision 1', title: 'What Are You Building and Why?', href: '/decision-1' },
  { num: '02', label: 'Decision 2', title: 'What Dies to Fund This?', href: '/decision-2' },
  { num: '03', label: 'Decision 3', title: "Can You Prove It's Worth It?", href: '/decision-3' },
  { num: '04', label: 'Decision 4', title: "Who's Responsible?", href: '/decision-4' },
  { num: '05', label: 'Decision 5', title: 'Are You Ready to Build?', href: '/decision-5' },
  { num: '06', label: 'Decision 6', title: 'Will It Work in Reality?', href: '/decision-6' },
  { num: '07', label: 'Epilogue', title: 'What Happens Next', href: '/what-next' },
];

export default function Home() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--bg-base)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glows */}
      <div
        style={{
          position: 'absolute',
          top: '5%',
          left: '-5%',
          width: '700px',
          height: '700px',
          background:
            'radial-gradient(ellipse at center, rgba(139, 128, 249, 0.13) 0%, transparent 65%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '40%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background:
            'radial-gradient(ellipse at center, rgba(240, 180, 41, 0.06) 0%, transparent 65%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <main
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1120px',
          margin: '0 auto',
          padding: '0 3rem',
        }}
      >
        {/* Top bar — robot icon only */}
        <div style={{ padding: '2rem 0' }}>
          <div
            style={{
              width: '42px',
              height: '42px',
              background: 'var(--accent-violet-dim)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid var(--border)',
              boxShadow: '0 0 20px rgba(139, 128, 249, 0.12)',
            }}
          >
            <Image src="/icons/robot.svg" alt="Dr. Strangebot" width={24} height={24} />
          </div>
        </div>

        {/* Hero — book cover + title side by side */}
        <section
          style={{
            display: 'grid',
            gridTemplateColumns: 'min-content 1fr',
            gap: '5rem',
            alignItems: 'center',
            padding: '4rem 0 7rem',
          }}
        >
          {/* Book cover */}
          <Link href="/prologue" style={{ display: 'block', flexShrink: 0 }}>
            <div
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow:
                  '0 0 80px rgba(139, 128, 249, 0.25), 0 40px 80px rgba(0,0,0,0.8)',
                border: '1px solid var(--border)',
              }}
            >
              <Image
                src="/Dr Strangebot.png"
                alt="Dr. Strangebot Book Cover"
                width={300}
                height={300}
                priority
                style={{ display: 'block' }}
              />
            </div>
          </Link>

          {/* Title block */}
          <div>
            {/* Title */}
            <h1
              style={{
                fontSize: 'clamp(4rem, 6.5vw, 6.5rem)',
                fontWeight: 900,
                lineHeight: 0.92,
                letterSpacing: '-0.04em',
                background:
                  'linear-gradient(140deg, #ffffff 0%, #d4ceff 35%, #8b80f9 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '1.75rem',
              }}
            >
              Dr.<br />Strangebot
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: '1.25rem',
                fontWeight: 300,
                color: 'var(--text-body)',
                lineHeight: 1.5,
                marginBottom: '2.25rem',
                letterSpacing: '0.02em',
              }}
            >
              How to Build AI That Works
              <span style={{ color: 'var(--text-secondary)', fontWeight: 300 }}>
                {' '}— or Admit It Doesn&apos;t
              </span>
            </p>

            {/* Author attribution */}
            <p
              style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: '#dde1f5',
                marginBottom: '2.25rem',
                letterSpacing: '0.02em',
              }}
            >
              by Vinay Poojary
            </p>

            {/* Description */}
            <p
              style={{
                color: 'var(--text-body)',
                lineHeight: 1.9,
                fontSize: '1.05rem',
                marginBottom: '2.5rem',
                maxWidth: '460px',
              }}
            >
              Companies fund AI projects that become zombies—alive, consuming
              resources and delivering nothing. Six decisions separate projects
              that succeed from those that fail.
            </p>

            {/* CTA */}
            <Link
              href="/prologue"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.625rem',
                background: 'var(--accent-violet)',
                color: '#fff',
                padding: '0.9rem 2.25rem',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '0.95rem',
                textDecoration: 'none',
                boxShadow: '0 4px 28px rgba(139, 128, 249, 0.4)',
                letterSpacing: '0.01em',
              }}
            >
              Start Reading →
            </Link>
          </div>
        </section>

        {/* Table of Contents */}
        <section style={{ paddingBottom: '6rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              marginBottom: '1.75rem',
            }}
          >
            <span
              style={{
                fontSize: '0.6rem',
                fontWeight: 700,
                letterSpacing: '0.22em',
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-geist-mono)',
                whiteSpace: 'nowrap',
              }}
            >
              TABLE OF CONTENTS
            </span>
            <div
              style={{ flex: 1, height: '1px', background: 'var(--border-dim)' }}
            />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '0.375rem',
            }}
          >
            {chapters.map((ch) => (
              <Link key={ch.href} href={ch.href} className="toc-card">
                <span
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 800,
                    color: 'var(--text-muted)',
                    fontFamily: 'var(--font-geist-mono)',
                    minWidth: '2.5rem',
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                  }}
                >
                  {ch.num}
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: '0.6rem',
                      fontWeight: 700,
                      letterSpacing: '0.18em',
                      color: 'var(--accent-violet)',
                      marginBottom: '0.2rem',
                      fontFamily: 'var(--font-geist-mono)',
                    }}
                  >
                    {ch.label.toUpperCase()}
                  </div>
                  <div
                    style={{
                      color: 'var(--text-primary)',
                      fontWeight: 500,
                      fontSize: '0.925rem',
                      lineHeight: 1.35,
                    }}
                  >
                    {ch.title}
                  </div>
                </div>
                <span
                  style={{
                    color: 'var(--text-muted)',
                    fontSize: '0.875rem',
                    flexShrink: 0,
                  }}
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer
          style={{
            paddingTop: '2rem',
            paddingBottom: '3rem',
            borderTop: '1px solid var(--border-dim)',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                gap: '2rem',
                fontSize: '0.875rem',
                flexWrap: 'wrap',
              }}
            >
              <Link href="/about" style={{ color: 'var(--text-secondary)' }}>
                About
              </Link>
              <Link href="/speaking" style={{ color: 'var(--text-secondary)' }}>
                Speaking
              </Link>
              <Link href="/newsletter" style={{ color: 'var(--text-secondary)' }}>
                Newsletter
              </Link>
              <Link href="/disclaimer" style={{ color: 'var(--text-secondary)' }}>
                Disclaimer
              </Link>
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
      </main>
    </div>
  );
}
