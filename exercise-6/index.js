// Ubahlah syntax ES5 berikut ke dalam ES6

//1. Let & Const
// const calculateAge = (birthYear) => 2019 - birthYear;

// const yearUntilRetirement = ({ year, firstName }) => {
//   const age = calculateAge(year);
//   const retirement = 60 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//   } else {
//     console.log(`${firstName} is already retired.`);
//   }
// };

// yearUntilRetirement({ year: 1987, firstName: "John" });

//2. Let & Const + Arrow Function + Map Function
// const addNumber = (a, b, c, d, e, f, g) => {
//   var numbers = [a, b, c, d, e, f, g];
//   var sum = 0;

//   for (var i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return sum;
// };

// console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

// //3. Let & Const + String Literal + Arrow Function
// var phi = 3.14;
// var power = 2;
// var radius = 0;

// var calculateArea = function (obj) {
//   return phi * Math.pow(obj.radius, obj.power);
// };

// radius = 21;
// var area21 = calculateArea({ radius: radius, power: 2 });

// radius = 7;
// var area7 = calculateArea({ radius: radius, power: 2 });

// console.log(
//   "area with 21 radius: " + area21 + ", and area with 7 radius: " + area7
// );


// //4. Let & Const + Arrow Function + Default Parameter
// const makeAjaxRequest = (url, method = "GET") => {
//   console.log(url, method);
// };

// makeAjaxRequest("www.google.com");
