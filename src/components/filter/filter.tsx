import type { FC } from "react";

import { FilterUI } from "../ui/filter";

import type { TFilterItem } from "../../utils/types";

import { useDispatch } from "../../services/store";
import { useGetFilterActiveItem } from "../../hooks/cards/useGetFilterActiveItem";

import { setFilterItem } from "../../features/cards/cardsSlice";

export const Filter: FC = () => {
  const dispatch = useDispatch();

  const items: TFilterItem[] = ["all", "liked"];
  const activeItem = useGetFilterActiveItem();

  const handleChange = (filterItem: TFilterItem) => {
    dispatch(setFilterItem(filterItem));
  };

  return <FilterUI items={items} active={activeItem} onChange={handleChange} />;
};
