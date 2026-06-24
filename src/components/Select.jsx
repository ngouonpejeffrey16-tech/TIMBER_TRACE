import React from 'react';

export function Select({ label, value, onChange, options = [], disabled = false, id, style = {}, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || React.useId();
  const opts = options.map(o => (typeof o === 'string' ? { value: o, label: o } : o));
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      {label && (
        <label htmlFor={fid} style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600, color: 'var(--text-strong)' }}>
          {label}
        </label>
      )}
      <div style={{
        position: 'relative',
        border: `1px solid ${focus ? 'var(--accent)' : 'var(--border-default)'}`,
        borderRadius: 'var(--radius-sm)', background: disabled ? 'var(--stone-50)' : 'var(--surface-card)',
        boxShadow: focus ? 'var(--focus-shadow)' : 'none',
        transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
      }}>
        <select
          id={fid} value={value} onChange={onChange} disabled={disabled}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{
            appearance: 'none', WebkitAppearance: 'none', width: '100%', border: 'none', outline: 'none',
            background: 'transparent', fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--text-strong)',
            padding: '10px 36px 10px 12px', cursor: disabled ? 'not-allowed' : 'pointer',
          }}
          {...rest}
        >
          {opts.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
        <span style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--text-muted)', fontSize: 11 }}>▾</span>
      </div>
    </div>
  );
}
