/* @ Array Helper Method: every() & some() */
// Between `every` and `some` and the helper `reduce`, we're starting to
// get in the realm of helpers where we're looking at an entire list of
// records or an array of something and we're condensing down this array
// into a single value like a boolean, or number or a string.

/* @ Implementation with classic for loop */
var computers = [
  { name: 'Apple', ram: 24 },
  { name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 32 },
];

// We've got three comptuers there, and for each computer we've a `name` property
// and a `ram` property
// Now for this for loop that we're going to make, we're kind of going to imagine
// for a second that perhaps we want to run a program on each of these computers
// that requires at least 16 GB of RAM to be installed.
// So we want to find all the computers in here where we've greater than 16 GB of RAM

// If we just wanted to find a list of the computers that could make use of this
// program, we could use the `filter` helper. That would be great use of it.
// But maybe we want to take a different approach to this and we don't want to know
// exactly which computers can run the program. Maybe we just want to know, do
// I have any computers that can run the program? So we want to know something like
// can `allComputersCanRunProgram`. So out of all the computers that we currently have
// in stock, tell me Boolean value (true or false / yes or no) - Do I have any computer
// that can run this program?

var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

for (var i = 0; i < computers.length; i++) {
  // computers[i] is the current computer
  var computer = computers[i];

  if (computer.ram < 16) {
    allComputersCanRunProgram = false;
  } else {
    onlySomeComputersCanRunProgram = true;
  }
}

console.log('allComputersCanRunProgram', allComputersCanRunProgram);
console.log('onlySomeComputersCanRunProgram', onlySomeComputersCanRunProgram);

// For loop while being fantastically flexible, take a lot of time to kind of
// figure out all these different edge cases like should i make a boolean?
// and if so, what should I default to it? So we default this to be true or false?
// And then once we get into the for loop, we got to write logic in there (if else)
//  and take the boolean, turn it from true to false once we find the first
//  computer that has less than 16 GB of RAM. So it took kind of a non-zero
//  amount of time to figure out the logic here and certainly once we have
//  another engineer come on the scene and some a number of years, they're
//  going to look at this for loop and they're going to say, um, all right,
//  they got these booleans in here. What do they you know, they got to sit down
//  and struggle, look at this code and kind of try to figure out what's going on
//  So again, its a same case that using a for loop, while very flexible, kind of
//  leads to a little bit hard to understand code. So, this is where our array
//  helper is going to play.

/* @ every helper */
// So for every element in the array, we're going to take the element, we're
// going to pass it into our iterator function. The iterator function will return
// a boolean value. So it needs to be true or false once it returns. We'll then
// look at all of the values that got returned, kind of do an AND (&&) operation
// between all of them and then produce a final result of either true or false.
// And so in the case of looking at every single different computer and saying,
// does this have enough RAM to run this program, we'll take a boolean value
// from each element and then combine it or reduce it down to a single boolean
// of yes, everything can or cannot run it.

/* @ Implementation of every */
const canAllComputerRunProgram = computers.every(function (computer) {
  return computer.ram > 16;
});

console.log('canAllComputerRunProgram:', canAllComputerRunProgram);

// So with every helper, we have an iterator function and inside the iterator,
// we have to return a boolean value. If every single element returns true
// out of that expression right there, the `every` helper will return true.
// But if any element returns false, then the whole expression will return
// false as well.

/* @ some helper */
// `some` helper works very much like the every helper. So with every computer
// we pass in the computer into an iterator function and it will return Boolean.
// So up there in the 16 case, we return true. 24 is > than 16. Another iteration,
// 4 is < than 16 so we return false and last, 32 is > 16, so we return true.
// The difference between `every` and `some`, with `every` we look out all the
// values that get returned and we kind of imagine that there's an AND (&&) operator
// between each one. But with `some`, there's an OR (||) operator between
// any value. So with `some`, we're saying do any records in this array satisfiy
// that criteria? i.e. Do any records have greater than 16GB of RAM? So yep,
// at least one does over there, no matter how many, so `some` returns true overall.

