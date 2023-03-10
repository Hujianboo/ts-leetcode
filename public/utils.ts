export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export class ListNode {
  val: number | string;
  next: ListNode | null;
  constructor(val?: number | string, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export const createList = (arr: Array<number | string>) => {
  const dummy = new ListNode();
  let current = dummy;
  arr.forEach((item, index) => {
    current.next = new ListNode(item);
    current = current.next;
  });
  return dummy.next;
};
export const createTree = (arr: Array<number | null>) => {
  let queue = new Array<TreeNode>();
  let index = 0;
  let root = new TreeNode(arr[0]);
  queue.push(root);

  let queue2 = new Array<TreeNode>();
  while (queue.length > 0) {
    let node = queue.shift();
    if (++index < arr.length && arr[index]) {
      let left = new TreeNode(arr[index]);
      node.left = left;
      queue2.push(left);
    }
    if (++index < arr.length && arr[index]) {
      let right = new TreeNode(arr[index]);
      node.right = right;
      queue2.push(right);
    }
    if (queue.length === 0) {
      queue = queue2;
      queue2 = new Array<TreeNode>();
    }
  }
  return root;
};
