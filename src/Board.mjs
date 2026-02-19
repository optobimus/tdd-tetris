export class Board {
  width;
  height;
  positions = [];
  falling2 = null;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.positions = Array.from({ length: height }, () => Array(width).fill("."));
  }

  hasFalling() {
    return this.falling2 !== null;
  }

  drop(block) {
    if (this.hasFalling()) {
      throw new Error("already falling");
    }
     const middleIdx = Math.floor(this.width / 2);
     this.positions[0][middleIdx] = block;
     this.falling2 = { row: 0, column: middleIdx, block };
  }

  tick() {
    const { row, column } = this.falling2;

    if (row === this.height - 1) {
      this.falling2 = null;
      return;
    }
    const block = this.positions[row][column];
    this.positions[row][column] = ".";
    this.positions[row + 1][column] = block;
    this.falling2 = { row: row + 1, column };
  }

  toString() {
    let result = "";
    for (let row = 0; row < this.height; row++) {
      for (let column = 0; column < this.width; column++) {
        result += this.positions[row][column];
      }
      result += "\n";
    }
    return result;
  }

}
