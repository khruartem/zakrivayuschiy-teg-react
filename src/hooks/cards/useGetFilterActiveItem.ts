import { getFilterActiveItemSelector } from "../../features/cards/cardsSlice";
import { useSelector } from "../../services/store";

export const useGetFilterActiveItem = () => {
  return useSelector(getFilterActiveItemSelector);
};
