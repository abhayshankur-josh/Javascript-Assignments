// 1. What happens when you add a for loop/while loop/switch case block inside a function and use return instead of break? 
// Do statements after the loop run? What is the return value? 
// Can we pass a return value from within a loop? 
// Can you return from inside an if block? 
// What impact does that have? 

// Using return inside a for loop
function exampleForLoop() {
  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      return i;
    }
    console.log(i); // Logs 0, 1, 2, 3, 4
  }
  console.log("This line will not execute if return is called");
}

console.log(exampleForLoop()); // Logs: 5

// Using return inside a while loop
function exampleWhileLoop() {
  let i = 0;
  while (i < 10) {
    if (i === 5) {
      return i;
    }
    console.log(i); // Logs 0, 1, 2, 3, 4
    i++;
  }
  console.log("This line will not execute if return is called");
}

console.log(exampleWhileLoop()); // Logs: 5

// Using return inside a switch case block
function exampleSwitchCase(age) {
  switch (true) {
    case age <= 12:
      return "child";
    case age >= 13 && age <= 18:
      return "teen";
    default:
      return "adult";
  }
  console.log("This line will not execute if return is called");
}

console.log(exampleSwitchCase(25)); // Logs: adult

// Returning from within a loop
function findFirstEven(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      return numbers[i];
    }
  }
  return null; // If no even number is found
}

console.log(findFirstEven([1, 3, 7, 10, 11])); // Logs: 10

// Returning from inside an if block
function checkAge(age) {
  if (age < 0) {
    return "Invalid age";
  }
  if (age <= 12) {
    return "child";
  }
  if (age >= 13 && age <= 18) {
    return "teen";
  }
  return "adult";
}

console.log(checkAge(25)); // Logs: adult
console.log(checkAge(-5)); // Logs: Invalid age
