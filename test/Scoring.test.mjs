import { beforeEach, describe, test } from "vitest";
import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { ScoringSystem } from "../src/ScoringSystem.mjs";

describe("Scoring", () => {
  let board;
  let linesCleared;

  beforeEach(() => {
    board = new Board(3, 3);
    linesCleared = [];
    board.onClearLine = (count) => linesCleared.push(count);
  });

  describe("ScoringSystem", () => {
    let scoring;
    beforeEach(() => {
      scoring = new ScoringSystem();
    });

    test("score starts at zero", () => {
      expect(scoring.score).to.equal(0);
    });

    test("clearing 1 line scores 40", () => {
      scoring.linesCleared(1);
      expect(scoring.score).to.equal(40);
    });

    test("clearing 2 lines scores 100", () => {
      scoring.linesCleared(2);
      expect(scoring.score).to.equal(100);
    });

    test("clearing 3 lines scores 300", () => {
      scoring.linesCleared(3);
      expect(scoring.score).to.equal(300);
    });

    test("clearing 4 lines scores 1200", () => {
      scoring.linesCleared(4);
      expect(scoring.score).to.equal(1200);
    });
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
