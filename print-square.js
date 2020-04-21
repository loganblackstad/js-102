/*

Excercise:  Print Square

Description:
Write a function printSquare which is given a size and prints a square of that size using asterisks.

  input: integer for the square's side length

  output: a square using asterisks

*/

function printSquare(side) {
  for (let i = 0; i <= side; i++) {
    console.log("*".repeat(side));
  }
}

printSquare(5);
