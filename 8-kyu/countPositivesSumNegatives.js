// Description:
// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.
// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// 🔗 Problem link: https://www.codewars.com/kata/576bb71bbbcf0951d5000044/javascript
// Approach 1: filter + reduce
function countPositivesSumNegativesFilter(input) {
    return input && input.length
        ? [
            input.filter(p => p > 0).length,
            input.filter(n => n < 0).reduce((a, b) => a + b, 0)
        ]
        : [];
}



// Test Outputs
console.log(countPositivesSumNegativesFilter([1,2,3,-1,-2,-3]))                    // [3, -6]
