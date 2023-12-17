/* @ Array Helper Method - forEach() */

/* @ Level 1 */
var colors = ['red', 'blue', 'green'];

for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// When we call forEach, we pass an anonymous function, which is the
// internal argument to the forEach call
// This function gets called one time for every element in the array
// An iterator function is the function that we pass into forEach

// forEach behaves same way as the for loop
// Difference: Dramatically less code that we've to write
colors.forEach(function (color) {
  console.log(colors);
});

/* @ Level 2 */

// Create an array of numbers
var numbers = [1, 2, 3, 4, 5];

// Create a variable to hold the sum
var sum = 0;

// Loop over the array, incrementing the sum variable
// A very common convention: If we have an array named plural (colors, computers),
// for the inner function, the iterator function, when we received an individual
// element in the array, We use singular form of the object (numbers: number)
// We can also define iterator function as a separate function
// Inner function does not have to be an anonymous function

// This func will be called with a nunmber and every time it gets called,
// it will be called with a individual number
function adder(number) {
  sum += number;
}

// Referencing but not using parenthesis
numbers.forEach(adder);

// print the sum variable
console.log(sum);

/* forEach - USE CASES IN REAL LIFE */
// @ NOTE: Every other helper could be reimplemented using the forEach helper
/*
 * Suppose we got spam folder opened in Gmail. We select couple of spam messages
 * that we want to delete. Perhaps once we select some number of emails and then
 * click `delete all selected`, We need to send some type of request like HTTP
 * request to some server and request that certain email be deleted. So we would
 * likely to have to pass along maybe `id` of the email or some kind of like
 * identifying token about the email about the email. So bacically, hey server
 * please delete this email and here's the one I want to delete. This wold be a
 * fantastic use case of the forEach helper
 * Let's assume clicking the checkbox adds the email to some emails array, like
 * emails to be deleted. Then whenever user clicks on the button, we could run
 * `emails.forEach`, so every email that's in that array, we should iterate over
 * it and call the functoin `deleteEmail(email)` passing in the email.
 * ```js
 * emails.forEach(function(email) {
 *  deleteEmail(email);
 * })
 * ```
 * Using forEach helper here over for loop because for `forEach` loop and a `for` loop
 * we'd have exact same end effect, but with `forEach` helper, we've dramatically
 * less code. With `for` loop, we'd have to use boiler plat code that's not really
 * gaining us anything `(var i; i < emails.length; i++)`.
 * In short, whenever we want to call some method multiple times, passing in a
 * different argument each time, consider using a `forEach` helper
 */

/* Level 3: Moving Away From For */
function handlePosts() {
  var posts = [
    { id: 23, title: 'Daily JS News' },
    { id: 52, title: 'Code Refactor City' },
    { id: 105, title: 'The Brightest Ruby' },
  ];

  // for (var i = 0; i < posts.length; i++) {
  //   savePost(posts[i]);
  // }

  posts.forEach(function (post) {
    savePost(post[i]);
  });
}

/* @ Level 4: Processing Values */
var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 },
];
var areas = [];

images.forEach(function (image) {
  areas.push(image.height * image.width);
});
