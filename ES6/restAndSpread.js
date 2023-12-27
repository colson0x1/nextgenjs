/* @ rest and spread */
// `rest` is used to gather together variables
// `spread` is usd to kinda flatten or spread them out

/*
function addNumbers(a, b, c, d, e) {
  const numbers = [a, b, c, d, e];

  return numbers.reduce((sum, number) => sum + number, 0);
}

console.log(addNumbers(1, 2, 3, 4, 5));
*/

function addNumbers(...numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
}

console.log(addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

/* @ spread */
const defaultColors = ['black', 'crimson'];
const userFavoriteColors = ['blue', 'orange'];
const fallColors = ['fire black', 'fall blue'];

// console.log(defaultColors.concat(userFavoriteColors));

// Using `spread`
// `spread` creates new array
console.log([
  'green',
  'purple',
  ...fallColors,
  ...defaultColors,
  ...userFavoriteColors,
]);

/* @ mix & matching: spread and rest */
function validateShoppingList(...items) {
  if (items.indexOf('croissant') < 0) {
    return ['croissant', ...items];
  }

  return items;
}

console.log(
  validateShoppingList('blueberry', 'chocolate cookies', 'protein bars'),
);

/* @ MATH Library */
const MathLib = {
  calculateProduct(...rest) {
    console.log('Please use the multiply method instead');
    return this.multiply(...rest);
  },
  multiply(a, b) {
    return a * b;
  },
};

/* @ Many, Many Arguments */
function product(...rest) {
  var numbers = [...rest];

  return numbers.reduce(function (acc, number) {
    return acc * number;
  }, 1);
}

/* @ Spreadin' Arrays */
function join(array1, array2) {
  return [...array1, ...array2];
}

/* @ Mixing Rest and Spread */
function unshift(array, ...rest) {
  return [...rest].concat(array);
}
