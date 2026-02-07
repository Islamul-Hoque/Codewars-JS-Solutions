// Description:
// Convert a string into a number.
// Examples:
// "1234" → 1234
// "605"  → 605
// "1405" → 1405
// "-7"   → -7
//
// 🔗 Problem link: https://www.codewars.com/kata/544675c4f0acb3c6a0000f58/javascript

// Approach 1: Unary Plus
const stringToNumberPlus = str => +str

// Approach 2: Number() constructor
const stringToNumberNumber = str => Number(str)

// Approach 3: parseInt() with radix 10
const stringToNumberParseInt = str => parseInt(str, 10) // 10 → decimal base


// Test Outputs
console.log(stringToNumberPlus("1234"));      // 1234
console.log(stringToNumberNumber("605"));     // 605
console.log(stringToNumberParseInt("1405"));  // 1405
