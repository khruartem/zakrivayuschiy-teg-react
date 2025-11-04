import { getCardSelector } from "../../features/cards/cardsSlice";
import { useSelector } from "../../services/store";

export const useGetCard = () => {
  return useSelector(getCardSelector);
};
