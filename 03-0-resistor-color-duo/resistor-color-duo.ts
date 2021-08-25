const Colors = [
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

type Color = typeof Colors[number];

export class ResistorColor {
  constructor(private readonly colors: Color[]) {
    if (colors.length < 2) {
      throw new Error("At least two colors need to be present");
    }
    this.colors = colors;
  }

  value = (): number =>
    Colors.indexOf(this.colors[0]) * 10 + Colors.indexOf(this.colors[1]);
}
