/*

Excercise: Matrix Multiplication

Description:
Write a function matrixMultiply  which is given two two-dimensional arrays - you can assume the matricies are of size 2x2. It will return the result of matrix multiplication between the two given matricies.

  input: two two-dimensional arrays

  output: a new two-dimensional array containing the multiplication matrix

*/

function matrixMultiply(arr1, arr2) {
  var res = [];
  res = [
    [
      arr1[0][0] * arr2[0][0] + arr1[0][1] * arr2[1][0],
      arr1[0][0] * arr2[0][1] + arr1[0][1] * arr2[1][1],
    ],
    [
      arr1[1][0] * arr2[0][0] + arr1[1][1] * arr2[1][0],
      arr1[1][0] * arr2[0][1] + arr1[1][1] * arr2[1][1],
    ],
  ];
  return res;
}

console.log(
  matrixMultiply(
    [
      [2, 4],
      [3, 4],
    ],
    [
      [5, 2],
      [3, 1],
    ]
  )
);
