/*

Excercise: Matrix Additions

Description:
Write a function matrixAdd which is given two two-dimensional arrays, and returns a new two-dimensional array containing their matrix sum.

  input: two two-dimensional arrays

  output: a new two-dimensional array containing their matrix sum

*/

function matrixAdd(arr1, arr2) {
  var res = [];
  res = [
    [arr1[0][0] + arr2[0][0], arr1[0][1] + arr2[0][1]],
    [arr1[1][0] + arr2[1][0], arr1[1][1] + arr2[1][1]],
  ];
  return res;
}

console.log(
  matrixAdd(
    [
      [1, 3],
      [2, 4],
    ],
    [
      [5, 2],
      [1, 0],
    ]
  )
);
