// Description:
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If a number is a multiple of both 3 and 5, only count it once.

// Courtesy of projecteuler.net (Problem 1)

// Kata:  Return sum of multiples of 3 or 5 below n

// 🔗 Problem link: https://www.codewars.com/kata/514b92a657cdc65150000006/javascript

// Approach 1: Loop version (readable)
function multiplesOf3Or5Loop(number) {
    if (number < 0) return 0;
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

// Approach 2: Array.from + reduce (functional style)
const multiplesOf3Or5Array = n =>
    n <= 0
        ? 0
        : Array.from({ length: n }, (_, i) =>
            (i % 3 === 0 || i % 5 === 0) ? i : 0
        ).reduce((x, y) => x + y);

// Test Outputs
console.log(multiplesOf3Or5Loop(10));   // 23
console.log(multiplesOf3Or5Array(10));  // 23
console.log(multiplesOf3Or5Loop(20));   // 78
console.log(multiplesOf3Or5Array(-5));  // 0
