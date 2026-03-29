import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { essays } from '../essays';

export function generateStaticParams() {
  return essays.map((e) => ({ slug: e.slug }));
}

export default async function EssayPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const essay = essays.find((e) => e.slug === slug);
  if (!essay) notFound();

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-base)' }}>
      {/* Top nav */}
      <header style={{ borderBottom: '1px solid var(--border-dim)', padding: '1rem 2rem' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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
          <Link
            href="/newsletter"
            style={{
              color: 'var(--text-muted)',
              fontSize: '0.8rem',
              fontFamily: 'var(--font-geist-mono)',
              letterSpacing: '0.1em',
              textDecoration: 'none',
            }}
          >
            ← Newsletter
          </Link>
        </div>
      </header>

      <main style={{ maxWidth: '720px', margin: '0 auto', padding: '4rem 2rem 6rem' }}>
        {/* Essay header */}
        <div style={{ marginBottom: '3rem' }}>
          <div
            style={{
              fontSize: '0.6rem',
              fontWeight: 700,
              letterSpacing: '0.22em',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-geist-mono)',
              marginBottom: '1rem',
            }}
          >
            {essay.date.toUpperCase()}
          </div>
          <h1
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              letterSpacing: '-0.025em',
              color: 'var(--text-primary)',
              marginBottom: '1rem',
            }}
          >
            {essay.title}
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>by Vinay Poojary</p>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'var(--border-dim)', marginBottom: '3rem' }} />

        {/* Essay body */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          {essay.body.map((paragraph, i) => (
            <p
              key={i}
              style={{
                color: 'var(--text-body)',
                fontSize: '1.05rem',
                lineHeight: 1.9,
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>
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
