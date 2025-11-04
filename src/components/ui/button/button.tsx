import type { FC } from "react";
import clsx from "clsx";

import type { TButtonUIProps } from "./types";

import styles from "./button.module.css";

export const ButtonUI: FC<TButtonUIProps> = ({ text, pressed, onClick }) => {
  return (
    <button
      id="button"
      type="button"
      onClick={onClick}
      className={clsx(
        styles.button,
        styles.animated,
        styles.decorated,
        pressed && styles.pressed
      )}
    >
      <span id="button" className={styles["button__text"]}>
        {text}
      </span>
    </button>
  );
};
