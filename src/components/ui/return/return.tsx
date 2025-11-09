import type { FC } from "react";

import type { TReturnUIProps } from "./types";

import styles from "./return.module.css";
import clsx from "clsx";

export const ReturnUI: FC<TReturnUIProps> = ({ title, className }) => {
  return (
    <>
      <h3 className={clsx(styles.return__title, className && className)}>
        {title}
      </h3>
    </>
  );
};
