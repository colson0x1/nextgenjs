/* @ Destructuring */
var expense = {
  type: 'Business',
  amount: '$99 USD',
};

// var type = expense.type;
// var amount = expense.amount;

// ES6
const { type, amount } = expense;
console.log(type);
console.log(amount);

/* @ LEVEL 2 - Pull props off of objects that are passed to functions. */
var savedFiled = {
  extension: 'jpg',
  name: 'repost',
  size: 8888,
};

/*
function fileSummary(file) {
  return `The file ${file.name}.${file.extension} is of size ${file.size}`;
}
*/

function fileSummary({ name, extension, size }, { color }) {
  return `${color}: The file ${name}.${extension} is of size ${size}`;
}

console.log(fileSummary(savedFiled, { color: 'orange' }));

// Destructuring objects is all about pulling off an properties.
// Destructuring of arrays is all about pulling off individual elements.
/* @ Destructuring out of arrays */
const companies = ['Google', 'Facebook', 'Netflix'];

const [name1, name2, name3] = companies;
console.log(name1);
console.log(name2);
console.log(name3);

const { length } = companies;
console.log('companies length:', length);

const [nameOfCompany1, nameOfCompany2, ...rest] = companies;
console.log(nameOfCompany1);
console.log(nameOfCompany2);
console.log('rest:', rest);

/* @ LEVEL 3 */
// Mixing arrays and objects: Destructuring
const companiesX = [
  { namex: 'Google', location: 'Mountain View' },
  { namex: 'Facebook', location: 'Menlo Park' },
  { namex: 'Uber', location: 'San Francisco' },
];

// Location of Google
// ES5
// var location = companiesX[0].location;
// console.log(location);

// ES6
// const [{ location }] = companiesX;

const Google = {
  locations: ['Mountain View', 'New York', 'London'],
};

// Get access to 'Mountain View' by using `destructuring`
const {
  locations: [locationGoogle],
} = Google;
// console.log(locations);
console.log(locationGoogle); // 'Mountain View'

/* @ IRL */
// Function that will take username and password and save it to a database!
function signup({ city, password, username, email, dateOfBirth }) {
  // create new user
}

// other code
// other code
// other code
// other code
// other code
// other code
// other code
// other code

const user = {
  username: 'Colson',
  password: 'Swikrity',
  email: 'colson@swikrity.com',
  dateOfBirth: '13/03/2005',
};

// signup('Colson', 'Swikrity', 'colson@swikrity.com', '13/3/2005', 'Kathmandu');
signup(user);

/* @ Array Destructuring */
// Transform the data in some fashion.
const points = [
  [4, 5],
  [10, 1],
  [0, 40],
];

// Take the above data that came from an API and serve in this below
// style for graphing library.
// [
//   { x: 4, y: 5 },
//   { x: 10, y: 1 },
//   { x: 0, y: 40 }
// ]

const graphLib = points.map(([x, y]) => {
  return { x, y };
});

console.log('Graph lib:', graphLib);

/* @ Example 1 */
const profile = {
  title: 'Engineer',
  department: 'Engineering',
};

function isEngineer({ title, department }) {
  // var { title, department } = profile;

  return title === 'Engineer' && department === 'Engineering';
}

/* @ Example 2 - Array Destructuring */
const classes = [
  ['Chemistry', '9AM', 'Alexis'],
  ['Physics', '10:15AM', 'Cessa'],
  ['Math', '11:30', 'Ariana'],
];

const classesAsObject = classes.map(([subject, time, teacher]) => {
  return { subject, time, teacher };
});

/* @ Example 3 - Recursion */
const numbers = [1, 2, 3];

function double([first, ...rest]) {
  if (first === undefined) {
    return [];
  }

  return [first * 2, ...double(rest)];
}

const result = double(numbers);
console.log(result);
