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

// Approach 2: Split + substr()
const abbrevNameSubstr = name =>
    name.split(" ").map(word => word.substr(0, 1).toUpperCase()).join(".");

// Approach 3: IndexOf + Direct Access
const abbrevNameIndexOf = name =>
    name[0].toUpperCase() + "." + name[name.indexOf(" ") + 1].toUpperCase();



// Test Outputs
console.log(abbrevNameSplitMap("Islamul Hoque"))        // I.H
console.log(abbrevNameSubstr("Frontend Developer"))     // F.D
console.log(abbrevNameIndexOf("React Developer"))       // R.D
