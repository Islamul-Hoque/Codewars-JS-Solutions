// Description:
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.


// Kata: Who likes it?
// Problem: Format "like" notifications based on array length
// 🔗 Problem link: https://www.codewars.com/kata/5266876b8f4bf2da9b000362/javascript


// Approach 1: Ternary chain (arrow function)
const likesTernary = names =>
    names.length === 0 ? "no one likes this" :
    names.length === 1 ? `${names[0]} likes this` :
    names.length === 2 ? `${names[0]} and ${names[1]} like this` :
    names.length === 3 ? `${names[0]}, ${names[1]} and ${names[2]} like this` :
    `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;

// Approach 2: Switch statement
function likesSwitch(names) {
    switch (names.length) {
        case 0: return "no one likes this";
        case 1: return `${names[0]} likes this`;
        case 2: return `${names[0]} and ${names[1]} like this`;
        case 3: return `${names[0]}, ${names[1]} and ${names[2]} like this`;
        default: return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    }
}


// Test Outputs
console.log(likesTernary([]));                          // "no one likes this"
console.log(likesSwitch(["Peter"]));                    // "Peter likes this"
