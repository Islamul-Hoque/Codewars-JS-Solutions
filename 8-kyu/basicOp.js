// Description:
// Perform basic mathematical operations (+, -, *, /)
// Examples:
// ('+', 4, 7) → 11
// ('-', 15, 18) → -3
// ('*', 5, 5) → 25
// ('/', 49, 7) → 7
//
// 🔗 Problem link: https://www.codewars.com/kata/57356c55867b9b7a60000bd7/javascript

// Approach 1: If–Else Chain
const basicOpIfElse = (op, v1, v2) => {
    if (op === '+') return v1 + v2;
    if (op === '-') return v1 - v2;
    if (op === '*') return v1 * v2;
    if (op === '/') return v1 / v2;
};

// Approach 2: Switch Statement
const basicOpSwitch = (op, v1, v2) => {
    switch (op) {
        case '+': return v1 + v2;
        case '-': return v1 - v2;
        case '*': return v1 * v2;
        case '/': return v1 / v2;
        default: return 'Operation must be one of + - * /';
    }
};

// Approach 3: Object Mapping
const basicOpMap = (op, v1, v2) => {
    const ops = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
    };
    return ops[op](v1, v2);
};

// Approach 4: eval() using Template Literals
const basicOpEval = (op, v1, v2) => eval(`${v1} ${op} ${v2}`);

// Approach 5: eval() using String Concatenation
const basicOpEvalConcat = (operation, value1, value2) => eval(value1 + operation + value2);


// Test Outputs
console.log(basicOpIfElse('+', 4, 7));   // 11
console.log(basicOpSwitch('-', 15, 18)); // -3
console.log(basicOpMap('*', 5, 5));      // 25

console.log(basicOpEval('/', 49, 7));    // 7
console.log(basicOpEvalConcat('+', 4, 7)); // 11 
