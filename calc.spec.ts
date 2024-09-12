import { Calc } from './calc';

const cases = [
  ['1', ['', '1', '']],
  ['0.1', ['', '0.1', '']],
  ['112', ['', '112', '']],
  ['1+', ['', '1', '+']],
  ['1+2', ['1', '2', '+']],
  ['12+7', ['12', '7', '+']],
  ['1+2=', ['', '3', '']],
  ['12+7=', ['', '19', '']],
  ['1.2+7=', ['', '8.2', '']],
  ['1.2+3+1+4+4=', ['', '13.2', '']],
] as const;
for (const [input, [previous, current, operator]] of cases) {
  test(`${input} => p:${previous} c:${current} o:${operator}`, () => {
    const calc = new Calc();
    calc.input(input);
    expect(calc.state).toEqual({ previous, current, operator });
  });
}

///////////////////
// test('1=>1', () => {
//   const calc = new Calc();

//   calc.input('1');

//   expect(calc.state).toEqual({ current: '1', operator: '' });
// });

// test('1+=> 1', () => {
//   const calc = new Calc();

//   calc.input('1+');

//   expect(calc.state).toEqual({ current: '1', operator: '+' });
// });

// test('1+2=> 1', () => {
//   const calc = new Calc();

//   calc.input('1+');

//   expect(calc.state).toEqual({ previous: '1', current: '1', operator: '+' });
// });
///////////////////
