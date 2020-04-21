/*

Excercise: Just the positives

Description:
Write a function positiveNumbers which is given an array of numbers and returns a new array containing only the positive numbers within the given array.

  input: array of numbers

  output: the sum of the positves in the input array

*/
function positiveNumbers(arr) {
  let s = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      s.push(arr[i]);
    }
  }
  return s;
}

console.log(positiveNumbers([1, -3, 5, -3, 0]));
console.log(positiveNumbers([1, 2, 3]));
console.log(positiveNumbers([-1, -2, -3]));
