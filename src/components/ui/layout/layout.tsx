import type { FC } from "react";
import clsx from "clsx";

import { Header } from "../../header";

import type { TLayoutProps } from "./types";

import styles from "./layout.module.css";

export const Layout: FC<TLayoutProps> = ({
  background,
  header,
  children,
  className,
}) => {
  return (
    <main
      className={clsx(
        styles.main,
        background === "solid" && styles.main_solid,
        background === "dots" && styles.main_dots,
        className && className
      )}
    >
      {header && <Header />}
      {children}
    </main>
  );
};
