export class ShuffleBag {
  #items;
  #remaining;

  constructor(items) {
    this.#items = [...items];
    this.#remaining = [];
  }

  next() {
    if (this.#remaining.length === 0) {
      this.#remaining = [...this.#items].sort(() => Math.random() - 0.5);
    }
    return this.#remaining.pop();
  }
}
