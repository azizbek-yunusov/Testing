import { describe, expect, it } from "vitest";
import { Cacl } from "./calc";


// describe.todo("calc")
// -> test suite
describe("calc", () => {
  // beforeAll(() => {});
  // afterAll(() => {});
  // beforeEach(() => {})
  // beforeEach(() => {})
  // afterEach(() => {})
  // -> test case
  // it.todo(...) orqali testni tashlab ketish mumkin
  // it.on(...) orqali faqat shu caseni ishledi yoki describe.only qilsa ham bo'ladi
  // it.skip(...) orqali faqat case ni keyinroqqa qoldirish
  it("should return 2 for 1+1", (context) => {
    const actual = 1 + 1;
    const expected = 2;
    const calc = new Cacl()
    
    expect(actual).toBe(expected)
    // Objectlarni ichini tekshirish uchun toEqual ishlatilinadi
    // expect({name: "Ravshan"}).toEqual({name: "Aziz", lastname: "Yunusov"})
  })
})