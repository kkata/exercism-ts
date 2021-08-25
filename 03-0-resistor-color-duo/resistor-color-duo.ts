const resistorColors = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
] as const;

type Color = typeof resistorColors[number];

export class ResistorColor {
  constructor(private readonly colors: Color[]) {
    if (colors.length < 2) {
      throw new Error("At least two colors need to be present");
    }
  }

  value = (): number =>
    resistorColors.indexOf(this.colors[0]) * 10 +
    resistorColors.indexOf(this.colors[1]);
}
