import type { FC } from "react";
import clsx from "clsx";

import { CardInfo } from "../../../card-info";

import styles from "./card.module.css";
import sharedStyles from "../../../../styles/shared.module.css";

export const CardUI: FC = () => {
  return (
    <main className={clsx(sharedStyles.main, styles.main_info)}>
      <CardInfo />
    </main>
  );
};
