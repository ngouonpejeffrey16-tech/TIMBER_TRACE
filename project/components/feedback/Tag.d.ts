import * as React from 'react';

export interface TagProps {
  children?: React.ReactNode;
  /** Selected state. @default false */
  active?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  /** When provided, renders a × remove control. */
  onRemove?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

/** Filterable chip / tag. */
export function Tag(props: TagProps): JSX.Element;
