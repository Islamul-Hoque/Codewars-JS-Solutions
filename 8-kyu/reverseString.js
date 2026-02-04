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
        n = i + n;
    }
    return n;
}

// Approach 3: Using substring and charAt (recursive)
function reverseStringSubstring(str) {
    return str.length > 0 ? reverseStringSubstring(str.substring(1)) + str.charAt(0) : '';
}

// Approach 4: Recursive function
function reverseStringRecursion(str) {
    if (str === '') return '';
    return reverseStringRecursion(str.substr(1)) + str[0];
}



// Test outputs
console.log("1) For Loop:", "'html' =>", reverseStringForLoop("html"), ", 'css' =>", reverseStringForLoop("css"));
console.log("2) For...of Loop:", "'js' =>", reverseStringForOf("js"), ", 'react' =>", reverseStringForOf("react"));
console.log("3) Substring + charAt:", "'node' =>", reverseStringSubstring("node"), ", 'express' =>", reverseStringSubstring("express"));
console.log("4) Recursion:", "'mongodb' =>", reverseStringRecursion("mongodb"), ", 'nextjs' =>", reverseStringRecursion("nextjs"));
