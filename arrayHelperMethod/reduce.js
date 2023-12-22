/* @ Array Helper Method: reduce() */

// This one's the hardest among Array Methods.
// So `reduce` is the tough helper to wrap our head around but it's also
// one of the most flexible.
// Reduce is so flexible infact that we could probably reimplement every
// other array helper by just using the `reducer` helper

var numbers = [10, 20, 30];
var sum = 0;

// So what we want to do using the `reduce` helper is, we want to sum all the
// numbers in that array and assign it to the sum variable right there.

/* @ Classic Implementation with for loop  */
for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log('sum using for loop is:', sum);

/* @ Implementation with reduce */
// We call `reduce` in the exact same fashion as every other helper with
// one little small twist.
// With `reduce`, we pass in initial value. So initial value will take the
// place of the second argument to `reduce`. So it will be after function.
// And then as the arguments to the function, we'll take in sum and our number.
const sumWithReduce = numbers.reduce(function (sum, number) {
  return sum + number;
}, 0);

console.log('sum using reduce():', sumWithReduce);

// We've got some element in the array and we pass it to an iterator function.
// At the very top, we've got initial value.
// So the initial value is the second argument that we passed to `reduce`.
// So in this case we provided an initial value of 0.
// Now on every step in the iterator function, the iterator function is now
// getting two arguments.
// It is getting the initial value as the first argument and then the element
// in the array as the second arugment.
// So in our code, we'll see `sum` right there, is coming from the initial value
// And then the second argugment is the element in the array, which in this case
// is `number`.
// So the first time the iterator function runs, it's giong to execute and we
// return a value of 10 because 0 + 10 is 10.
// So the iterator function returns 10.
// That 10 gets piped into the next run of the iterator function as the first
// argument and then 20 comes in as the second argument.
// So putting that into practicality, `sum` would now be 10 and `number`
// would be 20. The iterator function would then return 30.
// And then for the very last through run through the iterator.
// The value from the previous iteration comes in as 30 as the first argument
// And the second argument is 30 out of the array.
// And so 30 + 30 is 60. And that's the last step through our iteration.

// In summary, the thing about reduce is that we pass in an initial value and
// then that initial value is sent to our iterator function for every single
// run through it.
// `every`, `some`, & `reduce` start going towards the realm of helper functions
// where we're kind of condensing down an array to a single value.
// And that's exactly what `reduce`  is doing there.
// We're condensing down our entire collection of elements into a single value,
// in this case 60.
// We decide what the initial value is based on what we're trying to do with this
// reduce function.

/* @ LEVEL 2 */
// We're going to create an array of objects called primary colors.

var primaryColors = [{ color: 'red' }, { color: 'black' }, { color: 'blue' }];

// We want to take every object out of here and we want to collect all the
// values off of each.
// So we want to get: red, black and blue.
// In other words, we want to end up with an array like this:
// [ 'red', 'black', 'blue']
// Now, we could certainly achieve this by using the `map` helper but this
// time around, we want to try doing it using `reduce` instead.

// The number one step of whenever we're using the `reduce` helper is we need
// to think about that default or starting arugment or that starting value, the
// second argument to reduce is.
// This time around, we want to end up with an array of strings. So an
// array of like `red`, `black` & `blue` because our return value is going to
// be an array. It makes lot of sense to start off with an array here
// instead of a number.
// So that's the answers i.e [] what we should put down for the default value.
// Now we need to fill in arguments for the inner function.
// When we're using `reduce`, the first argument is this object ([]) that keeps
// getting carried throughout this kind of like returned value that keeps
// on coming through every iteration.
// And the second argument is the object in the array which in our case is
// `primaryColor`
// The first one is `accumulator` (acc). Some might write `mem` as the first argument.
// But what makes the most sense a lot of time is just to say `previous`.
// That's the `previous` value when we last went through this loop.

const primaryCol = primaryColors.reduce(function (previous, primaryColor) {
  previous.push(primaryColor.color);

  return previous;
}, []);

console.log('primaryColors with reduce:', primaryCol);

// In `reduce` helper, we start to kind of violate that rule of wanting to
// have no mutation of any of our data.
// So that object ([]) that we're passing there, totally fine to mutate it as
// we walk throughout the array.
// So we can see there, when we do `previous.push()`, we're clearly mutating
// previous to make the array that we're trying to build.
// After we mutate the array, we then return it.
// And so `previous`, is then going to come back in as the second argument
// or as the first argument in the next iteration.

/* @ LEVEL 3 */

