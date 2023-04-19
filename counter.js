document.addEventListener('DOMContentLoaded', function() {
const buttons = document.querySelectorAll(".button");
const game = document.querySelector(".game");
const card= document.querySelector(".points");
const audio= new Audio();
audio.src='assets/src.mp3';
let points = 0;

document.getElementById("begin").addEventListener("click", () => {
  document.getElementById("begin").style.display = "none";
  scatterButtons();
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.id === "inc") {
      points++;
    } else if (button.id === "dec") {
      points--;
    } else if (button.id === "reset") {
      points = 0;
    }
    card.textContent= `Points: ${points}`;
    scatterButtons();
    if (points >= 0) {
      card.classList.add('green');
      card.classList.remove('red');
    } else {
      card.classList.add('red');
      card.classList.remove('green');
    }
  });
});

function scatterButtons() {
  buttons.forEach((button) => {
    const { x, y } = getRandomPosition(game, button);
    button.style.transition = "all 0.5s ease-in-out";
    audio.play();
    button.style.display = "block";
    button.style.position = "absolute";
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;

  });
}

function getRandomPosition(game, button) {
  const gameWidth = game.offsetWidth;
  const gameHeight = game.offsetHeight*0.65;
  const buttonWidth = button.offsetWidth*1.5;
  const buttonHeight = button.offsetHeight*1.5;

  const maxX = gameWidth - buttonWidth;
  const maxY = gameHeight - buttonHeight;

  const x = Math.floor(Math.random() * maxX);
  const y = Math.floor(Math.random() * maxY);

  return { x, y };
}
document.getElementById("restart").addEventListener("click",()=>{
  points=0;
  card.textContent= `Points: ${points}`;

});
  });

  