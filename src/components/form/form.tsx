import { useEffect, useLayoutEffect, useRef, type FC } from "react";
import { useNavigate } from "react-router-dom";

import { FormUI } from "../ui/form";

import type { TFormProps } from "./types";

import { useGetIsLoading } from "../../hooks/useGetIsLoading";
import { useGetError } from "../../hooks/useGetError";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";

import { formValidators } from "../../utils/formValidators";
import type { TCardData } from "../../utils/types";

import {
  getCardDataSelector,
  setCardData,
  clearCardData,
} from "../../features/cards/cardsSlice";
import { useDispatch } from "../../services/store";

export const Form: FC<TFormProps> = ({ onSubmit, returnUrl }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const inputRef = useRef<HTMLInputElement | null>(null);
  const loading = useGetIsLoading();
  const sendingError = useGetError();

  const handleReturn = (url: string) => {
    navigate(url);
  };

  useLayoutEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // useEffect(() => {
  //   return () => {
  //     dispatch(clearCardData());
  //   };
  // }, [dispatch]);

  const { values, handleChange, errors, isValid, handleIsValid } =
    useFormWithValidation<TCardData>(
      getCardDataSelector,
      setCardData,
      formValidators
    );

  return (
    <FormUI
      onSubmit={(evt) => onSubmit(evt, values)}
      inputRef={inputRef}
      onChange={handleChange}
      onReturn={() => handleReturn(returnUrl)}
      onIsValid={handleIsValid}
      isSending={loading}
      sendingError={sendingError}
      values={values}
      errors={errors}
      isValid={isValid}
    />
  );
};
