import { describe, expect, it } from "vitest";
import { Cacl } from "./calc";


// describe.todo("calc")
// -> test suite
describe("calc", () => {
  // -> test case
  it("should return 2 for 1+1", () => {
    const actual = 1 + 1;
    const expected = 2;
    const calc = new Cacl()
    
    expect(actual).toBe(expected)
    // Objectlarni ichini tekshirish uchun toEqual ishlatilinadi
    // expect({name: "Ravshan"}).toEqual({name: "Aziz", lastname: "Yunusov"})
  })
})