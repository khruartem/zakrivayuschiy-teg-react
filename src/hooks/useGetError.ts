import { getErrorSelector } from "../features/cards/cardsSlice";
import { useSelector } from "../services/store";

export const useGetError = () => {
  return useSelector(getErrorSelector);
};
