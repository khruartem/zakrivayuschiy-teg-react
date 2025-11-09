import { useEffect, type FC } from "react";
import { useNavigate } from "react-router-dom";

import { ReturnUI } from "../ui/return";

import type { TReturnProps } from "./types";

import { useDispatch } from "../../services/store";
import { clearCardData } from "../../features/cards/cardsSlice";

export const Return: FC<TReturnProps> = ({ title, url, className }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        navigate(url);
        dispatch(clearCardData());
      }
    };

    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [dispatch, navigate, url]);

  return <ReturnUI title={title} className={className} />;
};
