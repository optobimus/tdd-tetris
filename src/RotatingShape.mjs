export class RotatingShape {
  grid = [];

  constructor(grid) {
    this.grid = grid;
  }

  static fromString(string) {
    return new RotatingShape(
      string
        .trim()
        .split("\n")
        .map((row) => row.trim().split(""))
    );
  }


  toString() {
    return this.grid.map((row) => row.join("")).join("\n") + "\n";
  }
}
