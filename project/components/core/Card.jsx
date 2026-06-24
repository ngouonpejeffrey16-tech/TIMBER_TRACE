import React from 'react';

/**
 * Surface container with optional hover lift. Composes the brand card treatment:
 * paper surface, subtle warm border, soft shadow, 6px radius.
 */
export function Card({ children, interactive = false, padding = 'var(--space-5)', style = {}, onClick, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: 'var(--surface-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-md)',
        boxShadow: interactive && hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
        transform: interactive && hover ? 'translateY(-2px)' : 'none',
        transition: 'box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard)',
        cursor: interactive ? 'pointer' : 'default',
        padding,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
