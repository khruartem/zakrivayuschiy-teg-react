import type { FC } from "react";

import { CardInfo } from "../../../card-info";

import styles from "./card.module.css";

export const CardUI: FC = () => {
  return (
    <main className={styles.main_info}>
      <CardInfo />
    </main>
  );
};
