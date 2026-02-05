// Description:
// Task
// You get an array of numbers, return the sum of all of the positives ones.

// Example: [1, -4, 7, 12] => 1 + 7 + 12 =20
// Note
// If there is nothing to sum, the sum is default to 0.

// 🔗 Problem link: https://www.codewars.com/kata/5715eaedb436cf5606000381/javascript

// Approach 1: For Loop
function positiveSumForLoop(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) sum += arr[i];
    }
    return sum;
}


// Test Outputs
console.log("1) For Loop:", positiveSumForLoop([1, -4, 7, 12]));        // 20
