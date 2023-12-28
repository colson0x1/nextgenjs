/* @ for...of loop */
// `forOf` loop is used for iterating through arrays of data.
// We can use for of loops for just about anything that we might use each
// for each loops or reduce or map.
// All that kind of great stuff we can reimplement with for.

const colors = ['blue', 'orange', 'purple'];

// WE iterate through every element of colors
for (let color of colors) {
  console.log(color);
}

const numbers = [1, 2, 3, 4];

let total = 0;

for (let number of numbers) {
  total += number;
}

console.log(total);
