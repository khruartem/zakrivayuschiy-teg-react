import type { FC } from "react";
import { useNavigate } from "react-router-dom";

import { ButtonUI } from "../ui/button";

import type { TEditProps } from "./types";
import type { TCardData, uuid } from "../../utils/types";

import { useDispatch } from "../../services/store";

import { getCard, setCardData } from "../../features/cards/cardsSlice";

export const Edit: FC<TEditProps> = ({ cardId, data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEdit = (cardId: uuid, data: TCardData) => {
    navigate(`/cards/${cardId}/edit`);
    dispatch(getCard(cardId));
    dispatch(setCardData(data));
  };

  return <ButtonUI text={"Edit"} onClick={() => handleEdit(cardId, data)} />;
};
