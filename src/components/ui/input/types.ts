import type { ForwardedRef, InputHTMLAttributes } from "react";

export interface TInputUIProps extends InputHTMLAttributes<HTMLInputElement> {
  inputRef?: ForwardedRef<HTMLInputElement>;
  error?: string;
  value?: string;
  className?: string;
}
