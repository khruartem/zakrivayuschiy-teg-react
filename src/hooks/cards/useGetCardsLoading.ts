import { useSelector } from "react-redux";
import { getIsCardsLoadingSelector } from "../../features/cards/cardsSlice";

export const useGetCardsLoading = () => {
  return useSelector(getIsCardsLoadingSelector);
};
