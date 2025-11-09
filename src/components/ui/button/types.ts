export type TButtonUIProps = {
  text: string;
  type?: HTMLButtonElement["type"];
  pressed?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};
