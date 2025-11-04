import type { FC } from "react";
import { useDispatch } from "../../services/store";

import { ButtonUI } from "../ui/button";

import type { TDeleteProps } from "./types";
import type { uuid } from "../../utils/types";

import { removeCard } from "../../features/cards/cardsSlice";

export const Delete: FC<TDeleteProps> = ({ cardId }) => {
  const dispatch = useDispatch();

  const handleRemove = (id: uuid) => {
    dispatch(removeCard(id));
  };

  return <ButtonUI text="Delete" onClick={() => handleRemove(cardId)} />;
};
