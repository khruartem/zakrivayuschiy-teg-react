import type { FC } from "react";

import type { TMenuUIProps } from "./types";

import styles from "./menu.module.css";

export const MenuUI: FC<TMenuUIProps> = ({
  header,
  options,
  active,
  onActive,
}) => {
  return (
    <>
      {header && <h1 className={styles["menu__header"]}>{header}</h1>}
      <nav>
        <ul className={styles["menu__list"]}>
          {options.map(({ value }, index) => (
            <li key={index}>
              <button
                type="button"
                disabled={index === active}
                onClick={() => onActive(index)}
                className={styles["menu__button"]}
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
