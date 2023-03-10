import expect from "expect.js";
import { isValid } from "./valid_parentheses";
describe("valid_parentheses", () => {
  it("空值", () => {
    let str = "";
    let result = isValid(str);
    expect(result).eql(true);
  });
  it("左边括号多", () => {
    let str = "({()";
    let result = isValid(str);
    expect(result).eql(false);
  });
  it("右边括号多", () => {
    let str = "((())))))";
    let result = isValid(str);
    expect(result).eql(false);
  });
  it("一样多", () => {
    let str = "([((())))])";
    let result = isValid(str);
    expect(result).eql(false);
  });
  it("不匹配", () => {
    let str = "(]";
    let result = isValid(str);
    expect(result).eql(false);
  });
});
