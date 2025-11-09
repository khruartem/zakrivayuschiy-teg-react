import type { FC } from "react";

import { ButtonUI } from "../ui/button";

import type { TCardData } from "../../utils/types";
import { getRandomInt } from "../../utils/getRandomInt";
import { generatedCards } from "../../utils/constants";

import type { TGenerateProps } from "./types";

import { useDispatch } from "../../services/store";

import { setCardData } from "../../features/cards/cardsSlice";

export const Generate: FC<TGenerateProps> = ({ onIsValid }) => {
  const dispatch = useDispatch();

  const generatedCard = generatedCards[getRandomInt(generatedCards.length)];

  const handleGenerate = (cardData: TCardData) => {
    dispatch(setCardData(cardData));
    onIsValid(true);
  };

  return (
    <ButtonUI text="Generate" onClick={() => handleGenerate(generatedCard)} />
  );
};
