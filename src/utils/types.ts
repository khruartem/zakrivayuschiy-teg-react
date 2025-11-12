export type uuid = string;

export type TCard = {
  id: uuid;
  created_at: number;
  title: string;
  tag?: string;
  image: string;
  text: string;
  like: boolean;
};

export type TCardData = Pick<TCard, "title" | "tag" | "image" | "text"> &
  Partial<Pick<TCard, "like">>;

export type TEditCardData = {
  id: TCard["id"];
  data: Partial<TCardData>;
};

export type TCardDataValidation = Pick<TCardData, "title" | "text">;

export type TFormValidators<T> = {
  [key in keyof T]: {
    validator: (value: string) => boolean;
    message: string;
  };
};

export type TErrorState<T> = { [key in keyof T]: string };

export type TFilterItem = "all" | "liked";
export type TFilterSerachTerm = string;

export type TFilter = {
  searchTerm: TFilterSerachTerm;
  activeItem: TFilterItem;
};
