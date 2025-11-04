import type { FC } from "react";
import type { TClockUIProps } from "./type";

import styles from "./clock.module.css";

export const ClockUI: FC<TClockUIProps> = ({ date }) => {
  return (
    <div className={styles.clock}>
      {/* <p>{`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`}</p> */}
      <p>{date.toLocaleString()}</p>
    </div>
  );
};
