const POINTS = [0, 40, 100, 300, 1200];

export class ScoringSystem {
  score = 0;
  level = 1;

  linesCleared(count) {
    this.score += POINTS[count] * this.level;
  }
}
