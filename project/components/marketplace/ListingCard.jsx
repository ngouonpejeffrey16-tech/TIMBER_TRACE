import React from 'react';
import { Badge } from '../feedback/Badge.jsx';

/**
 * The signature Timber Trace listing card. Image with overlaid acreage badge +
 * save control, then price, location, and parcel facts.
 */
export function ListingCard({
  image, price, acres, location, title, status = 'For sale', verified = false,
  facts = [], saved = false, onSave, onClick, style = {},
}) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: 'var(--surface-card)', border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-md)', overflow: 'hidden', cursor: onClick ? 'pointer' : 'default',
        boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
        transform: hover ? 'translateY(-2px)' : 'none',
        transition: 'box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard)',
        ...style,
      }}
    >
      <div style={{ position: 'relative', height: 180, background: `var(--stone-200) center/cover url(${image})` }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(22,36,28,0.35) 0%, rgba(22,36,28,0) 40%)' }} />
        {acres != null && (
          <span style={{ position: 'absolute', top: 12, left: 12 }}>
            <Badge tone="forest" solid>{acres} acres</Badge>
          </span>
        )}
        <button
          onClick={(e) => { e.stopPropagation(); onSave && onSave(e); }}
          aria-label="Save listing"
          style={{
            position: 'absolute', top: 10, right: 10, width: 34, height: 34, borderRadius: 'var(--radius-pill)',
            border: 'none', cursor: 'pointer', background: 'rgba(250,248,243,0.92)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-xs)',
          }}
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill={saved ? 'var(--clay-600)' : 'none'} stroke={saved ? 'var(--clay-600)' : 'var(--stone-700)'} strokeWidth="2">
            <path d="M12 21s-7.5-4.6-10-9.2C.5 8.5 2 4.5 6 4.5c2.3 0 3.6 1.4 6 4 2.4-2.6 3.7-4 6-4 4 0 5.5 4 4 7.3C19.5 16.4 12 21 12 21z" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      <div style={{ padding: 'var(--space-4)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 8 }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 22, color: 'var(--forest-800)' }}>
            {typeof price === 'number' ? `$${price.toLocaleString()}` : price}
          </span>
          {verified && <Badge tone="success" dot>Title verified</Badge>}
        </div>
        {title && <div style={{ marginTop: 4, fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 600, color: 'var(--text-strong)' }}>{title}</div>}
        <div style={{ marginTop: 2, fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 5 }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 21s-7-5.5-7-11a7 7 0 0114 0c0 5.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>
          {location}
        </div>
        {facts.length > 0 && (
          <div style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid var(--border-subtle)', display: 'flex', gap: 18 }}>
            {facts.map((f, i) => (
              <div key={i}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 14, fontWeight: 600, color: 'var(--text-strong)' }}>{f.value}</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: 2 }}>{f.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
