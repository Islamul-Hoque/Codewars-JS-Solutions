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

// Approach 4: Using For Loop
function findSmallestIntForLoop(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

// Approach 5: Using For...of Loop
function findSmallestIntForOf(arr) {
    let min = arr[0];
    for (const num of arr) {
        if (num < min) {
            min = num;
        }
    }
    return min;
}

// Test Outputs
console.log(findSmallestIntSpread([34, 15, 88, 2]));     // 2
console.log(findSmallestIntSpread([34, -345, -1, 100])); // -345

console.log(findSmallestIntReduce([34, 15, 88, 2]));     // 2
console.log(findSmallestIntReduce([34, -345, -1, 100])); // -345

console.log(findSmallestIntSort([34, 15, 88, 2]));       // 2
console.log(findSmallestIntSort([34, -345, -1, 100]));   // -345

console.log(findSmallestIntForLoop([34, 15, 88, 2]));    // 2
console.log(findSmallestIntForLoop([34, -345, -1, 100]));// -345

console.log(findSmallestIntForOf([34, 15, 88, 2]));     // 2
console.log(findSmallestIntForOf([34, -345, -1, 100])); // -345