const someInAction = computers.some(function (computer) {
  return computer.ram > 16;
});

console.log('someInAction:', someInAction);

// In this case, at least one computer yep does have greater than 16 GB of RAM.
// So we get a result from this;
// `return` keyword is important!

/* @ Example: every helper */
var names = ['Swikrity', 'Colson', 'Lauren'];

// We want to write a helper using `every` or `some` and we just want to
// find all the names in that array with a length greater than 6 characters
// So we can use the `every`  and `some` helper to do this fantastically
const everyNamesGreaterThanSix = names.every(function (name) {
  return name.length > 6;
});

console.log('everyNamesGreaterThanSix:', everyNamesGreaterThanSix);

const someNamesGreaterThanSix = names.some(function (name) {
  return name.length > 6;
});

console.log('someNamesGreaterThanSix', someNamesGreaterThanSix);

/* @ every and some - USE CASES IN REAL LIFE */
/*
 * We'll use `every`  and `some` all the darn time in daily life if we look for
 * places to make use of them.
 * Let's imagine for a moment, that we're building a login or a signup form for
 * an application. So a login form should probably have like a username and a
 * password input. Now when the user submits the form and when they actually
 * click okay, or log me in or sign me up or whatever, that button might say
 * before we actually submit that form to the server and try to sign the user in
 * or sign them up or whatever it might be. Chances are we're going to want to
 * validate the inputs and make sure that the user like actually typed something
 * in. We want to make sure they actually put something in and if they did not,
 * then perhaps we need to say, show an error message to the user or deny them
 * the ability to log in or whatever it might be. Basically we just want to make
 * sure they put in some information.
 * So let's draft up some code that might helps us with this validation.
 */
// This object here field is just an object that represents a field on our form
// So literally like a text input or something like that
function Field(value) {
  this.value = value;
}

// We're saying a field is valid if it has a length greater than zero
Field.prototype.validate = function () {
  return this.value.length > 0;
};

var username = new Field('colson');
var password = new Field('stillhome');
var birthdate = new Field('1/1/1111');

// The problem that we're trying to solve here is how can we easily validate
// that form
// So we're going to add method to this field

console.log(
  'username.validate() && password.validate()',
  username.validate() && password.validate(),
);

// Let's say like we want to add another field birthday which I just added there,
// So like that we might have many other fields coming into our form over time
// and we wouldn't have to do something really tedious like adding on
// `&& birthday.validate()` and `todaysDate.validate()` and all these other fields
//  we might add on to the form over time.
//  So this would be a fantastic location to refactor into making use of the
//  `every` helper instead of listing out all these different fields and saying
//  dot validate, dot validate, dot validate
//  Instead we might use something like
var fields = [username, password, birthdate];

const formIsValid = fields.every(function (field) {
  return field.validate();
});

console.log('formIsValid using every():', formIsValid);

// And now with a single line right there, we could say go through,
// validate all my fields and tell me if they're all valid

if (formIsValid) {
  // allow user to submit!
} else {
  // show an error message
}

// So this is all made possible by using the `every` helper right there
// Its what avoided or kept us from having to do something like username
// dot valid, password dot valid, birthdate dot valid and so on so on and
// so on again again and again
// With just our `every` helper right there, we condense it down to
// dramatically less logic

/* @ Finding Submitted Users */
var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true },
];

var hasSubmitted;

hasSubmitted = users.every(function (user) {
  return users.hasSubmitted;
});

console.log('every user has submitted the form:', hasSubmitted);

/* @ In Progress Network Requests */
/* Given an array of network objects representing network requests,
 * assign the boolean 'true' to the variable 'inProgress' if any network
 * request has a 'status' of 'pending'.
 */
var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' },
];

var inProgress;

inProgress = requests.some(function (request) {
  return request.status;
});

console.log('any network request has a status of pending:', inProgress);
