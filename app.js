const button = document.getElementById("submit");
let result = document.getElementById("result");
let input = document.getElementById("tryes");
let input2 = document.getElementById("levels");
let input3 = document.getElementById("max");
let input4 = document.getElementById("highscore");
const levels = [10, 20, 40, 75, 100, 150, 200, 400, 750, 1000];
let i = 0;
let j = 1;
let max = levels[i];
let randomNumber = Math.floor(Math.random() * max + 1);
let tryes = 0;

function play() {
  let numberGuessing = document.getElementById("text").value;

  if (numberGuessing < 0 || numberGuessing > max) {
    result.innerText = `Please enter a number between 0 and ${max}`;
  } else if (numberGuessing === "") {
    result.innerText = "Please enter a number";
  } else {
    if (numberGuessing == randomNumber) {
      result.innerText = "Congratulations!!!";
      i++;
      max = levels[i];
      updateRandomNumber();
      j++;
    } else if (numberGuessing < randomNumber) {
      result.innerText = "You guessed to low";
      tryes += 1;
    } else if (numberGuessing > randomNumber) {
      result.innerText = "You guessed to high";
      tryes++;
    }

    if (i == 10) {
      max = 1000;
      j = 10;
      result.innerText = "You win this gaaaaaamee!!!!!!!!!";
    }

    input.innerText = tryes;
    input2.innerText = j;
    input3.innerText = max;
  }
}

function updateRandomNumber() {
  randomNumber = Math.floor(Math.random() * max + 1);
}

button.addEventListener("click", play);

if (i == 9) {
  button.removeEventListener("click", play);
}
