// Description:
// Create a function that accepts a parameter representing a name
// and returns the message: "Hello, <name> how are you doing today?"

// 🔗 Problem link: https://www.codewars.com/kata/55a70521798b14d4750000a4/javascript

// Approach 1: Template Literal
const greetTemplate = name => `Hello, ${name} how are you doing today?`;

// Approach 2: String Concatenation
const greetConcat = name => "Hello, " + name + " how are you doing today?";



// Test Outputs
console.log(greetTemplate("Ishfak"));    // Hello, Ishfak how are you doing today?
console.log(greetConcat("Ishfak"));      // Hello, Ishfak how are you doing today?
