import { useEffect, type FC } from "react";

import { Load } from "../load";
import { CardsListUI } from "../ui/cards-list";

import { useGetCards } from "../../hooks/cards/useGetCards";
import { useDispatch } from "../../services/store";
import { useGetIsLoading } from "../../hooks/useGetIsLoading";

import { getCards } from "../../features/cards/cardsSlice";
import { useGetError } from "../../hooks/useGetError";
import { useGetFilteredCards } from "../../hooks/cards/useGetFilteredCards";

export const CardsList: FC = () => {
  const dispatch = useDispatch();

  const cardsUnsorted = useGetFilteredCards();
  const cards = [...cardsUnsorted].sort((a, b) => {
    return b.created_at - a.created_at;
  });

  const loading = useGetIsLoading();
  const errors = useGetError();

  useEffect(() => {
    dispatch(getCards());
  }, [dispatch]);

  return (
    <Load loading={loading} errors={errors}>
      <CardsListUI cards={cards} />
    </Load>
  );
};
