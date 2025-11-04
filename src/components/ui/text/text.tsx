import type { FC } from "react";
import clsx from "clsx";

import type { TTextUIProps } from "./types";

import styles from "./text.module.css";

export const TextUI: FC<TTextUIProps> = ({ text, className }) => {
  return (
    <p className={clsx(styles.card__text, className && className)}>
      {text}
    </p>
  );
};
