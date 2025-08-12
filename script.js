//Rock, Paper, Scissors Game
//comment added to include commit message

console.log("Let's play rock, paper, scissors!");

const getUserChoice = (userInput) => {
  let modifiedInput = userInput.toLowerCase();

  if (
    modifiedInput === "rock" ||
    modifiedInput === "paper" ||
    modifiedInput === "scissors" ||
    modifiedInput === "bomb"
  ) {
    return modifiedInput;
  } else {
    console.log("Please choose rock, paper, or scissors.");
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else if (randomNumber === 2) {
    return "scissors";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === "bomb") {
    return "You are the winner! You are the bomb!";
  }

  if (userChoice === computerChoice) {
    return "The game is a tie.";
  }

  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer is the winner";
    } else {
      return "The user is the winner";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "The computer is the winner";
    } else {
      return "The user is the winner";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "paper") {
      return "The user is the winner";
    } else {
      return "The computer is the winner";
    }
  }
};

const playGame = () => {
  const userChoice = getUserChoice("rock");
  const computerChoice = getComputerChoice();

  console.log(`You threw ${userChoice}`);
  console.log(`The computer threw ${computerChoice}`);

  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
