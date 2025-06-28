const gameSeq = [];
const userSeq = [];

let started = false;
let level = 0;

let test = document.querySelector(".btn");

document
  .querySelector(".preinfo p button")
  .addEventListener("click", function () {
    if (started == false) {
      started = true;
      console.log("game is started");
      document.querySelector(".preinfo p").innerHTML = "Game is started !!";
      levelUp();
    }
  });

function levelUp() {
  level++;
  document.querySelector(".preinfo p").innerHTML = `LEVEL <b>${level}</b>`;
  btnFlash(test);
}

function btnFlash(pBtn) {
  pBtn.classList.add("flash");
  setTimeout(() => {
    pBtn.classList.remove("flash");
  }, 250);
}
