// Description:
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12

// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.


// Approach 1: if-else condition
function makeNegativeIfElse(num) {
    if (num > 0) {
        return -num;
    } else if (num < 0) {
        return num;
    } else if (num === 0) {
        return 0;
    }
}

// Approach 2: Ternary operator
function makeNegativeTernary(num) {
    return num > 0 ? -num : num;
}

// Approach 3: Multiplication
function makeNegativeMultiplication(num) {
  return num > 0 ? num * (-1) : num;
}

// Approach 4: Math.abs function
function makeNegativeMathAbs(num) {
    return -Math.abs(num);
}

// Approach 5: Arrow function with Math.abs
const makeNegative = num => -Math.abs(num) 

// Approach 6: Arrow function with ternary operator
const makeNegativeArrow = num => num > 0 ? -num : num;

// Test outputs
console.log("1)If-Else:", makeNegativeIfElse(1), makeNegativeIfElse(-5), makeNegativeIfElse(0), makeNegativeIfElse(0.12));
console.log("2)Ternary:", makeNegativeTernary(1), makeNegativeTernary(-5), makeNegativeTernary(0), makeNegativeTernary(0.12));
console.log("3)Multiplication:", makeNegativeMultiplication(1), makeNegativeMultiplication(-5), makeNegativeMultiplication(0), makeNegativeMultiplication(0.12));
console.log("4)Math.abs:", makeNegativeMathAbs(1), makeNegativeMathAbs(-5), makeNegativeMathAbs(0), makeNegativeMathAbs(0.12));
console.log("5)Arrow + Math.abs:", makeNegative(1), makeNegative(-5), makeNegative(0), makeNegative(0.12));
console.log("6)Arrow + Ternary:", makeNegativeArrow(1), makeNegativeArrow(-5), makeNegativeArrow(0), makeNegativeArrow(0.12));