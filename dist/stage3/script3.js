const correctWord = "STICK";

const wordLength = correctWord.length;
var guessCounter = 1;
var correctCounter = 0;
var cleared = true;
const fields = document.querySelectorAll('.letter');

document.getElementById(1).focus();
document.getElementById("container").addEventListener('keydown', (e) => {
  if (e.key == 'Backspace'){
    back(document.activeElement.id - 2);
  }
});

function checkGuess() {
  if(!fullGuess()){
    setOutput("You need 5 letters to guess")
    return;
  }
  setOutput("")
  for (let i = 1; i <= wordLength; i++){
    checkLetter(i);
  }
  checkWin();
  document.getElementById("counter").innerHTML = guessCounter++;
}

function setOutput(text) {
  document.getElementById("message").innerHTML = text;
}

function fullGuess() {
  for (let i = 1; i <= wordLength; i++){
    if (document.getElementById(i).value == "") {
      return false;
    }
  } return true;
}

function checkWin() {
  if(correctCounter == wordLength){
    setOutput("Correct! The word was: "+ correctWord)
    disableInput()
  }
  correctCounter = 0;
}

function checkLetter(letterNo) {
  let guessedLetter = document.getElementById(letterNo).value;
  let correctLetter = correctWord.charAt(letterNo - 1)
  
  let output = document.getElementById("output");
  let guess = document.createElement("input");
  let guessId = guessCounter + "" + letterNo;
  
  guess.className = "letter";
  guess.id = guessId;
  guess.value = guessedLetter;
  guess.disabled = true;
  
  output.appendChild(guess);
  if (letterNo == 5) {
    output.appendChild(document.createElement("br"));
  }
  
   // Check the different possibilities 
  if (guessedLetter === "") {
    setNeutral(guessId)
  } 
  else if (correctLetter == guessedLetter) {
    setCorrect(guessId)
    correctCounter++;
  } else if (correctWord.includes(guessedLetter)) {
    setAlmost(guessId)
  } else {
    setWrong(guessId)
  }
  document.getElementById(letterNo).value = "";
}

function setCorrect(letterNumber) {
  document.getElementById(letterNumber).style.backgroundColor = "lightgreen";
}

function setAlmost(letterNumber) {
  document.getElementById(letterNumber).style.backgroundColor = "gold";
}

function setWrong(letterNumber) {
  document.getElementById(letterNumber).style.backgroundColor = "red";
}

function setNeutral(letterNumber) {
  document.getElementById(letterNumber).style.backgroundColor = "beige";
}

function capitalize(number) {
  let currentValue = document.getElementById(number).value;
  document.getElementById(number).value = currentValue.toUpperCase();
  if(cleared){
    cleared = !cleared;
  }
}

function clearInput() {
  if (cleared){
    return;
  } 
  for (let i = 1; i <= wordLength; i++){
    document.getElementById(i).value = "";
  }
  cleared = !cleared;
}

function disableInput() {
  for (let i = 1; i <= wordLength; i++){
    document.getElementById(i).disabled = true;
  }
  let buttons = document.getElementsByClassName("inputButtons")
  buttons[0].disabled = true;
  buttons[1].disabled = true;
}

function next(number) {
  let currentField = fields[number-1];
  let value = currentField.value;
  if(number==5 && value) {
    return;
  } else {
    const nextField = fields[number]
    if (nextField) {
      nextField.focus();
    }
  }
}

function back(number) {
  const currentField = fields[number+1]
  const prevField = fields[number]
    if (prevField) {
      prevField.value='';
      currentField.value='';
      prevField.focus();
    }
}

