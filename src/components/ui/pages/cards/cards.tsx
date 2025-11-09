import type { FC } from "react";

import { Layout } from "../../layout";
import { CardsList } from "../../../../components/cards-list/cards-list";

import styles from "./cards.module.css";

export const CardsUI: FC = () => {
  return (
    <Layout background={"dots"} className={styles.main_cards} header>
      <CardsList />
    </Layout>
  );
};
