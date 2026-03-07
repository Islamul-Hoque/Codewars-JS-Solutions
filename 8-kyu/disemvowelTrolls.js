// Description:
// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.


// Kata: Disemvowel Trolls
// Problem: Remove all vowels (a, e, i, o, u) from a string
// 🔗 Problem link: https://www.codewars.com/kata/52fba66badcd10859f00097e/javascript


// Approach 1: Regex replace (arrow function)
const disemvowelRegexArrow = str => str.replace(/[aeiou]/gi, '');



// Test Outputs
console.log(disemvowelRegexArrow("This website is for losers LOL!")) // "Ths wbst s fr lsrs LL!"
