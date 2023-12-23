/* @ Enhanced Object Literals */
// Enhanced object literals are all about writing object literals in a more
// compact fashion

// Classic JS
/*
function createBookShop(inventory) {
  return {
    inventory: inventory,
    inventoryValue: function () {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle: function (title) {
      return this.inventory.find((book) => book.title === title).price;
    },
  };
}
*/

function createBookShop(inventory) {
  return {
    inventory,
    inventoryValue() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle(title) {
      return this.inventory.find((book) => book.title === title).price;
    },
  };
}

const inventory = [
  { title: 'The subtle art of not giving a FUCK', price: 19 },
  { title: '7 Habits of Highly Effective People', price: 26 },
  { title: 'Zero to One', price: 33 },
];

const bookShop = createBookShop(inventory);

console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle('Zero to One'));

// Level 2
/* @ Imagine we're going to use jQuery to post some data or making HTTP request
 * to some remote endpoint.
 */
// Take some amount of data and make some http request
function saveFile(url, data) {
  // $.ajax({ method: 'POST', url: url, data: data });
  // Also by convention, we usually move the shortened variables (key value pairs)
  // over to the left hand side of the object and we put the key,value pairs over
  // to the right hand side
  $.ajax({
    url,
    data,
    method: 'POST',
  });
}

const url = 'http://fileupload.com';
const data = { color: 'dodgerblue' };

saveFile(url, data);

/* @ Multiple Properties with Enhanced Notation */
const red = '#ff0000';
const blue = '#9999ff';

// const COLORS = { red:red, blue: blue };
const COLORS = { red, blue };

/* @ Condensing Code with Enhanced Literals */
const fields = ['firstName', 'lastName', 'phoneNumber'];

// const props = { fields: fields };
const props = { fields };

/* @ Literals in Functions */
// const canvasDimensions = function (width, initialHeight) {
//   const height = (initialHeight * 9) / 16;
//   return {
//     width: width,
//     height: height,
//   };
// };

const canvasDimensions = function (width, initialHeight) {
  const height = (initialHeight * 9) / 16;
  return {
    width,
    height,
  };
};

/* @ Refactor to use enhanced literal notation */
const color = 'blue';

// const Car = {
//   color: color,
//   drive: function () {
//     return 'Vroom!';
//   },
//   getColor: function () {
//     return this.color;
//   },
// };

const Car = {
  color,
  drive() {
    return 'Vroom!';
  },
  getColor() {
    return this.color;
  },
};
