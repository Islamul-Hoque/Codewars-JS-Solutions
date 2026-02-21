// Description:
// Write a function which calculates the average of the numbers in a given array.

// Note: Empty arrays should return 0.

// 🔗 Problem link: http://codewars.com/kata/57a2013acf1fa5bfc4000921/javascript

// Approach 1: arrow + reduce (concise)
const findAverageArrow = arr => arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0;



// Test Outputs
console.log(findAverageArrow([1, 2, 3]));       // 2
console.log(findAverageArrow([100]));           // 100
