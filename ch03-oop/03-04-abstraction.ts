{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface ICoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface ICommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  class CoffeeMachine implements ICoffeeMaker, ICommercialCoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7; // class level
    protected coffeeBeans: number = 0; // instance (object) level

    private constructor(beans: number) {
      this.coffeeBeans = beans;
    }

    static makeMachine(beans: number): CoffeeMachine {
      return new CoffeeMachine(beans);
    }

    public fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    }

    private preheat() {
      console.log('heating up...');
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots}...`);
      return {
        shots,
        hasMilk: false,
      };
    }

    clean(): void {
      console.log('cleaning the machine');
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(10);
  maker.fillCoffeeBeans(32);
  maker.makeCoffee(2);
  console.log(maker);

  const maker2: ICoffeeMaker = CoffeeMachine.makeMachine(32);
  // maker2.fillCoffeeBeans(32); // 불가
  maker2.makeCoffee(4);
  console.log(maker2);

  const maker3: ICommercialCoffeeMaker = CoffeeMachine.makeMachine(10);
  maker3.fillCoffeeBeans(32);
  maker3.makeCoffee(4);
  maker3.clean();
  console.log(maker3);

  //
  class AmateurUser {
    constructor(private machine: CoffeeMachine) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }

  class ProBrista {
    constructor(private machine: ICommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(45);
      this.machine.clean();
    }
  }

  const coffeeMaker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  const amateur = new AmateurUser(coffeeMaker);
  const pro = new ProBrista(coffeeMaker);
  amateur.makeCoffee();
  pro.makeCoffee();
}
