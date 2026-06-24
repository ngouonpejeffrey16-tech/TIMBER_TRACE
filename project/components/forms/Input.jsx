import React from 'react';

/** Labeled text field with optional prefix/suffix adornment and error state. */
export function Input({
  label, hint, error, prefix, suffix, value, onChange, placeholder,
  type = 'text', disabled = false, id, style = {}, ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || React.useId();
  const borderColor = error ? 'var(--danger-fg)' : focus ? 'var(--accent)' : 'var(--border-default)';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      {label && (
        <label htmlFor={fid} style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600, color: 'var(--text-strong)' }}>
          {label}
        </label>
      )}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        background: disabled ? 'var(--stone-50)' : 'var(--surface-card)',
        border: `1px solid ${borderColor}`, borderRadius: 'var(--radius-sm)',
        padding: '0 12px', boxShadow: focus ? 'var(--focus-shadow)' : 'none',
        transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
      }}>
        {prefix && <span style={{ color: 'var(--text-muted)', fontSize: 14, fontFamily: 'var(--font-sans)' }}>{prefix}</span>}
        <input
          id={fid} type={type} value={value} onChange={onChange} placeholder={placeholder} disabled={disabled}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{
            flex: 1, border: 'none', outline: 'none', background: 'transparent',
            fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--text-strong)',
            padding: '10px 0', minWidth: 0,
          }}
          {...rest}
        />
        {suffix && <span style={{ color: 'var(--text-muted)', fontSize: 14, fontFamily: 'var(--font-sans)' }}>{suffix}</span>}
      </div>
      {(hint || error) && (
        <span style={{ fontSize: 12, fontFamily: 'var(--font-sans)', color: error ? 'var(--danger-fg)' : 'var(--text-muted)' }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
