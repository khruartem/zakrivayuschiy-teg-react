import type { ActionCreatorWithPayload } from "@reduxjs/toolkit/react";
import { useState, type ChangeEvent } from "react";

import type { TErrorState, TFormValidators } from "../utils/types";

import { useDispatch, useSelector, type RootState } from "../services/store";

type TUseFormWithValidation<T> = {
  values: T;
  handleChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  errors: TErrorState<T>;
  isValid: boolean;
  handleIsValid: (value: boolean) => void;
};

export function useFormWithValidation<T extends object>(
  selector: (state: RootState) => T,
  setFormValue: ActionCreatorWithPayload<T>,
  validators: TFormValidators<T>
): TUseFormWithValidation<T> {
  const dispatch = useDispatch();

  const values = useSelector(selector);
  const [errors, setErrors] = useState<TErrorState<T>>(initError<T>(values));
  const [isValid, setIsValid] = useState(false);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const input = evt.target;
    const value = input.value;
    const name = input.name as keyof T;
    const isValid = validators[name]?.validator(value) ?? true;
    dispatch(setFormValue({ [name]: value } as T));
    setErrors({
      ...errors,
      [name]: !isValid ? validators[name]!.message : undefined,
    });
    setIsValid(isValid);
  };

  const handleIsValid = (value: boolean) => {
    setIsValid(value);
  };

  return { values, handleChange, errors, isValid, handleIsValid };
}

function initError<T>(a: T): TErrorState<T> {
  return Object.keys(a as object).reduce((acc, k) => {
    acc[k as keyof T] = "";
    return acc;
  }, {} as TErrorState<T>);
}
