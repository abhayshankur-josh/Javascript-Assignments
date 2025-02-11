/*
● What will be printed to the console?
*/
const testAsyncFunction = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Test Resolve");
    } else {
      reject("Test Reject");
    }
  }).catch((err) => {
    console.log("Error caught in testAsyncFunction", err);
    throw new Error("Forced error");
  });
};

testAsyncFunction()
  .then((res) => {
    console.log("Response in then block: ", res);
  })
  .catch((err) => console.log("Error in catch block: ", err));

//   Result:
/*
When random results to less than 0.5
    Error caught in testAsyncFunction Test Reject
    Error in catch block:  Error: Forced error
        at /home/abhay/Documents/JS Assignment/Day 02/q5.js:13:11
*/

/*
When random results to greater than 0.5
    Response in then block:  Test Resolve
*/
