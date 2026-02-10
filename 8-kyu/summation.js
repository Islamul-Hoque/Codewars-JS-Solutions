// Description:
// Summation
// Write a program that finds the summation of every number from 1 to num (both inclusive). The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

// 🔗 Problem link: https://www.codewars.com/kata/55d24f55d7dd296eb9000030/javascript

// Approach 1: Formula (Gauss Summation)
const summationFormula = num => (num * (num + 1)) / 2;

// Approach 2: Formula with ++num
const summationFormulaInc = num => num * ++num / 2;

// Approach 3: Array + Reduce
const summationReduce = num => (
    Array(num).fill(true).reduce((sum, item, index) => sum + index + 1, 0)
);

// Approach 4: Loop
function summationLoop(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

// Approach 5: Recursion (base case <= 1)
const summationRec1 = function (num) {
    if (num <= 1) {
        return 1;
    } else {
        return num + summationRec1(num - 1);
    }
}



// Test Outputs
console.log(summationFormula(5));     // 15
console.log(summationFormulaInc(5));  // 15
console.log(summationReduce(5));      // 15
console.log(summationLoop(5));        // 15
console.log(summationRec1(5));        // 15
