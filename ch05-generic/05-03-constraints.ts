interface IEmployee {
  pay(): void;
}

class FullTimeEmployee implements IEmployee {
  pay() {
    console.log('full time!!');
  }
  workFullTime() {}
}
class PartTimeEmployee implements IEmployee {
  pay() {
    console.log('part time!!');
  }
  workPartTime() {}
}

// 새부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 ㄸㄸㄸ;
function payBad(employee: IEmployee): IEmployee {
  employee.pay();
  return employee;
}

function pay<T extends IEmployee>(employee: T): T {
  employee.pay();
  return employee;
}

const ellie = new FullTimeEmployee();
const bob = new PartTimeEmployee();
ellie.workFullTime();
bob.workPartTime();

const ellieAfterPay = pay(ellie) as FullTimeEmployee;
const bobAfterPay = pay(bob) as PartTimeEmployee;

//
const obj = {
  name: 'ellie',
  age: 20,
};

const obj2 = {
  animal: 'dog',
};

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

console.log(getValue(obj, 'name'));
console.log(getValue(obj, 'age'));
console.log(getValue(obj2, 'animal'));
