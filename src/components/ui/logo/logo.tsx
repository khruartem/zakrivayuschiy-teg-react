import type { FC } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

import type { TLogoUIProps } from "./types";

import styles from "./logo.module.css";

export const LogoUI: FC<TLogoUIProps> = ({ text, className, to }) => {
  return (
    <Link className={clsx(styles.logo, className && className)} to={to || "/"}>
      {text ? text : "</Front-end>"}
    </Link>
  );
};
