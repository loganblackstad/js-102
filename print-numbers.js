/*

Excercise:  Print Numbers

Description:
Write a function printNumbers which is given a start number and an end number. It will print the numbers from one to the other, one per line:

Bonus:
Write two versions of the above function. One using a while loop and the other using a for loop.

  input: 2 integers (<start>, <finish> )

  output: list of integers from start to finish inclusive (on separate lines)

*/

function printNumbers(start, finish) {
  for (let i = start; i <= finish; i++) {
    console.log(i);
  }

  // use a while loop instead
  /*
  let i = start;
  while (i <= finish) {
    console.log(i);
    i++;
  }
  */
}

printNumbers(1, 10);
