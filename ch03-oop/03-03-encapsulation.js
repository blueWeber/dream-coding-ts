{
    // public
    // private
    // protected
    var CoffeeMaker_1 = /** @class */ (function () {
        function CoffeeMaker(beans) {
            this.coffeeBeans = 0; // instance (object) level
            this.coffeeBeans = beans;
        }
        CoffeeMaker.makeMachine = function (beans) {
            return new CoffeeMaker(beans);
        };
        CoffeeMaker.prototype.fillCoffeeBeans = function (beans) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        };
        CoffeeMaker.prototype.makeCoffee = function (shots) {
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
            return {
                shots: shots,
                hasMilk: false
            };
        };
        CoffeeMaker.BEANS_GRAM_PER_SHOT = 7; // class level
        return CoffeeMaker;
    }());
    var maker = CoffeeMaker_1.makeMachine(32);
}
