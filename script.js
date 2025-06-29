let gameSeq = [];
let userSeq = [];

let gameStatus = false;
let level = 0;

let i = 0;

//--- staring game ---------------------------------------------
let startBtn = document.querySelector(".preinfo p button");
startBtn.addEventListener("click", function () {
  gameStatus = true;
  levelUp();
  let lights = document.querySelectorAll(".btn");
  lights.forEach(function (element) {
    element.addEventListener("click", function () {
      this.classList.add("greenFlash");
      setTimeout(() => {
        this.classList.remove("greenFlash");
      }, 250);

      userSeq.push(element.getAttribute("id"));
      console.log(userSeq);
      checkGame();
    });
  });
});

//--- functions ------------------------------------------------
//--- levelUp -------------
function levelUp() {
  userSeq = [];
  level++;

  console.log(gameStatus);

  let levelScore = document.querySelector(".levelScore");
  levelScore.innerHTML = `<i>LEVEL ${level}</i>`;

  openingFlash();
  randomFlash();
}

//--- openingFlash --------
function openingFlash() {
  let btns = document.querySelectorAll(".btn");
  setTimeout(function () {
    btns.forEach(function (element) {
      element.classList.add("flash");
    });
  }, 0);

  setTimeout(function () {
    btns.forEach(function (element) {
      element.classList.remove("flash");
    });
  }, 500);
  setTimeout(function () {
    btns.forEach(function (element) {
      element.classList.add("flash");
    });
  }, 1000);
  setTimeout(function () {
    btns.forEach(function (element) {
      element.classList.remove("flash");
    });
  }, 1500);
}

//--- randomFlash ---------
function randomFlash() {
  const lights = ["red", "yellow", "blue", "purple"];
  let randomIdx = Math.floor(Math.random() * 4);
  let randomLight = document.querySelector(`#${lights[randomIdx]}`);

  setTimeout(function () {
    randomLight.classList.add("flash");
    gameSeq.push(lights[randomIdx]);
  }, 2000);
  setTimeout(function () {
    randomLight.classList.remove("flash");
  }, 2500);
}

function checkGame() {
  let i = 0;
  if (gameSeq[i] === userSeq[i]) {
    i++;
    if (gameSeq.length === userSeq.length) {
      setTimeout(levelUp, 750);
      i = 0;
    }
  } else {
    document.querySelector(".levelScore").innerText = "You Lost !!";
    document.querySelectorAll(".btn").forEach(function (element) {
      element.classList.add("redFlash");
    });
    level = 0;
    gameSeq = [];
    gameStatus = false;
  }
}
