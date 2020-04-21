/*

Excercise:  Leetspeak

Description:
Write a function leetspeak which is given a string, and returns the leetspeak equivalent of the string. To convert text to its leetspeak version, make the following substitutions:

  input: string

  output: the leetspeak equivalent

*/

function leetSpeak(txt) {
  const leet = "aegiost";
  const arr = [4, 3, 6, 1, 0, 5, 7];
  let res = "";
  for (i = 0; i < txt.length; i++) {
    let character = txt[i];
    if (leet.indexOf(character) > 0) {
      res += arr[leet.indexOf(character)];
    } else {
      res += character.toLowerCase();
    }
  }
  return res;
}

console.log(leetSpeak("Leet"));
