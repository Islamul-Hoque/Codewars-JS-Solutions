// Description:
// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively. Each function returns one number.

// Examples (Input -> Output)

// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5

// 🔗 Problem link: https://www.codewars.com/kata/577a98a6ae28071780000989/javascript


// Approach 1: Using Math.min / Math.max with spread operator
const minMath = list => Math.min(...list)
const maxMath = list => Math.max(...list)



// Test Outputs
const arr1 = [4, 6, 2, 1, 9, 63, -134, 566];
const arr2 = [-52, 56, 30, 29, -54, 0, -110];
const arr3 = [42, 54, 65, 87, 0];
const arr4 = [5];

console.log("Math:", minMath(arr1), maxMath(arr1))                // -134, 566
