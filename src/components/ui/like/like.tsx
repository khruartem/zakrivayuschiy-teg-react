import { type FC } from "react";

import { HeartUI } from "../heart";
import { ButtonUI } from "../button";

import type { TLikeUIProps } from "./types";

import styles from "./like.module.css";

export const LikeUI: FC<TLikeUIProps> = ({ like, onLike }) => {
  return (
    <div className={styles["like-wrapper"]}>
      <HeartUI active={like} onClick={onLike} />
      <ButtonUI
        text={like ? "Unlike" : "Like"}
        pressed={like}
        onClick={onLike}
      />
    </div>
  );
};
