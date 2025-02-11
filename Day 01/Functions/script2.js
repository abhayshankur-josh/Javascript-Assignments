// 2. Take a function that accepts a function as a parameter (also known as callback function).
// function test(callback){
//     callback();
// }
// function callbackFunc(){
//     console.log(“Calling the callback function”)
//     return 5;
// }
// Explore the following cases - what is printed in the console, and what gets returned: ○ test(callbackFunc)
//     ○ test(callbackFunc())
//     ○ test(() => callbackFunc())
//     ○ What happens when you return callback() from the test function? ○ What happens when you return callback from the test function?

function test(callback) {
  callback();
}

function callbackFunc() {
  console.log("Calling the callback function");
  return 5;
}

// Test cases
// console.log(test(callbackFunc));        
console.log(test(callbackFunc()));      
console.log(test(() => callbackFunc())); 

function testReturnCallback(callback) {
  return callback;
}

console.log(testReturnCallback(callbackFunc));   // Logs the function definition of callbackFunc
console.log(testReturnCallback(callbackFunc())); // Logs: "Calling the callback function", 5