import React from 'react';

/** Checkbox with label. Controlled via `checked` / `onChange`. */
export function Checkbox({ label, checked = false, onChange, disabled = false, id, style = {} }) {
  const fid = id || React.useId();
  return (
    <label htmlFor={fid} style={{
      display: 'inline-flex', alignItems: 'center', gap: 10, cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--text-body)', opacity: disabled ? 0.5 : 1, ...style,
    }}>
      <span style={{
        width: 18, height: 18, flexShrink: 0, borderRadius: 'var(--radius-xs)',
        border: `1.5px solid ${checked ? 'var(--forest-800)' : 'var(--border-strong)'}`,
        background: checked ? 'var(--forest-800)' : 'var(--surface-card)',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        transition: 'background var(--dur-fast), border-color var(--dur-fast)',
      }}>
        {checked && (
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
            <path d="M2.5 6.2l2.2 2.3L9.5 3.5" stroke="#faf8f3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      <input id={fid} type="checkbox" checked={checked} onChange={onChange} disabled={disabled}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      {label}
    </label>
  );
}
