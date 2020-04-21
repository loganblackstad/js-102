/*

Excercise:  Caesar Cipher 2

Description:
Write a function decipher which is given a string, an offset, and returns the original message.

  input:      
  decipher('Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar', 13);

  result:     
  'Genius without education is like silver in the mine'

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
  let transcodedLetter = "";
  if (abcIndex - varOffSet >= 0) {
    transcodedLetter = abcs[abcIndex - varOffSet];
  } else {
    transcodedLetter = abcs[26 + (abcIndex - varOffSet)];
  }
  if (caseCheck(letter) == "upper") {
    return transcodedLetter.toUpperCase();
  } else {
    return transcodedLetter;
  }
}

function decipher(txt, offset) {
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

console.log(
  decipher("Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar", 13)
);
