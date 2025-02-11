/* 
1. How will you create a new copy of the object below while updating the value of address.details[0] to “5“? 
{ 
    name:”Harry Potter”, 
    age: 12, 
    address: { 
        details: [“4”, “Privet Drive”], 
        area:”Little Whinging”, 
        city: “Surrey”, 
        state: “England” 
    } 
} 
*/

const originalObj = {
  name: "Harry Potter",
  age: 12,
  address: {
    details: ["4", "Privet Drive"],
    area: "Little Whinging",
    city: "Surrey",
    state: "England",
  },
};

const newObj = {
  ...originalObj,
  address: {
    ...originalObj.address,
    details: [
      "5", // Update the value here
      originalObj.address.details[1],
    ],
  },
};

console.log(newObj);
