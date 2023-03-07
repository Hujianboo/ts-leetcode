import { flatten } from "./flatten_binary_tree_to_linked_list";
import expect from "expect.js";
import { createTree } from "../public/utils";
describe("二叉树转成链表", () => {
  it("二叉树转成链表", () => {
    let rootArr = [1, 2, 5, 3, 4, null, 6];
    let root = createTree(rootArr);
    let result = createTree([1, null, 2, null, 3, null, 4, null, 5, null, 6]);
    flatten(root);
    expect(root).to.eql(result);
  });
});
