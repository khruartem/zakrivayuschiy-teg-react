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
