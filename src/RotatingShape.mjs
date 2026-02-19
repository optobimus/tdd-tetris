export class RotatingShape {
    grid = [];

    constructor(grid) {
        this.grid = grid;
    }

    static fromString(string) {
        return new RotatingShape(string.trim().split("\n").map(row => row.trim().split("")));
    }

    rotateRight(){
        const size = this.grid.length;
        const newGrid = Array.from({ length: size }, () => Array(size));
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                newGrid[i][j] = this.grid[size - j - 1][i];
            }
        }
        return new RotatingShape(newGrid);
    }
    toString() {
        return this.grid.map(row => row.join("")).join("\n") + "\n";
    }
}