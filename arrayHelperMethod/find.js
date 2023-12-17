/* @ Array Helper Method: find() */
// The `find` helpers purpose is to search through an array and look for a
// particular element in the array. As soon as the record is found with the
// given criteria, the helper will return that record.

// We're going to imagine an array of objects where each object represents
// a very paritcular user. So we want to imagine for a second that we want to
// walk through this array and find user with the name Stillhome

var users = [{ name: 'Colson' }, { name: 'Stillhome' }, { name: 'Cacia' }];

var user;

/* @ Implementation with classic for loop */
for (var i = 0; i < users.length; i++) {
  if (users[i].name === 'Stillhome') {
    user = users[i];
    break;
  }
}

console.log(user);

// With that current implementation of loop, even though Stillhome is the
// second record on there, so the second element, we're still walking through
// the entire length of the array. So we're not breaking out of the loop early
// when we find the user that we're looking for.
// To fix that, we might put in a `break` statement there.

// With `find` helper, we walkthrough every element in the array, for each
// element in the array, we pass it into an iterator function and that
// iterator function must return a truthy or falsy value.
// The `find` helper will keep calling elements with the iterator function
// until the iterator function eventually returns `true`. Once it returns true,
// the `find` helper immediately exits its iteration, returning the record
// that it found. In this case, Stillhome.

/* @ Implementation with find */
const babe = users.find(function (user) {
  return user.name === 'Stillhome';
});

console.log('My babe:', babe);

// NOTE: `return` statement is important. If we don't return, the inner function
// will return `undefined` for every run through. Just like the filter function,
// this is another instance where we do not need to do something like username like:
// if (user.name === 'Stillhome') {
//  return user.name === 'Stillhome';
// }
// We don't need to do that here too. We don't need to put an if statement, just
// so we can return true. The boolean comparator ==== will return a boolean of
// true or false. And so we can just return that comparison by itself.

// With the for loop, we had a ton of extra boilerplate in there just to make a
// simple comparison and then we also had to remember, that case in which,
// yo, do we find this user? If so, then we need to break out of the
// for loop early. Otherwise, we're going to keep crawling through the array
// forever and ever.

// NOTE!
// Now there is one small drawback using `find`. The `find` helper will
// iterate through the array until it finds the first element that returns
// true from the iterator function. And the result of that is, if we have
// two elements in the array that returns true, then only the first one is
// going to be returned by the find helper.

/* More complex example */
// We're going to make a collection of car objects, and then try to find
// a car with some particular criteria.
function Car(model) {
  this.model = model;
}

var cars = [new Car('Veneno'), new Car('P1'), new Car('Chiron')];

// So now our `cars` array has three car objects, each of which has a property,
// `this.model = model`;
// Now we want to iterate through this array and find the car with a property
// of `Chiron` in particular

var model = cars.find(function (car) {
  return car.model === 'Chiron';
});

console.log('Model:', model);

/* Increasing complexity */
/* Same post, comments problem as in map */
// So let's say we have a list of posts this time around, and in our list of
// posts, we got id and title
var posts = [
  { id: 1, title: 'New Post' },
  { id: 2, tile: 'Old Post' },
];

// So with a `filter` helper, we had a single post and a list of comments.
// This time around, we want to turn that kind of approach on its head and
// we want to say that we have a single comment that has a post id of 1.
var comment = { postId: 1, content: 'exotic wow' };

// And we want to write a function, something like `postForComment`. So the
// purpose of the function will be to to take a big list of posts, a single
// comment, and then given the comment's post id, it should find the post
// with a particular id.

function postForComment(posts, comment) {
  return posts.find(function (post) {
    return post.id === comment.postId;
  });
}

console.log('post for comment:', postForComment(posts, comment));

// Whenever we've a single record or we're trying to find it inside of a larger
// collection and we want just one singular element out of there, `find` helper
// is absolute best in that use cases

/* @ find - USE CASES IN REAL LIFE */
/*
 * Certainly looking through an array, finding a particular record seems like
 * something we need to do pretty often but what might be a very realistic
 * situation in which we would need to use this helper.
 * So let's take a look at a kind of a mock up of a simple website right here.
 * So imagine, we've got two pages of a single website put together. On the left
 * hand side, we're at an address of `forum.com/posts` and on the right hand side,
 * we're at the `forum.com/post/45`. So you will notice that on the left hand side,
 * we've got kind of like a list of different posts that a user could click. So,
 * maybe this is like a list of blog posts or a forum or something like that. And
 * then, when the user clicks on a very single post, they're taken to a detail
 * screen for that single post. We'll notice that 45 up in the url is meant to
 * indicate the id of the post that the user is looking at. So that user just cliked
 * might be the post of id 45.
 * So this should really be a fantastic use case of using the `find` helper.
 * We might take 45 in the url and look at our big list of posts, and find the
 * post with the id of 45.
 * This is actually a practice that's very common in single page web applications
 * where we might have an id in our url, we might have a big list of resources
 * already loaded in memory that we've retrieved off the server or something
 * like that. And we'll say, okay, based on the URL, like the URL alone, We need
 * to find the post with id 45. And so again, we can imagine, the `find` helper
 * would look something like look at all my list of posts, find the post
 * with id 45.
 */

const posts = [
  { id: 1, title: 'Post title' },
  { id: 2, title: 'Post title' },
  { id: 3, title: 'Post title' },
  { id: 4, title: 'Post title' },
  { id: 5, title: 'Post title' },
  { id: 6, title: 'Post title' },
  { id: 7, title: 'Post title' },
  { id: 8, title: 'Post title' },
  { id: 9, title: 'Post title' },
];

const postId = getIdFromURL();

posts.find((post) => post.id === postId);

/* @ Find Admin Users */
var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true },
];

var admin;

admin = users.find((user) => {
  return user.admin;
});

console.log(admin);

/* @ What's Your Balance? */
// Find account with balance of 11
var accounts = [{ balance: -10 }, { balance: 11 }, { balance: 0 }];

var account;

account = accounts.find((account) => {
  return account.balance === 11;
});

console.log(account);

/* @ Challenging: Custom findWhere Helper
 *
 * This is a tough one!  The most common find operation is to an object that
 * has a given property.  Rather than writing out a full function every time,
 * it would be great if we has a shorthand syntax to find an object like this:
 * ```
 * findWhere(ladders, { height: '20 feet' });
 * ````
 * The object { ladders: '20 feet' } should be used as the search criteria -
 * we would want to find a ladder whose 'height' property was '20 feet';
 * Our GOAL: Write a 'findWhere' function that achieves this shorthand approach.
 * 'findWhere' should return the found object.
 */

function findWhere(array, criteria) {
  var property = Object.keys(criteria)[0];

  return array.find(function (element) {
    return element[property] === criteria[property];
  });
}

var ladders = [
  { id: 1, height: 20 },
  { id: 3, height: 25 },
];

var result = findWhere(ladders, { height: 25 });
console.log(result); // Output: { id: 3, height: 25 }
