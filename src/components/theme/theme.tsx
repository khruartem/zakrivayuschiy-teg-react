import { useEffect, type FC } from "react";
import type { TThemeProps } from "./types";

export const Theme: FC<TThemeProps> = ({ children }) => {
  useEffect(() => {
    const themeType = localStorage.getItem("theme") || "light";

    document.documentElement.className = "";
    document.documentElement.classList.add(`theme-${themeType}`);
  }, []);

  return children;
};
