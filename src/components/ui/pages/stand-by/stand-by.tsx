import type { FC } from "react";

import { Layout } from "../../layout";

import styles from "./stand-by.module.css";

export const StandByUI: FC = () => {
  return <Layout background={"solid"} className={styles["main_stand-by"]} />;
};
