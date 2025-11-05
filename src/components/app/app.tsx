import { Route, Routes } from "react-router-dom";

import { StandBy } from "../../pages/stand-by";
import { Main } from "../../pages/main";
import { Cards } from "../../pages/cards";
import { Card } from "../../pages/card";
import { NotFound404 } from "../../pages/404";

import { useGetMediaQuery } from "../../hooks/useGetMediaQuery";

export const App = () => {
  const { isBroken } = useGetMediaQuery();

  return isBroken ? (
    <StandBy />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/cards/:id" element={<Card />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </>
  );
};
