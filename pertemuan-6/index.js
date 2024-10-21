// 1. IIFE (Imediately Invoked function expression)
// a. No params, arguments & return value
// (function() {
//   console.log("Hello world");
// })();

// // b. with params, arguments & return value
// let output = (function (full_name) {
//   return "hello world " + full_name;
// })("John Doe");
// console.log(output)

// 2. Follbacks Function
// a. No params, arguments & return value
// function sayHello(callback) {
//   callback();
// }

// sayHello(function () {
//   console.log("Hello world"); // Callback function
// });

// b. with params
// function sayHello(callback) {
//  let result = callback("John Doe");
//  return result;
// }

// let output = sayHello(function (full_name) {
//   return "Hello " + full_name; // Callback function
// });
// console.log(output);

