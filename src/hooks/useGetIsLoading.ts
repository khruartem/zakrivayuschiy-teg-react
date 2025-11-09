import { useSelector } from "react-redux";
import { getIsLoadingSelector } from "../features/cards/cardsSlice";

export const useGetIsLoading = () => {
  return useSelector(getIsLoadingSelector);
};
