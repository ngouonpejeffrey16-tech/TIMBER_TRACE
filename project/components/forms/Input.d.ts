import * as React from 'react';

export interface InputProps {
  label?: string;
  hint?: string;
  error?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  id?: string;
  style?: React.CSSProperties;
}

/** Labeled text field with prefix/suffix adornments and error state. */
export function Input(props: InputProps): JSX.Element;
