// Description:
// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

// 🔗 Problem link: https://www.codewars.com/kata/5265326f5fda8eb1160004c8

// Approach 1: Using the toString() method
function numberToStringToMethod(num) {
    return num.toString();
}

// Approach 2: Using String() function
function numberToStringStringFunc(num) {
    return String(num);
}

// Approach 3: Using template literals
function numberToStringTemplate(num) {
    return `${num}`;
}


// Test Outputs
console.log("1) toString():", numberToStringToMethod(123), "| typeof:", typeof numberToStringToMethod(123), "| number:", 123);
console.log("2) String():", numberToStringStringFunc(999), "| typeof:", typeof numberToStringStringFunc(999), "| number:", 999);
console.log("3) Template:", numberToStringTemplate(-100), "| typeof:", typeof numberToStringTemplate(-100), "| number:", -100);
