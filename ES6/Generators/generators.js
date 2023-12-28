/* @ Generators */
// Generator is a function that can be entered and exited multiple times.
// We can call `yield`, multiple times
// And for every single `yield` statement, we need to call `.next()` because
// that's how we advanced through our generator.

function* shopping() {
  // stuff on the sidewalk

  // walking down the sidewalk

  // go into the store with cash
  const stuffFromStore = yield 'cash';

  // walking to laundry place
  const cleanClothes = yield 'laundry';

  // walking back home
  return [stuffFromStore, cleanClothes];
}

// stuff in the store
const gen = shopping();

console.log(gen.next()); // leaving our house
// walked into the store
// walking up and down the aisles..
// purchase our stuff

console.log(gen.next('groceries')); // leaving the store with groceries
console.log(gen.next('clean clothes'));

/* @ ES6 Generators */
function* colors() {
  yield 'blue';
  yield 'orange';
  yield 'black';
}

// create generator object by calling colors
const genx = colors();
// First time we called .next, it'll enter the generator and executes
// everything up to the first `yield` statement.
console.log(genx.next());
// reenter generator and execute everything up to the next `yield` statement.
console.log(genx.next());
// reenter generator and execute everything up to the next `yield` statement.
console.log(genx.next());

// this time we aren't returning any value
// so returns: done true
console.log(genx.next());

/* @ Generators works perfectly with `for...of` loop */
// Every time inside our generator that we yield a value, it creates a single
// run of our `for...of` loop.
// We don't have to deal with .next() or the value or done true or false.
const myColors = [];
for (let color of colors()) {
  myColors.push(color);
}

console.log('using forEach for generators:', myColors);

/* We can use Generators to iterate through any data structure that we want. */
// So we're use to just iterating over like objects and arrays, but we can use
// generators to iterate through widely different types of data structures.

/* @ Practical use of ES6 Generators */
// We're going to create an object that represents an engineering team.
// Team of people who are writing software.
const testingTeam = {
  lead: 'Colson 1',
  tester: 'Shishir 1',
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.tester;
  },
};

// Note: If we're following good convention is that we should move duplicate
// key:value pair to the top.
// testingTeam: testingTeam
const engineeringTeam = {
  testingTeam,
  size: 3,
  department: 'Engineering',
  lead: 'Colson',
  manager: 'Samriddha',
  engineer: 'Shishir',
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.manager;
    yield this.engineer;
    yield* this.testingTeam;
  },
};

// So we want to use `generators` here to figure out how to iterate through
// this object.
// Why generators is?
// We only want to iterate through the employees.
// We don't want to iterate through size and the department keys on there as well.
// So we just want to have the ability to iterate through all the different
// employees inside of my engineering team.
// So we can make a multi step generator to handle this.

// This isn't required when Symbol.iterator is used in the Engineering Team
/*
function* TeamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;

  // one solution
  // yield team.testingTeam.lead;
  // yield team.testingTeam.engineer;
  // But there's a more reusable solution i.e to create a separate generator
  // that will be tailored specifically to work with a testing team.
  // So in that case, we would end up with both a team iterator and a
  // testing iterator as well.

  // In this case, inside of our TeamIterator, team is the engineering team
  // and testing team is the testing team object.
  // So we just called the second generator, passing in the testing team.
  // This is a second generator which has two yields statements we need
  // yo yield over.
  /* @ Before using Symbol.iterator */
// const testingTeamGenerator = TestingTeamIterator(team.testingTeam);
// So to make sure that our for...of loop kind of like falls into it and
// yields or kind of iterates over both the lead and the tester,
// We're going to put down yield star testing team generator.
// Because we've now got our generator in hand and we want to make sure
// that the for...of loop knows that, it has a couple of yields statements
// of its own that it needs to take into account.
// yield* can be read as, Hey I'm currently in a generator because we're
// in one, I'm in a generator, but I've got another generator that has a
// few yield statements that you might care about as well.
/* @ Before using Symbol.iterator */
// yield* testingTeamGenerator;
// That's ^ Generator Delegation
// That linking right there causes our for...of loop to walk through both
// different teams.
/*
  // After using Symbol.iterator
  yield* team.testingTeam;
}
*/

/* @ No need of this after using Symbol.iterator
function* TestingTeamIterator(team) {
  yield team.lead;
  yield team.tester;
}
*/

/* Before using Symbol.iterator */
/*
const names = [];
for (let name of TeamIterator(engineeringTeam)) {
  names.push(name);
}
*/

/* After using Symbol.iterator */
const names = [];
for (let name of engineeringTeam) {
  names.push(name);
}

console.log(names);

// So this would be the fantastic use case of generators combined with the
// for...of loop.
// WE've got some custom object right there where we want to iterate over just
// very particular properties; Just the actual employees;

/* @ Delegation of Generators */
/* @ Combine multiple generators */
/* @ Use generators with a symbol iterator */

// In addition to our engineering team, we also want to have a testing team.
// So a testing team will belong to an engineering team.
// But the testing team is also going to be kind of like their own standalone
// thing as well.
// So a testing team is going to have its own lead and its own tester.
// And the reasoning behind this is that the testing team, maybe they are
// supporting multiple different engineering teams.

// Now: We want to iterate through both of the teams and we want to iterate
// through all the employees names.

// Also, the goal is to have a single for loop and walk through all of our
// engineering team and testing team.
// Whenever we iterate through Engineering Team, we also want to iterate
// through Testing Team. This is also referred to as Generator Delegation.
// It's where we're delegating from the engineering team generator down
// to the testing team as well.

/* @ Symbol iterator is a tool that teaches objects how to respond to the
 * for...of loop.
 */

/* @ Tree Data Structure - Generator with Recursion */
class Comment {
  constructor(content, children) {
    this.content = content;
    this.children = children;
  }

  *[Symbol.iterator]() {
    yield this.content;
    for (let child of this.children) {
      yield* child;
    }
  }
}

// 3 children. Among them, each don't have their children own their own.
const children = [
  new Comment('dope car', []),
  new Comment('exotic view', []),
  new Comment('cool sneaker', []),
];

// tree is the root node
const tree = new Comment('Great post!', children);

// We're going to create a for...of loop to iterate over our tree variable.
// And for every node inside that tree, we want to just collect all the values.
const values = [];
for (let value of tree) {
  values.push(value);
}

console.log(values);
