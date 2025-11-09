import type { FormEvent } from "react";
import type { TCardData } from "../../utils/types";

export type TFormProps = {
  onSubmit: (evt: FormEvent<HTMLFormElement>, values: TCardData) => void;
  returnUrl: string;
};
