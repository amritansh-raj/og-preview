import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const name = searchParams.get('name') || 'Amritansh Rai';
  const handle = searchParams.get('handle') || '@amritanshr';
  const pnl = searchParams.get('pnl') || '+₹2.45L';
  const isPositive = !pnl.startsWith('-');
  const winRate = searchParams.get('winRate') || '68.3%';
  const trades = searchParams.get('trades') || '1,204';

  const initials = name
    .split(' ')
    .map((w: string) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  const pnlColor = isPositive ? '#22c55e' : '#ef4444';

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(135deg, #0c0c10 0%, #13131a 60%, #0f1019 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Top accent gradient bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4)',
          }}
        />

        {/* Subtle background glow */}
        <div
          style={{
            position: 'absolute',
            top: '-120px',
            right: '-80px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)',
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '52px 64px',
            height: '100%',
            boxSizing: 'border-box',
          }}
        >
          {/* Header Row */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '40px',
            }}
          >
            <span style={{ fontSize: '26px', color: '#6b7280', letterSpacing: '0.02em' }}>
              915 by Groww
            </span>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(99,102,241,0.12)',
                border: '1px solid rgba(129,140,248,0.25)',
                borderRadius: '100px',
                padding: '6px 16px',
              }}
            >
              <span style={{ fontSize: '16px', color: '#818cf8' }}>✓</span>
              <span style={{ fontSize: '16px', color: '#818cf8', letterSpacing: '0.03em' }}>
                Broker Verified
              </span>
            </div>
          </div>

          {/* User Row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
              marginBottom: '44px',
            }}
          >
            {/* Avatar */}
            <div
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
                color: '#ffffff',
                flexShrink: 0,
              }}
            >
              {initials}
            </div>
            {/* Name & handle */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span style={{ fontSize: '36px', color: '#f9fafb', fontWeight: 700, lineHeight: 1.1 }}>
                {name}
              </span>
              <span style={{ fontSize: '20px', color: '#6b7280' }}>{handle}</span>
            </div>
          </div>

          {/* P&L Section */}
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '44px' }}
          >
            <span
              style={{
                fontSize: '18px',
                color: '#6b7280',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              Net P&L
            </span>
            <span
              style={{
                fontSize: '80px',
                color: pnlColor,
                lineHeight: 1,
                letterSpacing: '-0.02em',
                fontWeight: 700,
              }}
            >
              {pnl}
            </span>
          </div>

          {/* Stats Row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '48px',
              paddingTop: '28px',
              borderTop: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span
                style={{
                  fontSize: '14px',
                  color: '#4b5563',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                Win Rate
              </span>
              <span style={{ fontSize: '28px', color: '#f9fafb', fontWeight: 700 }}>{winRate}</span>
            </div>

            <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.08)' }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span
                style={{
                  fontSize: '14px',
                  color: '#4b5563',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                Total Trades
              </span>
              <span style={{ fontSize: '28px', color: '#f9fafb', fontWeight: 700 }}>{trades}</span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      // No custom font — Satori uses its built-in fallback (similar to Inter)
    },
  );
}
