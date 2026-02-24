import { beforeEach, describe, test } from "vitest";
import { expect } from "chai";
import { Board } from "../src/Board.mjs";

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
