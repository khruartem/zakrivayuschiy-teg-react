import type { FC } from "react";
import { useNavigate } from "react-router-dom";

import { HeaderUI } from "../ui/header";

import { useEscKey } from "../../hooks/useEscKey";

export const Header: FC = () => {
  const navigate = useNavigate();

  const handleCreate = () => {
    navigate("/cards/add");
  };

  useEscKey("/");

  return <HeaderUI onCreate={handleCreate} />;
};
