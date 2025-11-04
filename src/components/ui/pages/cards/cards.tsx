import type { FC } from "react";

import { HeaderUI } from "../../../../components/ui/header/header";
import { CardsList } from "../../../../components/cards-list/cards-list";

import styles from "./cards.module.css";

export const CardsUI: FC = () => {
  return (
    <main className={styles["main_cards"]}>
      <HeaderUI />
      <CardsList />
    </main>
  );
};
