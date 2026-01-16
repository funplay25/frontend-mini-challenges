const randomNumInput = document.querySelector("#random-num");
const submitBtn = document.querySelector(".submit-btn");
const newgamebtn = document.querySelector(".newgame-btn");
const resultTextDiv = document.querySelector(".result-text .main-result");
const guessTextDiv = document.querySelector(".result-text .guesses-text");

let randomNum = Math.floor(Math.random() * 100);
let guessArr = [];

submitBtn.addEventListener("click", () => {
  console.log(randomNum);

  if (randomNumInput.value) {
    guessArr.push(randomNumInput.value);
    guessTextDiv.innerText = `You guesses: ${guessArr.map((num) => num)}`;
    if (randomNum > randomNumInput.value) {
      resultTextDiv.innerText = `${randomNumInput.value} is too low!`;
    } else if (randomNum < randomNumInput.value) {
      resultTextDiv.innerText = `${randomNumInput.value} is too high!`;
    } else if (randomNum == randomNumInput.value) {
      resultTextDiv.innerText = `You got it in ${guessArr.length} guesses! The number was ${randomNum}.`;
      newgamebtn.classList.add("start");
      submitBtn.classList.add("end");
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
});
