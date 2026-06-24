import * as React from 'react';

export interface SelectOption { value: string; label: string; }
export interface SelectProps {
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options?: (SelectOption | string)[];
  disabled?: boolean;
  id?: string;
  style?: React.CSSProperties;
}

/** Styled native select with brand chrome. */
export function Select(props: SelectProps): JSX.Element;
