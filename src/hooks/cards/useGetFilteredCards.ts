import { selectFilteredCards } from "../../features/cards/cardsSlice";
import { useSelector } from "../../services/store";

export const useGetFilteredCards = () => {
  return useSelector(selectFilteredCards);
};
