import type { FC } from "react";

import { ImageUI } from "../image";
import { TagUI } from "../tag";
import { TextUI } from "../text";

import type { TCardInfoUIProps } from "./types";

import styles from "./card-info.module.css";
import { TitleUI } from "../title";

export const CardInfoUI: FC<TCardInfoUIProps> = ({ card }) => {
  const { title, tag, image, text } = card;

  return (
    <>
      {/* <h3 className={styles.card__title_info}>{title}</h3> */}
      <TitleUI title={title} className={styles.card__title_info} />
      <label className={styles.card__label}>{"Press <esc> to resume"}</label>
      <section className={styles.content}>
        <TextUI text={text} className={styles.card__text_info} />
        <ImageUI src={image} alt={title} className={styles.card__image_info} />
        {tag && <TagUI tag={tag} />}
      </section>
    </>
  );
};
