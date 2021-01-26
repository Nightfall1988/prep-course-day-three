import { Minesweeper } from "./Minesweeper";
import { LEVELS } from "./levels";

describe("Minesweeper", () => {
  const level = LEVELS[1];

  it("should have field with closed cells", () => {
    const minesweeper = new Minesweeper(level);

    const cells = minesweeper.getCells();
    expect(cells.length).toBe(25);
    cells.forEach(row => expect(row.length).toBe(25));
  });

    it("should be able to select level", () => {
    const minesweeper = new Minesweeper(level);
    expect(minesweeper.selectLevel(level)).toBe(level);
    expect(minesweeper.getCells().length).toBe(25);
  });
});
