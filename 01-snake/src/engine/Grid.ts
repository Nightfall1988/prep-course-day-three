import { Cell } from "./Cell";
import { Configuration } from "./Configuration";

export class Grid {
  private configuration: Configuration;

  apples: Cell[] = [
      new Cell(33, 22),
      new Cell(35, 22),
      new Cell(37, 22),
      new Cell(39, 22),
      new Cell(41, 22)
    ];

  constructor(configuration: Configuration) {
    this.configuration = configuration;
  }

  seed(): void {}

  isAppleInside(cell: Cell): boolean {
      
    return this.apples.find(it => it.x === cell.x && it.y === cell.y) != undefined;
  }

  removeApple(cell: Cell): void {
        const apple = this.apples.find(it => it.x === cell.x && it.y === cell.y)
        if (apple != undefined) {
            const index = this.apples.indexOf(apple)
            this.apples.splice(index, 1)
        }
  }

  isDone(): boolean {
    return  this.apples.length == 0;
  }

  getApples(): Cell[] {
    return this.apples;
  }

  newLevel(): Cell[] {
    for (let i=0; i<5; i++) {
      const randomnX = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
      const randomnY = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
      const apple = new Cell(randomnX,randomnY);
      this.apples[i] = apple
      }

      return this.apples
  }
}
