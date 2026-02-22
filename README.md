# Codewars JS Solutions

A collection of JavaScript solutions for Codewars problems.  
Each problem is solved using multiple approaches to demonstrate different techniques.

---

## 📂 Problems

### 1. Even or Odd
- **Difficulty:** 8 kyu  
- **Problem Link:** [🌐 Codewars](https://www.codewars.com/kata/53da3dbb4a5168369a0000fe)
- **Approaches:** If-Else, Ternary, Switch, Math functions, Object mapping  
- **Approaches:**  
  1. If-Else condition  
  2. Ternary operator  
  3. Switch statement  
  4. Math function (`Math.floor(number / 2)`)  
  5. Object mapping 
- **Solution:** [📂 View Code](https://github.com/Islamul-Hoque/Codewars-JS-Solutions/blob/main/8-kyu/evenOrOdd.js)

### 2. Return Negative
- **Difficulty:** 8 kyu  
- **Problem Link:** [🌐 Codewars](https://www.codewars.com/kata/55685cd7ad70877c23000102)
- **Approaches:**  
  1. If-Else condition  
  2. Ternary operator  
  3. Multiplication (`num * (-1)`)  
  4. Math.abs function  
  5. Arrow function + Math.abs  
  6. Arrow function + Ternary operator  
- **Solution:** [📂 View Code](https://github.com/Islamul-Hoque/Codewars-JS-Solutions/blob/main/8-kyu/makeNegative.js)

### 3. Reversed Strings
- **Difficulty:** 8 kyu  
- **Problem Link:** [🌐 Codewars](https://www.codewars.com/kata/5168bb5dfe9a00b126000018)
- **Approaches:**  
  1. For Loop → `'html' => 'lmth'`, `'css' => 'ssc'`  
  2. For...of Loop → `'js' => 'sj'`, `'react' => 'tcaer'`  
  3. Substring + charAt (recursive) → `'node' => 'edon'`, `'express' => 'sserpxe'`  
  4. Recursion → `'mongodb' => 'bdgnom'`, `'nextjs' => 'sjtxen'`  
  5. Built-in (`split` + `reverse` + `join`) → `'html' => 'lmth'`, `'css' => 'ssc'`  
  5a. Built-in + Replace → `'react' => 'tcaer'`, `'node' => 'edon'`  
  6. Spread Operator → `'express' => 'sserpxe'`, `'mongodb' => 'bdgnom'`  
  7. ReduceRight → `'nextjs' => 'sjtxen'`, `'html' => 'lmth'`  
  8. Reduce → `'css' => 'ssc'`, `'js' => 'sj'`  
- **Solution:** [📂 View Code](https://github.com/Islamul-Hoque/Codewars-JS-Solutions/blob/main/8-kyu/reverseString.js)

### 4. Sum of positive
- **Difficulty:** 8 kyu  
- **Problem Link:** [🌐 Codewars](https://www.codewars.com/kata/5715eaedb436cf5606000381/javascript)
- **Approaches:**  
  1. For Loop  
  2. For...of Loop  
  3. forEach Method  
  4. filter + reduce (Functional style)  
  5. reduce only (without filter)  
  6. Arrow function + implicit return  
- **Solution:** [📂 View Code](https://github.com/Islamul-Hoque/Codewars-JS-Solutions/blob/main/8-kyu/sumOfPositive.js)

### 5. Convert a Number to a String
- **Difficulty:** 8 kyu  
- **Problem Link:** [🌐 Codewars](https://www.codewars.com/kata/5265326f5fda8eb1160004c8)
- **Approaches:**  
  1. Using `toString()` method  
  2. Using `String()` function  
  3. Using template literals  
  3a. Template literals (arrow function)  
  4. Concatenation with empty string  
  4a. Concatenation (arrow function)  
  4b. Concatenation (ES6 style)  
  5. Using `JSON.stringify()`  
  6. Using `new String()` constructor  
  7. Using `Array.join()` method  
- **Solution:** [📂 View Code](https://github.com/Islamul-Hoque/Codewars-JS-Solutions/blob/main/8-kyu/numberToString.js)

### 6. Convert boolean values to strings "Yes" or "No"
- **Difficulty:** 8 kyu  
- **Problem Link:** [🌐 Codewars](https://www.codewars.com/kata/53369039d7ab3ac506000467/javascript)
- **Approaches:**  
  1. If-Else condition  
  2. Ternary operator  
  3. Object mapping  
  4. String conversion  
- **Solution:** [📂 View Code](https://github.com/Islamul-Hoque/Codewars-JS-Solutions/blob/main/8-kyu/booleanToStrings.js)

### 7. Square(n) Sum
- **Difficulty:** 8 kyu  
- **Problem Link:** [🌐 Codewars](https://www.codewars.com/kata/515e271a311df0350d00000f/javascript)
- **Approaches:**  
  1. For Loop  
  2. For...of Loop  
  3. forEach Method  
  4. map + reduce (Functional style)  
  5. reduce only (without map)  
  6. Arrow function + reduce (concise)  
- **Solution:** [📂 View Code](https://github.com/Islamul-Hoque/Codewars-JS-Solutions/blob/main/8-kyu/squareSum.js)

### 8. Remove First and Last Character
- **Difficulty:** 8 kyu  
- **Problem Link:** [🌐 Codewars](https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/javascript)
- **Approaches:**  
  1. Using `slice()`  
  2. Using `substring()`  
  3. Using `substr()` (legacy method)  
  4. Using `split` + `shift` + `pop` + `join`  
  5. Using spread operator + `Array.slice()`  
- **Solution:** [📂 View Code](https://github.com/Islamul-Hoque/Codewars-JS-Solutions/blob/main/8-kyu/removeChar.js)

### 9. String repeat
- **Difficulty:** 8 kyu  
- **Problem Link:** [🌐 Codewars](https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/javascript)
- **Approaches:**  
  1. For Loop   
  2. Built‑in `repeat()` method  
  3. Arrow Function + `repeat()`   
  4. Template Literal + `repeat()` 
  5. Array.fill() + join() → array utility method 
  6. Array.from() + join() → array constructor method
  7. Spread Operator + map() + join() → ES6 spread + array mapping method
- **Solution:** [📂 View Code](https://github.com/Islamul-Hoque/Codewars-JS-Solutions/blob/main/8-kyu/repeatString.js)

### 10. Find the smallest integer in the array
- **Difficulty:** 8 kyu  
- **Problem Link:** [🌐 Codewars](https://www.codewars.com/kata/55a2d7ebe362935a210000b2/javascript)
- **Approaches:**  
  1. Math.min + Spread Operator  
  2. Array.prototype.reduce()  
  3. Array.prototype.sort()  
  4. For Loop  
  5. For...of Loop 
- **Solution:** [📂 View Code](https://github.com/Islamul-Hoque/Codewars-JS-Solutions/blob/main/8-kyu/findSmallestInt.js)

### 11. Remove String Spaces
- **Difficulty:** 8 kyu  
- **Problem Link:** [🌐 Codewars](https://www.codewars.com/kata/57eae20f5500ad98e50002c5/javascript)
- **Approaches:**  
  1. Arrow Function + split() + join()  
  2. Arrow Function + replace() with regex  
  3. Using replaceAll()  
  4. Using filter()  
  5. Using reduce()  
- **Solution:** [📂 View Code](https://github.com/Islamul-Hoque/Codewars-JS-Solutions/blob/main/8-kyu/removeStringSpaces.js)

### 12. Convert a String to a Number
- **Difficulty:** 8 kyu  
- **Problem Link:** [🌐 Codewars](https://www.codewars.com/kata/57eae20f5500ad98e50002c5/javascript)
- **Approaches:**  
  1. Unary Plus (`+str`)  
  2. Number() constructor  
  3. parseInt() with radix 10  
  4. Multiplication by 1  
  5. parseFloat()  
  6. Math.floor(parseFloat()) 
- **Solution:** [📂 View Code](https://github.com/Islamul-Hoque/Codewars-JS-Solutions/blob/main/8-kyu/stringToNumber.js)

### 13. Basic Mathematical Operations
- **Difficulty:** 8 kyu  
- **Problem Link:** [🌐 Codewars](https://www.codewars.com/kata/57356c55867b9b7a60000bd7/javascript)
- **Approaches:**  
  1. If–Else Chain  
  2. Switch Statement  
  3. Object Mapping  
  4. eval() using Template Literals  
  5. eval() using String Concatenation  
  6. Arrow Function + Ternary Chain 
- **Solution:** [📂 View Code](https://github.com/Islamul-Hoque/Codewars-JS-Solutions/blob/main/8-kyu/basicOp.js)

### 14. Abbreviate a Two Word Name
- **Difficulty:** 8 kyu  
- **Problem Link:** [🌐 Codewars](https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/javascript)
- **Approaches:**  
  1. Split + Map + Join  
  2. Split + substr()  
  3. IndexOf + Direct Access  
  4. Split + charAt()  
  5. Destructuring  
  6. Split + Direct Indexing  
  7. Uppercase + Template Literal
- **Solution:** [📂 View Code](https://github.com/Islamul-Hoque/Codewars-JS-Solutions/blob/main/8-kyu/abbrevName.js)

### 15. Returning Strings
- **Difficulty:** 8 kyu  
- **Problem Link:** [🌐 Codewars](https://www.codewars.com/kata/55a70521798b14d4750000a4/javascript)
- **Approaches:**  
  1. Template Literal  
  2. String Concatenation  
  3. String Replace  
  4. Array + Join 
- **Solution:** [📂 View Code](https://github.com/Islamul-Hoque/Codewars-JS-Solutions/blob/main/8-kyu/returningStrings.js)

### 16. Convert number to reversed array of digits
- **Difficulty:** 8 kyu  
- **Problem Link:** [🌐 Codewars](https://www.codewars.com/kata/5583090cbe83f4fd8c000051/javascript)
- **Approaches:**  
  1. String + Split + Map + Reverse  
  2. toString() + Split + Map + Reverse  
  3. Spread Operator + Map + Reverse  
  4. String Concatenation + Split + Unary Plus  
  5. String Concatenation + Split + Map(Number) + Reverse  
  6. Array.from with Mapping Function
- **Solution:** [📂 View Code](https://github.com/Islamul-Hoque/Codewars-JS-Solutions/blob/main/8-kyu/digitize.js)

### 17. Opposites Attract
- **Difficulty:** 8 kyu  
- **Problem Link:** [🌐 Codewars](https://www.codewars.com/kata/555086d53eac039a2a000083/javascript)
- **Approaches:**  
  1. Modulo Check  
  2. Sum Check  
  3. Bitwise XOR  
  4. If-Else Condition 
- **Solution:** [📂 View Code](https://github.com/Islamul-Hoque/Codewars-JS-Solutions/blob/main/8-kyu/loveFunc.js)

### 18. Grasshopper - Summation
- **Difficulty:** 8 kyu  
- **Problem Link:** [🌐 Codewars](https://www.codewars.com/kata/55d24f55d7dd296eb9000030/javascript)
- **Approaches:**  
  1. Formula (Gauss Summation)  
  2. Formula with ++num  
  3. Array + Reduce  
  4. Loop (for)  
  5. Recursion (base case <= 1)  
  6. Recursion (ternary base case) 
- **Solution:** [📂 View Code](https://github.com/Islamul-Hoque/Codewars-JS-Solutions/blob/main/8-kyu/summation.js)

### 19. A Needle in the Haystack
- **Difficulty:** 8 kyu  
- **Problem Link:** [🌐 Codewars](https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/javascript)
- **Approaches:**  
  1. indexOf + string concatenation  
  2. indexOf + template literal  
  3. findIndex  
  4. indexOf + ternary operator (fallback message) 
- **Solution:** [📂 View Code](https://github.com/Islamul-Hoque/Codewars-JS-Solutions/blob/main/8-kyu/findNeedle.js)

### 20. Are You Playing Banjo?
- **Difficulty:** 8 kyu  
- **Problem Link:** [🌐 Codewars](https://www.codewars.com/kata/53af2b8861023f1d88000832/javascript)
- **Approaches:**  
  1. startsWith + ternary  
  2. index check + ternary  
  3. slice method  
- **Solution:** [📂 View Code](https://github.com/Islamul-Hoque/Codewars-JS-Solutions/blob/main/8-kyu/playingBanjo.js)

### 21. Beginner - Lost Without a Map
- **Difficulty:** 8 kyu  
- **Problem Link:** [🌐 Codewars](https://www.codewars.com/kata/57f781872e3d8ca2a000007e/javascript)
- **Approaches:**  
  1. map method  
  2. arrow function + map  
  3. for loop  
  4. for...of loop  
- **Solution:** [📂 View Code](https://github.com/Islamul-Hoque/Codewars-JS-Solutions/blob/main/8-kyu/doubleArrayValues.js)

### 22. Is n divisible by x and y?
- **Difficulty:** 8 kyu  
- **Problem Link:** [🌐 Codewars](https://www.codewars.com/kata/5545f109004975ea66000086/javascript)
- **Approaches:**  
  1. Arrow function
  2. Ternary operator  
  3. If/Else statement  
  4. Logical modulo trick  
- **Solution:** [📂 View Code](https://github.com/Islamul-Hoque/Codewars-JS-Solutions/blob/main/8-kyu/isDivisible.js)

### 23. Calculate average
- **Difficulty:** 8 kyu  
- **Problem Link:** [🌐 Codewars](http://codewars.com/kata/57a2013acf1fa5bfc4000921/javascript)
- **Approaches:**  
  1. Arrow function + reduce  
  2. For...of loop  
  3. ForEach loop
- **Solution:** [📂 View Code](https://github.com/Islamul-Hoque/Codewars-JS-Solutions/blob/main/8-kyu/findAverage.js)

### 24. Calculate BMI
- **Difficulty:** 8 kyu  
- **Problem Link:** [🌐 Codewars](https://www.codewars.com/kata/57a429e253ba3381850000fb/javascript)
- **Approaches:**  
  1. If/else checks  
  2. Arrow function with ternary chain  
  3. Switch(true) branching 
- **Solution:** [📂 View Code](https://github.com/Islamul-Hoque/Codewars-JS-Solutions/blob/main/8-kyu/bmi.js)