const correctWord = "s";

function check() {
  let inputBox = document.getElementById("input");
  let guessedLetter = inputBox.value;
  /*
  let outputBox = document.getElementById("output")
  outputBox.innerHTML = guessedLetter;
  */
  
  // først
  if (correctWord == guessedLetter) {
    inputBox.style.backgroundColor = "lightgreen";
  // tilslutt
  } else if (guessedLetter === "") {
    inputBox.style.backgroundColor = "white";
  // neste
  } else {
    inputBox.style.backgroundColor = "red";
  }
}