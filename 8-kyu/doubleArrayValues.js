// Description:
// Given an array of integers, return a new array with each value doubled.

// For example:
// [1, 2, 3] --> [2, 4, 6]

// 🔗 Problem link: https://www.codewars.com/kata/57f781872e3d8ca2a000007e/javascript


// Approach 1: map method
function mapsMap(x) {
    return x.map(n => n * 2);
}

// Approach 2: arrow function + map
const mapsArrow = x => x.map(n => n * 2);

// Approach 3: for loop
function mapsForLoop(x) {
    let result = [];
    for (let i = 0; i < x.length; i++) {
        result.push(x[i] * 2);
    }
    return result;
}

// Approach 4: for...of loop
function mapsForOf(x) {
    let result = [];
    for (let num of x) {
        result.push(num * 2);
    }
    return result;
}

// Test Outputs
console.log(mapsMap([1, 2, 3]));       // [2, 4, 6]
console.log(mapsArrow([4, 1, 1, 1, 4])); // [8, 2, 2, 2, 8]
console.log(mapsForLoop([2, 2, 2, 2, 2])); // [4, 4, 4, 4, 4]
console.log(mapsForOf([5, 10, 15]));   // [10, 20, 30]
