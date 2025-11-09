import type { FC } from "react";
import clsx from "clsx";

import type { TImageUIProps } from "./types";

import styles from "./image.module.css";

export const ImageUI: FC<TImageUIProps> = ({ src, alt, className }) => {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className={clsx(styles.card__image, className && className)}
    />
  );
};
