import { beforeEach, describe, test } from "vitest";
import { expect } from "chai";
import { Board } from "../src/Board.mjs";

describe("Scoring", () => {
  let board;
  let linesCleared;

  beforeEach(() => {
    board = new Board(3, 3);
    linesCleared = [];
    board.onClearLine = (count) => linesCleared.push(count);
  });

  describe("Board notifies observer", () => {
    test("when one line is cleared", () => {
      board.drop("X"); board.moveLeft(); board.tick(); board.tick(); board.tick();
      board.drop("X"); board.tick(); board.tick(); board.tick();
      board.drop("X"); board.moveRight(); board.tick(); board.tick(); board.tick();

      expect(linesCleared).to.deep.equal([1]);
    });
  });
});
