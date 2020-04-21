/*

Excercise:  Print Banner

Description:
Write a function printBanner which is given some text and prints a banner with a border surrounding the text. The border has to stretch to the length of the text.

  input: a string of text 

  output: prints a banner of the input text surrounded by a border of asterisks(*)

*/

function printBanner(txt) {
  let bannerWidth = txt.length;
  console.log("*".repeat(bannerWidth + 4));
  console.log("* " + txt + " *");
  console.log("*".repeat(bannerWidth + 4));
}

printBanner("Welcome to DigitalCrafts");
