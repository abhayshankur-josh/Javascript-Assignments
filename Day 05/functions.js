/*
● Share a minimum four differentiation between regular function and arrow
functions with one examples
*/

// 1. Syntax
// Regular function:
function regularFunction() {
    console.log('This is a regular function');
}

// Arrow function:
const arrowFunction = () => {
    console.log('This is an arrow function');
};

regularFunction(); // Outputs: This is a regular function
arrowFunction(); // Outputs: This is an arrow function

// 2. `this` Binding
// Regular function binds its own `this` context (based on the object it is called on):
const regularFunctionThis = {
    value: 42,
    getValue: function () {
        console.log(this.value);
    },
};

regularFunctionThis.getValue(); // Outputs: 42

// Arrow function inherits `this` from its surrounding context:
const arrowFunctionThis = {
    value: 42,
    getValue: () => {
        console.log(this.value); // `this` is lexically inherited from the surrounding context
    },
};

arrowFunctionThis.getValue(); // Outputs: undefined, since `this` does not refer to arrowFunctionThis

// 3. Can be used as methods
// Regular function can be used as methods of objects.
const person = {
    name: 'John',
    greet: function () {
        console.log(`Hello, ${this.name}`);
    }
};

person.greet(); // Outputs: Hello, John

// Arrow function cannot be used as a method, since it doesn't bind `this`:
const personWithArrow = {
    name: 'Jane',
    greet: () => {
        console.log(`Hello, ${this.name}`); // `this` is not bound to personWithArrow
    }
};

personWithArrow.greet(); // Outputs: Hello, undefined

// 4. Return Values
// Regular function returns explicitly with the `return` keyword:
function regularFunctionReturn() {
    return 5;
}
console.log(regularFunctionReturn()); // Outputs: 5

// Arrow function returns implicitly if there is no block body:
const arrowFunctionReturn = () => 5;
console.log(arrowFunctionReturn()); // Outputs: 5
