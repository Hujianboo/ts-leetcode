function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  let countMap = new Map();
  let inDegreeMap = new Map();
  let count = 0;
  let queue = [];
  for (let i = 0; i < numCourses; i++) {
    countMap.set(i, 0);
    inDegreeMap.set(i, []);
  }
  for (let i = 0; i < prerequisites.length; i++) {
    const start = prerequisites[i][1];
    const end = prerequisites[i][0];
    countMap.set(end, countMap.get(end) + 1);
    if (inDegreeMap.has(start)) {
      inDegreeMap.set(start, [...inDegreeMap.get(start), end]);
    } else {
      inDegreeMap.set(start, [end]);
    }
  }

  for (let [key, value] of countMap) {
    if (value === 0) {
      queue.push(key);
    }
  }
  while (queue.length !== 0) {
    let front = queue.shift();

    count++;
    let tempArr = inDegreeMap.get(front);
    for (let i = 0; i < tempArr.length; i++) {
      let node = tempArr[i];
      countMap.set(node, countMap.get(node) - 1);

      if (countMap.get(node) === 0) {
        queue.push(node);
      }
    }
  }

  if (count === numCourses) {
    return true;
  } else {
    return false;
  }
}

let res = canFinish(2, [[1, 0]]);
console.log(res);
