import type { FC } from "react";
import { useDispatch } from "../../services/store";

import { ButtonUI } from "../ui/button";

import type { TDeleteProps } from "./types";
import type { uuid } from "../../utils/types";

import { useGetIsLoadingDelete } from "../../hooks/cards/useGetIsLoadingDelete";

import { deleteCard } from "../../features/cards/cardsSlice";

export const Delete: FC<TDeleteProps> = ({ cardId }) => {
  const dispatch = useDispatch();
  const loading = useGetIsLoadingDelete();

  const handleRemove = (id: uuid) => {
    dispatch(deleteCard(id));
  };

  return (
    <ButtonUI
      text={loading ? "Loading..." : "Delete"}
      onClick={() => handleRemove(cardId)}
    />
  );
};
