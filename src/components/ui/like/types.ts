import type { TCard } from "../../../utils/types";

export type TLikeUIProps = Pick<TCard, "like"> & {
  onLike: () => void;
  loading?: boolean;
};
