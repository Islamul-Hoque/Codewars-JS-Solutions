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



// Test Outputs
console.log(digitizeSplitMap(35231));   // [1, 3, 2, 5, 3]
console.log(digitizeSplitMap(0));       // [0]

