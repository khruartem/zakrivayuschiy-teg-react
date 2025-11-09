import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderUI } from "../ui/header";

export const Header: FC = () => {
  const navigate = useNavigate();

  const handleCreate = () => {
    navigate("/cards/add");
  };

  return <HeaderUI onCreate={handleCreate} />;
};
