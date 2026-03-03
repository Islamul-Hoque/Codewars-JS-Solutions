// Description:
// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

// Kata: Array plus array
// 🔗 Problem link: https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/javascript

// Approach 1: Spread + Reduce
const arrayPlusArraySpread = (arr1, arr2) =>
    [...arr1, ...arr2].reduce((sum, num) => sum + num, 0);

// Approach 2: Concat + Reduce
function arrayPlusArrayConcat(arr1, arr2) {
    return arr1.concat(arr2).reduce((a, b) => a + b, 0);
}

// Approach 3: For...of Loop
function arrayPlusArrayForOf(arr1, arr2) {
    let sum = 0;
    for (const num of arr1) sum += num;
    for (const num of arr2) sum += num;
    return sum;
}

// Approach 4: forEach
function arrayPlusArrayForEach(arr1, arr2) {
    let sum = 0;
    arr1.forEach(num => sum += num);
    arr2.forEach(num => sum += num);
    return sum;
}

// Approach 5: flat + Loop
function arrayPlusArrayFlat(arr1, arr2) {
    const merged = [arr1, arr2].flat();
    let sum = 0;
    for (const num of merged) sum += num;
    return sum;
}


// Test Outputs
const arrA = [1, 2, 3];
const arrB = [4, 5, 6];

console.log("Spread+Reduce:", arrayPlusArraySpread(arrA, arrB));   // 21
console.log("Concat+Reduce:", arrayPlusArrayConcat(arrA, arrB));   // 21
console.log("ForOf:", arrayPlusArrayForOf(arrA, arrB));            // 21
console.log("ForEach:", arrayPlusArrayForEach(arrA, arrB));        // 21
console.log("Flat+Loop:", arrayPlusArrayFlat(arrA, arrB));         // 21

