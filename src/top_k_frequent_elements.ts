import { MinPriorityQueue } from "@datastructures-js/priority-queue";

class heap {
  constructor() {}
}

export function topKFrequent(nums: number[], k: number): number[] {
  let map = new Map();
  nums.forEach((item, index) => {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1);
    } else {
      map.set(item, 1);
    }
  });
  console.log(map);

  let queue = new MinPriorityQueue<{ key: number; value: number }>(
    (item) => item.value
  );
  for (let iterator of map.entries()) {
    const item = { key: iterator[0], value: iterator[1] };
    if (queue.size() < k) {
      queue.enqueue(item);
    } else {
      if (item.value > queue.front().value) {
        queue.dequeue();
        queue.enqueue(item);
      }
    }
  }
  return queue.toArray().map((item) => item.key);
}
let arr = [1, 1, 1, 2, 2, 3];
let k = 2;
console.log(topKFrequent(arr, 2));
