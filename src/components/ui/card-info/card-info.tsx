import type { FC } from "react";

import { ImageUI } from "../image";
import { TagUI } from "../tag";
import { TextUI } from "../text";

import type { TCardInfoUIProps } from "./types";

import styles from "./card-info.module.css";

export const CardInfoUI: FC<TCardInfoUIProps> = ({ card }) => {
  const { title, tag, image, text } = card;

  return (
    <>
      <section className={styles.content}>
        <TextUI text={text} className={styles.card__text_info} />
        <ImageUI src={image} alt={title} className={styles.card__image_info} />
        {tag && <TagUI tag={tag} />}
      </section>
    </>
  );
};
