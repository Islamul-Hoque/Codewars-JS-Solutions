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



// Test outputs
console.log("1) For Loop:", "'html' =>", reverseStringForLoop("html"), ", 'css' =>", reverseStringForLoop("css"));
