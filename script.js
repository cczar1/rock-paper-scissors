//Rock, Paper, Scissors Game

const getComputerChoice = () => {

  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return 'rock';
  } else if (randomNumber === 1) {
    return 'paper';
  } else if (randomNumber === 2) {
    return 'scissors';
  }

}; 

const getHumanChoice = () => {
  
  let humanChoice = prompt('Please enter rock, paper, or scissors.');
 
  if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors') {
    return humanChoice;
  } else {
    prompt('Please enter a valid choice');
  }

};
