/* @ Promises */
// ES6 came with native implementation of promise.
// promise.then() & promise.catch() are used to register callbacks.
// We can run multiple .then() functions.
/* Promises are used to solve the issue of asynchronous code.
 * So the trick to dealing with asynchronous code is through how we call
 * resolve & reject and most importantly, deciding when we want to call them.
 */
const promise = new Promise((resolve, reject) => {
  // We're using setTimeout() to simulate very long process.
  // And we want our code to continue executing in the background.
  // Other things to happen & just wait for the promise to actually get
  // resolved here.
  setTimeout(() => {
    resolve();
  }, 3000);

  /*
  // @ AJAX Request
  // Over time we just have come to really associate promises with AJAX
  // requests because they go together like penanut, butter and jelly.
  var request = new XHTMLRequest();
  // make request
  request.onload = () => {
    resolve();
  }
  */
});

promise
  .then(() => console.log('finally finished!'))
  .then(() => console.log('i was also ran!!!'))
  .catch(() => console.log('uh oh!!'));

console.log(promise);
