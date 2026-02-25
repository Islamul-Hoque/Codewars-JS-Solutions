// Description:
// Rules of the "Rock, Paper, Scissors" game are:

// Rock beats Scissors,
// Scissors beat Paper,
// Paper beats Rock,
// Two identical moves are a draw.
// Let's play! You will be given valid moves of two Rock, Paper, Scissors players, and have to return which player won: "Player 1 won!" for player 1, and "Player 2 won!" for player 2. In case of a draw return Draw!.

// Examples:

// "scissors",     "paper"     --> "Player 1 won!"
// "scissors",     "rock"      --> "Player 2 won!"
// "paper",        "paper"     --> "Draw!"

// 🔗 Problem link: https://www.codewars.com/kata/5672a98bdbdd995fad00000f/javascript


// Approach 1: if/else conditions
function rpsIfElse(p1, p2) {
    if (p1 === p2) return "Draw!"

    if (
        (p1 === "rock" && p2 === "scissors") ||
        (p1 === "scissors" && p2 === "paper") ||
        (p1 === "paper" && p2 === "rock")
    ) {
        return "Player 1 won!"
    } else {
        return "Player 2 won!"
    }
}

// Approach 2: nested ternary operator
const rpsTernary = (p1, p2) =>
    p1 === "rock" && p2 === "paper" ? "Player 2 won!"
    : p1 === "paper" && p2 === "scissors" ? "Player 2 won!"
    : p1 === "scissors" && p2 === "rock" ? "Player 2 won!"
    : p1 === p2 ? "Draw!"
    : "Player 1 won!"

// Approach 3: object mapping
function rpsMapping(p1, p2) {
    if (p1 === p2) return "Draw!"

    const rules = {
        rock: "scissors",
        scissors: "paper",
        paper: "rock"
    };

    return rules[p1] === p2 ? "Player 1 won!" : "Player 2 won!"
}


// Test Outputs
console.log(rpsIfElse("scissors", "paper"))   // Player 1 won!
console.log(rpsIfElse("scissors", "rock"))    // Player 2 won!
console.log(rpsIfElse("paper", "paper"))      // Draw!

console.log(rpsTernary("rock", "scissors"))   // Player 1 won!
console.log(rpsTernary("rock", "paper"))      // Player 2 won!
console.log(rpsTernary("rock", "rock"))       // Draw!

console.log(rpsMapping("paper", "rock"))      // Player 1 won!
console.log(rpsMapping("scissors", "paper"))  // Player 1 won!
console.log(rpsMapping("scissors", "rock"))   // Player 2 won!
