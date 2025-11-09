import type { FC } from "react";

import { Layout } from "../../layout";
import { CardInfo } from "../../../card-info";

import styles from "./card.module.css";

export const CardUI: FC = () => {
  return (
    <Layout background={"solid"} className={styles.main_info}>
      <CardInfo />
    </Layout>
  );
};
