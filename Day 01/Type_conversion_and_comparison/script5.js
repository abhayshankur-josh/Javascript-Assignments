// 5. Can you use return instead of break in loops?

function testReturn() {
    for (let i = 0; i < 10; i++) {
        if (i === 5) {
            return "Loop exited with return";
        }
        console.log(i);
    }
    console.log("This line will not execute if return is called");
}

console.log(testReturn());
