import { TElementOf } from './types';

const numberss = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const operators = ['+', '-', '*', '/'];

type TOperators = TElementOf<typeof operators>;
const doMath = (operand1: number, operand2: number, operator: TOperators) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    case '/':
      return operand1 / operand2;
  }
};
export class Calc {
  state = {
    previous: '',
    current: '',
    operator: '',
  };

  input(commandStr: string) {
    const commands = commandStr.split('');

    for (const command of commands) {
      this.inputSingle(command);
    }
  }
  inputSingle(command: string) {
    const { state } = this;
    if (numberss.includes(command)) {
      if (state.operator) {
        state.previous = state.current;
        state.current = command;
      } else {
        state.current = state.current + command;
      }
    }
    if (operators.includes(command)) {
      if (!state.previous) {
        state.operator = command;
      } else {
        state.current = String(
          doMath(Number(state.previous), Number(state.current), state.operator),
        );
      }
      state.previous = '', 
      state.operator = command
    }
    if (command === '=') {
      state.current = String(
        doMath(Number(state.previous), Number(state.current), state.operator),
      );
      (state.previous = ''), (state.operator = '');
    }
    if (command === '.') {
      if (!state.current.includes('.')) {
        if (!state.current) {
          state.current = '0' + command;
        } else {
          state.current = state.current + command;
        }
      }
    }
  }
}
