import { getCardsSelector } from "../../features/cards/cardsSlice";
import { useSelector } from "../../services/store";

export const useGetCards = () => {
  return useSelector(getCardsSelector);
};
