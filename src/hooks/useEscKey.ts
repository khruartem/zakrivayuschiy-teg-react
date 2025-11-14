import { useNavigate } from "react-router-dom";
import { useDispatch } from "../services/store";
import { useEffect } from "react";
import { clearCardData } from "../features/cards/cardsSlice";

export const useEscKey = (returnUrl: string) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        navigate(returnUrl);
        dispatch(clearCardData());
      }
    };

    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [dispatch, navigate, returnUrl]);
};
