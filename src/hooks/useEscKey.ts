import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "../services/store";

export const useEscKey = (returnUrl: string) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") navigate(returnUrl);
    };

    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [dispatch, navigate, returnUrl]);
};
