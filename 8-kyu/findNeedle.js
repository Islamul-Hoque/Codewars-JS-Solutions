// Description:
// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)
// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
// Note: In COBOL, it should return "found the needle at position 6"

// 🔗 Problem link: https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/javascript

// Approach 1: indexOf + string concatenation
function findNeedleIndexOf(haystack) {
    return "found the needle at position " + haystack.indexOf("needle");
}

// Approach 2: indexOf + template literal
const findNeedleTemplate = haystack =>
    `found the needle at position ${haystack.indexOf("needle")}`;

// Approach 3: findIndex
function findNeedleFindIndex(haystack) {
    const index = haystack.findIndex(item => item === "needle");
    return `found the needle at position ${index}`;
}

// Approach 4: indexOf + ternary operator
function findNeedleTernary(haystack) {
    const index = haystack.indexOf("needle");
    return (index !== -1)
        ? `found the needle at position ${index}`
        : "needle not found";
}

// Test Outputs
const testArray1 = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"];
const testArray2 = ["hay", "junk", "hay"];

console.log(findNeedleIndexOf(testArray1));   // "found the needle at position 5"
console.log(findNeedleTemplate(testArray1));  // "found the needle at position 5"
console.log(findNeedleFindIndex(testArray1)); // "found the needle at position 5"

console.log(findNeedleTernary(testArray1));   // "found the needle at position 5"
console.log(findNeedleTernary(testArray2));   // "needle not found"
