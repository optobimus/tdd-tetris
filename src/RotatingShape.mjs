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

  rotateRight() {
    const size = this.grid.length;
    const newGrid = Array.from({ length: size }, () => Array(size));
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        newGrid[i][j] = this.grid[size - j - 1][i];
      }
    }
    return new RotatingShape(newGrid);
  }

  rotateLeft() {
    const lastRow = this.grid[this.grid.length - 1];
    const originalLastRowEmpty = lastRow.every((cell) => cell === ".");
    let result = this.rotateRight().rotateRight().rotateRight();
    if (originalLastRowEmpty) {
      while (result.grid.length > 0 && result.grid[0].every((cell) => cell === ".")) {
        const emptyRow = result.grid[0].map(() => ".");
        result = new RotatingShape([...result.grid.slice(1), emptyRow]);
      }
    }
    return result;
  }

  toString() {
    return this.grid.map((row) => row.join("")).join("\n") + "\n";
  }
}
