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

// Alternative Approach 3: Using template literals (arrow function)
const numberToString = num => `${num}`;

// Approach 4: Using concatenation with an empty string
function numberToStringConcat(num) {
    return num + '';
}

// Alternative Approach 4a: Using concatenation with an empty string (arrow function)
const numberToStringAltConcat = num => num + '';

// Alternative Approach 4b: Using concatenation with an empty string (ES6)
const numberToStringES6Concat = num => '' + num;

// Approach 5: Using JSON.stringify() method
function numberToStringJSON(num) {
    return JSON.stringify(num);
}


// Test Outputs
console.log("1) toString():", numberToStringToMethod(123), "| typeof:", typeof numberToStringToMethod(123), "| number:", 123);
console.log("2) String():", numberToStringStringFunc(999), "| typeof:", typeof numberToStringStringFunc(999), "| number:", 999);
console.log("3) Template:", numberToStringTemplate(-100), "| typeof:", typeof numberToStringTemplate(-100), "| number:", -100);
console.log("3a) Template (arrow):", numberToString(456), "| typeof:", typeof numberToString(456), "| number:", 456);
console.log("4) Concat:", numberToStringConcat(789), "| typeof:", typeof numberToStringConcat(789), "| number:", 789);
console.log("4a) Concat (arrow):", numberToStringAltConcat(321), "| typeof:", typeof numberToStringAltConcat(321), "| number:", 321);
console.log("4b) Concat (ES6):", numberToStringES6Concat(-654), "| typeof:", typeof numberToStringES6Concat(-654), "| number:", -654);
console.log("5) JSON.stringify:", numberToStringJSON(111), "| typeof:", typeof numberToStringJSON(111), "| number:", 111);
