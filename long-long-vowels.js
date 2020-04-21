/*

Excercise:  Long long vowels

Description:
Write a function, which is given a string, return the result of extending any long vowels to the length of 5.

  input: string

  output: any long vowels extended to the length of 5

*/

function longLongVowels(str) {
  const longVowels = "aaeeiioouu";
  let res = str;
  for (i = 0; i < str.length - 2; i++) {
    let pair = str[i] + str[i + 1];
    if (longVowels.indexOf(pair) > 0) {
      res = res.replace(pair, str[i].repeat(5));
    }
  }
  return res;
}

console.log(longLongVowels("Cheese"));
