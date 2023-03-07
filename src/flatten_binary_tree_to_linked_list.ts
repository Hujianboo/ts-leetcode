import { TreeNode } from "../public/utils";
import { createTree } from "../public/utils";
export function flatten(root: TreeNode | null): void {
  if (!root) {
    return;
  }
  flatten(root.left);
  flatten(root.right);
  let temp = root.right;
  root.right = root.left;
  root.left = null;
  let leftTemp = root.right;
  while (root.right !== null) {
    root = root.right;
  }
  root.right = temp;
}

// let rootArr = [1, 2, 5, 3, 4, null, 6];
// let root = createTree(rootArr);
// flatten(root);
