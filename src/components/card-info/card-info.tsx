import { useEffect, type FC } from "react";

import { PreloaderUI } from "../ui/preloader";
import { CardInfoUI } from "../ui/card-info";
import { NotFound404 } from "../../pages/404";

import type { TCard } from "../../utils/types";

import { useGetCard } from "../../hooks/cards/useGetCard";
import { useGetCardsLoading } from "../../hooks/cards/useGetCardsLoading";
import { useParams } from "react-router-dom";
import { useDispatch } from "../../services/store";

import { getCard } from "../../features/cards/cardsSlice";
import { useEscKey } from "../../hooks/useEscKey";

export const CardInfo: FC = () => {
  const dispatch = useDispatch();

  const { id } = useParams<Pick<TCard, "id">>();
  const card = useGetCard();
  const loading = useGetCardsLoading();
  const returnUrl = "/cards";

  useEffect(() => {
    dispatch(getCard(id || ""));
  }, [dispatch, id]);

  useEscKey(returnUrl);

  return loading ? (
    <PreloaderUI />
  ) : card ? (
    <CardInfoUI card={card} />
  ) : (
    <NotFound404 />
  );
};
