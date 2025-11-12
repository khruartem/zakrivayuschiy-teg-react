import type { FC } from "react";

import { InputUI } from "../input";

import type { TSearchUIProps } from "./types";

import styles from "./search.module.css";

export const SearchUI: FC<TSearchUIProps> = ({
  placeholder,
  value,
  onChange,
}) => {
  return (
    <InputUI
      id="search"
      title="search"
      type="search"
      value={value || ""}
      placeholder={placeholder}
      onChange={onChange}
      className={styles.search}
    />
  );
};
