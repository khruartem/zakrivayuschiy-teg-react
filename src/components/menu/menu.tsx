import { useEffect, useState, type FC } from "react";

import { MenuUI } from "../ui/menu";
import type { TMenuOption } from "./types";

export const Menu: FC = () => {
  const header = "game difficulty";
  const options: TMenuOption[] = [
    { value: "easy", description: "light" },
    { value: "moderate", description: "auto" },
    { value: "hard", description: "dark" },
  ];

  const defaultIndex = Number(localStorage.getItem("active")) || 0;

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
    localStorage.setItem("active", `${defaultIndex}`);
  }, [defaultIndex]);

  return (
    <MenuUI
      header={header}
      options={options}
      active={activeIndex}
      onActive={handleActive}
    />
  );
};
