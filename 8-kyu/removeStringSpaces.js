// Description:
// Write a function that removes the spaces from the string, then return the resultant string.

// Examples:
// "8 j 8   mBliB8g  imjB88B  jl  B" → "8j8mBliB8gimjB88BjlB"
// "8 8 Bi fk8h B 8 BB88B B B  B88B  c hl8 BhB fd" → "88Bifk8hB8BB88BBB88Bchl8BhBfd"
// "8aaaaaa dddd r     " → "8aaaaaaddddr"


// 🔗 Problem link: https://www.codewars.com/kata/57eae20f5500ad98e50002c5/javascript


// Approach 1: Arrow Function + split + join
const noSpaceSplitJoin = str => str.split(' ').join('')

// Approach 2: Arrow Function + replace (regex for space only)
const noSpaceReplaceArrow = x => x.replace(/ /g, "")    //  / / → single space character match, g → global 

// Approach 3: Using replaceAll()
const noSpaceReplaceAll = x => x.replaceAll(' ', '')    //  ' ' → single space character match.



// Test Outputs
console.log(noSpaceSplitJoin("I S HFAk")) // "ISHFAK"
console.log(noSpaceReplaceArrow("islamul Hoque 2006 @ gmail . com")) // "islamulhoque2006@gmail.com"
console.log(noSpaceReplaceAll("    H   i       ")) // "Hi"
