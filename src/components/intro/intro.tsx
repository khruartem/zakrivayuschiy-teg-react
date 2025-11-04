import type { FC } from "react";
import { useNavigate } from "react-router-dom";

import { IntroUI } from "../ui/intro";

export const Intro: FC = () => {
  const navigate = useNavigate();

  const handleNavigateCards = () => {
    navigate("/cards");
  };

  return <IntroUI onNavigate={handleNavigateCards} />;
};
