import React from 'react';

const tones = {
  neutral: { bg: 'var(--stone-100)', fg: 'var(--stone-700)' },
  forest:  { bg: 'var(--forest-100)', fg: 'var(--forest-700)' },
  clay:    { bg: 'var(--clay-100)', fg: 'var(--clay-700)' },
  success: { bg: 'var(--success-bg)', fg: 'var(--success-fg)' },
  warning: { bg: 'var(--warning-bg)', fg: 'var(--warning-fg)' },
  danger:  { bg: 'var(--danger-bg)', fg: 'var(--danger-fg)' },
  info:    { bg: 'var(--info-bg)', fg: 'var(--info-fg)' },
};

/** Compact status / metadata label. Pill by default; `dot` adds a leading indicator. */
export function Badge({ children, tone = 'neutral', dot = false, solid = false, style = {} }) {
  const t = tones[tone] || tones.neutral;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 600, lineHeight: 1,
      letterSpacing: '0.01em', padding: '5px 10px', borderRadius: 'var(--radius-pill)',
      background: solid ? t.fg : t.bg, color: solid ? 'var(--paper)' : t.fg,
      whiteSpace: 'nowrap', ...style,
    }}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: '50%', background: solid ? 'var(--paper)' : t.fg }} />}
      {children}
    </span>
  );
}
