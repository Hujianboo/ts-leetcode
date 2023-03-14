import { createTree } from "../public/utils";
import expect from "expect.js";
import { isValidBST } from "./validate_binary_search_tree";
describe("isValidBST", () => {
  it("合规", () => {
    let arr = [2, 1, 3];
    let tree = createTree(arr);
    let result = true;
    expect(isValidBST(tree)).to.eql(result);
  });
  it("不合规", () => {
    let arr = [2, 1, 3, 3];
    let tree = createTree(arr);
    let result = false;
    expect(isValidBST(tree)).to.eql(result);
  });
});
