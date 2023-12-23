/* @ Arrow Functions */
// const add = function (a, b) {
//   return a + b;
// };

// const add = (a, b) => {
//   return a + b;
// };

// Implicit return of the function
// Implicit return is just fancy talk for saying that whatever the result
// of this expression right below is, will automatically get returned
// from the function.
const add = (a, b) => a + b;

const newSum = add(1, 2);
console.log(newSum);

// LEVEL 2
// const double = function(number) {
//   return 2 * number;
// }

// WE can drop off parentheses for a single argument
const double = (number) => 2 * number;

// If we got a function with no arguments, then we must write empty ()
const triple = () => 3;

// We can't place semicolon inside in this instance
// wrong: const four = (number => number * 4;)
// right: const four = (number => number * 4);

console.log('double:', double(8));

const numbers = [1, 2, 3];

// numbers.map(function(number) {
//   return 2 * number;
// })

// Very compact expression now
numbers.map((number) => 2 * number);

/* @ Problem Arrow functions really solves */
// const team = {
//   members: ['Colson', 'Swikrity'],
//   teamName: 'Tropical Lovely',
//   teamSummary: function () {
//     return this.members.map(function (member) {
//       return `${member} is on team ${this.teamName}`;
//     });
//   },
// };

// In the above code, team.teamSummary() returns:
// undefined for $this.teamName}

// Solution 1: with ES5 bind()
// const team = {
//   members: ['Colson', 'Swikrity'],
//   teamName: 'Tropical Lovely',
//   teamSummary: function () {
//     return this.members.map(
//       function (member) {
//         return `${member} is on team ${this.teamName}`;
//       }.bind(this),
//     );
//   },
// };

// Solution 2: with jQuery style
// caching a reference to `this` outside of the function and making reference
// to that cached version inside of the function.
// const team = {
//   members: ['Colson', 'Swikrity'],
//   teamName: 'Tropical Lovely',
//   teamSummary: function () {
//     var self = this;
//
//     return this.members.map(function (member) {
//       return `${member} is on team ${self.teamName}`;
//     });
//   },
// };

// Arrow functions can solve this problem.
// Arrow functions makes use of lexical `this`
// Lexical means the placement of this term depends on how its interpreted or
// how its evaluated.
// So depending on where we're placing `this`, it would change when using
// arrow function.
// `this` is automatically set to `this` in the surrounding context
// this === team
const team = {
  members: ['Colson', 'Swikrity'],
  teamName: 'Tropical Lovely',
  teamSummary: function () {
    // this === team
    return this.members.map((member) => {
      return `${member} is on team ${this.teamName}`;
    });
  },
};

console.log(team.teamSummary());

// In short, arrow functions make the value of `this` behave as we would
// expect and hope it to.

const fibonacci = (n) => {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

// NOTE: Arrow functions bind the value of `this` to the surrounding context.
// But sometimes we don't want that behavior.
const profile = {
  name: 'Alex',
  getName: function () {
    return this.name;
  },
};
