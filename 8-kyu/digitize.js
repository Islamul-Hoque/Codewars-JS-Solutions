// Description:
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
//
// Example (Input => Output):
// 35231 => [1,3,2,5,3]
// 0     => [0]
//
// 🔗 Problem link: https://www.codewars.com/kata/5583090cbe83f4fd8c000051/javascript

// Approach 1: String + Split + Map + Reverse
const digitizeSplitMap = n => String(n).split("").reverse().map(Number);

// Approach 2: toString() + Split + Map + Reverse
const digitizeToString = n => n.toString().split("").reverse().map(Number);

// Approach 3: Spread Operator + Map + Reverse
const digitizeSpread = n => [...String(n)].reverse().map(Number);

// Approach 4: String Concatenation + Split + Unary Plus
const digitizeUnaryPlus = n => (n + '').split('').reverse().map(x => +x);


// Test Outputs
console.log(digitizeSplitMap(35231));   // [1, 3, 2, 5, 3]
console.log(digitizeSplitMap(0));       // [0]

console.log(digitizeToString(35231));   // [1, 3, 2, 5, 3]
console.log(digitizeSpread(35231));     // [1, 3, 2, 5, 3]
console.log(digitizeUnaryPlus(35231));  // [1, 3, 2, 5, 3]
