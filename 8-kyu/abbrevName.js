// Description:
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F

// 🔗 Problem link: https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/javascript


// Approach 1: Split + Map + Join
const abbrevNameSplitMap = name =>
    name.split(" ").map(word => word[0].toUpperCase()).join(".")

// Approach 2: Split + substr()
const abbrevNameSubstr = name =>
    name.split(" ").map(word => word.substr(0, 1).toUpperCase()).join(".") // substr(0, 1) → 0 = starting index, 1 = cut length of 1 character from the starting index

// Approach 3: IndexOf + Direct Access
const abbrevNameIndexOf = name =>
    name[0].toUpperCase() + "." + name[name.indexOf(" ") + 1].toUpperCase()

// Approach 4: Split + charAt()
const abbrevNameCharAt = name =>
    name.split(" ").map(word => word.charAt(0).toUpperCase()).join(".")

// Approach 5: Destructuring
const abbrevNameDestructuring = name => {
    const [firstName, lastName] = name.split(" ");
    const firstInitial = firstName.charAt(0).toUpperCase()
    const secondInitial = lastName.charAt(0).toUpperCase()
    return firstInitial + "." + secondInitial
};

// Approach 6: Split + Direct Indexing
const abbrevNameSplitDirect = name => {
    const parts = name.split(" ")
    return parts[0][0].toUpperCase() + "." + parts[1][0].toUpperCase()
};

// Approach 7: Uppercase + Template Literal
const abbrevNameTemplate = name => {
    let arr = name.toUpperCase().split(" ")
    return `${arr[0][0]}.${arr[1][0]}`
};

// Test Outputs
console.log(abbrevNameSplitMap("Islamul Hoque"))        // I.H
console.log(abbrevNameSubstr("Frontend Developer"))     // F.D
console.log(abbrevNameIndexOf("React Developer"))       // R.D
console.log(abbrevNameCharAt("MERN Stack"))             // M.S
console.log(abbrevNameDestructuring("Web Developer"))   // W.D
console.log(abbrevNameSplitDirect("Next.js Developer")) // N.D
console.log(abbrevNameTemplate("Fullstack Engineer"))   // F.E