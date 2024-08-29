const correctWord = "STICK";
const wordLength = correctWord.length;

function check() {
  for (let i = 1; i <= wordLength; i++){
    checkLetter(i);
  }
}

function checkLetter(letterNo) {
  let guessedLetter = document.getElementById(letterNo).value;
  let correctLetter = correctWord.charAt(letterNo - 1)
  
  // Check the different possibilities 
  if (guessedLetter === "") {
    setNeutral(letterNo)
  } 
  else if (correctLetter == guessedLetter) {
    setCorrect(letterNo)
  } else if (correctWord.includes(guessedLetter)) {
    setAlmost(letterNo)
  } else {
    setWrong(letterNo)
  }
}

function setCorrect(letterNumber) {
  document.getElementById(letterNumber).style.backgroundColor = "lightgreen";
}

function setAlmost(letterNumber) {
  document.getElementById(letterNumber).style.backgroundColor = "gold";
}

function setWrong(letterNumber) {
  document.getElementById(letterNumber).style.backgroundColor = "#AF0000";
}

function setNeutral(letterNumber) {
  document.getElementById(letterNumber).style.backgroundColor = "white";
}

function capitalize(number) {
  let currentValue = document.getElementById(number).value;
  document.getElementById(number).value = currentValue.toUpperCase();
}