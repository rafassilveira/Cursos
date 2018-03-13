var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1board = document.getElementById("p1board");
var p2board = document.getElementById("p2board");
var p1score = 0;
var p2score = 0;
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function() {
  if (gameOver === false) {
    p1score++;
    if (p1score === winningScore) {
      gameOver = true;
      console.log("GamerOver1");
    }
    p1board.textContent = p1score;
  }
});

p2Button.addEventListener("click", function() {
  if (gameOver === false) {
    p2score++;
    if (p2score === winningScore) {
      gameOver = true;
      console.log("GamerOver1");
    }
  }

  p2board.textContent = p2score;
});


