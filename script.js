const gameSeq = [];
const userSeq = [];

let started = false;
let level = 1;

document
  .querySelector(".preinfo p button")
  .addEventListener("click", function () {
    if (started == false) {
      started = true;
      console.log("game is started");
      document.querySelector(".preinfo p").innerHTML = "Game is started !!";
    }
  });
