import type { FC } from "react";
import clsx from "clsx";

import { Menu } from "../../menu";
import { ButtonUI } from "../button";

import type { TIntroUIProps } from "./types";

import styles from "./intro.module.css";
import sharedStyles from "../../../styles/shared.module.css";

export const IntroUI: FC<TIntroUIProps> = ({ onNavigate }) => {
  return (
    <section
      className={clsx(styles.intro, styles.intro_width, sharedStyles.content)}
    >
      <Menu />
      <ButtonUI text="start game" onClick={onNavigate} />
    </section>
  );
};
