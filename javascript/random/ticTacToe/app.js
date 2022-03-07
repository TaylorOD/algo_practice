const boxes = Array.from(document.getElementsByClassName("box"));
const gameText = document.getElementById("gameText");
const resetButton = document.getElementById("resetButton");

const spaces = []; 
const playerOne = "O";
const playerTwo = "X";
let currentPlayer = playerOne;

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];


const createBoard = () => {
  boxes.forEach((box) => {
    box.addEventListener('click', boxClicked)
  });
};

const boxClicked = (e) => {
  const boxId = e.target.id;

  if (!spaces[boxId]) {
    spaces[boxId] = currentPlayer;
    e.target.innerText = currentPlayer;
  } else { // Reject box clicks on filled boxes
    return false;
  }
  if (playerWin()) {
    gameText.innerText = `${currentPlayer} has won!!!`
    return;
  }
  console.log(spaces.join())
  console.log(spaces.join().length)
  if (spaces.join().length === 17) {
    gameText.innerText = `Draw! Press Reset Game to play again!`
  }
  currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
};

const playerWin = () => {
  // if (spaces[0] === currentPlayer) {
  //   if (spaces[1] === currentPlayer && spaces[2] === currentPlayer) {
  //     return true;
  //   }
  // } // could do manual checks but this for loop also works
  return winConditions.some((combo) => {
    return combo.every((index) => {
      return spaces[index] === currentPlayer;
    });
  });
};

const resetBoard = () => {
  spaces.forEach((space, index) => {
    spaces[index] = null;
  });
  boxes.forEach((box) => {
    box.innerText = "";
  });
  gameText.innerText = "Let's Play Tic Tac Toe!!!"
};

resetButton.addEventListener('click', resetBoard);

resetBoard();
createBoard();
