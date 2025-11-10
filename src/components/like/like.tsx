import { type FC } from "react";

import { LikeUI } from "../ui/like";

import type { TLikeProps } from "./types";

import { useDispatch } from "../../services/store";

import { editCard } from "../../features/cards/cardsSlice";
import { useGetIsLoadingEdit } from "../../hooks/cards/useGetIsLoadingEdit";

export const Like: FC<TLikeProps> = ({ cardId, like }) => {
  const dispatch = useDispatch();
  const loading = useGetIsLoadingEdit();

  const handleLike = () => {
    dispatch(editCard({ id: cardId, data: { like: !like } }));
  };

  return <LikeUI loading={loading} like={like} onLike={handleLike} />;
};
