import { describe, expect, it } from "vitest";
import { isValid } from "../../code/easy/00020-Valid-Parentheses";

describe("Valid Parentheses test case 🥇", () => {
  it("should return the expected result", () => {
    const s = "()";
    const expected = true;
    expect(isValid(s)).toBe(expected);
  });
});

describe("Valid Parentheses test case 🥈", () => {
  it("should return the expected result", () => {
    const s = "()[]{}";
    const expected = true;
    expect(isValid(s)).toBe(expected);
  });
});

describe("Valid Parentheses test case 🥉", () => {
  it("should return the expected result", () => {
    const s = "(]";
    const expected = false;
    expect(isValid(s)).toBe(expected);
  });
});
