import { TreeNode } from "../public/utils";
import { createTree } from "../public/utils";
export function isValidBST(root: TreeNode | null): boolean {
  let arr: TreeNode[] = [];
  const inorder = (root: TreeNode) => {
    if (!root) {
      return;
    }
    inorder(root.left);
    arr.push(root);
    inorder(root.right);
  };
  inorder(root);
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i].val > arr[i + 1].val) {
      return false;
    }
  }
  return true;
}
