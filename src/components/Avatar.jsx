import React from 'react';

const palette = ['#3a5a44', '#c98a5e', '#2c5a82', '#9c5f37', '#4a7155'];
function hashIdx(s) {
  let h = 0;
  for (let i = 0; i < (s || '').length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h % palette.length;
}

const sizeMap = { sm: 28, md: 36, lg: 48 };

export function Avatar({ name = '', src = null, size = 'md', style = {} }) {
  const px = sizeMap[size] || sizeMap.md;
  const initials = (name || '').split(' ').filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  return (
    <div style={{
      width: px, height: px, borderRadius: 'var(--radius-pill)', flexShrink: 0,
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      background: src ? `center/cover url(${src})` : palette[hashIdx(name)],
      color: 'var(--cream)', fontFamily: 'var(--font-sans)', fontWeight: 600,
      fontSize: px * 0.38, border: '2px solid var(--paper)', boxShadow: 'var(--shadow-xs)',
      ...style,
    }}>
      {!src && initials}
    </div>
  );
}
