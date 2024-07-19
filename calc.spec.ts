import { Cacl } from "./calc";

test('1 + 2 => 3', () => {
    const calc = new Cacl()

    calc.input('1+1=')

    expect(calc.current).toBe(2)
} )