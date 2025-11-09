import { getCardDataSelector } from "../../features/cards/cardsSlice";
import { useSelector } from "../../services/store";

export const useGetCardData = () => {
  return useSelector(getCardDataSelector);
};
