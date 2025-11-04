export type TThemeType = "light" | "dark" | "auto" | undefined;

export const useGetTheme: () => TThemeType = () => {
  const theme = localStorage.getItem("theme");
  switch (theme) {
    case "light":
    case "dark":
    case "auto":
      return theme;
    default:
      return undefined;
  }
};
