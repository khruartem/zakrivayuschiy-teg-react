import type { FC } from "react";
import { LogoUI } from "../logo";
import { HeartUI } from "../heart";
import styles from "./header.module.css";
import { Clock } from "../../clock";

export const HeaderUI: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <LogoUI text="Exit" className={styles.logo_header} />
        <Clock />
      </div>
      <div>
        <HeartUI active />
        <HeartUI active />
        <HeartUI active />
      </div>
    </header>
  );
};
