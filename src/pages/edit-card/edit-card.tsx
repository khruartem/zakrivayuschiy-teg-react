import { type FC, type FormEvent } from "react";

import type { TCardData, TEditCardData } from "../../utils/types";

import { useDispatch } from "../../services/store";
import { editCard } from "../../features/cards/cardsSlice";
import { useGetCard } from "../../hooks/cards/useGetCard";
import { FormPageUI } from "../../components/ui/pages/form";

export const EditCard: FC = () => {
  const dispatch = useDispatch();
  // const { id } = useParams();

  const card = useGetCard();

  const returnUrl = "/cards";

  const handleSubmit = (evt: FormEvent<HTMLFormElement>, values: TCardData) => {
    const data: TEditCardData = {
      id: card?.id || "",
      data: values,
    };
    evt.preventDefault();
    dispatch(editCard(data));
  };

  return (
    <FormPageUI
      title="edit card"
      onSubmit={handleSubmit}
      returnUrl={returnUrl}
    />
  );
};
