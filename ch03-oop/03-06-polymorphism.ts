{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface ICoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements ICoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7; // class level
    protected coffeeBeans: number = 0; // instance (object) level

    protected constructor(beans: number) {
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

  class CaffeLatteMahine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }

    private steamMilk(): void {
      console.log('Steaming some milk...');
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return { ...coffee, hasMilk: true };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    constructor(beans: number) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return { ...coffee, hasSugar: true };
    }
  }

  const machines: ICoffeeMaker[] = [
    CoffeeMachine.makeMachine(16),
    new CaffeLatteMahine(16, 'SSS'),
    new SweetCoffeeMaker(16),
    CoffeeMachine.makeMachine(16),
    new CaffeLatteMahine(16, 'SSS'),
    new SweetCoffeeMaker(16),
  ];
  machines.forEach((machine) => {
    console.log('-----------------------------');
    machine.makeCoffee(1);
  });
}
