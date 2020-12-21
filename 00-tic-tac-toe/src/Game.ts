export type XO = "X" | "O" | "-";

export class Game {
  cells: XO[] = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
  getCells(): XO[] {
    return this.cells;
  }

  getTurn(): XO {
    const countX = this.cells.filter((cell) => cell === "X").length
    const countO = this.cells.filter((cell) => cell === "O").length
    if (countX === countO) {
        return "X"
    } else {
        return "O"
    }
}

  getWinner(): XO {
    const indicesOfX: number[] = [];
    // for (let i = 0; i<this.cells.length; i++) {
    //     const cell = this.cells[i];
    //     if (cell == 'X') {
    //         indicesOfX.push[]                                       
    //     }
    // }
    return '-'
  }

  isTie(): boolean {
    return false;
  }

  onClick(i: number): void {
   if (this.cells[i] === "-") {
        this.cells[i] = this.getTurn();
   }
  }

  restart(): void {
    console.log("restart called");
  }
}
