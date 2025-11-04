const Colors = {
  Light: "#fff",
  Black: "#000",
  Green: "#00CC14",
} as const;

type Colors = (typeof Colors)[keyof typeof Colors];

export { Colors };
