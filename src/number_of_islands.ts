export function numIslands(grid: string[][]): number {
  let res = 0;
  const dfs = (i: number, j: number) => {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) {
      return;
    }
    if (grid[i][j] === "1") {
      grid[i][j] = "0";
      dfs(i + 1, j);
      dfs(i - 1, j);
      dfs(i, j + 1);
      dfs(i, j - 1);
    }
  };
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        res++;
        dfs(i, j);
      }
    }
  }
  return res;
}
let grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];
console.log(numIslands(grid));
