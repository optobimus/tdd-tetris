import { RotatingShape } from "./RotatingShape.mjs";

export class Tetromino {
    #orientations;
    #currentIndex;
    constructor(orientations, currentIndex = 0) {
        this.#orientations = orientations.map((o) => typeof o === "string" ? RotatingShape.fromString(o) : o);
        this.#currentIndex = currentIndex;
    }

    rotateRight() {
        return new Tetromino(this.#orientations, (this.#currentIndex + 1) % this.#orientations.length);
    }

    rotateLeft() {
        return new Tetromino(this.#orientations, (this.#currentIndex - 1 + this.#orientations.length) % this.#orientations.length);
    }

    get width() {
        return this.#orientations[this.#currentIndex].grid[0].length; 
    }
    get height() { 
        return this.#orientations[this.#currentIndex].grid.length; 
    }
    cellAt(row, col) { return this.#orientations[this.#currentIndex].grid[row][col]; }

    toString() {
        return this.#orientations[this.#currentIndex].toString();
    }

    static T_SHAPE = new Tetromino([`.T.\nTTT\n...`, `.T.\n.TT\n.T.`, `...\nTTT\n.T.`, `.T.\nTT.\n.T.`]);

    static I_SHAPE = new Tetromino([`.....\n.....\nIIII.\n.....\n.....`, `..I..\n..I..\n..I..\n..I..\n.....`]);

    static O_SHAPE = new Tetromino([`.OO\n.OO\n...`]);
}