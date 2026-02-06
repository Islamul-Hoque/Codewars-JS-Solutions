// Description:
// Write a function that accepts a non-negative integer n and a string s,
// and returns a string of s repeated exactly n times.
//
// Examples:
// 6, "I"     → "IIIIII"
// 5, "Hello" → "HelloHelloHelloHelloHello"
//
// 🔗 Problem link: https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/javascript

// Approach 1: Using For Loop
function repeatStringForLoop(n, s) {
    let result = "";
    for (let i = 0; i < n; i++) {
        result += s;
    }
    return result;
}

// Test Outputs
console.log(repeatStringForLoop(3, "Hi"));        // "HiHiHi"
