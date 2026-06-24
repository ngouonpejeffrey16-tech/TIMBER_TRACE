import * as React from 'react';

export interface CardProps {
  children?: React.ReactNode;
  /** Adds hover lift + pointer. @default false */
  interactive?: boolean;
  /** CSS padding value. @default "var(--space-5)" */
  padding?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  style?: React.CSSProperties;
}

/** Surface container with the brand card treatment. */
export function Card(props: CardProps): JSX.Element;
