import type { FC } from "react";

import { Layout } from "../../layout";
import { LogoUI } from "../../logo";
import { Intro } from "../../../../components/intro";

import styles from "./main.module.css";

export const MainUI: FC = () => {
  return (
    <Layout background={"solid"} className={styles.main_intro}>
      <LogoUI />
      <Intro />
    </Layout>
  );
};
