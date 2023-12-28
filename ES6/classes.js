/* @ Class */
/* JavaScript doesn't really have true object inheritance.
 * It has what is called prototypal inheritance.
 * We use classes to set up some level of inheritance and to create objects.
 * Under the hood, whenever we use a class, we're still making use of
 * Prototypal inheritance.
 */

// ES5
/*
function Car(options) {
  this.title = options.title;
}

Car.prototype.drive = function () {
  return 'vroom';
};

function RollsRoyce(options) {
  // Make sure that we run any initialization that occurs in the car as well
  Car.call(this, options);
  this.color = options.color;
}

// Make duplicate of the car prototype
RollsRoyce.prototype = Object.create(Car.prototype);
RollsRoyce.prototype.constructor = RollsRoyce;

RollsRoyce.prototype.honk = function () {
  return 'beep';
};

// const car = new Car({ title: 'Focus' });
// console.log(car.drive());
// console.log(car);

const rollsroyce = new RollsRoyce({ color: 'purple', title: 'Daily Driver' });
console.log(rollsroyce);
console.log(rollsroyce.drive());
console.log(rollsroyce.honk());
*/

// ES6 - Using Class
// The idea behind a class is that we're going to bypass the step of having to
// set up that constructor function, worrying about the prototype, worrying
// about all that inheritance boilerplate and all that kind of weird stuff
// that was going on.
class Car {
  constructor({ title }) {
    this.title = title;
  }

  drive() {
    return 'vroom';
  }
}

// const car = new Car({ title: 'Lamborghini' });
// console.log(car);
// console.log(car.drive());

class Lamborghini extends Car {
  constructor(options) {
    super(options); // Car.constructor()
    this.color = options.color;
  }

  honk() {
    return 'beep';
  }
}

const lambo = new Lamborghini({ color: 'green', title: 'Exotic Landscape' });
console.log('lambo honk -', lambo.honk());
console.log('lambo drive -', lambo.drive());
console.log(lambo);

/* @ IRL */
/*
React.createClass({
  doSomething() {

  } 

  doSomethingElse() {

  }
});

// These days, React has migrated to using this more modern syntax.
class MyComponent extends Component {
  doSomething() {

  }

  doSomethingElse() {

  }
}
*/

/* @ Game Classes */
class Monster {
  constructor(options) {
    this.health = 100;
    this.name = options.name;
  }
}

const monster = new Monster({ name: 'Monster' });
console.log(monster);

/* @ Subclassing Monsters */
class Snake extends Monster {
  constructor(options) {
    super(options);
  }

  bite(anotherSnake) {
    if (anotherSnake instanceof Snake) {
      anotherSnake.health -= 10;
      console.log(
        `${this.name} bit ${anotherSnake.name}'s health is now ${anotherSnake.health}.`,
      );
    } else {
      console.log('Invalid target for bite. Only snakes can be bitten');
    }
  }
}

const snake1 = new Snake({ name: 'Snake 1' });
const snake2 = new Snake({ name: 'Snake 2' });

snake1.bite(snake2);
