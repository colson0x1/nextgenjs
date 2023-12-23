/* @ Template Literals */
function getMessage() {
  // const year = new Date().getFullYear();

  // return 'The year is ' + year;

  return `The year is ${new Date().getFullYear()}`;
}

console.log(getMessage());

/* @ Instagram API */
const device_id = 4;
const guid = 26;
const username = 'colson';

// const data =
//   '{ "device_id":"' +
//   device_id +
//   '", "guid":"' +
//   guid +
//   '", "username":"' +
//   username +
//   '", " }';

const data = `{ "device_id":" 
${device_id} 
  ", "guid":" 
${guid} 
  ", "username":" 
${username} 
  ", " }`;

const year = 2023;
const yearMessage = `${year} is almost over.`;
console.log(yearMessage);
