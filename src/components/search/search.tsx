import type { FC } from "react";

import { SearchUI } from "../ui/search";

import { useDispatch } from "../../services/store";
import { useGetFilterSearchTerm } from "../../hooks/cards/useGetFilterSearchTerm";

import { setSearchTerm } from "../../features/cards/cardsSlice";

export const Search: FC = () => {
  const dispatch = useDispatch();
  const searchTerm = useGetFilterSearchTerm();

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(evt.target.value));
  };

  return (
    <SearchUI placeholder="Search" value={searchTerm} onChange={handleChange} />
  );
};
