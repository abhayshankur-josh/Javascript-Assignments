/*
● Implement a Fibonacci sequence generator using a generator function in
JavaScript.
*/

function* fibonacciGenerator(limit) {
    let [a, b] = [0, 1];

    while (limit > 0) {
        yield a;
        [a, b] = [b, a + b];
        limit--;
    }
}

// Example usage
const fib = fibonacciGenerator(10);

for (const num of fib) {
    console.log(num); // Prints the first 10 Fibonacci numbers
}
