// Approach 1: map method
function mapsMap(x) {
    return x.map(n => n * 2);
}

// Approach 2: arrow function + map
const mapsArrow = x => x.map(n => n * 2);



// Test Outputs
console.log(mapsMap([1, 2, 3]));       // [2, 4, 6]
console.log(mapsArrow([4, 1, 1, 1, 4])); // [8, 2, 2, 2, 8]
