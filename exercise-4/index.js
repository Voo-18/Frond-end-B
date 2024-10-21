//Exercise 4.a
// let people = ["Greg", "Mary", "Devon", "James"];
// console.log(people);

// // 1. using for-loop
// // for (let i = 0;i < people.length; i++)  {
// //   console.log(people[i]);
// // }

// //2. menggunakan for-each().
// people.forEach((person)=> {
//   console.log(person);
// });

// //3. Menghapus "Greg" dari array
// people.shift("Greg");
// console.log(people);

// //4. menghapus "James" dari array
// people.pop("James");
// console.log(people);

// //5. menambahkan "Matt" ke dalam array
// people.unshift("Matt");
// console.log(people);

// //6. Menambahkan nama kita sendiri kedalam array
// people.push("Pantouw Gipen Azarya");
// console.log(people);

// //7. 
// for (let i = 0;i < people.length;i++) {
//   console.log(people[i]);
//   if (people[i] === "Mary") {
//     console.log("Loop berhenti di Mary");
//     break;
//   }
// }

// //8. menampilkan tanpa marry dan Matt
// let copy = people.slice(2);
// console.log(copy);

// //9. menambahkan elizabeth dan artie
// people.splice(2, 1, 'Elizabeth','Artie');
// console.log(people);

// //10. menambahkan Bob
// let withBob = people.concat("Bob");
// console.log(withBob)



let programming = {
    languages: ["JavaScript", "Pyhton", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

// add language Go
programming.languages.push("Go");
console.log(programming);

// bracket notation
programming["difficulty"] = 7;
console.log(programming);

// remove jokes key
delete programming.jokes;
console.log(programming);

// dot notation
programming.isFun = true;
console.log(programming);

// 
programming.languages.map(function(language, index){
    console.log(${index}- ${language});
})