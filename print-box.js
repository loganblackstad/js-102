/*

Excercise:  Print Box

Description:
Write function printBox which is given a width and height and prints a hollow box of those given dimensions.

  input: 2 integers (<width>, <height>)

  output: prints a hollow box of those given dimensions using asterisks(*)

*/

function printBox(width, height) {
  console.log("*".repeat(width)); //print top
  for (i = 1; i < height; i++) {
    console.log("*" + " ".repeat(width - 2) + "*");
  }
  console.log("*".repeat(width)); //print bottom
}

printBox(6, 4);
