import { beforeEach, describe, test } from "vitest";
import { expect } from "chai";
import { ShuffleBag } from "../src/ShuffleBag.mjs";

describe("ShuffleBag", () => {
  let bag;
  beforeEach(() => {
    bag = new ShuffleBag([1, 2, 3]);
  });

  test("next() returns only values from the bag", () => {
    for (let i = 0; i < 20; i++) {
      expect([1, 2, 3]).to.include(bag.next());
    }
  });

  test("each item appears exactly once before the bag refills", () => {
    const firstRound = [bag.next(), bag.next(), bag.next()];
    expect(firstRound.sort()).to.deep.equal([1, 2, 3]);
  });
});
