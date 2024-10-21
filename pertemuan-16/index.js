// asynchronous JS

// Synchronous -> single thread / blocking
console.log("Proses 1");
console.log("Proses 2");
console.log("Proses yg memakan waktu lama");
console.log("Proses 4");

// asynchronous -> mutli thread / non-blocking
//1. Parallel
// setTimeout(() => {
//   console.log("Proses 1");
// }, 3000);
// console.log("Proses 2")
// setTimeout(() => {
//   console.log("Proses 3");
// }, 5000);
// console.log("Proses 4")

//2. Concurent
// setTimeout(() => {
//   console.log("Proses 1");
//   setTimeout(() => {
//     console.log("Proses 2");
//     setTimeout(() => {
//       console.log("Proses 3");
//       setTimeout(() => {
//         console.log("Proses 4");
//       }, 3000);
//     }, 3000);
//   }, 3000);
// }, 3000);



// Cara memakai Promise
let condition = error
const newPromise = new Promise((resolve, reject) => {
  if(condition) {
    resolve("Berhasil");
  } else {
    reject("Gagal");
  }
}); 

//Cara memakai promise
//1. then - catch 
// newPromise
// .then((result) => console.log(result))
// .then((result2) => console.log(result2))
// .catch((error) => console.log(error));

//2. Async - Await
//Harus dibuat dalam fungsi
// const consumePromise = async () => {
//   try {
//     let result = await newPromise;
//     console.log(result);
//   } catch (error) {
//     console.log(error)
//   }
// };
// consumePromise();

// Pakai promise yg sudah ada
//1. Fetch
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

(async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let json = await response.json();
  json.forEach(({ name }) => console.log(name));
})();
