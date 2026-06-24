import React from 'react';

export function Tag({ children, active = false, onClick, onRemove, style = {} }) {
  const [hover, setHover] = React.useState(false);
  return (
    <span
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 500, lineHeight: 1,
        padding: '7px 12px', borderRadius: 'var(--radius-pill)',
        cursor: onClick ? 'pointer' : 'default',
        background: active ? 'var(--forest-800)' : hover && onClick ? 'var(--stone-100)' : 'var(--surface-card)',
        color: active ? 'var(--text-inverse)' : 'var(--text-body)',
        border: `1px solid ${active ? 'var(--forest-800)' : 'var(--border-default)'}`,
        transition: 'background var(--dur-fast) var(--ease-standard)',
        ...style,
      }}
    >
      {children}
      {onRemove && (
        <span
          onClick={(e) => { e.stopPropagation(); onRemove(e); }}
          style={{ marginLeft: 2, opacity: 0.6, fontWeight: 600, cursor: 'pointer' }}
        >×</span>
      )}
    </span>
  );
}
