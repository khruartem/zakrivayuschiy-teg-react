import type { FC } from "react";
import clsx from "clsx";

import { LogoUI } from "../logo";
import { ImageUI } from "../image";
import { TagUI } from "../tag";
import { TextUI } from "../text";

import type { TCardInfoUIProps } from "./types";

import { useGetMediaQuery } from "../../../hooks/cards/useGetMediaQuery";

import styles from "./card-info.module.css";

export const CardInfoUI: FC<TCardInfoUIProps> = ({ card, returnUrl }) => {
  const { title, tag, image, text } = card;
  const { isLargeScreen, isMediumScreen } = useGetMediaQuery();

  return (
    <>
      <LogoUI text={title} className={styles.card__title_info} to={returnUrl} />
      <section
        className={clsx(
          styles.content,
          isLargeScreen && styles.content_columned,
          isMediumScreen && styles.content_rowed
        )}
      >
        <ImageUI
          src={image}
          alt={title}
          className={clsx(
            styles.card__image_info,
            isLargeScreen && styles["card__image_info_reset-size"]
          )}
        />
        <TextUI text={text} className={styles.card__text_info} />
        {tag && <TagUI tag={tag} />}
      </section>
    </>
  );
};
