// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// Example(Input1, Input2 --> Output):

// 6, 10 --> 32
// 3, 3 --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

// Problem: Area or Perimeter

// Problem link: https://www.codewars.com/kata/5ab6538b379d20ad880000ab/javascript


// Kata: Area or Perimeter
// Problem: Return area if square, perimeter if rectangle

// Approach 1: Ternary (clean)
const areaOrPerimeterTernary = (l, w) => l === w ? l * w : 2 * (l + w);

// Approach 2: Ternary with l - w trick
const areaOrPerimeterDiff = (l, w) => l - w ? (l + w) * 2 : l ** 2;

// Approach 3: If...return (no else)
function areaOrPerimeterIf(l, w) {
    if (l === w) return l * w;
    return 2 * (l + w);
}



//  Test Outputs 
console.log(areaOrPerimeterTernary(6, 10)); // 32
console.log(areaOrPerimeterDiff(3, 3));     // 9
console.log(areaOrPerimeterIf(5, 7));       // 24
