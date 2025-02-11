// 2. Use the typeof operator to find the types of different variables. Specially note what t typeof operator returns for arrays, null values and NaN. How can you find if a variable  an array or NaN besides typeof? 


let num = 42;
let str = "Hello";
let arr = [1, 2, 3];
let obj = { name: "John", age: 30 };
let n = null;
let notANumber = NaN;

console.log(typeof num); // "number"
console.log(typeof str); // "string"
console.log(typeof arr); // "object"
console.log(typeof obj); // "object"
console.log(typeof n);   // "object"
console.log(typeof notANumber); // "number"

console.log(Array.isArray(arr)); // true
console.log(Number.isNaN(notANumber)); // true
