import type { TFilterItem } from "../../../utils/types";

export type TFilterUIProps = {
  items: TFilterItem[];
  active: TFilterItem;
  onChange: (filterItem: TFilterItem) => void;
};
