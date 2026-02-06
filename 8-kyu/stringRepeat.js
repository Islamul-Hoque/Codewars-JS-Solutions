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

// Approach 2: Using repeat() 
function repeatStringBuiltIn(n, s) {
    return s.repeat(n);
}

// Alternative Approach 2: Arrow Function + repeat() 
const repeatStringArrow = (n, s) => s.repeat(n);

// Approach 3: Template Literal + repeat()
let repeatStr = (n, s) => `${s.repeat(n)}`;

// Approach 4: Array.fill() + join()
function repeatStringArrayJoin(n, s) {
    return Array(n).fill(s).join('');
}

// Approach 5: Array.from() + join() 
const repeatStringArrayFrom = (n, s) => Array.from({ length: n }, () => s).join('');

// Approach 6: Spread Operator + map() + join() 
const repeatStringSpread = (n, s) => [...Array(n)].map(() => s).join('');


// Test Outputs
console.log(repeatStringForLoop(3, "Hi"));        // "HiHiHi"
console.log(repeatStringBuiltIn(4, "JS"));        // "JSJSJSJS"
console.log(repeatStringArrow(2, "Go"));          // "GoGo"
console.log(repeatStr(5, "Hello"));               // "HelloHelloHelloHelloHello"
console.log(repeatStringArrayJoin(3, "Bye"));     // "ByeByeBye"
console.log(repeatStringArrayFrom(2, "Yo"));      // "YoYo"
console.log(repeatStringSpread(6, "I"));          // "IIIIII"