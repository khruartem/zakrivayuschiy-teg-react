import type { FC } from "react";

import { LogoUI } from "../logo";
import { Clock } from "../../clock";
import { ButtonUI } from "../button";
import { HeartUI } from "../heart";

import type { THeaderUIProps } from "./types";

import styles from "./header.module.css";

export const HeaderUI: FC<THeaderUIProps> = ({ onCreate }) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <LogoUI text="Exit" className={styles.logo_header} />
        <Clock />
      </div>
      <div className={styles.header__health}>
        <ButtonUI text={"+ Add card"} onClick={onCreate} />
        <div>
          <HeartUI active />
          <HeartUI active />
          <HeartUI active />
        </div>
      </div>
    </header>
  );
};
