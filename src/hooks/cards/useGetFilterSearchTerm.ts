import { getFilterSearchTermSelector } from "../../features/cards/cardsSlice";
import { useSelector } from "../../services/store";

export const useGetFilterSearchTerm = () => {
  return useSelector(getFilterSearchTermSelector);
};
