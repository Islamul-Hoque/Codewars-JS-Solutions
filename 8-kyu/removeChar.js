// Description:
// Write a function that removes the first and last characters of a string.
// If the string length is exactly 2, return an empty string.
//
// Examples:
// 'eloquent' → 'loquen'
// 'country'  → 'ountr'
// 'person'   → 'erso'
// 'ab'       → ''
// 'xyz'      → 'y'
//
// 🔗 Problem link: https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/javascript

// Approach 1: Using slice()
function removeCharSlice(str) {
    return str.slice(1, -1);
}

// Approach 2: Using substring()
function removeCharSubstring(str) {
    return str.substring(1, str.length - 1);
}

// Approach 3: Using substr() (older method)
function removeCharSubstr(str) {
    return str.substr(1, str.length - 2);
}

// Approach 4: Using split + shift + pop + join
function removeCharSplit(str) {
    let arr = str.split('');
    arr.shift();
    arr.pop();
    return arr.join('');
}



// Test Outputs
console.log("slice:", removeCharSlice("eloquent"));     // "loquen"
console.log("substring:", removeCharSubstring("country")); // "ountr"
console.log("substr:", removeCharSubstr("person"));     // "erso"
console.log("split:", removeCharSplit("xyz"));          // "y"
