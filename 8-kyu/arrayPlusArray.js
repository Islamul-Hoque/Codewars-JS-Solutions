// Description:
// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

// Kata: Array plus array
// 🔗 Problem link: https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/javascript

// Approach 1: Spread + Reduce
const arrayPlusArraySpread = (arr1, arr2) =>
    [...arr1, ...arr2].reduce((sum, num) => sum + num, 0);



// Test Outputs
const arrA = [1, 2, 3];
const arrB = [4, 5, 6];

console.log("Spread+Reduce:", arrayPlusArraySpread(arrA, arrB));   // 21
