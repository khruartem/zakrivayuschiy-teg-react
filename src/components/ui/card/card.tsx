import type { FC } from "react";
import clsx from "clsx";

import { Link } from "react-router-dom";
import { TitleUI } from "../title";
import { TagUI } from "../tag";
import { ImageUI } from "../image";
import { TextUI } from "../text";
import { Like } from "../../like";

import type { TCardUIProps } from "./types";

import styles from "./card.module.css";
import sharedStyles from "../../../styles/shared.module.css";
import { Delete } from "../../delete";

export const CardUI: FC<TCardUIProps> = ({ card }) => {
  const { id, title, tag, image, text, like } = card;
  return (
    <Link
      className={styles.card}
      to={`/cards/${id}`}
      onClickCapture={(e) => {
        if ((e.target as HTMLElement).id) e.preventDefault();
      }}
    >
      <TitleUI title={title} />
      <div className={clsx(styles["image-wrapper"], sharedStyles.content)}>
        {tag && <TagUI tag={tag} />}
        <ImageUI src={image} alt={title} />
      </div>
      <div className={clsx(styles["card__content"], sharedStyles.content)}>
        <TextUI text={text} />
        <div className={styles.card__controls}>
          <Like cardId={id} like={like} />
          <Delete cardId={id} />
        </div>
      </div>
    </Link>
  );
};
