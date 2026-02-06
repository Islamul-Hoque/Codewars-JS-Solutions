// Description:
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// 🔗 Problem link: https://www.codewars.com/kata/53369039d7ab3ac506000467/javascript

// Approach 1: If-Else condition
function boolToWordIfElse(bool) {
    if (bool) {
        return 'Yes';
    } else {
        return 'No';
    }
}

// Approach 2: Ternary operator
function boolToWordTernary(bool) {
    return bool ? 'Yes' : 'No';
}



// Test outputs
console.log("If-Else:", boolToWordIfElse(true), boolToWordIfElse(false));
console.log("Ternary:", boolToWordTernary(true), boolToWordTernary(false));
