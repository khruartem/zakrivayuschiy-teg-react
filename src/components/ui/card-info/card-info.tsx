import type { FC } from "react";

import { LogoUI } from "../logo";
import { ImageUI } from "../image";
import { TagUI } from "../tag";
import { TextUI } from "../text";

import type { TCardInfoUIProps } from "./types";

import styles from "./card-info.module.css";

export const CardInfoUI: FC<TCardInfoUIProps> = ({ card, returnUrl }) => {
  const { title, tag, image, text } = card;

  return (
    <>
      <LogoUI text={title} className={styles.card__title_info} to={returnUrl} />
      <section className={styles.content}>
        <ImageUI src={image} alt={title} className={styles.card__image_info} />
        <TextUI text={text} className={styles.card__text_info} />
        {tag && <TagUI tag={tag} />}
      </section>
    </>
  );
};
