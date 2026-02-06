// Description:
// Given an array of integers your solution should find the smallest integer.
//
// Examples:
// [34, 15, 88, 2] → 2
// [34, -345, -1, 100] → -345
//
// 🔗 Problem link: https://www.codewars.com/kata/55a2d7ebe362935a210000b2/javascript

// Approach 1: Using Math.min + Spread Operator
function findSmallestIntSpread(arr) {
    return Math.min(...arr);
}

// Approach 2: Using reduce()
function findSmallestIntReduce(arr) {
    return arr.reduce((min, num) => num < min ? num : min); // min = accumulator(previousValue), num = currentValue(current element being processed)
}

// Approach 3: Using sort()
function findSmallestIntSort(arr) {
    return arr.sort((a, b) => a - b)[0]; // a-b = ascending order(smallest first), b-a = descending order(largest first)
}


// Test Outputs
console.log(findSmallestIntSpread([34, 15, 88, 2]));     // 2
console.log(findSmallestIntSpread([34, -345, -1, 100])); // -345

console.log(findSmallestIntReduce([34, 15, 88, 2]));     // 2
console.log(findSmallestIntReduce([34, -345, -1, 100])); // -345

console.log(findSmallestIntSort([34, 15, 88, 2]));       // 2
console.log(findSmallestIntSort([34, -345, -1, 100]));   // -345

