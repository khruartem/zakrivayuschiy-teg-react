import type { FC } from "react";

import styles from "./theme-menu.module.css";
import type { TThemeMenuUIProps } from "./types";

export const ThemeMenuUI: FC<TThemeMenuUIProps> = ({
  header,
  options,
  active,
  onActive,
}) => {
  return (
    <>
      {header && <h1 className={styles["theme-menu__header"]}>{header}</h1>}
      <nav>
        <ul className={styles["theme-menu__list"]}>
          {options.map(({ value }, index) => (
            <li>
              <button
                type="button"
                disabled={index === active}
                onClick={() => onActive(index)}
                className={styles["theme-menu__button"]}
              >
                {value}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
