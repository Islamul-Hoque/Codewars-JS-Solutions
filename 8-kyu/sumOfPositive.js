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

// Approach 2: For...of Loop
function positiveSumForOf(arr) {
    let sum = 0;
    for (let num of arr) {
        if (num > 0) sum += num;
    }
    return sum;
}

// Approach 3: forEach Method
function positiveSumForEach(arr) {
    let sum = 0;
    arr.forEach(num => {
        if (num > 0) sum += num;
    });
    return sum;
}

// Approach 4: filter + reduce (Functional style)
function positiveSumFilterReduce(arr) {
    return arr.filter(x => x > 0).reduce((sum, num) => sum + num, 0);
}

// Approach 5: reduce only (without filter)
function positiveSumReduce(arr) {
    return arr.reduce((sum, num) => sum + (num > 0 ? num : 0), 0);
}

// Approach 6: Arrow function + implicit return
const positiveSumArrow = arr => arr.reduce((sum, num) => sum + (num > 0 ? num : 0), 0);

// Test Outputs
console.log("1) For Loop:", positiveSumForLoop([1, -4, 7, 12]));        // 20
console.log("2) For...of Loop:", positiveSumForOf([1, -4, 7, 12]));     // 20
console.log("3) forEach:", positiveSumForEach([1, -4, 7, 12]));         // 20
console.log("4) filter+reduce:", positiveSumFilterReduce([1, -4, 7, 12])); // 20
console.log("5) reduce only:", positiveSumReduce([1, -4, 7, 12]));      // 20
console.log("6) Arrow function:", positiveSumArrow([1, -4, 7, 12]));    // 20