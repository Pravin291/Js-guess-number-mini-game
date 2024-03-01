let hidden_number = Math.trunc(Math.random() * 20) + 1;
console.log(hidden_number);
let score = 20;
let highScore = 0;

const displayMsg = function(message){
  document.querySelector('.message').textContent = message
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  const number = (document.querySelector(".number").value = hidden_number);
  if (!guess) {
    displayMsg("🔢 No Number")
    score--;
    document.querySelector(".score").textContent = score;
  } else if (guess === number) {
    displayMsg("🎉 Correct Number!")
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = hidden_number;
    if (score > highScore) {
      highScore = score;
    }
    document.querySelector(".highscore").textContent = highScore;
  } else if (guess !== number) {
    if (score > 1) {
      displayMsg(guess > number ? "📈 Number is to High" : "📉 Number is to Low")
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMsg("💥 You Lost the game!")
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  displayMsg("Start guessing...")
  hidden_number = Math.trunc(Math.random() * 20) + 1;
  console.log(hidden_number);
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
