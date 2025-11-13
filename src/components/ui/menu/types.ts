import type { TMenuOption } from "../../menu/types";

export type TMenuUIProps = {
  header?: string;
  options: TMenuOption[];
  active: number;
  onActive: (index: number) => void;
};