/* @ reduce - USE CASES IN REAL LIFE */
/*
 * Beside summing numbers, `reduce`, we can use `reduce` for many different
 * things.
 * In a tech interview, we've to do whiteboard coding exercise.
 * A very common whiteboarding question has been what referred to as the
 * balanced parens or parentheses problem.
 * So the question is generally something like we're given a string of
 * characters like:
 * "()()()()"
 * And we've to write a function that decides whether or not the parentheses
 * in this expression are balanced?
 * So that expression right there, doesn't have to be a valid JavaScript.
 * We're just talking about, are these parentheses balanced?
 * In this case, we got balnaced parenthesis because: open and close,
 * open & close, open & close and open and close.
 * We could have something like this too:
 * "(((())))"
 * And this would also be balanced because for every opening one, we've got a
 * closing one as well.
 * If we start doing something like:
 * "))))"
 * or
 * "()))))"
 * Those are both unblanaced expressions because we don't have a closing
 * paren for every opening one.
 * And then the other kind of edge case that we've to worry about is something
 * like this:
 * ")("
 * where we've an opening and closing, but they're on the opposite sides of
 * where they should be.
 * So something like this would also be unbalanced as well.
 * ")()("
 * So the commong coding question here is, given a string that contains some
 * number of parentheses, are the expressions correctly balanced?
 * So this would be a fantastic use of the `reduce` helper.
 */

// We're going to figure out a general purpose here
// To start, we know that we want a function that takes a string and returns
// a boolean of some kind.
// And this boolean basically says like, is this expression balanaced or not?

// We're going to make a counter.
// Every time we see, a closing parentheses, we will decrease it by 1.
// Then at the very end, after our entire reduce runs, if we have a counter
// greater than 1, that means our parentheses must be unbalanced.
function balancedParens(string) {
  // Turn our string into an array of single characters, so we've bunch of
  // individual parentheses
  // Ex: string.split('') returns -> ['(', '(', '(', '(']
  // `char` here in reduce function represents a single character
  // using ! on reduce is going to flip a boolean.
  return !string.split('').reduce(function (previous, char) {
    // To handle weird string like ')('
    if (previous < 0) {
      return previous;
    }
    if (char === '(') {
      return ++previous;
    }
    if (char === ')') {
      return --previous;
    }
    return previous;
  }, 0);
}

console.log('balanced parens:', balancedParens('(((())))'));

// The algorithm above inside `reduce`
// We're  going to create a counter which will be an integer number i.e 0.
// So everytime we see an opening parentheses, we'll increment this counter
// by 1. Everytime we see a closing parentheses, we'll decrease it by 1.
// Then at the very end, after our entire reduce runs, if we've a counter
// greater than 1, that means our parentheses must be unbalanced.
// use ! flips a boolean.
// The way JavaScript works is, it interprets a positive or negative number
// as being truthy, so that'll get flipped to false.
// And it interprets zero as being falsy so it gets flipped to true.

/* @ Distance Traveled */
// Find sum of the distance travelled.
var trips = [{ distance: 34 }, { distance: 12 }, { distance: 1 }];

var totalDistance;

totalDistance = trips.reduce((sum, trip) => {
  return sum + trip.distance;
}, 0);

console.log('Total distance:', totalDistance);

/* @ Reducing Properties */
/* Create an object that tallies the number of sitting and standing desks.
 * The object returned should have the form '{ sitting: 3, standing: 2 }'.
 * The initial value has been provided to you.
 */
var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' },
];

var deskTypes = desks.reduce(
  function (accumulator, desk) {
    if (desk.type === 'sitting') {
      accumulator.sitting++;
    }
    if (desk.type === 'standing') {
      accumulator.standing++;
    }
    return accumulator;
  },
  { sitting: 0, standing: 0 },
);

console.log('Number of sitting & standing desks:', deskTypes);

// Hard problem on reduce.
/* @ Hardmode: Custom 'Unique' Helper */
/* Write a function called 'unique' that will remove all the duplicate
 * values from an array.
 * For example, given the following array:
 * var numbers = [1, 1, 2, 3, 4, 4];
 * Your function should return
 * [1, 2, 3, 4]
 */
function unique(array) {
  return array.reduce((accumulator, current) => {
    if (
      !accumulator.find((item) => {
        return item === current;
      })
    ) {
      accumulator.push(current);
    }
    return accumulator;
  }, []);
}

var numbers = [1, 1, 2, 3, 4, 4];

console.log('unique:', unique(numbers));
