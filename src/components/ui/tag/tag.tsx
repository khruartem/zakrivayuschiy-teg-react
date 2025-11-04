import type { FC } from "react";

import type { TTagUIProps } from "./types";

import styles from "./tag.module.css";

export const TagUI: FC<TTagUIProps> = ({ tag }) => {
  return <span className={styles["image-label"]}>{tag}</span>;
};
