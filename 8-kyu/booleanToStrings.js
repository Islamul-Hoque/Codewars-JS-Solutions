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

// Approach 3: Object mapping
function boolToWordObjectMap(bool) {
    const result = {true: 'Yes', false: 'No'};
    return result[bool];
}

// Approach 4: Using String conversion
function boolToWordStringConversion(bool) {
    return String(bool) === 'true' ? 'Yes' : 'No';
}

// Test outputs
console.log("If-Else:", boolToWordIfElse(true), boolToWordIfElse(false));
console.log("Ternary:", boolToWordTernary(true), boolToWordTernary(false));
console.log("Object Map:", boolToWordObjectMap(true), boolToWordObjectMap(false));
console.log("String Conversion:", boolToWordStringConversion(true), boolToWordStringConversion(false));