
// Description:
// Complete the square sum function so that it squares each number passed into it
// and then sums the results together.
//
// Example: [1, 2, 2] → 1² + 2² + 2² = 9
//
// 🔗 Problem link: https://www.codewars.com/kata/515e271a311df0350d00000f/javascript

// Approach 1: For Loop
function squareSumForLoop(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i] ** 2;
    }
    return sum;
}

// Approach 2: For...of Loop
function squareSumForOf(numbers) {
    let sum = 0;
    for (const num of numbers) {
        sum += num * num;
    }
    return sum;
}

// Approach 3: forEach Method
function squareSumForEach(numbers) {
    let sum = 0;
    numbers.forEach(num => sum += num * num);
    return sum;
}

// Approach 4: map + reduce (Functional style)
function squareSumMapReduce(numbers) {
    return numbers.map(num => num * num).reduce((sum, num) => sum + num, 0);
}

// Test Outputs
console.log("For Loop:", squareSumForLoop([1, 2, 2]));        // 9
console.log("For...of:", squareSumForOf([1, 2, 2]));          // 9
console.log("forEach:", squareSumForEach([1, 2, 2]));         // 9
console.log("map+reduce:", squareSumMapReduce([1, 2, 2]));    // 9
