export function isValid(s: string): boolean {
  let stack = [];
  let matchMap = new Map([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ]);
  let rightArr = Array.from(matchMap.keys());
  let leftArr = Array.from(matchMap.values());
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    // 左括号 压入栈
    if (leftArr.includes(char)) {
      stack.push(char);
    } else {
      //为空直接返回false说明
      if (stack.length === 0) {
        return false;
      }
      //不为空
      if (stack.length !== 0) {
        let temp = stack.pop();
        if (matchMap.get(char) === temp) {
          continue;
        } else {
          // 不匹配直接return false
          return false;
        }
      }
    }
  }
  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
}

// console.log(isValid("({()})"));
