// Description:
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

// 🔗 Problem link: https://www.codewars.com/kata/53af2b8861023f1d88000832/javascript


// Approach 1: startsWith + ternary
const areYouPlayingBanjoStartsWith = name =>
    name.toLowerCase().startsWith('r')
        ? `${name} plays banjo`
        : `${name} does not play banjo`;

// Approach 2: index check + ternary
const areYouPlayingBanjoIndex = name =>
    name[0].toLowerCase() === 'r'
        ? `${name} plays banjo`
        : `${name} does not play banjo`;

// Approach 3: slice method
function areYouPlayingBanjoSlice(name) {
    return name.slice(0, 1).toLowerCase() === 'r'
        ? `${name} plays banjo`
        : `${name} does not play banjo`;
}


// Test Outputs
console.log(areYouPlayingBanjoStartsWith("Rick"));   // "Rick plays banjo"
console.log(areYouPlayingBanjoIndex("martin"));      // "martin does not play banjo"
console.log(areYouPlayingBanjoSlice("Rosa"));        // "Rosa plays banjo"
