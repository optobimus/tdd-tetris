import { Block } from "./Block.mjs";

export class Board {
  width;
  height;
  positions = [];
  falling = null;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.positions = Array.from({ length: height }, () => Array(width).fill("."));
  }

  hasFalling() {
    return this.falling !== null;
  }

  drop(block) {
    if (this.hasFalling()) {
      throw new Error("already falling");
    }

    if (typeof block === "string") {
      block = new Block(block);
    }

    const leftCol = Math.floor((this.width - block.width) / 2);
    this.positions[0][leftCol] = block.cellAt(0, 0);
    this.falling = { topRow: 0, leftCol, shape: block };
  }

  tick() {
    const { topRow, leftCol, shape } = this.falling;

    if (topRow === this.height - 1) {
      this.falling = null;
      return;
    }

    if (this.positions[topRow + 1][leftCol] !== ".") {
      this.falling = null;
      return;
    }

    const char = this.positions[topRow][leftCol];
    this.positions[topRow][leftCol] = ".";
    this.positions[topRow + 1][leftCol] = char;
    this.falling = { topRow: topRow + 1, leftCol, shape };
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
