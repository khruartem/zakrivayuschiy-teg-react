import type { FC } from "react";
import { useNavigate } from "react-router-dom";

import { NotFound404UI } from "../../components/ui/pages/404";

export const NotFound404: FC = () => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/");
  };

  return <NotFound404UI onReturn={handleReturn} />;
};
