import { Route, Routes } from "react-router-dom";

import { StandBy } from "../../pages/stand-by";
import { Main } from "../../pages/main";
import { Cards } from "../../pages/cards";
import { Card } from "../../pages/card";
import { NotFound404 } from "../../pages/404";

import { useGetMediaQuery } from "../../hooks/useGetMediaQuery";
import { AddCard } from "../../pages/add-card";
import { EditCard } from "../../pages/edit-card";

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
        <Route path="/cards/:id/edit" element={<EditCard />} />
        <Route path="/cards/add" element={<AddCard />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </>
  );
};
