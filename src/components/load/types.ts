import type { ReactNode } from "react";

export type TLoadProps = {
  loading: boolean;
  errors: string | null;
  reload?: string;
  children: ReactNode;
};
