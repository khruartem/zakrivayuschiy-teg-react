import type { FC } from "react";
import clsx from "clsx";

import { Search } from "../../search";

import type { TFilterUIProps } from "./types";

import styles from "./filter.module.css";

export const FilterUI: FC<TFilterUIProps> = ({ items, active, onChange }) => {
  return (
    <ul className={styles.filter}>
      <li className={styles["filter-title"]}>{"Filter"}</li>
      {items.map((item, index) => (
        <li
          key={index}
          className={clsx(
            styles["filter-item"],
            active === item && styles["filter-item_active"]
          )}
          onClick={() => onChange(item)}
        >
          {item}
        </li>
      ))}
      <li>
        <Search />
      </li>
    </ul>
  );
};
