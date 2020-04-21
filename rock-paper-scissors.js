/*

Excercise: Rock Paper Scissors

Description:
Write a function rockPaperScissors which takes the throw of player 1 and the throw of player 2. A throw can have the values of 'rock', 'paper', or 'scissors'. It will return 'player 1' if player 1 wins, 'player 2' if player 2 wins, and 'draw' if there is no winner.

  input: throw1, throw2

  output: print the winner of the game

*/

function rockPaperScissors(throw1, throw2) {
  let r = "rock";
  let p = "paper";
  let s = "scissors";

  if (throw1 == throw2) {
    console.log("draw");
  } else if (
    (throw1 == r && throw2 == s) ||
    (throw1 == s && throw2 == p) ||
    (throw1 == p && throw2 == r)
  ) {
    console.log("player 1");
  } else {
    console.log("player 2");
  }
}

rockPaperScissors("rock", "scissors");
rockPaperScissors("rock", "paper");
rockPaperScissors("paper", "paper");
