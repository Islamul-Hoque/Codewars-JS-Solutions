// Description:
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

// Kata: List Filtering
// Problem: Return only integers, filter out strings

// 🔗 Problem link: https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/javascript

// Approach 1: typeof check
function filterListTypeof(l) {
    return l.filter(item => typeof item === "number");
}

// Approach 2: Number.isInteger
function filterListInteger(l) {
    return l.filter(Number.isInteger);
}

// Approach 3: typeof !== 'string'
function filterListNotString(l) {
    return l.filter(i => typeof i !== 'string');
}

// Approach 4: Unary plus trick
const filterListUnary = l => l.filter(n => n === +n);

// Approach 5: Arrow + Number.isInteger
const filterListArrow = l => l.filter(x => Number.isInteger(x));

// Test Outputs
console.log(filterListTypeof([1, 2, 'a', 'b']));                      // [1,2]
console.log(filterListInteger([1, 'a', 'b', 0, 15]));                 // [1,0,15]
console.log(filterListNotString([1, 2, 'aasf', '1', '123', 123]));    // [1,2,123]
console.log(filterListUnary([1, 2, 'a', 'b']));                       // [1,2]
console.log(filterListArrow([1, 'a', 'b', 0, 15]));                   // [1,0,15]
