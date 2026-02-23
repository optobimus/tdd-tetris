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
    this.falling = { topRow: 0, leftCol, shape: block };
  }

  #occupiedCells(shape) {
    const cells = [];
    for (let r = 0; r < shape.height; r++)
      for (let c = 0; c < shape.width; c++)
        if (shape.cellAt(r, c) !== ".") cells.push([r, c]);
    return cells;
  }

  tick() {
    if (!this.falling) return;

    const { topRow, leftCol, shape } = this.falling;
    const cells = this.#occupiedCells(shape);
    const blocked = cells.some(
      ([r, c]) => topRow + r === this.height - 1 || this.positions[topRow + r + 1][leftCol + c] !== "."
    );

    if (blocked) {
      cells.forEach(([r, c]) => (this.positions[topRow + r][leftCol + c] = shape.cellAt(r, c)));
      this.falling = null;
    } else {
      this.falling = { topRow: topRow + 1, leftCol, shape };
    }
  }

  cellAt(row, col) {
    if (this.falling) {
      const { topRow, leftCol, shape } = this.falling;
      const r = row - topRow,
        c = col - leftCol;
      if (r >= 0 && r < shape.height && c >= 0 && c < shape.width && shape.cellAt(r, c) !== ".") {
        return shape.cellAt(r, c);
      }
    }
    
    return this.positions[row][col];
  }

  toString() {
    let result = "";
    for (let row = 0; row < this.height; row++) {
      for (let col = 0; col < this.width; col++) {
        result += this.cellAt(row, col);
      }
      result += "\n";
    }
    return result;
  }
}
