import type { FC } from "react";

import { ButtonUI } from "../button";
import { ImageUI } from "../image";

import type { TErrorUIProps } from "./types";

import styles from "./error.module.css";

export const ErrorUI: FC<TErrorUIProps> = ({ onReload, text }) => {
  return (
    <div className={styles.error}>
      <h3 className={styles["error-text"]}>{`Error: ${text}`}</h3>
      <ImageUI
        src="https://img.icons8.com/clouds/100/pixel-cat.png"
        alt="Error"
        className={styles.image_error}
      />
      <ButtonUI text="Reload" onClick={onReload} />
    </div>
  );
};
