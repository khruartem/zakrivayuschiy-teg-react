import type { FC } from "react";

import { ButtonUI } from "../../../../components/ui/button";
import { LogoUI } from "../../../../components/ui/logo";

import type { TNotFound404UIProps } from "./types";

import styles from "./404.module.css";

export const NotFound404UI: FC<TNotFound404UIProps> = ({ onReturn }) => {
  return (
    <main className={styles["main_not-found"]}>
      <LogoUI text="game over" />
      <ButtonUI text={"Play again"} onClick={onReturn} />
    </main>
  );
};
