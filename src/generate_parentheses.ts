function generateParenthesis(n: number): string[] {
  let res: string[] = [];
  const dfs = (str: string, leftCount: number, rightCount: number) => {
    // 左右括号平衡一致，入res
    if (leftCount === n && rightCount === n) {
      res.push(str);
      return;
    }
    // 数量超过n 终止
    if (leftCount > n) {
      return;
    }
    // 不合规 终止
    if (leftCount < rightCount) {
      return;
    }
    dfs(str + "(", leftCount + 1, rightCount);
    dfs(str + ")", leftCount, rightCount + 1);
  };
  dfs("", 0, 0);
  return res;
}
