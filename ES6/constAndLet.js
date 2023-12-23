// var name = 'Colson';
// var title = 'Software Engineer';
// var hourlyWage = 60;

// ES6
const name = 'Colson';
let title = 'Software Engineer';
let hourlyWage = 60;

// some time later...
title = 'Senior Software Engineer';
hourlyWage = 70;

function count(targetString) {
  // var characters = ['a', 'e', 'i', 'o', 'u'];
  const characters = ['a', 'e', 'i', 'o', 'u'];
  // var number = 0;
  let number = 0;

  for (var i = 0; i < targetString.length; i++) {
    if (characters.includes(targetString[i])) {
      number++;
    }
  }

  return number;
}

console.log('aeiobzxceiaipbiox');

const statuses = [
  { code: 'OK', response: 'Request successful' },
  { code: 'FAILED', response: 'There was an error with your request' },
  { code: 'PENDING', response: 'Your reqeust is still pending' },
];

let message = '';
let currentCode = 'OK';

for (let i = 0; i < statuses.length; i++) {
  if (statuses[i].code === currentCode) {
    message = statuses[i].response;
  }
}
