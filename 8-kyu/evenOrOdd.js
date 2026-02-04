// Description:
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// Approach 1: If-Else condition
function evenOrOddIfElse(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// Approach 2: Ternary operator
function evenOrOddTernary(number) {
    return number % 2 === 0 ? "Even" : "Odd";
}



// Test outputs
console.log("If-Else:", evenOrOddIfElse(2), evenOrOddIfElse(3));
console.log("Ternary:", evenOrOddTernary(2), evenOrOddTernary(3));
