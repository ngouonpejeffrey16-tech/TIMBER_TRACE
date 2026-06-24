import * as React from 'react';

export interface AvatarProps {
  name?: string;
  src?: string | null;
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
}

/** Circular avatar; falls back to initials on a deterministic brand color. */
export function Avatar(props: AvatarProps): JSX.Element;
