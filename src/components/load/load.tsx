import type { FC } from "react";

import { PreloaderUI } from "../ui/preloader";
import { Error } from "../error";

import type { TLoadProps } from "./types";

export const Load: FC<TLoadProps> = ({ loading, errors, reload, children }) => {
  return (
    <>
      {loading ? (
        <PreloaderUI />
      ) : errors ? (
        <Error reloadUrl={reload} text={errors} />
      ) : (
        children
      )}
    </>
  );
};
