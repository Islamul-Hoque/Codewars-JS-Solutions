// Description:
// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

// 🔗 Problem link: https://www.codewars.com/kata/57a429e253ba3381850000fb/javascript

// Approach 1: if/else checks
function bmiIfElse(weight, height) {
    const value = weight / (height * height);
    if (value <= 18.5) return "Underweight";
    if (value <= 25.0) return "Normal";
    if (value <= 30.0) return "Overweight";
    return "Obese";
}

// Approach 2: arrow function + ternary chain
const bmiArrow = (weight, height) => {
    const value = weight / (height * height);
    return value <= 18.5 ? "Underweight" : value <= 25.0 ? "Normal"
            : value <= 30.0 ? "Overweight"
                : "Obese";
};



// Test Outputs
console.log(bmiIfElse(50, 1.70));   // "Underweight" (≈17.3)
console.log(bmiArrow(65, 1.70));    // "Normal" (≈22.5)
console.log(bmiSwitch(80, 1.70));   // "Overweight" (≈27.7)
