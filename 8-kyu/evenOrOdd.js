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

// Approach 3: Switch statement
function evenOrOddSwitch(number) {
    switch (number % 2) {
        case 0:
            return "Even";
        default:
            return "Odd";
    }
}

// Approach 4: Math functions
function evenOrOddMath(number) {
    return Math.floor(number / 2) === number / 2 ? "Even" : "Odd"; //Math.floor (2 or 2.5) = 2
}

// Approach 5: Object mapping
function evenOrOddObjectMap(number) {
    const result = {0: "Even", 1: "Odd"};
    return result[Math.abs(number % 2)]; // number % 2 = Remainder; Math.abs(-5 % 2 ) = positive value = 1 
}

// Test outputs
console.log("If-Else:", evenOrOddIfElse(2), evenOrOddIfElse(3));
console.log("Ternary:", evenOrOddTernary(2), evenOrOddTernary(3));
console.log("Switch:", evenOrOddSwitch(2), evenOrOddSwitch(3));
console.log("Math:", evenOrOddMath(4), evenOrOddMath(5));
console.log("Object Map:", evenOrOddObjectMap(4), evenOrOddObjectMap(5));