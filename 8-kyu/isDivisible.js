// Description:
// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

// Examples:
// 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
// 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
// 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
// 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5

// 🔗 Problem link: https://www.codewars.com/kata/5545f109004975ea66000086/javascript

// Approach 1: concise arrow function
const isDivisibleArrow = (n, x, y) => n % x === 0 && n % y === 0;

// Approach 2: ternary operator
function isDivisibleTernary(n, x, y) {
    return (n % x === 0 && n % y === 0) ? true : false;
}

// Approach 3: if/else statement
function isDivisibleIfElse(n, x, y) {
    if (n % x === 0 && n % y === 0) {
        return true;
    }
    return false;
}

// Approach 4: logical trick with modulo
function isDivisibleLogical(n, x, y) {
    return !(n % x || n % y);
}

// Test Outputs
console.log(isDivisibleArrow(12, 2, 6));     // true
console.log(isDivisibleTernary(100, 5, 3));  // false
console.log(isDivisibleIfElse(3, 1, 3));     // true
console.log(isDivisibleLogical(12, 7, 5));   // false
