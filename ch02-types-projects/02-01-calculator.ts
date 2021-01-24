/**
 * Let's make a calculator
 */

enum Calc {
  ADD = 'add',
  SUBSTRACT = 'substract',
  MULTIPLY = 'multiply',
  DIVIDE = 'divide',
  REMAINDER = 'remainder',
}

const calculate = (op: Calc, num1: number, num2: number): number => {
  let r: number = 0;
  switch (op) {
    case Calc.ADD:
      r = num1 + num2;
      break;
    case Calc.SUBSTRACT:
      r = num1 - num2;
      break;
    case Calc.MULTIPLY:
      r = num1 * num2;
      break;
    case Calc.DIVIDE:
      r = num1 / num2;
      break;
    case Calc.REMAINDER:
      r = num1 % num2;
      break;
    default:
      throw new Error('Unknown command');
      break;
  }

  return r;
};

//
console.log(calculate(Calc.ADD, 1, 3)); // 4
console.log(calculate(Calc.SUBSTRACT, 3, 1)); // 2
console.log(calculate(Calc.MULTIPLY, 4, 2)); // 8
console.log(calculate(Calc.DIVIDE, 4, 2)); // 2
console.log(calculate(Calc.REMAINDER, 5, 2)); // 1
