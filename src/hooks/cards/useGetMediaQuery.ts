import { useMediaQuery } from "react-responsive";

export const useGetMediaQuery = () => ({
  isLargeScreen: useMediaQuery({ minWidth: 1541 }),
  isMediumScreen: useMediaQuery({ minWidth: 935, maxWidth: 1540.9 }),
  isBroken: useMediaQuery({ maxWidth: 934.9 }),
});
