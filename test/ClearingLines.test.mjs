import { beforeEach, describe, test } from "vitest";
import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Tetromino } from "../src/Tetromino.mjs";

describe("Clearing lines", () => {
  let board;
  beforeEach(() => {
    board = new Board(3, 4);
  });

  test("a full row is cleared when a block lands", () => {
    board.drop("X");
    board.moveLeft();
    board.tick(); board.tick(); board.tick(); board.tick();
    board.drop("X");
    board.tick(); board.tick(); board.tick(); board.tick();
    board.drop("X");
    board.moveRight();
    board.tick(); board.tick(); board.tick(); board.tick();

    expect(board.toString()).to.equalShape(
      `...
       ...
       ...
       ...`
    );
  });

  test("an incomplete row is not cleared", () => {
    board.drop("X");
    board.moveLeft();
    board.tick(); board.tick(); board.tick(); board.tick();
    board.drop("X");
    board.tick(); board.tick(); board.tick(); board.tick();

    expect(board.toString()).to.equalShape(
      `...
       ...
       ...
       XX.`
    );
  });

  test("multiple full rows are cleared at once", () => {
    board = new Board(4, 4);
    board.drop("X"); board.moveLeft(); board.tick(); board.tick(); board.tick(); board.tick();
    board.drop("X"); board.moveRight(); board.moveRight(); board.tick(); board.tick(); board.tick(); board.tick();
    board.drop("X"); board.moveLeft(); board.tick(); board.tick(); board.tick();
    board.drop("X"); board.moveRight(); board.moveRight(); board.tick(); board.tick(); board.tick();
    board.drop(Tetromino.O_SHAPE);
    board.tick(); board.tick(); board.tick();

    expect(board.toString()).to.equalShape(
      `....
       ....
       ....
       ....`
    );
  });

  test("rows above a cleared line shift down", () => {
    board.drop("X");
    board.moveLeft();
    board.tick(); board.tick(); board.tick(); board.tick();
    board.drop("X");
    board.moveLeft();
    board.tick(); board.tick(); board.tick();
    board.drop("X");
    board.tick(); board.tick(); board.tick(); board.tick();
    board.drop("X");
    board.moveRight();
    board.tick(); board.tick(); board.tick(); board.tick();

    expect(board.toString()).to.equalShape(
      `...
       ...
       ...
       X..`
    );
  });
});
