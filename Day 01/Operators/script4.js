// 4. What happens if you pass a regular/invalid JSON string to JSON.parse? What will happen if such an invalid function runs in the program? Will other parts of the code execute correctly after that?

let i = 5;
console.log(++i); // Increments i by 1 and then returns i. Logs: 6
console.log(i++); // Returns i and then increments i by 1. Logs: 6
console.log(i);   // Logs: 7
