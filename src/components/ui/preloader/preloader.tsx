import type { FC } from "react";
import styles from "./preloader.module.css";

export const PreloaderUI: FC = () => (
  <div className={styles.preloader}>
    <div className={styles.preloader_circle} />
  </div>
);
