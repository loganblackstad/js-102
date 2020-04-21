/*

Excercise: Tic Tac Toe

Description:
Write a function ticTacToe which takes a two-dimensional array of size 3x3. Each cell in the two dimensional array can be one of 'O', 'X', or null. The ticTacToe function will determine the winner by
- returning 'O' if O makes a row
- returning 'X' if X makes a row
- returning null if neither makes a row

  input: two-dimensional array of size 3x3

  output: print the winner of the game

*/

function ticTacToe(arr) {
  let row1 = arr[0];
  let row2 = arr[1];
  let row3 = arr[2];

  let col1 = [arr[0][0], arr[1][0], arr[2][0]];
  let col2 = [arr[0][1], arr[1][1], arr[2][1]];
  let col3 = [arr[0][2], arr[1][2], arr[2][2]];

  let diag1 = [arr[0][0], arr[1][1], arr[2][2]];
  let diag2 = [arr[0][2], arr[1][1], arr[2][0]];

  const xss = ["X", "X", "X"];
  const oss = ["O", "O", "O"];

  var cluster = [row1, row2, row3, col1, col2, col3, diag1, diag2];
  let res = "null";

  for (i = 0; i < cluster.length; i++) {
    let temp = cluster[i];
    if (
      temp[0] == temp[0] &&
      temp[0] == temp[1] &&
      temp[0] == temp[2] &&
      temp[0] == "X"
    ) {
      res = "X";
    } else if (
      temp[0] == temp[0] &&
      temp[0] == temp[1] &&
      temp[0] == temp[2] &&
      temp[0] == "O"
    ) {
      res = "O";
    }
  }
  console.log(res);
}

ticTacToe([
  ["O", "O", "O"],
  ["X", null, "X"],
  [null, "X", null],
]);

ticTacToe([
  ["O", "X", "O"],
  ["O", "X", null],
  [null, "X", null],
]);

ticTacToe([
  ["O", "X", "O"],
  ["O", "O", null],
  [null, "X", "X"],
]);
