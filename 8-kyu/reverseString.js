// Description:
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// 🔗 Problem link: https://www.codewars.com/kata/5168bb5dfe9a00b126000018

// Approach 1: Using a for loop
function reverseStringForLoop(str) {
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}

// Approach 2: Using a for...of loop
function reverseStringForOf(str) {
    let n = '';
    for (let i of str) {
        n = i + n;   // i='a'→ n='a'+'' ='a'
    }
    return n;
}

// Approach 3: Using substring and charAt (recursive)
function reverseStringSubstring(str) {
    return str.length > 0 ? reverseStringSubstring(str.substring(1)) + str.charAt(0) : '';  //str.substring(1) → "bc" ; str.charAt(0) → 'a'
}

// Approach 4: Recursive function
function reverseStringRecursion(str) {
    if (str === '') return '';
    return reverseStringRecursion(str.substr(1)) + str[0];
}

// Approach 5: Using built-in functions
function reverseStringBuiltIn(str) {
    return str.split('').reverse().join('');
}

// Alternative Approach 5: Using built-in functions (with replace to remove commas)
function reverseStringBuiltInReplace(str) {
    return str.split('').reverse().join().replace(/,/g, '');
}

// Approach 6: Using spread operator
const reverseStringSpread = s => [...s].reverse().join('');

// Approach 7: Using reduceRight
function reverseStringReduceRight(str) {
    return str.split('').reduceRight((after, before) => after += before, '');
}

// Approach 8: Using reduce
function reverseStringReduce(str) {
    return [...str].reduce((reversed, currentChar) => currentChar + reversed, '');
}

// Test outputs
console.log("1) For Loop:", "'html' =>", reverseStringForLoop("html"), ", 'css' =>", reverseStringForLoop("css"));
console.log("2) For...of Loop:", "'js' =>", reverseStringForOf("js"), ", 'react' =>", reverseStringForOf("react"));
console.log("3) Substring + charAt:", "'node' =>", reverseStringSubstring("node"), ", 'express' =>", reverseStringSubstring("express"));
console.log("4) Recursion:", "'mongodb' =>", reverseStringRecursion("mongodb"), ", 'nextjs' =>", reverseStringRecursion("nextjs"));
console.log("5) Built-in:", "'html' =>", reverseStringBuiltIn("html"), ", 'css' =>", reverseStringBuiltIn("css"));
console.log("5a) Built-in + Replace:", "'react' =>", reverseStringBuiltInReplace("react"), ", 'node' =>", reverseStringBuiltInReplace("node"));
console.log("6) Spread Operator:", "'express' =>", reverseStringSpread("express"), ", 'mongodb' =>", reverseStringSpread("mongodb"));
console.log("7) ReduceRight:", "'nextjs' =>", reverseStringReduceRight("nextjs"), ", 'html' =>", reverseStringReduceRight("html"));
console.log("8) Reduce:", "'css' =>", reverseStringReduce("css"), ", 'js' =>", reverseStringReduce("js"));
