import { useSelector } from "react-redux";
import { getIsLoadingEditSelector } from "../../features/cards/cardsSlice";

export const useGetIsLoadingEdit = () => {
  return useSelector(getIsLoadingEditSelector);
};
