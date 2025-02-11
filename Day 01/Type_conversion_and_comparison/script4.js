// 4. Declare a variable let arraySize = 25;. Using a while loop, add numbers from one onwards into an array till the arraySize is reached. 

let arraySize = 25;
let numbersArray = [];
let i = 1;

while (i <= arraySize) {
  numbersArray.push(i);
  i++;
}

console.log(numbersArray);
