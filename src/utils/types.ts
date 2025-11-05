export type uuid = string;

export type TCard = {
  id: uuid;
  created_at: number;
  title: string;
  tag?: string;
  image: string;
  text: string;
  like: boolean;
  order: number;
};

export type TCardData = Pick<
  TCard,
  "title" | "tag" | "image" | "text" | "like" | "order"
>;

export type TFieldType<T> = {
  field: keyof T;
  value: string;
};

export type TFormValidators<T> = {
  [key in keyof T]: {
    validator: (value: string) => boolean;
    message: string;
  };
};

export type TErrorState<T> = { [key in keyof T]: string };
