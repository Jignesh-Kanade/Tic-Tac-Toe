let boxes = document.querySelectorAll("#box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msg = document.querySelector("p");
let msgContainer = document.querySelector(".msg-container");
let gContainer = document.querySelector(".container");

gContainer.classList.remove("hide-game");

let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO === true) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";

      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const showWinner = (winner) => {
  msg.innerText = `Congratulation the Winner is player ${winner}`;
  for (box of boxes) {
    box.disabled = true;
  }
  msgContainer.classList.remove("hide-msg");
  gContainer.classList.add("hide-game");
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let btn1 = boxes[pattern[0]].innerText;
    let btn2 = boxes[pattern[1]].innerText;
    let btn3 = boxes[pattern[2]].innerText;

    if (btn1 != "" && btn2 != "" && btn3 != "") {
      if (btn1 === btn2 && btn2 === btn3) {
        for (box of boxes) {
          showWinner(btn1);
        }
      }
    }
  }
};

const resetGame = () => {
  // let turnO = true;
  for (box of boxes) {
    box.innerText = "";
  }
};

resetBtn.addEventListener("click", () => {
  turnO = true;
  resetGame();
  for (box of boxes) {
    box.disabled = false;
  }
});

newGameBtn.addEventListener("click", () => {
  turnO = true;
  resetGame();
  for (box of boxes) {
    box.disabled = false;
  }
  msgContainer.classList.add("hide-msg");
  gContainer.classList.remove("hide-game");
});
