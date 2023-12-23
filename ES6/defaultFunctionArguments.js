/* @ Default Function Arguments */
/*
function makeAjaxRequest(url, method) {
  if (!method) {
    method = 'GET';
  }

  // logic to make the request
}
*/

// Default arugment
function makeAjaxRequest(url, method = 'GET') {
  return method;
  // logic to make the request
}

console.log(makeAjaxRequest('gogle.com'));
console.log(makeAjaxRequest('google.com', 'POST'));
// If we want to have null type value
console.log(makeAjaxRequest('gogle.com', null));

/* @ Level 2 */
// Function that will create a user object
function User(id) {
  this.id = id;
}

function generateId() {
  return Math.random() * 999999999;
}

function createAdminUser(user = new User(generateId)) {
  user.admin = true;

  return user;
}

const user = new User(generateId());
console.log(createAdminUser(user));

console.log(new User(1));

/* @ Using Default Arguments */
// function sum(a, b) {
//   if (a === undefined) {
//     a = 0;
//   }
//
//   if (b === undefined) {
//     b = 0;
//   }
//
//   return a + b;
// }

function sum(a = 0, b = 0) {
  return a + b;
}

/* @ Dumping Unused Code */
/*
function addOffset(style) {
  if (!style) {
    style = {};
  }

  style.offset = '10px';

  return style;
}
*/

function addOffset(style = {}) {
  style.offset = '10px';

  return style;
}
