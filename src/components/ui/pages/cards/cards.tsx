import type { FC } from "react";
import clsx from "clsx";

import { HeaderUI } from "../../../../components/ui/header/header";
import { CardsList } from "../../../../components/cards-list/cards-list";

import styles from "./cards.module.css";
import sharedStyles from "../../../../styles/shared.module.css";

export const CardsUI: FC = () => {
  return (
    <main className={clsx(sharedStyles.main, styles.main_cards)}>
      <HeaderUI />
      <CardsList />
    </main>
  );
};
