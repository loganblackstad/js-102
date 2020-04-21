/*

Excercise:  Factor a number

Description:
Write a function factorNumber which given an integer prints all of its factors.

  input: integer

  output: print all factors of the given integer

*/

function factorNumber(num) {
  let arr = [];
  for (i = 1; i <= num; i++) {
    if (num % i == 0) {
      arr.push(i);
    }
  }
  return arr;
}

console.log(factorNumber(216));
