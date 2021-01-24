import { Cell } from "./Cell";
import { Direction } from "./Direction";

export class Snake {

head: Cell = new Cell(2,0)
tail: Cell[] = [new Cell(0, 0), new Cell(1, 0)]
direction: Direction = 'Right';
cellToGrow = 0;
bannedDir: Direction = 'Left';
privDir: Direction = 'Right';

  setDirection(direction: Direction) {
      this.privDir = this.direction;
      this.direction = direction;
  }

  move() {
    if (this.cellToGrow > 0) {
        this.cellToGrow--;
    } else {
        this.tail.shift();
    }
    this.tail.push(this.head);
    
    if (this.direction != this.bannedDir) {
        switch (this.direction) {
        case 'Right':{
            this.head = new Cell(this.head.x + 1, this.head.y)
            this.bannedDir = 'Left';
            break
        }
        case 'Up': {
            this.head = new Cell(this.head.x, this.head.y - 1)
            this.bannedDir = 'Down';
            break
        }

        case 'Left':{
            {
            this.head = new Cell(this.head.x - 1, this.head.y)
            this.bannedDir = 'Right';
            break
                }
            }

        case 'Down':{
            this.head = new Cell(this.head.x, this.head.y + 1)
            this.bannedDir = 'Up'
            break
        }
    } 
    } else {
        this.direction = this.privDir
    }

}

  grow() {
      this.cellToGrow += 3;
  }

  getHead(): Cell {
    return this.head;
  }

  isSnake(cell: Cell): boolean {
    return false;
  }

  getDirection(): Direction {
    return this.direction
  }

  getTail(): Cell[] {
    return this.tail;
  }
}
