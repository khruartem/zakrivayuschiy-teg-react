import type { FormEvent } from "react";
import type { TCardData, TErrorState } from "../../../utils/types";

export type TFormUIProps = {
  onSubmit: (evt: FormEvent<HTMLFormElement>) => void;
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  onReturn: () => void;
  onIsValid: (value: boolean) => void;
  isSending: boolean;
  sendingError: string | null;
  values: TCardData;
  errors: TErrorState<TCardData>;
  isValid: boolean;
};
