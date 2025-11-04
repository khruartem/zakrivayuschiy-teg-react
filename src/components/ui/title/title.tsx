import type { FC } from "react";
import clsx from "clsx";

import type { TTitleUIProps } from "./types";

import styles from "./title.module.css";
import sharedStyles from "../../../styles/shared.module.css";

export const TitleUI: FC<TTitleUIProps> = ({ title, className }) => {
  return (
    <h3
      className={clsx(
        styles.card__title,
        sharedStyles.content,
        className && className
      )}
    >
      {title}
    </h3>
  );
};
