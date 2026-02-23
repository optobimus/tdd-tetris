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
    toString() {
        return this.#orientations[this.#currentIndex].toString();
    }

    static T_SHAPE = new Tetromino([`.T.\nTTT\n...`, `.T.\n.TT\n.T.`, `...\nTTT\n.T.`, `.T.\nTT.\n.T.`]);

    static I_SHAPE = RotatingShape.fromString(
        `.....
         .....
         IIII.
         .....
         .....`
    );
}