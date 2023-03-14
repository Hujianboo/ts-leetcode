import { numIslands } from "./number_of_islands";
import expect from "expect.js";

describe("numIslands", () => {
  it("数量0", () => {
    let grid = [
      ["0", "0", "0", "0", "0"],
      ["0", "0", "0", "0", "0"],
      ["0", "0", "0", "0", "0"],
      ["0", "0", "0", "0", "0"],
    ];
    let res = 0;
    expect(numIslands(grid)).to.eql(res);
  });
  it("数量1", () => {
    let grid = [
      ["1", "1", "1", "1", "0"],
      ["1", "1", "0", "1", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "0", "0", "0"],
    ];
    let res = 1;
    expect(numIslands(grid)).to.eql(res);
  });
  it("数量3", () => {
    let grid = [
      ["1", "1", "0", "0", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "1", "0", "0"],
      ["0", "0", "0", "1", "1"],
    ];
    let res = 3;
    expect(numIslands(grid)).to.eql(res);
  });
});
