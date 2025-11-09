import { type FC } from "react";
import clsx from "clsx";

import type { TInputUIProps } from "./types";
import styles from "./input.module.css";

export const InputUI: FC<TInputUIProps> = ({
  inputRef,
  error,
  value,
  className,
  ...props
}) => {
  return (
    <label className={styles.label}>
      <input
        className={clsx(styles.input, className && className)}
        ref={inputRef}
        {...props}
        value={value || ""}
      />
      <span className={styles.error}>{error || ""}</span>
    </label>
  );
};
