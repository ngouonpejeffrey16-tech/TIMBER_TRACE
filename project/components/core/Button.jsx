import React from 'react';

const sizes = {
  sm: { padding: '7px 12px', fontSize: 13 },
  md: { padding: '10px 18px', fontSize: 14 },
  lg: { padding: '13px 24px', fontSize: 15 },
};

const variants = {
  primary: {
    background: 'var(--primary)', color: 'var(--text-inverse)', border: '1px solid var(--primary)',
    '--hover-bg': 'var(--primary-hover)', '--press-bg': 'var(--primary-press)',
  },
  accent: {
    background: 'var(--accent)', color: 'var(--text-on-accent)', border: '1px solid var(--accent)',
    '--hover-bg': 'var(--accent-hover)', '--press-bg': 'var(--accent-press)',
  },
  secondary: {
    background: 'var(--surface-card)', color: 'var(--text-strong)', border: '1px solid var(--border-default)',
    '--hover-bg': 'var(--stone-50)', '--press-bg': 'var(--stone-100)',
  },
  ghost: {
    background: 'transparent', color: 'var(--text-body)', border: '1px solid transparent',
    '--hover-bg': 'var(--stone-100)', '--press-bg': 'var(--stone-200)',
  },
};

/**
 * Timber Trace primary action control.
 */
export function Button({
  children, variant = 'primary', size = 'md', disabled = false,
  iconLeft = null, iconRight = null, fullWidth = false, type = 'button', onClick, style = {}, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const v = variants[variant] || variants.primary;
  const s = sizes[size] || sizes.md;

  const bg = disabled ? undefined : press ? v['--press-bg'] : hover ? v['--hover-bg'] : v.background;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        fontFamily: 'var(--font-sans)', fontWeight: 600, lineHeight: 1,
        borderRadius: 'var(--radius-sm)', cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'background var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)',
        transform: press && !disabled ? 'translateY(0.5px)' : 'none',
        opacity: disabled ? 0.5 : 1, width: fullWidth ? '100%' : 'auto',
        ...v, ...s, background: bg, ...style,
      }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
