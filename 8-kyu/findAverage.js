// Description:
// Write a function which calculates the average of the numbers in a given array.

// Note: Empty arrays should return 0.

// 🔗 Problem link: http://codewars.com/kata/57a2013acf1fa5bfc4000921/javascript

// Approach 1: arrow + reduce (concise)
const findAverageArrow = arr => arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0;

// Approach 2: for...of loop
function findAverageForOf(array) {
    if (array.length == 0) return 0;
    let result = 0;
    for (let num of array) {
        result += num;
    }
    return result / array.length;
}



// Test Outputs
console.log(findAverageArrow([1, 2, 3]));       // 2
console.log(findAverageArrow([100]));           // 100

console.log(findAverageForOf([5, 10, 15]));     // 10
