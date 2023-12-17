/* @ Array Helper Method: filter() */
// Another common UI feature that we're going to see on websites just all the
// darn time is the ability to filter out or sort some products.
// So we could be thinking like, say Amazon, Ebay, Walmart, anything like that.
// Any time we want to do any type of filtering of a list.
// Let's imagine for a second that we're going to make an array of products
// and we're going to imagine that we've a list of shopping items in a grocery
// store, so each item will be represented by an object and they will be
// or they will have properties of a name and its type
// So we've an array of objects. Each object represents a single product and
// has a `name` and a `type`
var products = [
  { name: 'spanish', type: 'vegetable' },
  { name: 'apple', type: 'fruit' },
  { name: 'blueberry', type: 'fruit' },
  { name: 'carrot', type: 'vegetable' },
];

// Mabe those are products listed on a product page of sorts. Maybe we're at
// Instacart.com or Amazon, and maybe our users click on some little checkbox
// and they say, only say me fruit

/* @ Implementing with very classic for loop */
var filteredProducts = [];

// For each elements in the arary, we want to see if its `type` is equal to
// `fruit`, and if it is, we're going to add it to the filtered product selection
for (var i = 0; i < products.length; i++) {
  if (products[i].type === 'fruit') {
    filteredProducts.push(products[i]);
  }
}

console.log(filteredProducts);

// Fantastic case with this `for` loop implementation, on why we do not want
// to mutate an existing array.
// So imagine, we used this for loop right here and we said, out of all the
// different products we have, just remove the products that are not fruits.
// If we mutate the original array, all of a sudden on our client side application,
// we're just arbitrarily dumping the data out of our application, And we never
// just so rarely ever want to just kind of arbitrarily dump data or kind of delete
// data. Instead what we usually wanna do is, we want to product subset of all the
// records that we have. That's why we created new array there. We don't want to
// dump the existing vegetables. We just want to product subset of all the different
// products that we have and we want that subset to only have fruits. So why, we
// choose to produce new arrays out of all these different helpers as opposed to
// modifying or mutating an existing array.

// Besides that, our `for` loop suffers from all the different problems like
// all the same boilerplates for the bounce of the loop, and once we're inside the
// loop, if another engineer ever walks on the scene here and is trying to figure
// out what has to go on, they have to spend like kind of nonzero time. They have
// to look at the if statement, look at the interior of the if statement to figure
// out whats going on there.
// So, perhaps using `for` loops for everything in our codebase isn't the best
// approach for when we're trying to build a kind of long term product.

/* @ Implementation with filter */
/* Working mechanics */
// We take an element out of source array, which is going to be our products and
// we're passing it into our iterator function. That iterator function has to
// return either a truthy or falsy value. If it returns a truthy value, it will
// be included in a result array. If the iterator returns a falsy value however,
// this new value will not be included in the new array.
// So, if we pass in `fruit`, we just have to return `true` out of the iterator
// and that fruit will be included in the new array but if we get `vegetable`, we
// need to return `false` and then it will not be included in the new array.

// As usual, the first and the first argument to this inner functoin, the iterator
// is the element that we're currently iterating over.
// Same rule, `products` plural then we're going to use singular `product` inside
// the function
const filterVegetables = products.filter(function (product) {
  return product.type === 'vegetable';
});

console.log(filterVegetables);

// NOTE: `return` is important. If we do not return, then we're going to return
// undefined every single time for the iterator function.

// More complex examples with `filter`

var mainstreamProducts = [
  { name: 'spanish', type: 'vegetable', quantity: 0, price: 1 },
  { name: 'apple', type: 'fruit', quantity: 15, price: 25 },
  { name: 'blueberry', type: 'fruit', quantity: 40, price: 60 },
  { name: 'carrot', type: 'vegetable', quantity: 4, price: 7 },
];

// We want to write a filter where we only keep items when the type is
// vegetable, the quantity is greater than 0, and price is less than 10
// In other words, show me vegetables that are in stock, that are not
// more expensive than ten.

// `type` is vegetable, `quantity` is greater than 0, price is less than 10
// This function will be called once for every element in the array
const wishlist = mainstreamProducts.filter(function (product) {
  return (
    product.type === 'vegetable' && product.quantity > 0 && product.price < 10
  );
});

console.log('Wishlist', wishlist);

/* filter - USE CASES IN REAL LIFE
 * Suppose we have an app. It has two posts, and couple of comments associated
 * with it. So this might be like a blog app or a forum or something like that.
 * Basically we have posts. Each posts can have multiple comments. So this say blue
 * one post with id 4 has two comments (top and bottom). And as other post down here,
 * with color green having id 5 has just one comment located in middle of those two
 * comments. So, the post on top has an ID of 4 and the two comments associated with it
 * has a property ID of 4 as well. And so that's kind of how we associate this post
 * with these comments. We look at the comment, and say which post do you belong to?
 * And Oh, post with ID 4.
 * So that's kind of straight forward data schema here for making something like
 * a blogging application.
 * Let's imagine for a second that given a very particular post, we want to return
 * a list of of all the comments associated with that post.
 * How might we do that?
 */

var post = { id: 4, title: 'New Post' };

var comments = [
  { postId: 4, content: 'late night clubbing' },
  { postId: 3, content: 'dope af' },
  { postId: 4, content: 'exotic view' },
];

// Our goal is to make a function that does something like commentsForPost. In
// other words, given a list of comments and a very particular post, return
// just the comments that are associated with this post.
// How might we do this?
// So for a given post, we might return `comment.filter`, and then every comment
// we have, we want the comment where the comment has the postId equals to
// `post.id`

function commentsForPost(post, comment) {
  return comments.filter(function (comment) {
    return comment.postId === post.id;
  });
}

console.log('Comments for Post:', commentsForPost(post, comments));

// So whenever we're working on client side application and we've got a list
// of records and we need to filter it somehow, definitely take a look at the
// `filter` helper

// More Examples

/* Filtering Values */
var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers;

filteredNumbers = numbers.filter((number) => {
  return number > 50;
});

/* Handling Permissions with Filter */
// Return only users who have admin level access
var users = [
  { id: 1, admin: true },
  { id: 2, admin: false },
  { id: 3, admin: false },
  { id: 4, admin: false },
  { id: 5, admin: true },
];

var filteredUsers;

filteredUsers = users.filter(function (user) {
  return user.admin;
});

/* Implementing 'reject' */
/*
 * Reject should work in the opposite way of
 * 'filter' - if a function returns 'true', the item should *not* be included in
 * the new array.
 */
function reject(array, iteratorFunction) {
  return array.filter((item) => {
    return !iteratorFunction(item);
  });
}

var numbers = [10, 20, 30];
var lessThanFifteen = reject(numbers, function (number) {
  return number > 15;
});

console.log(lessThanFifteen); // Output: [10]
