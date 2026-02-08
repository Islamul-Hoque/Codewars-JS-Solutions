// Description:
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F

// 🔗 Problem link: https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/javascript


// Approach 1: Split + Map + Join
const abbrevNameSplitMap = name =>
    name.split(" ").map(word => word[0].toUpperCase()).join(".");



// Test Outputs
console.log(abbrevNameSplitMap("Islamul Hoque"))        // I.H
