const randomNumInput = document.querySelector("#random-num");
const submitBtn = document.querySelector(".submit-btn");
const newgamebtn = document.querySelector(".newgame-btn");
const resultTextDiv = document.querySelector(".result-text .main-result");
const guessTextDiv = document.querySelector(".result-text .guesses-text");
const guessNum = document.querySelector(".guess-num");

let randomNum = Math.floor(Math.random() * 100);
let guessArr = [];
let guessCount = 10;

guessNum.innerText = guessCount;
newgamebtn.disabled = true;

submitBtn.addEventListener("click", () => {
  if (randomNumInput.value) {
    guessArr.push(randomNumInput.value);
    guessTextDiv.innerText = `You guesses: ${guessArr.join(", ")}`;
    if (randomNum > randomNumInput.value) {
      resultTextDiv.innerText = `${randomNumInput.value} is too low!`;
    } else if (randomNum < randomNumInput.value) {
      resultTextDiv.innerText = `${randomNumInput.value} is too high!`;
    } else if (randomNum == randomNumInput.value) {
      resultTextDiv.innerText = `You got it in ${guessArr.length} guesses! The number was ${randomNum}.`;
      submitBtn.disabled = true;
      newgamebtn.disabled = false;
    }

    if (guessCount > 1) {
      guessCount -= 1;
      console.log(guessCount);
      guessNum.innerText = guessCount;
    } else {
      resultTextDiv.innerText = "You failed, the game is over";
      submitBtn.disabled = true;
      newgamebtn.disabled = false;
    }
    randomNumInput.value = "";
  }
});

randomNumInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    submitBtn.click();
  }
});

newgamebtn.addEventListener("click", () => {
  location.reload();
  newgamebtn.disabled = true;
});
