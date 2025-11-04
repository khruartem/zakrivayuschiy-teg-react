import { useEffect, type FC } from "react";

import { CardsListUI } from "../ui/cards-list";
import { PreloaderUI } from "../ui/preloader";

import { useGetCards } from "../../hooks/cards/useGetCards";
import { useDispatch } from "../../services/store";
import { useGetCardsLoading } from "../../hooks/cards/useGetCardsLoading";

import { getCards } from "../../features/cards/cardsSlice";

export const CardsList: FC = () => {
  const dispatch = useDispatch();
  const cardsUnsorted = useGetCards();
  const cards = [...cardsUnsorted].sort((a, b) => {
    return a.order - b.order;
  });
  const loading = useGetCardsLoading();

  useEffect(() => {
    dispatch(getCards());
  }, [dispatch]);

  return loading ? <PreloaderUI /> : <CardsListUI cards={cards} />;
};
