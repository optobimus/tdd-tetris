import { RotatingShape } from "./RotatingShape.mjs";

export class Tetromino {
    #orientations;
    #currentIndex;
    constructor(orientations, currentIndex = 0) {
        this.#orientations = orientations.map((o) => typeof o === "string" ? RotatingShape.fromString(o) : o);
        this.#currentIndex = currentIndex;
    }
    
    static T_SHAPE = RotatingShape.fromString(
        `.T.
         TTT
         ...`
    );

    static I_SHAPE = RotatingShape.fromString(
        `.....
         .....
         IIII.
         .....
         .....`
    );
}