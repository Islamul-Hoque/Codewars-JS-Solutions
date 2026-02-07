// Description:
// Perform basic mathematical operations (+, -, *, /)
// Examples:
// ('+', 4, 7) → 11
// ('-', 15, 18) → -3
// ('*', 5, 5) → 25
// ('/', 49, 7) → 7
//
// 🔗 Problem link: https://www.codewars.com/kata/57356c55867b9b7a60000bd7/javascript

// Approach 1: If–Else Chain
const basicOpIfElse = (op, v1, v2) => {
    if (op === '+') return v1 + v2;
    if (op === '-') return v1 - v2;
    if (op === '*') return v1 * v2;
    if (op === '/') return v1 / v2;
};



// Test Outputs
console.log(basicOpIfElse('+', 4, 7));   // 11
