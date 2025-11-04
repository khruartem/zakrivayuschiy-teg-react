import { useEffect, useState, type FC } from "react";

import { ThemeMenuUI } from "../ui/theme-menu";
import type { TThemeMenuOption } from "./types";

export const ThemeMenu: FC = () => {
  const header = "game difficulty";
  const options: TThemeMenuOption[] = [
    { value: "easy", description: "light" },
    { value: "moderate", description: "auto" },
    { value: "hard", description: "dark" },
  ];

  const defaultIndex = 0;
  const initIndex = () => {
    const index = localStorage.getItem("active");
    handleActive(index ? +index : defaultIndex);
  };

  const [activeIndex, setActiveIndex] = useState<number>(defaultIndex);

  const handleActive = (index: number) => {
    setActiveIndex(index);
    document.documentElement.className = "";
    document.documentElement.classList.add(
      `theme-${options[index].description}`
    );
    localStorage.setItem("active", `${index}`);
    localStorage.setItem("theme", `${options[index].description}`);
  };

  useEffect(() => {
    initIndex();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeMenuUI
      header={header}
      options={options}
      active={activeIndex}
      onActive={handleActive}
    />
  );
};
