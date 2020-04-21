/*

Excercise:  Caesar Cipher

Description:
Write a function cipher which is given a string, an offset, and returns the original message.

  input:
  decipher('Genius without education is like silver in the mine', 13);

  result:
  'Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar'

*/

function letterCheck(character) {
  let abcs = "abcdefghijklmnopqrstuvwxyz";
  if (abcs.indexOf(character.toLowerCase()) >= 0) {
    return true;
  } else {
    return false;
  }
}

function caseCheck(letter) {
  if (letter == letter.toUpperCase()) {
    return "upper";
  }
  if (letter == letter.toLowerCase()) {
    return "lower";
  }
}
function transcode(letter, offset) {
  let abcs = "abcdefghijklmnopqrstuvwxyz";
  let abcIndex = abcs.search(letter.toLowerCase());
  const varOffSet = offset % 26;
  let transcodedLetter = abcs[(abcIndex + varOffSet) % 26];
  if (caseCheck(letter) == "lower") {
    return transcodedLetter;
  } else {
    return transcodedLetter.toUpperCase();
  }
}

function cipher(txt, offset) {
  let res = "";
  for (i = 0; i <= txt.length - 1; i++) {
    let character = txt[i];
    if (letterCheck(character)) {
      res += transcode(character, offset);
    } else {
      res += character;
    }
  }
  return res;
}

console.log(cipher("Genius without education is like silver in the mine", 13));
