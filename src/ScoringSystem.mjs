const POINTS = [0, 40, 100, 300, 1200];

export class ScoringSystem {
  score = 0;
  level = 1;
  #totalLines = 0;

  linesCleared(count) {
    this.score += POINTS[count] * this.level;
    this.#totalLines += count;
    this.level = Math.floor(this.#totalLines / 10) + 1;
  }
}
