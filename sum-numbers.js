/*

Excercise:  Sum The Numbers

Description:
Write a function leetspeak which is given a string, and returns the leetspeak equivalent of the string. To convert text to its leetspeak version, make the following substitutions:

  input: array of numbers

  output: the sum of the input array

*/

function sumNumbers(arr) {
  let s = 0;
  for (i = 0; i < arr.length; i++) {
    s += arr[i];
  }
  return s;
}

console.log(sumNumbers([1, 4, 8]));
