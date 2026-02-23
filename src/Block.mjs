export class Block {
  #char;
  constructor(char) {
    this.#char = char;
  }

  get width() {
    return 1;
  }
  get height() {
    return 1;
  }

  cellAt(row, col) {
    return this.#char;
  }
  toString() {
    return this.#char + "\n";
  }
}
