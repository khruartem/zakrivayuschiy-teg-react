import { type FC } from "react";

import { LikeUI } from "../ui/like";
import type { TLikeProps } from "./types";

import { useDispatch } from "../../services/store";
import { setLike } from "../../features/cards/cardsSlice";

export const Like: FC<TLikeProps> = ({ cardId, like }) => {
  const dispatch = useDispatch();

  const handleLike = () => {
    dispatch(setLike(cardId));
    // handleButtonText();
  };

  return <LikeUI like={like} onLike={handleLike} />;
};
