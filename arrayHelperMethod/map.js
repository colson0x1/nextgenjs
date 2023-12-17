/* @ Array Helper Method: map() */
// `map` helper is absolutely the most widely used array helper around
// class example: write a loop that iterates over a list of numbers, doubles
// the value of each number in the array, and then pushes that doubled number
// number into a new array
var numbers = [1, 2, 3];
var doubledNumbers = [];

for (var i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
}

console.log(doubledNumbers);

// Why did we made a new array for these double numbers?
// In large complex JavaScript applications, we want to avoid mutating or
// changing data wherever possible

// Each number in the numbers array is being passed into the anonymous function
// Whatever this function returns, is placed into a new array. After each
// element has been processed. That new array is returned.
// So, for each element in the numbers array, we run some iterator function
// and then we stuff the result into a result array or kind of bran new array
// So, now we're working with two array: original one and brand new one that we
// just kind of mapped out or we just created using the `map` helper.
// Key here is: We're using the `map` helper to create a brand new array. So
// we're not mutating the existing array.
// We're not the changing existing array, we're producing a new one instead.
// NOT: Making sure that we've `return` keyword is absolutely critical!
// If we don't return a value from the inner function, map will just think that
// we're returning undefined.
var doubled = numbers.map(function (number) {
  return number * 2;
});

console.log(doubled);

// `map` is used whenever we want to modify records in some list of data
// One of the most common uses of map is kind of collecting properties
// off of an array of object
var cars = [
  { model: 'Lamborghini Avantador', price: 'EXPENSIVE' },
  { model: 'Mercedes Benz', price: 'EXPENSIVE' },
  { model: 'Range Rover', price: 'CHEAP' },
];

// Let's get a better idea of what are the different prices that we have for
// all the different objects in this array
// The anonymous function will be called one time for each car that we have
// This operation of what we did below is called `plug` because we're plucking
// a particular property off of each object in the array
// This is something that we'll see happen very frequently with client side
// rendering frameworks like Angular, React or similar frameworks like that
var prices = cars.map(function (car) {
  return car.price;
});

console.log(prices);

/* @ map - USE CASES IN REAL LIFE */
/*
 * Map is by far one of the most commonly used array helpers for frontend
 * web development.
 * In development of complex applications, we're going to find that a lot of
 * the job ends up being just rendering lists of data.
 * In that realm, we can say that Reddit, Facebook, Instagram, they're all just
 * rendering lists of data. That's all it is.
 * Lets imagine on the right hand side, there's something like Facebook, perhaps.
 * And we got sequence of posts from all my different friends, and at the top
 * we'll see my friend's name. The contents of whatever they posted and maybe their
 * image off to the left hand side to.
 * To get some data to show on the screen to get the posts. We might load some amount
 * of data from our backend server, which would be maybe like an array of objects
 * where each object represents a single post. So maybe an individual post object,
 * example: `friend update` has a property like `friendPost.name`, `.content, .image`
 * or something like that. This would be perfect use case of the `map` helper here.
 * We want to take each object representing a post. We want to transform it in some
 * fashion and produce some HTML to show on the screen.
 * We could use the `map` helper for that to great effect. So when we map over the
 * post array, we're not going to mutate the existing array. We're not goig to
 * change the post array. We don't want to just randomly stick some HTML in there
 * instead for each friend update or for each post that we have, we'll read the update
 * say who made the post, what's the image, what's the content .. and then we can
 * produce some amount of HTML to place on the screen for that individual post model.
 */

/* Plucking Values */
var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights;

heights = images.map((image) => {
  return image.height;
});

/* Computing Values with map */
var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 },
];

var speeds;

speeds = trips.map(function (trip) {
  return trip.distance / trip.time;
});

/* @ Implementing Pluck */
var paints = [{ color: 'red' }, { color: 'blue' }, { color: 'yellow' }];

function pluck(array, property) {
  return array.map((array) => {
    return array[property];
  });
}

pluck(paints, 'color'); // returns ['red', 'yellow', 'blue'];
