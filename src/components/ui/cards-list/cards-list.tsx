import type { FC } from "react";

import type { TCardsListUIProps } from "./types";

import styles from "./cards-list.module.css";
import { CardUI } from "../card";

export const CardsListUI: FC<TCardsListUIProps> = ({ cards }) => {
  return (
    <ul className={styles["cards-list"]}>
      {cards.map((card, index) => (
        <li key={index}>
          <CardUI card={card} />
        </li>
      ))}
    </ul>
  );
};
