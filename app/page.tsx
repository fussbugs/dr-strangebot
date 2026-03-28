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
      {/* Ambient background glow */}
      <div
        style={{
          position: 'absolute',
          top: '8%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '900px',
          height: '700px',
          background:
            'radial-gradient(ellipse at center, rgba(139, 128, 249, 0.07) 0%, transparent 65%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <main
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '780px',
          margin: '0 auto',
          padding: '5rem 2rem',
        }}
      >
        {/* Brand mark */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.875rem',
            marginBottom: '4rem',
          }}
        >
          <div
            style={{
              width: '48px',
              height: '48px',
              background: 'var(--accent-violet-dim)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid var(--border)',
              boxShadow: '0 0 30px rgba(139, 128, 249, 0.15)',
              flexShrink: 0,
            }}
          >
            <Image
              src="/icons/robot.svg"
              alt="Dr. Strangebot"
              width={28}
              height={28}
            />
          </div>
          <span
            style={{
              color: 'var(--text-muted)',
              fontSize: '0.7rem',
              letterSpacing: '0.18em',
              fontWeight: 600,
              fontFamily: 'var(--font-geist-mono)',
            }}
          >
            VIRAPO LIMITED
          </span>
        </div>

        {/* Title block */}
        <div style={{ marginBottom: '4rem' }}>
          <h1
            style={{
              fontSize: 'clamp(3rem, 7vw, 5.25rem)',
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              background:
                'linear-gradient(135deg, #ffffff 0%, #c4bdff 40%, #8b80f9 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '1.25rem',
            }}
          >
            Dr. Strangebot
          </h1>

          <p
            style={{
              color: 'var(--accent-gold)',
              fontSize: '1.1rem',
              fontWeight: 500,
              marginBottom: '0.625rem',
            }}
          >
            How to Build AI That Works (or Admit It Doesn&apos;t)
          </p>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            by{' '}
            <span
              style={{ color: 'var(--text-primary)', fontWeight: 600 }}
            >
              Vinay Poojary
            </span>
          </p>
        </div>

        {/* Hero: Book cover + Description */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            gap: '3rem',
            alignItems: 'start',
            marginBottom: '5rem',
          }}
        >
          <Link href="/prologue" style={{ display: 'block', flexShrink: 0 }}>
            <div
              style={{
                borderRadius: '14px',
                overflow: 'hidden',
                boxShadow:
                  '0 0 60px rgba(139, 128, 249, 0.2), 0 25px 70px rgba(0,0,0,0.7)',
                border: '1px solid var(--border)',
              }}
            >
              <Image
                src="/Dr Strangebot.png"
                alt="Dr. Strangebot Book Cover"
                width={180}
                height={180}
                priority
                style={{ display: 'block' }}
              />
            </div>
          </Link>

          <div>
            <p
              style={{
                color: 'var(--text-body)',
                lineHeight: 1.85,
                fontSize: '1.05rem',
                marginBottom: '2rem',
              }}
            >
              Companies fund AI projects that become zombies—alive, consuming
              resources and delivering nothing. This book captures six
              decisions which separate projects that succeed from those that
              fail.
            </p>

            <Link
              href="/prologue"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'var(--accent-violet)',
                color: '#fff',
                padding: '0.75rem 1.625rem',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '0.9rem',
                textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(139, 128, 249, 0.3)',
              }}
            >
              Start Reading →
            </Link>
          </div>
        </div>

        {/* Table of Contents */}
        <div style={{ marginBottom: '5rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.25rem',
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
              style={{
                flex: 1,
                height: '1px',
                background: 'var(--border-dim)',
              }}
            />
          </div>

          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}
          >
            {chapters.map((ch) => (
              <Link key={ch.href} href={ch.href} className="toc-card">
                <span
                  style={{
                    fontSize: '1.3rem',
                    fontWeight: 800,
                    color: 'var(--text-muted)',
                    fontFamily: 'var(--font-geist-mono)',
                    minWidth: '2.75rem',
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
                      fontSize: '0.975rem',
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
        </div>

        {/* Footer */}
        <footer
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid var(--border-dim)',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '2rem',
              fontSize: '0.875rem',
              marginBottom: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <Link href="/about" style={{ color: 'var(--text-secondary)' }}>
              About
            </Link>
            <Link href="/speaking" style={{ color: 'var(--text-secondary)' }}>
              Speaking
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
          <p
            style={{
              textAlign: 'center',
              color: 'var(--text-muted)',
              fontSize: '0.8rem',
            }}
          >
            © 2026 Virapo Limited
          </p>
        </footer>
      </main>
    </div>
  );
}
