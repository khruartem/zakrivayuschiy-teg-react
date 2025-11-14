import { type FC } from "react";

import { ReturnUI } from "../ui/return";

import type { TReturnProps } from "./types";

import { useEscKey } from "../../hooks/useEscKey";

export const Return: FC<TReturnProps> = ({ title, url, className }) => {
  useEscKey(url);

  return <ReturnUI title={title} className={className} />;
};
