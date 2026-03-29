import Link from 'next/link';
import Image from 'next/image';

export default function DisclaimerPage() {
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
            LEGAL
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
            Copyright & Disclaimer
          </h1>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          <p
            style={{
              color: 'var(--text-primary)',
              fontSize: '1rem',
              lineHeight: 1.8,
              fontWeight: 600,
            }}
          >
            © 2026 Virapo Limited. All rights reserved.
          </p>

          <p style={{ color: 'var(--text-body)', fontSize: '1rem', lineHeight: 1.85 }}>
            The content of this book and website, including all text, concepts, frameworks, and case studies, is proprietary material protected by copyright law. No part of this publication may be reproduced, distributed, or transmitted in any form without prior written permission.
          </p>

          <p style={{ color: 'var(--text-body)', fontSize: '1rem', lineHeight: 1.85 }}>
            The views, opinions, and recommendations expressed in this book and website are solely those of the author, Vinay Poojary, and do not reflect the views of any employer, past or present.
          </p>

          <p style={{ color: 'var(--text-body)', fontSize: '1rem', lineHeight: 1.85 }}>
            The case studies presented are fictional composites created for illustrative purposes. Any resemblance to actual organizations, projects, or individuals is coincidental.
          </p>

          <p style={{ color: 'var(--text-body)', fontSize: '1rem', lineHeight: 1.85 }}>
            This book does not constitute professional advice. Readers should consult with qualified professionals before making business decisions based on the content herein.
          </p>
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
