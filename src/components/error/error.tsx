import type { FC } from "react";
import { useNavigate } from "react-router-dom";

import { ErrorUI } from "../ui/error";

import type { TErrorProps } from "./types";

export const Error: FC<TErrorProps> = ({ reloadUrl, text }) => {
  const navigate = useNavigate();

  const handleReload = () => {
    if (reloadUrl) navigate(reloadUrl);
    window.location.reload();
  };

  return <ErrorUI onReload={handleReload} text={text} />;
};
