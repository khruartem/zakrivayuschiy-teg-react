import { useSelector } from "react-redux";
import { getIsLoadingDeleteSelector } from "../../features/cards/cardsSlice";

export const useGetIsLoadingDelete = () => {
  return useSelector(getIsLoadingDeleteSelector);
};
