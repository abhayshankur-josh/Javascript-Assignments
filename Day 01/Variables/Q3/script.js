// 3. Use let and const to create arrays and objects. Try modifying, deleting properties within the array or object. What do you expect to happen in both cases? What actually happens in both cases. What is the difference between an object declared as a let or a const variable? 

let arr1 = [1, 2, 3];
arr1.push(4);
console.log(arr1); // [1, 2, 3, 4]
arr1[1] = 5;
console.log(arr1); // [1, 5, 3, 4]

let obj1 = { name: "John", age: 30 };
obj1.age = 31;
console.log(obj1); // { name: "John", age: 31 }
delete obj1.name;
console.log(obj1); // { age: 31 }


// Difference between let and const for Objects

// let: Allows reassignment of the variable to a new object.

// const: Does not allow reassignment to a new object but allows modification of the object's properties.