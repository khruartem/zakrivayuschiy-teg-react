import { useEffect, type FC } from "react";

import { Load } from "../load";
import { Return } from "../return";
import { CardInfoUI } from "../ui/card-info";

import type { TCard } from "../../utils/types";

import { useGetCard } from "../../hooks/cards/useGetCard";
import { useGetIsLoading } from "../../hooks/useGetIsLoading";
import { useGetError } from "../../hooks/useGetError";
import { useParams } from "react-router-dom";
import { useDispatch } from "../../services/store";

import { getCard } from "../../features/cards/cardsSlice";

export const CardInfo: FC = () => {
  const dispatch = useDispatch();

  const { id } = useParams<Pick<TCard, "id">>();
  const card = useGetCard();

  const loading = useGetIsLoading();
  const errors = useGetError();

  const returnUrl = "/cards";

  useEffect(() => {
    dispatch(getCard(id || ""));
  }, [dispatch, id]);

  return (
    <Load loading={loading} errors={errors} reload={`/cards/${id}`}>
      {card && (
        <>
          <Return title={card.title} url={returnUrl} />
          <CardInfoUI card={card} />
        </>
      )}
    </Load>
  );
};
