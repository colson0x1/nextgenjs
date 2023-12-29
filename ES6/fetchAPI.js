/* @ Fetch API */
/* The Fetch Helper is a new feature that is just like promises implemented
 * inside of our browser already.
 * This is a new object that is available in our browser already.
 * We can use `fetch` function to make AJAX requests across the internet
 * and fetch resources that are available to us.
 */
// const url = 'https://jsonplaceholder.typicode.com/posts/';

/* NOTE: Whenever we make a request with `fetch`, the response that we immediately
 * get back here does not immediately actually contain our data.
 * So by default, we don't get our data. Instead we get an object that
 * represents the response that we got back from the server.
 * To actually get access to the data, we've to call method on it!
 * Using .json() on response, it pulls some actual readable JSON data out of
 * the response that we got back.
 * We're doing this because whenever we get that response back from the `fetch`,
 * it doesn't actually contain our data here.
 * To get access to the data we actually care about, we have to call .json()
 * Only after calling that JSON can we actually get access to the data that
 * we want.
 */
/*
const responseData = fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data));
*/
// console.log(responseData);

/* NOTE: Whenever we're using `fetch API`, any status code above 300, it
 * does not enter the catch case which is absolutely dissimilar from how
 * every other AJAX library out there behaves.
 * With every single library out there, if the request fails for any reason
 * whatsoever, the promise will enter the rejected state, in which we expect
 * it to go to this catch statement down here.
 * The only time in which `fetch API` will ever hit this catch statement is
 * if the network request just flat out failed to be made.
 */
// Doesn't log catch since error code is above 300!
const url = 'https://jsonplaceholder.typicode.com/posts999999999';
// Logs catch because due to failed network request!
// const url = 'https://jsonplaceholder.typicode88888888.com/posts999999999';

fetch(url)
  .then((response) => console.log(response))
  .catch((error) => console.log('BAD', error));

/* Fetch is a nice wrapper around making AJAX requests that is native to the
 * browser!
 * It's better that we as developer continue to make use of libraries like
 * Axios, Super Agent or even jQuery if we have to.
 * Because otherwise we're just going to have to kind of reinvent the wheel
 * and write a lot of boilerplate code around `fetch` anyways to make it
 * behave the way that we expect.
 */
