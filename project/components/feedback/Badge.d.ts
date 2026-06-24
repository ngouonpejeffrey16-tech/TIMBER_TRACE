import * as React from 'react';

export interface BadgeProps {
  children?: React.ReactNode;
  /** @default "neutral" */
  tone?: 'neutral' | 'forest' | 'clay' | 'success' | 'warning' | 'danger' | 'info';
  /** Leading dot indicator. @default false */
  dot?: boolean;
  /** Solid fill instead of tint. @default false */
  solid?: boolean;
  style?: React.CSSProperties;
}

/**
 * Compact status / metadata pill.
 * @startingPoint section="Core" subtitle="Status & metadata badges" viewport="700x140"
 */
export function Badge(props: BadgeProps): JSX.Element;
