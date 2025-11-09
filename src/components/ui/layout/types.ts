type TPageBackground = "solid" | "dots";

export type TLayoutProps = {
  background: TPageBackground;
  header?: boolean;
  children?: React.ReactNode;
  className?: string;
};
