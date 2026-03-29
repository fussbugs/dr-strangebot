import Link from 'next/link';
import Image from 'next/image';
import ProgressBar from '../components/ProgressBar';

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-base)' }}>
      <ProgressBar />

      {/* Sticky top navigation */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          borderBottom: '1px solid var(--border-dim)',
          background: 'rgba(7, 7, 15, 0.92)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }}
      >
        <div
          style={{
            maxWidth: '780px',
            margin: '0 auto',
            padding: '0.875rem 2rem',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.625rem',
              color: 'var(--text-secondary)',
              fontSize: '0.875rem',
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'color 0.15s',
            }}
          >
            <Image
              src="/icons/robot.svg"
              alt=""
              width={28}
              height={28}
              style={{ opacity: 0.75 }}
            />
            Dr. Strangebot
          </Link>
        </div>
      </header>

      {/* Reading content */}
      <main
        style={{
          maxWidth: '720px',
          margin: '0 auto',
          padding: '4rem 2rem 6rem',
        }}
      >
        {children}
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
    </div>
  );
}
