import type { TThemeMenuOption } from "../../theme-menu/types";

export type TThemeMenuUIProps = {
  header?: string;
  options: TThemeMenuOption[];
  active: number;
  onActive: (index: number) => void;
};
