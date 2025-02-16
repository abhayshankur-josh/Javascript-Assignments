/* 
● Create a validation class similar to ‘yup’ and add validations for required, min and max
for strings. Expose an isValid method that returns true or false based on the argument
passed
*/

class Validator {
    constructor(value) {
        this.value = value;
    }

    // Check if the value is required
    required() {
        return this.value !== undefined && this.value !== null && this.value !== '';
    }

    // Check if the value is a string with a minimum length
    min(length) {
        return typeof this.value === 'string' && this.value.length >= length;
    }

    // Check if the value is a string with a maximum length
    max(length) {
        return typeof this.value === 'string' && this.value.length <= length;
    }

    // Method to check if all validations pass
    isValid(validations) {
        for (const [rule, arg] of Object.entries(validations)) {
            if (this[rule](arg) === false) {
                return false;
            }
        }
        return true;
    }
}

// Example usage
const validator = new Validator("Hello");
console.log(validator.isValid({ required: true, min: 3, max: 10 })); // true
console.log(validator.isValid({ required: true, min: 6, max: 10 })); // false
