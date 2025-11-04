import type { FC } from "react";

import { LogoUI } from "../../logo";
import { Intro } from "../../../../components/intro";

import styles from "./main.module.css";

export const MainUI: FC = () => {
  return (
    <main className={styles.main}>
      <LogoUI />
      <Intro />
    </main>
  );
};
