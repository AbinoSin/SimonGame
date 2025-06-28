const gameSeq = [];
const userSeq = [];

let started = false;
let level = 0;

let test = document.querySelectorAll(".btn");

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
  btnFlashAll(test);
}

function btnFlashAll(pBtn) {
  for (item of pBtn) {
    item.classList.add("flash");
  }
  setTimeout(() => {
    pBtn[0].classList.remove("flash");
  }, 500);
  setTimeout(() => {
    pBtn[2].classList.remove("flash");
  }, 1000);
  setTimeout(() => {
    pBtn[3].classList.remove("flash");
  }, 1500);
  setTimeout(() => {
    pBtn[1].classList.remove("flash");
  }, 2000);
  setTimeout(() => {
    pBtn.forEach((element) => {
      element.classList.add("flash");
    });
  }, 2500);
  setTimeout(() => {
    pBtn.forEach((element) => {
      element.classList.remove("flash");
    });
  }, 3000);
  setTimeout(() => {
    pBtn.forEach((element) => {
      element.classList.add("flash");
    });
  }, 3500);
  setTimeout(() => {
    pBtn.forEach((element) => {
      element.classList.remove("flash");
    });
  }, 4000);
}
