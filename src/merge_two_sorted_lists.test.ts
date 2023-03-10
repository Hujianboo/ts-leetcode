import { mergeTwoLists } from "./merge_two_sorted_lists";
import expect from "expect.js";
import { createList } from "../public/utils";
describe("合并排序链表", () => {
  it("空和非空合并", () => {
    let arg1: number[] = [];
    let arg2 = [1, 2];
    let expectArr = [1, 2];
    let res = mergeTwoLists(createList(arg1), createList(arg2));
    let expectRes = createList(expectArr);
    expect(res).to.eql(expectRes);
  });
  it("完全相同合并", () => {
    let arg1 = [44444, 55555, 66666];
    let arg2 = [44444, 55555, 66666];
    let expectArr = [44444, 44444, 55555, 55555, 66666, 66666];
    let res = mergeTwoLists(createList(arg1), createList(arg2));
    let expectRes = createList(expectArr);
    expect(res).to.eql(expectRes);
  });
});
