export class Board {
  width;
  height;
  positions = [];

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.positions = Array.from({ length: height }, () => Array(width).fill("."));
  }

  drop(block) {
     const middleIdx = Math.floor(this.width / 2);
     this.positions[0][middleIdx] = block;
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
